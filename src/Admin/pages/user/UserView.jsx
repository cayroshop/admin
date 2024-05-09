import React, { useState, useEffect } from 'react';
import axios from 'axios';
import axiosInstance,{mainurl} from '../../../axiosInstance';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import toast from 'react-hot-toast';
import Gallery from '../../components/Gallery';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import Select from 'react-select';
import { triggerChooseimg } from '../../components/ChooseImg';


const UserView = () => {

  const [Wishlist, setWishlist] = useState([]);
  const [Comparsion, setComparsion] = useState([]);
  const [Order, setOrder] = useState([]);


  const [selectedOptions, setSelectedOptions] = useState([]);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [SubmitLoading, setSubmitLoading] = useState(true); // Add loading state

  const [editorValue, setEditorValue] = useState('');

  const { slug } = useParams();


  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    pincode: '',
    country: '',
    address: '',
    status: '',
  });



  const options = [
    { value: '1', label: 'radio Button' },
    { value: '2', label: 'radio Button + Image' },
    { value: '3', label: 'Select Input' },
    { value: '4', label: 'Color + radio Button' },
  ];


  const getWishlist = async () => {

    try {
      const { data } = await axiosInstance.get(`/view-wishlist/${slug}`);
      console.log("wishlist", data);
      setWishlist(data.wishlist);
    } catch (error) {
      console.error("Error fetching rating:", error);
    }
  };

  const getCompare = async () => {

    try {
      const { data } = await axiosInstance.get(`/view-compare/${slug}`);
      console.log("compare", data);
      setComparsion(data.comparsion);
    } catch (error) {
      console.error("Error fetching rating:", error);
    }
  };

  const getOrders = async () => {

    try {
      const { data } = await axiosInstance.get(`/user-orders/${slug}`);
      console.log("setOrder", data);
      setOrder(data?.userOrder.orders);
    } catch (error) {
      console.error("Error fetching rating:", error);
    }
  };



  const [imageDivs, setImageDivs] = useState([]);


  const addImageDiv = () => {
    let newImageDiv;
    console.log('selectedOptions', selectedOptions)

    // Check if the selected type is 'Color + radio Button'
    if (formData.type === '4' || selectedOptions == '4') {
      newImageDiv = (
        <div key={imageDivs.length} className='col-md-4 mb-4 d-flex gap-2'>
          <input
            type="text"
            className="form-control"
            placeholder="Type Value"
            id={`imageproduct${imageDivs.length}`}
          />
          <input
            type="color" // Change input type to 'color'
            className="form-control color"
            placeholder="Type Value"
            name="color"
            id={`attribute${imageDivs.length}`}
          />
          <button className="btn btn-danger d-block m-auto" onClick={removeImageDiv}>
            Delete
          </button>
          <br />
        </div>
      );
    } else {
      newImageDiv = (
        // Your existing code for adding the default image div
        <div key={imageDivs.length} className='col-md-4 mb-4 d-flex gap-2'>
          <input
            type="text"
            className="form-control"
            placeholder="Type Value"
            id={`imageproduct${imageDivs.length}`}
          />
          <button className="btn btn-danger d-block m-auto" onClick={removeImageDiv}>
            Delete
          </button>
          <br />
        </div>
      );
    }


    const updatedImageDivs = [...imageDivs, newImageDiv];
    setImageDivs(updatedImageDivs);
    setTimeout(function () {
      triggerChooseimg();
    }, 1);
  };

  const removeImageDiv = (event) => {
    const button = event.target;
    const parentDiv = button.parentNode; // Accessing the parent div
    parentDiv.remove(); // Remove the parent div
  };


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: type === 'checkbox' ? checked : value }));
  };



  const getData = async () => {
    try {
      const { data } = await axiosInstance.get(`/admin/get-user/${slug}`);
      setData(data.User);
      console.log('user', data)
      setLoading(false); // Set loading to false when data is fetched


      setFormData((prevData) => ({
        ...prevData,
        username: data.User.username,
        email: data.User.email,
        phone: data.User.phone,
        pincode: data.User.pincode,
        pincode: data.User.pincode,
        address: data.User.address,
        status: data.User.status,
      }));


      // setTimeout(setnow, 2000);
    }
    catch (error) {
      console.log(error);
      toast.error("Error fetching Single company!");
      setLoading(false); // Set loading to false when data is fetched

    }
  };
  const handleselectChange = selectedValue => {
    setSelectedOptions(selectedValue); // Set the selected option

    setFormData(prevData => ({
      ...prevData,
      type: selectedValue ? selectedValue.value : '', // Set the selected value
    }));
  };


  useEffect(() => {

    getData();
    getCompare();
    getWishlist();
    getOrders();
  }, []);


  const submitData = async () => {
    setSubmitLoading(false);

    const imageInputs = document.querySelectorAll('#imageContainer input[type="text"]');
    const inputValues = Array.from(imageInputs).map(input => input.value);

    const imageColorInputs = document.querySelectorAll('#imageContainer input[type="color"]');
    const inputColorValues = Array.from(imageColorInputs).map(input => input.value);


    const updatedFormData = {
      ...formData,
      value: inputValues,
      color: inputColorValues,
    };

    // console.log(formData)
    try {
      const admintoken = localStorage.getItem('adminToken');
      if (admintoken) {
        await axiosInstance.put(`/admin/update-attribute/${slug}`, updatedFormData);
        toast.success('Category Updated successfully!');
        navigate('/all-attribute');
      }
    } catch (error) {
      console.error('Error On Blog:', error);
      console.log(formData);
      toast.error(error.response.data.message);
    } finally {
      setSubmitLoading(true);
    }

  };

  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  }

  return (
    <>
      <Sidebar />
      <main class="content">
        <Navbar />

        <div className="py-4">
          <nav aria-label="breadcrumb" className="d-none d-md-inline-block">
            <ol className="breadcrumb breadcrumb-dark breadcrumb-transparent">
              <li className="breadcrumb-item">
                <a href="#">
                  <svg
                    className="icon icon-xxs"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Admin</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Edit user
              </li>
            </ol>
          </nav>
          <div className="d-flex justify-content-between w-100 flex-wrap">
            <div className="mb-3 mb-lg-0">
              <h1 className="h4">Edit User</h1>
            </div>
            <div>
              {" "}
              <Link
                to="/all-user"
                id="goBackButton"
                className="btn btn-primary d-inline-flex align-items-center"
              >
                <svg
                  style={{ transform: "rotate(180deg)" }}
                  className="icon icon-sm"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Go back
              </Link>
            </div>
          </div>
        </div>
        <div id="add-blog-form">

          {loading ? (
            <>
              <div className="card card-body border-0 shadow mb-4">
                <div className="row">
                  <br />
                  <div className="col-md-12">
                    <div className="mb-4">
                      <p className="skeleton" style={{ width: '100%', borderRadius: 5, margin: '0px auto 10px', height: 70 }} > </p>
                    </div>
                  </div>

                  <div className="card mb-2 skeleton mb-4" style={{ borderRadius: 15, height: 229 }}>
                  </div>

                  <div className="col-md-6">
                    <div className="mb-4">
                      <p className="skeleton" style={{ width: '100%', borderRadius: 5, margin: '0px auto 10px', height: 70 }} > </p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="mb-4">
                      <p className="skeleton" style={{ width: '100%', borderRadius: 5, margin: '0px auto 10px', height: 70 }} > </p>
                    </div>
                  </div>


                  <div className="col-md-6">
                    <div className="mb-4">
                      <p className="skeleton" style={{ width: '100%', borderRadius: 5, margin: '0px auto 10px', height: 70 }} > </p>
                    </div>
                  </div>

                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-4">
                      <p className="skeleton" style={{ width: '100%', borderRadius: 5, margin: '0px auto 10px', height: 120 }} > </p>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="mb-4">
                      <p className="skeleton" style={{ width: '100%', borderRadius: 5, margin: '0px auto 10px', height: 70 }} > </p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="mb-4">
                      <p className="skeleton" style={{ width: '100%', borderRadius: 5, margin: '0px auto 10px', height: 70 }} > </p>
                    </div>
                  </div>

                </div>
              </div>
            </>) : (<>

              <div className="card card-body border-0 shadow mb-4">
                <h2 className="h5 mb-4">General information</h2>

                <div className="card mb-2" style={{ borderRadius: 15 }}>
                  <div className="card-body p-4">
                    <div className="d-flex text-black">
                      <div className="flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h5 className="mb-1">   {formData.username || 'loading...'} </h5>
                        <p className="mb-2 pb-1" style={{ color: "rgb(43, 42, 42)" }}>
                          {formData.address || 'loading...'}
                        </p>
                        <div
                          className="d-flex justify-content-start rounded-3 p-2 mb-2 "
                          style={{ backgroundColor: "rgb(239, 239, 239)", width: "fit-content" }}
                        >
                          <div>
                            <p className="small text-muted mb-1"> Total Order</p>
                            <p className="mb-0"> {Order.length || 0} </p>
                          </div>
                          <div className="px-3">
                            <p className="small text-muted mb-1"> Total Wishlist</p>
                            <p className="mb-0">{Wishlist.length || 0}</p>
                          </div>
                          <div>
                            <p className="small text-muted mb-1"> Total Comparsion</p>
                            <p className="mb-0"> {Comparsion.length || 0} </p>
                          </div>
                        </div>
                        <h5> Total <i class="ri-box-1-fill"></i> : {'₹' + (Order ? Order.reduce((total, order) => total + order.totalAmount, 0) : 'Loading...')}</h5>
                        {/* <div className="d-flex pt-1" style={{  width: "fit-content" }} >
          <button
            type="button"
            className="btn btn-outline-primary me-1 flex-grow-1"
          >
            Chat
          </button>
          <button type="button" className="btn btn-primary flex-grow-1">
            Follow
          </button>
        </div> */}
                      </div>
                    </div>
                  </div>
                </div>


                <form>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div>
                        <label htmlFor="username">Full Name</label>
                        <input
                          className="form-control"
                          id="username"
                          type="text"
                          name="username"
                          placeholder="Enter your Full Name"
                          value={formData.username}
                          onChange={handleChange} // Add onChange handler to manage input changes
                        />
                      </div>
                    </div>


                    <div className="col-md-6 mb-3">
                      <div className="form-group">
                        <label htmlFor="email">Email</label>{" "}
                        <input
                          className="form-control"
                          id="email"
                          type="email"
                          name="email" value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="form-group">
                        <label htmlFor="phone">Phone</label>{" "}
                        <input
                          className="form-control"
                          id="phone"
                          type="number"
                          name="phone" value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="col-md-6 mb-3">
                      <div className="form-group">
                        <label htmlFor="zip">ZIP</label>{" "}
                        <input
                          className="form-control"
                          id="zip"
                          type="number"
                          name="pincode"
                          value={formData.pincode}
                          onChange={handleChange}
                        />
                      </div>
                    </div>


                  </div>
                  <h2 className="h5 my-4">Location</h2>
                  <div className="row">
                    <div className="col-sm-12 mb-3">
                      <div className="form-group">
                        <label htmlFor="address">Full Address</label>{" "}
                        <textarea
                          className="form-control"
                          id="address"
                          type="text"
                          name="address" value={formData.address}
                          onChange={handleChange}
                        />
                      </div>

                    </div>

                  </div>
                 
                  <div className="mt-3">
                    {/* <button className="btn btn-gray-800 mt-2 animate-up-2" type="submit">
                      Update User
                    </button> */}
                  </div>
                </form>
              </div>
            </>)}

          <div className="row">

            <div className="col-md-4 mb-3">
              <div className="card notification-card border-0 shadow" style={Order.length === 0 ? { height: 'auto' } : null}>
                <div className="card-header d-flex align-items-center">
                  <h2 className="fs-5 fw-bold mb-0">    < i class="ri-box-2-fill"></i> Total Order</h2>
                  <div className="ms-auto">

                    <div class="avatar d-flex align-items-center justify-content-center fw-bold rounded bg-secondary"><span>{Order.length || 0}</span></div>



                  </div>
                </div>

                {Order.length !== 0 && (
                  <div className="card-body">
                    <div className="list-group list-group-flush list-group-timeline">

                      {Order.map((Pro) => (

                        <>


                          <div className="list-group-item border-0">
                            <div className="row ps-lg-1">
                              <div className="col-auto">
                                <div className="icon-shape icon-xs icon-shape-purple rounded">
                                  <svg
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                  </svg>
                                </div>
                              </div>
                              <div className="col ms-n2 mb-3">
                                <h3 className="fs-6 fw-bold mb-1">
                                  Order Id : {Pro?.orderId} <br /> Price : ₹{Pro.totalAmount}
                                </h3>
                                <Link
                                  to={`/order/${slug}/${Pro._id}`}
                                  className="btn btn-sm btn-primary mt-2 mb-2"
                                  
                                >
                                  <svg class="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path></svg>

                                  View
                                </Link>



                                <div className="d-flex align-items-center">
                                  <svg
                                    className="icon icon-xxs text-gray-400 me-1"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                      clipRule="evenodd"
                                    />
                                  </svg>{" "}
                                  <span className="small"> {formatDate(Pro.createdAt)}   </span>
                                </div>
                              </div>
                            </div>
                          </div>

                        </>
                      ))}


                    </div>
                  </div>
                )}


              </div>
            </div>



            <div className="col-md-4 mb-3">
              <div className="card notification-card border-0 shadow" style={Wishlist.length === 0 ? { height: 'auto' } : null}>
                <div className="card-header d-flex align-items-center">
                  <h2 className="fs-5 fw-bold mb-0">    < i class="ri-box-2-fill"></i> Total Wishlist</h2>
                  <div className="ms-auto">

                    <div class="avatar d-flex align-items-center justify-content-center fw-bold rounded bg-secondary"><span>{Wishlist.length || 0}</span></div>



                  </div>
                </div>


                {Wishlist.length !== 0 && (
                  <div className="card-body">
                    <div className="list-group list-group-flush list-group-timeline">

                      {Wishlist.reverse().map((Pro) => (

                        <>


                          <div className="list-group-item border-0">
                            <div className="row ps-lg-1">
                              <div className="col-auto">
                                <div className="icon-shape icon-xs icon-shape-danger rounded">
                                  < i class="ri-heart-3-fill"></i>
                                </div>
                              </div>
                              <div className="col ms-n2 mb-3">
                                <h3 className="fs-6 fw-bold mb-1">
                                  {Pro.productDetail?.title}
                                </h3>
                                <Link
                                  to={`${mainurl}/product/${Pro.productDetail?._id}`}
                                  className="btn btn-sm btn-primary mt-2 mb-2"
                                  target="_blank"
                                >
                                  <svg class="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path></svg>

                                  View
                                </Link>



                                <div className="d-flex align-items-center">
                                  <svg
                                    className="icon icon-xxs text-gray-400 me-1"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                      clipRule="evenodd"
                                    />
                                  </svg>{" "}
                                  <span className="small"> {formatDate(Pro.createdAt)}   </span>
                                </div>
                              </div>
                            </div>
                          </div>

                        </>
                      ))}

                    </div>
                  </div>
                )}

              </div>
            </div>



            <div className="col-md-4 mb-3">
              <div className="card notification-card border-0 shadow" style={Comparsion.length === 0 ? { height: 'auto' } : null} >
                <div className="card-header d-flex align-items-center">
                  <h2 className="fs-5 fw-bold mb-0">    < i class="ri-box-2-fill"></i> Total Comparsion</h2>
                  <div className="ms-auto">

                    <div class="avatar d-flex align-items-center justify-content-center fw-bold rounded bg-secondary"><span>{Comparsion.length || 0}</span></div>



                  </div>
                </div>


                {Comparsion.length !== 0 && (
                  <div className="card-body">
                    <div className="list-group list-group-flush list-group-timeline">

                      {Comparsion.reverse().map((Pro) => (
                 
Pro.productDetail !== undefined && (

<div className="list-group-item border-0">
<div className="row ps-lg-1">
  <div className="col-auto">

    <div className="icon-shape icon-xs icon-shape-success rounded">
      <svg
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
          clipRule="evenodd"
        />
      </svg>
    </div>


  </div>
  <div className="col ms-n2 mb-3">
    <h3 className="fs-6 fw-bold mb-1">
      {Pro.productDetail?.title}
    </h3>
    <Link
      to={`/product/${Pro.productDetail?._id}`}
      className="btn btn-sm btn-primary mt-2 mb-2"
      target="_blank"
    >
      <svg class="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path></svg>

      View
    </Link>



    <div className="d-flex align-items-center">
      <svg
        className="icon icon-xxs text-gray-400 me-1"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
          clipRule="evenodd"
        />
      </svg>{" "}
      <span className="small"> {formatDate(Pro.createdAt)}   </span>
    </div>
  </div>
</div>
</div>

)

                      ))}


                    </div>
                  </div>
                )}


              </div>
            </div>



          </div>


        </div>


      </main>
    </>
  )
}

export default UserView