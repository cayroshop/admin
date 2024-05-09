import React, { useState, useEffect } from 'react';
import axios from 'axios';
import axiosInstance from '../../../axiosInstance';
import { useNavigate, Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import toast from 'react-hot-toast';
import Gallery from '../../components/Gallery';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import Select from 'react-select';
import { triggerChooseimg } from '../../components/ChooseImg';


const AddTax = () => {
  const [loading, setLoading] = useState(true); // Add loading state

  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [SubmitLoading, setSubmitLoading] = useState(true); // Add loading state
  const [selectedOptions, setSelectedOptions] = useState([]);

  const [formData, setFormData] = useState({
    name: '',
    rate: '',
    type: 1,
    zoneId: [],
    status: 'true',
  });


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: type === 'checkbox' ? checked : value }));
  };


  const handleselectChange = (selectedValues) => {
    const categoryIds = selectedValues.map((category) => category.value); // Extracting ObjectId values

    setSelectedOptions(selectedValues);
    setFormData((prevData) => ({
      ...prevData,
      zoneId: categoryIds, // Setting the array of ObjectId values
    }));
  };


  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get("/admin/get-all-zones");
      console.log(response.data.Zones);
      setData(response.data.Zones);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };


  const submitData = async () => {
    setSubmitLoading(false);

    
    let updatedFormData;

    if(formData.status === undefined ){
       updatedFormData = {
        ...formData,
        status:"true",
      };

   }else{
     updatedFormData = {
      ...formData
    };
   }


    try {
      const admintoken = localStorage.getItem('adminToken');
      if (admintoken) {
        await axiosInstance.post('/admin/add-tax', updatedFormData);
        console.log('Taxes Add successfully!');
        toast.success('Taxes Add successfully!');
        navigate('/all-taxes');
      }
    } catch (error) {
      console.error('Error On Blog:', error);
      console.log(formData);
      toast.error(error.response.data.message);
    } finally {
      setSubmitLoading(true);

    }
  };

  useEffect(() => {

    fetchData();


  }, []);

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
                Add Charges
              </li>
            </ol>
          </nav>
          <div className="d-flex justify-content-between w-100 flex-wrap">
            <div className="mb-3 mb-lg-0">
              <h1 className="h4">Add Charges</h1>
            </div>
            <div>
              {" "}
              <Link
                to="/all-taxes"
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
                            <label htmlFor="name">Name</label>

                            <input
                              type="text"
                              className="form-control"
                              id="name" value={formData.name}
                              name="name" onChange={handleChange}
                            />
                          </div>
                        </div>



                        <div className='col-md-6 d-none'>
                          <div className="mb-4">
                            <label htmlFor="title">Charges type</label>
                            <select className="form-control select" onChange={handleChange} name="type" id="type">
                              <option value="" disabled selected="true"> Select type</option>
                              <option value="1">Percentage</option>
                              <option value="2"   > Fixed Amount</option>

                            </select>
                          </div>
                        </div>
                        <div className='col-md-12'>
                          <div className="mb-4">
                            <label htmlFor="title">Geo Zone</label>


                            <Select
                              isMulti
                              value={selectedOptions}
                              name="zoneId"
                              onChange={handleselectChange}
                              placeholder={
                                loading ? "Loading..." : "Select options"
                              }
                              options={data.map((zones) => ({
                                value: zones._id,
                                label: zones.name,
                              }))}
                            />

                          </div>
                        </div>


                        <div className='col-md-12'>
                          <div className="mb-4">
                            <label htmlFor="name">Shipping Charges in Kg (EX: 0.1-0.2:50,0.3-0.4:100 )</label>
                            <textarea rows={5}
                              type="text"
                              className="form-control"
                              id="rate" value={formData.rate}
                              name="rate" onChange={handleChange}
                            />
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



                  </div>
                  <div className="col-12">

                    {SubmitLoading ? (

                      <button className="btn btn-secondary" type="button" onClick={submitData} >
                        Add Charges
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

export default AddTax
