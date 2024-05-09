import React, { useState, useEffect } from 'react';
import axios from 'axios';
import axiosInstance from '../../../axiosInstance';
import { useNavigate, Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import toast from 'react-hot-toast';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const AddPage = () => {
  const [loading, setLoading] = useState(true); // Add loading state

  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [SubmitLoading, setSubmitLoading] = useState(true); // Add loading state

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    metaTitle: '',
    metaDescription: '',
    metaKeywords: '',
  });


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: type === 'checkbox' ? checked : value }));
  };




  const [showCode, setShowCode] = useState(false);
  const handleDescriptionChange = (value) => {
    setFormData({ ...formData, description: value });
  };

  const toggleShowCode = () => {
    setShowCode(!showCode);
  };


  const submitData = async () => {
    setSubmitLoading(false);

    console.log(formData)
    try {
      const admintoken = localStorage.getItem('adminToken');
      if (admintoken) {
        await axiosInstance.post('/admin/add-page', formData);
        console.log('Promo Code Add successfully!');
        toast.success('Promo Add successfully!');
        navigate('/all-page');
      }
    } catch (error) {
      console.error('Error On Promo code:', error);
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
                Add Page
              </li>
            </ol>
          </nav>
          <div className="d-flex justify-content-between w-100 flex-wrap">
            <div className="mb-3 mb-lg-0">
              <h1 className="h4">Add Page</h1>
            </div>
            <div>
              {" "}
              <Link
                to="/all-page"
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
        <form method="post" id="add-blog-form">
          <div className="row">
            <div className="col-md-8 mb-4">
              <div className="card border-0 shadow components-section">
                <div className="card-body">
                  <div className="row mb-4">
                    <div className="col-lg-12 col-sm-12">

                      <div className="row">

                        <div className='col-md-12'>
                          <div className="mb-4">
                            <label htmlFor="name">Page Name</label>

                            <input
                              type="text"
                              className="form-control"
                              id="title" value={formData.title}
                              name="title" onChange={handleChange}
                            />
                          </div>
                        </div>


                        <div className="col-md-12">
                          <div className="mb-4">
                            <label
                              htmlFor="description"
                              className="d-flex align-items-center justify-content-between"
                            >
                              {" "}
                              Description
                              <span></span>
                              <button
                                onClick={toggleShowCode}
                                className="btn btn-secondary btn-sm"
                                type="button"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="mx-1"
                                  width="20"
                                  height="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="#1f2937"
                                  stroke-width="1.5"
                                  stroke-linecap="square"
                                  stroke-linejoin="arcs"
                                >
                                  <polyline points="16 18 22 12 16 6"></polyline>
                                  <polyline points="8 6 2 12 8 18"></polyline>
                                </svg>
                                {showCode ? "Show Editor" : "Show Code"}
                              </button>
                            </label>

                            {showCode ? (
                              <textarea
                                className="form-control"
                                value={formData.description}
                                onChange={(e) =>
                                  handleDescriptionChange(e.target.value)
                                }
                                rows={5}
                                cols={80}
                              />
                            ) : (
                              <ReactQuill
                                value={formData.description}
                                onChange={handleDescriptionChange}
                                modules={{
                                  toolbar: [
                                    [
                                      { header: "1" },
                                      { header: "2" },
                                      { font: [] },
                                    ],
                                    [{ size: [] }],
                                    [
                                      "bold",
                                      "italic",
                                      "underline",
                                      "strike",
                                      "blockquote",
                                    ],
                                    [{ list: "ordered" }, { list: "bullet" }],
                                    ["link"],
                                    ["clean"],
                                  ],
                                }}
                                formats={[
                                  "header",
                                  "font",
                                  "size",
                                  "bold",
                                  "italic",
                                  "underline",
                                  "strike",
                                  "blockquote",
                                  "list",
                                  "bullet",
                                  "link",
                                ]}
                                bounds={".app"}
                              />
                            )}
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-12">
                            <div className="mb-4">
                              <label htmlFor="metaTitle">Meta Title</label>
                              <input
                                type="text"
                                className="form-control"
                                id="metaTitle"
                                value={formData.metaTitle}
                                name="metaTitle"
                                onChange={handleChange}
                              />
                            </div>
                          </div>

                          <div className="col-md-12">
                            <div className="mb-4">
                              <label htmlFor="metaDescription">
                                Meta Description
                              </label>
                              <textarea
                                className="form-control"
                                value={formData.metaDescription}
                                rows="4"
                                name="metaDescription"
                                id="metaDescription"
                                onChange={handleChange}
                              ></textarea>
                            </div>
                          </div>

                          <div className="col-md-12">
                            <div className="mb-4">
                              <label htmlFor="metaKeywords">meta Keywords</label>
                              <textarea
                                className="form-control"
                                rows="4"
                                value={formData.metaKeywords}
                                name="metaKeywords"
                                id="metaKeywords"
                                onChange={handleChange}
                              ></textarea>
                            </div>
                          </div>


                        </div>


                      </div>



                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow components-section">
                <div className="card-body">
                  <div className="row">
                    {/* 

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
                    </div> */}



                  </div>
                  <div className="col-12">

                    {SubmitLoading ? (

                      <button className="btn btn-secondary" type="button" onClick={submitData} >
                        Add Page
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
        </form >


      </main >
    </>
  )
}

export default AddPage
