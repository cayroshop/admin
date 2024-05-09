import React, { useState, useEffect, useContext, Component } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import toast from "react-hot-toast";
import axios from 'axios';
import axiosInstance from '../../../axiosInstance';
import Gallery from "../../components/Gallery";
import { triggerChooseimg } from "../../components/ChooseImg";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";


function generateSlug(text) {
    // Convert to lowercase and remove disallowed characters
    var slug = text.toLowerCase().replace(/[^\w\s-]/g, '');

    // Replace spaces with hyphens
    slug = slug.replace(/\s+/g, '-');

    return slug;
}
function generateInput(text) {
    // Convert to lowercase and remove disallowed characters
    var slug = text;
    return slug;
}



const EditAdminBlogs = () => {

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        image: "",
        slug: "",
        metaTitle:"",
        metaDescription: "",
        metaKeywords:"",
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


    const navigate = useNavigate();

    const [gallery, setGallery] = useState([]);
    const [isLoading, setIsLoading] = useState(true);



    const [blog, setBlog] = useState({});

    const { slug } = useParams();

    const getBlog = async () => {
        try {
            const { data } = await axiosInstance.get(`/get-blog/${slug}`);
            setBlog(data.blog);
            console.log(data.blog)
            setFormData((prevData) => ({
                ...prevData,
                title: data.blog.title,
                image: data.blog.image,
                slug: data.blog.slug,
                metaTitle:data.blog.metaTitle,
                metaDescription: data.blog.metaDescription,
                metaKeywords:data.blog.metaKeywords,
                description: data.blog.description,
              }));
        
        }
        catch (error) {
            console.log(error);
            toast.error("Error fetching Single Blog!");
        }
    };




    const submitBlog = async () => {
        const Blogimg = document.getElementById('image-preview');

        const  updatedFormData = {
            ...formData,
            image: Blogimg.src,
          };
    
     
        console.log(updatedFormData)
        try {
            const admintoken = localStorage.getItem('adminToken');
            if (admintoken) {
                // Send a POST request to your backend API endpoint

                await axiosInstance.put(`/update-blog/${slug}`, updatedFormData);

                // Handle success, e.g., show a success message to the user
                console.log('Blog Edit successfully!');
                toast.success("Blog Edit successfully!");
                navigate('/allblogs');
            }

        } catch (error) {
            // Handle errors, e.g., show an error message to the user
            console.error('Error On Blog:', error);
            console.log(formData)
            toast.error(error.response.data.message);

        }
    };


    useEffect(() => {
        getBlog();

        const checkUserToken = async () => {
            console.log('Effect is running');
            // Check if this is printed multiple times
            const usertoken = localStorage.getItem('adminToken');
            if (!usertoken) {
                console.log('Token !found in local storage');

                navigate('/admin');

                toast.success("Please login first");
            }
        }
        checkUserToken();
    }, [navigate]);




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
                                Edit Blog
                            </li>
                        </ol>
                    </nav>
                    <div className="d-flex justify-content-between w-100 flex-wrap">
                        <div className="mb-3 mb-lg-0">
                            <h1 className="h4">      Edit Blog</h1>
                        </div>
                        <div>
                            {" "}
                            <Link
                                to={'/admin/allblogs'}
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
                                            <div className="mb-4">
                                                <label htmlFor="title">Blog Title</label>
                                                <input
                          type="text"
                          className="form-control"
                          id="title"
                          value={formData.title}
                          name="title"
                          onChange={handleChange}
                        />
                                            </div>
                                            <div className="mb-4 d-none">
                                                <label htmlFor="exampleInputIconLeft">Blog Slug</label>
                                                <div className="input-group">
                                                    <span className="input-group-text" id="basic-addon1">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={20}
                                                            height={20}
                                                            viewBox="0 0 22 22"
                                                            id="link"
                                                        >
                                                            <g
                                                                fill="none"
                                                                fillRule="evenodd"
                                                                stroke="#000"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                transform="translate(1 1)"
                                                            >
                                                                <path d="M8 11a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07L9.75 3.18" />
                                                                <path d="M12 9a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                                                            </g>
                                                        </svg>
                                                    </span>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="slug"
                                                        name="slug"
                                                        value={formData.slug}
                                                        onChange={handleChange}
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


                                            {/* <div className="mb-3">
                                                <label htmlFor="exampleInputIconLeft">Blog Content</label>
                                                <div id="editorjs" style={{ height: 400 }}>
                                                    <Link
                                                        to={`/buildBlogs/${blog._id}`}
                                                        className="disabledbt"
                                                        id="EditDisable"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={16}
                                                            height={16}
                                                            style={{ transform: "scale(1.4)" }}
                                                            id="edit"
                                                        >
                                                            <path
                                                                fill="#fff"
                                                                stroke="#249fe6"
                                                                d="m6.131 11.99-1.337 1.338a.6.6 0 0 1-.85 0l-1.271-1.271a.6.6 0 0 1 0-.85L4.01 9.868"
                                                            />
                                                            <path
                                                                fill="#c2e4f8"
                                                                d="m6.12 11.979 6.374-6.344 1.063-3.188-3.188 1.063-6.375 6.375 2.125 2.094z"
                                                            />
                                                            <path
                                                                fill="none"
                                                                stroke="#249fe6"
                                                                d="m6.12 11.979 6.374-6.344 1.063-3.188-3.188 1.063-6.375 6.375 2.125 2.094zm6.263-6.038-2.287-2.288"
                                                            />
                                                        </svg>
                                                        Edit With Builder
                                                    </Link>
                                                </div>
                                                <br />
                                                <input type="hidden" name="blogContent" id="blogContent" />
                                            </div> */}
                                            <hr />
                                            <h5 className="mb-3"> Blog Metas</h5>
                                            <div className="mb-3">
                                                <label htmlFor="metaTitle">Meta Title</label>{" "}
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="metaTitle"
                                                    value={formData.metaTitle}
                                                    onChange={handleChange}
                                                />
                                                <div className="invalid-feedback" id="metaTitleFeedback">
                                                    {" "}
                                                </div>
                                            </div>
                                            <div className="my-4">
                                                <label htmlFor="textarea">Meta Description</label>
                                                <textarea
                                                    className="form-control"
                                                    rows={4}
                                                    name="metaDescription"
                                                    value={formData.metaDescription}
                                                    onChange={handleChange}
                                                />
                                                <div className="invalid-feedback" id="metaDesFeedback" />
                                            </div>
                                            <div className="my-4">
                                                <label htmlFor="textarea">Meta Keywords</label>
                                                <textarea
                                                    className="form-control"
                                                    rows={3}
                                                    name="metaKeywords"
                                                    value={formData.metaKeywords}
                                                    onChange={handleChange}
                                                />

                                                <div className="invalid-feedback" id="metaKeyFeedback" />
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
                                        <h5> Publish</h5>
                                        <hr className=" d-none" />
                                        <div className="col-4 d-none">
                                            <div className="mb-4">
                                                <label className="my-1 me-2" htmlFor="Status">
                                                    Status
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-8  d-none">
                                            <div className="mb-4">
                                                <select
                                                    className="form-select"
                                                    id="Status"
                                                    name="status"
                                                    aria-label="Default select example"
                                                    fdprocessedid="b5ckv6"
                                                >
                                                    <option value={1} selected="">
                                                        Publish
                                                    </option>
                                                    <option value={2}>Draft</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-4  d-none">
                                            <div className="mb-4">
                                                <label className="my-1 me-2" htmlFor="visibility">
                                                    Visibility
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-8  d-none">
                                            <div className="mb-4">
                                                <div className="form-check form-switch">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        name="visibility"
                                                        id="flexSwitchCheckChecked"
                                                        defaultChecked="checked"
                                                        defaultValue={1}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <hr className=" d-none" />
                                        <div className="col-12  d-none">
                                            <h5>categories</h5>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="categories"
                                                    id="categories1"
                                                    defaultValue="option1"
                                                    defaultChecked="checked"
                                                />
                                                <label className="form-check-label" htmlFor="categories1">
                                                    uncategorized
                                                </label>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="col-12">
                                            <h5> Featured image </h5>
                                        </div>
                                     
                                        <div className="input-group imageupload-bx mb-3">
                      <img
                        src={formData.image}
                        className=" "
                        id="image-preview"
                        data-bs-toggle="modal"
                        data-bs-target="#modal-default"
                      />
                      <input
                        type="hidden"
                        className="form-control imageopen"
                        id="image"
                        name="image"
                        defaultValue={formData.image}
                      />
                    </div>

     
                    <div className="col-lg-4">
                      <Gallery />
                    </div>
                                  
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-secondary" type="button" onClick={submitBlog}>
                                            Update
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>


            </main>
        </>
    )
}

export default EditAdminBlogs