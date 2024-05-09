import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import toast from 'react-hot-toast';
import Gallery from '../../components/Gallery';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import Select from 'react-select';
import { triggerChooseimg } from '../../components/ChooseImg';

import axiosInstance from '../../../axiosInstance';

const EditZones = () => {

  const [selectedOptions, setSelectedOptions] = useState([]);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [SubmitLoading, setSubmitLoading] = useState(true); // Add loading state

  const [editorValue, setEditorValue] = useState('');

  const { slug } = useParams();


  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    primary: 'false',
    status: 'true',
  });




  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: type === 'checkbox' ? checked : value }));
  };



  const fetchData = async () => {
    try {
      const { data } = await axiosInstance.get(`/admin/get-zones/${slug}`);
      setData(data.Zones);
      console.log(data)
      setLoading(false); // Set loading to false when data is fetched
      // Set the formData.username based on the blog's slug
      setFormData((prevData) => ({
        ...prevData,
        name: data.Zones.name,
        status: data.Zones.status,
        primary: data.Zones.primary || 'false',
      }));


    }
    catch (error) {
      console.log(error);
      toast.error("Error fetching Single company!");
      setLoading(false); // Set loading to false when data is fetched

    }
  };

  useEffect(() => {
    fetchData();

  }, []);


  const submitData = async () => {
    setSubmitLoading(false);


    // console.log(formData)
    try {
      const admintoken = localStorage.getItem('adminToken');
      if (admintoken) {
        await axiosInstance.put(`/admin/update-zones/${slug}`, formData);
        toast.success('zones Updated successfully!');
        navigate('/all-zones');
      }
    } catch (error) {
      console.error('Error On zones:', error);
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
                Edit Zones
              </li>
            </ol>
          </nav>
          <div className="d-flex justify-content-between w-100 flex-wrap">
            <div className="mb-3 mb-lg-0">
              <h1 className="h4">Edit Zones</h1>
            </div>
            <div>
              {" "}
              <Link
                to="/all-zones"
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


                            <div className="col-6 row">


                              <div className="col-4 ">
                                <div className="mb-4">
                                  <label className="my-1 me-2" htmlFor="primary">
                                    Set Primary
                                  </label>
                                </div>
                              </div>
                              <div className="col-8 ">
                                <div className="mb-4">
                                  <div className="form-check form-switch">

                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      name="primary"
                                      id="primary"
                                      defaultChecked={formData.primary === 'true' && "checked"}
                                      defaultValue={1} onChange={handleChange}
                                    />
                                  </div>
                                </div>
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


                        <div className="col-4 ">
                          <div className="mb-4">
                            <label className="my-1 me-2" htmlFor="status">
                              Status
                            </label>
                          </div>
                        </div>
                   

                        <div className="col-8 ">

<div className="form-check">
<input
className="form-check-input"
type="radio"
name="status"
id="status"
value="true"
onChange={handleChange}
checked={formData.status === 'true' && "checked"}
/>
<label className="form-check-label text-success"  htmlFor="status">
Active
</label>
</div>
<div className="form-check">
<input
className="form-check-input text-danger"
type="radio"
name="status"
id="status1"
value="false"
onChange={handleChange}
checked={formData.status === 'false' && "checked"}
/>
<label className="form-check-label  text-danger" htmlFor="status1">
Inactive
</label>
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

export default EditZones