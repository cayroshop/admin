import React, { useState, useEffect } from 'react';
import axios from 'axios';
import axiosInstance from '../../../axiosInstance';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import toast from 'react-hot-toast';
import Gallery from '../../components/Gallery';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import Select from 'react-select';
import { triggerChooseimg } from '../../components/ChooseImg';


const EditTag = () => {

  const [selectedOptions, setSelectedOptions] = useState([]);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [SubmitLoading, setSubmitLoading] = useState(true); // Add loading state

  const [editorValue, setEditorValue] = useState('');

  const { slug } = useParams();


  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    description: '',
    metaTitle: '',
    metaDescription: '',
    metaKeywords: '',
    parent: '',
    status: '',
    image: '',
  });

  const options = [
    { value: '1', label: 'radio Button' },
    { value: '2', label: 'radio Button + Image' },
    { value: '3', label: 'Select Input' },
    { value: '4', label: 'Color + radio Button' },
  ];


  const fetchData = async () => {
    try {
      const response = await axiosInstance.get('/all-category');
      console.log(response.data.categories);
      setData(response.data.categories);
      setLoading(false);

    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  const [imageDivs, setImageDivs] = useState([]);


  const addImageDiv = () => {
    const newImageDiv = (

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
      </div >
    );

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



  const getCategory = async () => {
    try {
      const { data } = await axiosInstance.get(`/admin/get-attribute/${slug}`);
      setData(data.Attribute);
      console.log(data)
      setLoading(false); // Set loading to false when data is fetched
      // Set the formData.username based on the blog's slug
      setFormData((prevData) => ({
        ...prevData,
        name: data.Attribute.name,
        image: data.Attribute.image,
        type: data.Attribute.type,
        value: data.Attribute.value,
        status: data.Attribute.status,

      }));

      setSelectedOptions(data.Attribute.status);
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

    getCategory();
    fetchData();

  }, []);


  const submitData = async () => {
    setSubmitLoading(false);

    const imageInputs = document.querySelectorAll('#imageContainer input');
    const inputValues = Array.from(imageInputs).map(input => input.value);

    const updatedFormData = {
      ...formData,
      value: inputValues,
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
                Edit Attribute
              </li>
            </ol>
          </nav>
          <div className="d-flex justify-content-between w-100 flex-wrap">
            <div className="mb-3 mb-lg-0">
              <h1 className="h4">Edit Attribute</h1>
            </div>
            <div>
              {" "}
              <Link
                to="/all-attribute"
                id="goBackButton"
                className="btn btn-primary d-inline-flex align-items-center" onClick={() => navigate('/admin/all-company')}
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
          <div className="row">
            <div className="col-md-8 mb-4">
              <div className="card border-0 shadow components-section">
                <div className="card-body">


                  {loading ? (
                    <>
                      <div className="row mb-4">
                        <div className="col-lg-12 col-sm-12">
                          <div className="row">
                            <br />
                            <div className="col-md-12">
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

                            <div className="col-md-6">
                              <div className="mb-4">
                                <p className="skeleton" style={{ width: '100%', borderRadius: 5, margin: '0px auto 10px', height: 70 }} > </p>
                              </div>
                            </div>


                            <div className="col-md-12">
                              <div className="mb-4">
                                <p className="skeleton" style={{ width: '100%', borderRadius: 5, margin: '0px auto 10px', height: 135 }} > </p>
                              </div>
                            </div>



                          </div>
                        </div>
                      </div>


                    </>) : (
                    <>



                      <div className="row mb-4">
                        <div className="col-lg-12 col-sm-12">



                          <div className="row">

                            <div className='col-md-12'>
                              <div className="mb-4">
                                <label htmlFor="name">Name</label>
                                <input
                                  type="text"
                                  defaultValue={formData.name}
                                  className="form-control"
                                  id="name"
                                  name="name"
                                  onChange={handleChange} // Add onChange handler to manage input changes
                                />
                              </div>
                            </div>

                          </div>


                          <div className="row">


                            <div className="col-md-12">
                              <button onClick={addImageDiv} className="btn btn-secondary btn-sm" type="button">

                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1d1d1d" stroke-width="2" stroke-linecap="square" stroke-linejoin="arcs"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                Add Value</button>
                              <div id="imageContainer" className="row mt-3">



                                {Array.isArray(formData.value) &&
                                  formData.value.map((value, index) => (

                                    <div key={index} className='col-md-4 mb-4 d-flex gap-2'>

                                      <input
                                        type="text"
                                        defaultValue={value}
                                        className="form-control"
                                        placeholder="Type Value"
                                        id={`imageinputN${index + 1}`}

                                      />

                                      <button className="btn btn-danger d-block m-auto" onClick={removeImageDiv}>
                                        Delete
                                      </button>
                                      <br />
                                    </div >


                                  ))}



                                {imageDivs.map((imageDiv, index) => (
                                  <React.Fragment key={index}>{imageDiv}</React.Fragment>
                                ))}
                              </div>
                            </div>


                          </div>






                        </div>
                      </div>


                    </>
                  )}

                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow components-section">
                <div className="card-body">

                  {loading ? (
                    <>

                      <div className="row">
                        <h5 className="skeleton" style={{ width: '100%', borderRadius: 5, margin: '0px auto 10px', height: 50 }}  > </h5>

                        <hr />

                        <p className="skeleton mb-3" style={{ width: '100%', borderRadius: 5, margin: '0px auto 10px', height: 250 }} > </p>

                        <div className="col-6 ">
                          <p className="skeleton mb-3" style={{ width: '100%', borderRadius: 5, margin: '0px auto 10px', height: 40 }} > </p>

                        </div>


                      </div>
                      <div className="col-6">
                        <p className="skeleton mb-3" style={{ width: '100%', borderRadius: 5, margin: '0px auto 10px', height: 40 }} > </p>

                      </div>




                    </>) : (
                    <>


                      <div className="row">


                        <div className='col-md-12'>

                          <div className="mb-4">
                            <label htmlFor="type">Attribute Type</label>

                            <Select
                              id="type"
                              value={options.find(option => option.value == formData.type)}
                              name="type"
                              onChange={handleselectChange}
                              placeholder={'Select Type'}
                              options={options}

                            />

                          </div>


                        </div>

                        <div className="col-4 ">
                          <div className="mb-4">
                            <label className="my-1 me-2" htmlFor="status">
                              Status
                            </label>
                          </div>
                        </div>
                        <div className="col-8 ">
                          <div className="mb-4">
                            <div className="form-check form-switch">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="status"
                                id="status"
                                defaultChecked="checked"
                                defaultValue={1} onChange={handleChange}
                              />
                            </div>
                          </div>
                        </div>


                        <div className="col-lg-4">

                          <Gallery />
                        </div>


                      </div>

                    </>
                  )}

                  <div className="col-12">

                    {SubmitLoading ? (

                      <button className="btn btn-secondary" type="button" onClick={submitData} >
                        Update Attribute
                      </button>

                    ) : (

                      <button class="btn btn-secondary btn-sm" type="button" disabled>
                        <span class="ms-1">Loading...</span>
                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                      </button>

                    )}

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </main>
    </>
  )
}

export default EditTag