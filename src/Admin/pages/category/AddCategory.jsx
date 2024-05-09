import React, { useState, useEffect } from 'react';
import axios from 'axios';
import axiosInstance from '../../../axiosInstance'; import { useNavigate, Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import toast from 'react-hot-toast';
import Gallery from '../../components/Gallery';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles


const AddCategory = () => {
  const navigate = useNavigate();
  const [SubmitLoading, setSubmitLoading] = useState(true); // Add loading state

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    description: '',
    metaTitle: '',
    metaDescription: '',
    metaKeywords: '',
    parent: '',
    image: '',
    status: 'true',
  });

  const [showCode, setShowCode] = useState(false);

  const handleDescriptionChange = (value) => {
    setFormData({ ...formData, description: value });
  };

  const toggleShowCode = () => {
    setShowCode(!showCode);
  };


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: type === 'checkbox' ? checked : value }));
  };


  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state


  function fetchcurrent() {
    // const parent = document.getElementById('parent');
    const image = document.getElementById('image-preview');
    setFormData({
      image: image.src,
    });
  }


  const fetchData = async () => {
    try {
      const response = await axiosInstance.get('/all-category');
      console.log(response.data.categories);
      setData(response.data.categories);
      setLoading(false);
      fetchcurrent();

    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };


  useEffect(() => {

    fetchData();


  }, []);

  const submitData = async () => {
    const getimage = document.getElementById('image-preview');
 
let updatedFormData;

    if(formData.status === undefined ){
       updatedFormData = {
        ...formData,
        image: getimage.src,
        status:"true",
      };

    }else{
     updatedFormData = {
        ...formData,
        image: getimage.src,
      };
    }
 


    try {
      const admintoken = localStorage.getItem('adminToken');
      if (admintoken) {
        await axiosInstance.post('/admin/add-category', updatedFormData);
        console.log('Category Add successfully!');
        toast.success('Category Add successfully!');
        navigate('/all-category');
      }
    } catch (error) {
      console.error('Error On Blog:', error);
      console.log(formData);
      toast.error(error.response.data.message);
    } finally {
      setSubmitLoading(true)
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
                Add Category
              </li>
            </ol>
          </nav>
          <div className="d-flex justify-content-between w-100 flex-wrap">
            <div className="mb-3 mb-lg-0">
              <h1 className="h4">Add Category</h1>
            </div>
            <div>

              <Link
                to="/all-category"
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

                        <div className='col-md-6'>
                          <div className="mb-4">
                            <label htmlFor="title">Name</label>
                            <input
                              type="text"
                              className="form-control"
                              id="title" value={formData.title}
                              name="title" onChange={handleChange}
                            />
                          </div>
                        </div>



                        <div className='col-md-6'>

                          <div className="mb-4">
                            <label htmlFor="title">Parent category</label>

                            <select className="form-control select" name="parent" value={formData.parent} onChange={handleChange} id="parent">


                              <option value={''}  > None
                              </option>


                              {loading ? (
                                <option>Loading...</option>
                              ) : (
                                data.map((category) => (

                                  <option key={category.id} value={category._id}>
                                    {category.title}
                                  </option>
                                ))
                              )}


                            </select>
                          </div>
                        </div>


                        <div className='col-md-12'>
                          <div className="mb-4">
                            <label htmlFor="slug" >slug </label>
                            <input
                              type="text"
                              className="form-control"
                              id="slug" value={formData.slug}
                              name="slug" onChange={handleChange}
                            />


                          </div>
                        </div>

                        <div className='col-md-12'>
                          <div className="mb-4">
                            <label htmlFor="description" className="d-flex align-items-center justify-content-between"> Description
                              <span>
                              </span>
                              <button onClick={toggleShowCode} className="btn btn-secondary btn-sm" type='button'>
                                {showCode ? 'Show Editor' : 'Show Code'}
                              </button>

                            </label>

                            {showCode ? (
                              <textarea className="form-control"
                                value={formData.description}
                                onChange={(e) => handleDescriptionChange(e.target.value)}
                                rows={5}
                                cols={80}
                              />
                            ) : (
                              <ReactQuill
                                value={formData.description}
                                onChange={handleDescriptionChange}
                                modules={{
                                  toolbar: [
                                    [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
                                    [{ size: [] }],
                                    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                                    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                                    ['link'],
                                    ['clean']
                                  ],
                                }}
                                formats={[
                                  'header', 'font', 'size',
                                  'bold', 'italic', 'underline', 'strike', 'blockquote',
                                  'list', 'bullet',
                                  'link',
                                ]}
                                bounds={'.app'}
                              />
                            )}

                          </div>
                        </div>


                      </div>


                      <div className="row">
                        <div className='col-md-12'>
                          <div className="mb-4">
                            <label htmlFor="metaTitle">Meta Title</label>
                            <input
                              type="text"
                              className="form-control"
                              id="metaTitle" value={formData.metaTitle} name="metaTitle" onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className='col-md-12'>

                          <div className="mb-4">
                            <label htmlFor="metaDescription">Meta Description</label>
                            <textarea className="form-control"
                              value={formData.metaDescription}
                              rows="4" name="metaDescription" id="metaDescription" onChange={handleChange} ></textarea>
                          </div>

                        </div>

                        <div className='col-md-12'>

                          <div className="mb-4">
                            <label htmlFor="metaKeywords">Meta Keywords</label>
                            <textarea className="form-control" rows="4" value={formData.metaKeywords}
                              name="metaKeywords" id="metaKeywords" onChange={handleChange} ></textarea>
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
                  <h5> Category Image (1376 × 275 px) </h5>


                    <hr />


                    <div className="input-group imageupload-bx mb-3 ">

                      <img
                        src="/assets/images/placeholder.png"
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
                        value={formData.image}
                        defaultValue="/assets/images/placeholder.png"
                      />
                    </div>

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
checked="checked"
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
                  <div className="col-12">
                    {SubmitLoading ? (


                      <button className="btn btn-secondary" type="button" onClick={submitData} >
                        Add Category
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

export default AddCategory
