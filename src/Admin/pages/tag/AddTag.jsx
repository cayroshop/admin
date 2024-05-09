import React, { useState, useEffect } from 'react';
import axios from 'axios';
import axiosInstance from '../../../axiosInstance';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import toast from 'react-hot-toast';
import Gallery from '../../components/Gallery';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import Select from 'react-select';
import { triggerChooseimg } from '../../components/ChooseImg';


const AddTag = () => {
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [SubmitLoading, setSubmitLoading] = useState(true); // Add loading state

  const [formData, setFormData] = useState({
    name: '',
    image: '',
    type: '',
    value: '',
    status: true,
  });


  const handleselectChange = selectedValue => {
    setSelectedOptions(selectedValue); // Set the selected option
    setFormData(prevData => ({
      ...prevData,
      type: selectedValue ? selectedValue.value : '', // Set the selected value
    }));
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


  const submitData = async () => {
    setSubmitLoading(false);

    const imageInputs = document.querySelectorAll('#imageContainer input');
    const inputValues = Array.from(imageInputs).map(input => input.value);

    const updatedFormData = {
      ...formData,
      value: inputValues,
    };

    console.log(updatedFormData)

    try {
      const admintoken = localStorage.getItem('adminToken');
      if (admintoken) {
        await axiosInstance.post('/admin/add-attribute', updatedFormData);
        console.log('Attribute Add successfully!');
        toast.success('Attribute Add successfully!');
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
                Add Attribute
              </li>
            </ol>
          </nav>
          <div className="d-flex justify-content-between w-100 flex-wrap">
            <div className="mb-3 mb-lg-0">
              <h1 className="h4">Add Attribute</h1>
            </div>
            <div>
              {" "}
              <button
                type="button"
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
              </button>
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
                            <label htmlFor="name">Name</label>
                            <input
                              type="text"
                              className="form-control"
                              id="name" value={formData.name}
                              name="name" onChange={handleChange}
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
                            {imageDivs.map((imageDiv, index) => (
                              <React.Fragment key={index}>{imageDiv}</React.Fragment>
                            ))}
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



                    <div className='col-md-12'>

                      <div className="mb-4">
                        <label htmlFor="type">Attribute Type</label>

                        <Select
                          id="type"
                          value={selectedOptions} name="type"
                          onChange={handleselectChange}
                          placeholder={'Select Type'}
                          options={[
                            { value: '1', label: 'radio Button' },
                            { value: '2', label: 'radio Button + Image' },
                            { value: '3', label: 'Select Input' },
                            { value: '4', label: 'Color + radio Button' },

                          ]}

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
                  <div className="col-12">

                    {SubmitLoading ? (

                      <button className="btn btn-secondary" type="button" onClick={submitData} >
                        Add Attribute
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

export default AddTag
