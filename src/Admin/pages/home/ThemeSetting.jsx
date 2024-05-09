import React, { useState, useEffect } from "react";
import axios from 'axios';
import axiosInstance from '../../../axiosInstance'; import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import toast from "react-hot-toast";
import Nestable from "react-nestable";
import Gallery from "../../components/Gallery";

const ThemeSetting = () => {

  const [SubmitLoading, setSubmitLoading] = useState(true); // Add loading state

  const [items, setItems] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const getData = async () => {
    try {
      const { data } = await axiosInstance.get(`/home-data`);
      setItems(data.homeData);
      setFormData(data.homeData)
      setIsLoading(false); // Set loading state to false in case of an error
      console.log('data', data.homeData)
    }
    catch (error) {
      console.log(error);
      toast.error("Error fetching Single Blog!");
      setIsLoading(false); // Set loading state to false in case of an error
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const [collapseAll, setCollapseAll] = useState(false);
  const [editMode, setEditMode] = useState(null); // Track the edited item ID

  const [newMenuItem, setNewMenuItem] = useState({
    id: Date.now(),
    text: "",
    link: "",
    target: "_self",
    children: []
  });




  const handleEditMenu = (items, itemId, newText, newLink, newTarget) => {

    return items.map(item => {
      if (item.id === itemId) {
        return { ...item, text: newText, link: newLink, target: newTarget };
      } else if (item.children) {
        return { ...item, children: handleEditMenu(item.children, itemId, newText, newLink, newTarget) };
      }
      return item;
    });
  };

  const handleDeleteMenu = (items, itemId) => {
    return items.filter(item => {
      if (item.id === itemId) {
        return false; // Exclude the item with the specified itemId
      } else if (item.children) {
        // Recursively filter children if they exist
        item.children = handleDeleteMenu(item.children, itemId);
        return true;
      }
      return true;
    });
  };

  const toggleEditMode = (itemId) => {
    setEditMode(editMode === itemId ? null : itemId);
  };



  const renderItem = (props) => {
    const { item, index, collapseIcon, handler } = props;
    const isEditing = editMode === item.id;

    return (
      <div style={{ fontWeight: item.children.length ? "700" : "400" }}>
        {handler}
        {collapseIcon}
        <div className="p-2" style={{ borderRight: "2px solid #dedede" }}>{index + 1}</div>
        <div style={{ padding: ".5rem", flex: 1 }}>
          {isEditing ? (
            <>

              <div className="row">
                <div className="col-md-3">
                  <label >Name</label>
                  <input
                    type="text" className="form-control"
                    value={item.text}
                    onChange={(e) => setItems(handleEditMenu(items, item.id, e.target.value, item.link, item.target))}
                  />
                </div>

                <div class="col">
                  <label >Url</label>

                  <input
                    type="text" className="form-control"
                    value={item.link}
                    onChange={(e) => setItems(handleEditMenu(items, item.id, item.text, e.target.value, item.target))}
                  />

                </div>

                <div className="col-auto">

                  <label>Target</label>
                  <select className="form-control select" value={item.target}
                    onChange={(e) => setItems(handleEditMenu(items, item.id, item.text, item.link, e.target.value))} >
                    <option value={'_self'}> Self
                    </option>
                    <option value={'_blank'}> Blank
                    </option>

                  </select>
                </div>

              </div>


            </>
          ) : (
            <>
              <span>{item.text}</span>
              {/* <span>{item.link}</span>
              <span>{item.target}</span> */}
            </>
          )}
        </div>
        <div style={{ padding: ".5rem", width: "auto" }}>
          {isEditing ? (
            <div className="col-auto">
              <label className="text-center d-block">Action</label>
              <div className="d-flex gap-2">
                <button className="btn btn-danger btn-sm" onClick={() => setItems(handleDeleteMenu(items, item.id))} >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="3 6 5 6 21 6" />
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    <line x1={10} y1={11} x2={10} y2={17} />
                    <line x1={14} y1={11} x2={14} y2={17} />
                  </svg>

                </button>
                <button className="btn btn-primary btn-sm" onClick={() => toggleEditMode(item.id)}>Close</button>

              </div>
            </div>
          ) : (
            <button className="btn btn-secondary btn-sm" onClick={() => toggleEditMode(item.id)}>Edit</button>
          )}

        </div>
      </div>
    );
  };



  const Handler = () => (
    <div style={{ cursor: "pointer", borderRight: "2px solid #dedede" }} className="p-2 border-right">
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 1024 1024"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M909.3 506.3L781.7 405.6a7.23 7.23 0 0 0-11.7 5.7V476H548V254h64.8c6 0 9.4-7 5.7-11.7L517.7 114.7a7.14 7.14 0 0 0-11.3 0L405.6 242.3a7.23 7.23 0 0 0 5.7 11.7H476v222H254v-64.8c0-6-7-9.4-11.7-5.7L114.7 506.3a7.14 7.14 0 0 0 0 11.3l127.5 100.8c4.7 3.7 11.7.4 11.7-5.7V548h222v222h-64.8c-6 0-9.4 7-5.7 11.7l100.8 127.5c2.9 3.7 8.5 3.7 11.3 0l100.8-127.5c3.7-4.7.4-11.7-5.7-11.7H548V548h222v64.8c0 6 7 9.4 11.7 5.7l127.5-100.8a7.3 7.3 0 0 0 .1-11.4z" />
      </svg>
    </div>
  );

  const Collapser = ({ isCollapsed }) => (
    <div style={{ cursor: "pointer", borderRight: "2px solid #dedede" }} className="p-2 border-right" >
      {isCollapsed ? <>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 1024 1024"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" />
        </svg>

      </> : <>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 1024 1024"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z" />
        </svg>

      </>}
    </div>
  );

  const handleUpdate = (newItems) => {
    console.log("Updating items:", newItems.items);
    setItems(newItems.items);
  };


  const [formData, setFormData] = useState({
    meta_title: "",
    meta_description: "",
    meta_head: "",
    footer_credit: "",
  });

  const submitData = async () => {
    setSubmitLoading(false);
    const meta_favicon = document.getElementById("meta_favicon");
    const meta_logo = document.getElementById("meta_logo");

    const updatedFormData = {
      ...formData,
      meta_favicon: meta_favicon.src,
      meta_logo: meta_logo.src,
    };

    console.log('formData', updatedFormData)
    try {
      const admintoken = localStorage.getItem("adminToken");
      if (admintoken) {
        await axiosInstance.put(`/admin/edit-home`, formData);
        toast.success("Header Updated successfully!");

      }
    } catch (error) {
      console.error("Error On Menu:", error);
      toast.error(error.response.data.message);
    } finally {
      setSubmitLoading(true);
    }
  };

  const saveMenu = () => {
    // Here you can save the menu items using axios or any other method
    // Example:

    console.log(items)
    axiosInstance.post('/api/menu', { items })
      .then(response => {
        toast.success("Menu saved successfully!");
      })
      .catch(error => {
        toast.error("Failed to save menu.");
      });
  };



  return (
    <>
      <Sidebar />
      <main className="content">
        <Navbar />

        <nav
          aria-label="breadcrumb"
          className="d-none d-md-inline-block"
        >
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
              <Link to="/dashboard">Admin</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Theme Setting
            </li>
          </ol>
        </nav>




        <div className="row">
          <div className="col-md-12 mb-4">
            <div className="card border-0 shadow components-section">
              <div className="card-body" >


                <div className="col-sm-12 mb-3">
                  <label htmlFor="meta_title">Meta Title</label>{" "}
                  <input
                    className="form-control"
                    id="meta_title"
                    type="text"
                    name="meta_title"
                    value={formData.meta_title}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-sm-12 mb-3">
                  <div className="form-group">
                    <label htmlFor="address">Meta Description</label>{" "}
                    <textarea
                      className="form-control"
                      id="meta_description"
                      type="text"
                      name="meta_description"
                      value={formData.meta_description}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="col-sm-12 mb-3">
                  <div className="form-group">
                    <label htmlFor="address">Head Code</label>
                    <textarea
                      className="form-control"
                      id="meta_head"
                      type="text"
                      name="meta_head"
                      style={{ background: "#1f2937", color: "#f8bd7a " }}
                      value={formData.meta_head}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="row">



                  <div className="col-md-6 mb-3">
                    <label htmlFor="meta_title">Meta Logo</label>{" "}
                    <input
                      className="form-control"
                      id="meta_logo"
                      type="text"
                      name="meta_logo"
                      value={formData.meta_logo}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="meta_title">Meta Favicon</label>{" "}
                    <input
                      className="form-control"
                      id="meta_favicon"
                      type="text"
                      name="meta_favicon"
                      value={formData.meta_favicon}
                      onChange={handleChange}
                    />
                  </div>





                  <div className="col-sm-12 mb-3">
                    <label htmlFor="footer_credit">Footer Credit</label>{" "}
                    <input
                      className="form-control"
                      id="footer_credit"
                      type="text"
                      name="footer_credit"
                      value={formData.footer_credit}
                      onChange={handleChange}
                    />
                  </div>



                  <div className="col-sm-6 mb-3">
                    <label htmlFor="footer_credit">Phone Number</label>{" "}
                    <input
                      className="form-control"
                      id="phone"
                      type="number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>


                  <div className="col-sm-6 mb-3">
                    <label htmlFor="footer_credit">Email ID</label>{" "}
                    <input
                      className="form-control"
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>


                  <div className="col-sm-12 mb-3">
                    <div className="form-group">
                      <label htmlFor="address">Address</label>{" "}
                      <textarea
                        className="form-control"
                        id="address"
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <hr />

                  <div className="card card-body border-0 shadow mb-4 mb-xl-0">
                    <h2 className="h5 mb-4">Payment Methods</h2>

                    <div className="justify-content-between row px-2">
                      <div className="col-md-5 d-flex align-items-center justify-content-between px-0 border-bottom">
                        <div>
                          <h3 className="h6 mb-1">COD</h3>
                          <p className="small pe-4">

                            COD stands for "Cash on Delivery."
                          </p>
                        </div>
                        <div>
                          <div className="form-check form-switch">
                            {formData.cash !== undefined && (<input
                              className="form-check-input"
                              type="checkbox"
                              name="cash"
                              id="cash"
                              defaultChecked={formData.cash === 'true' && "checked"}
                              defaultValue={1} onChange={handleChange}
                            />)}
                            <label className="form-check-label" htmlFor="cash" />
                          </div>
                        </div>
                      </div>

                      <div className=" col-md-5 d-flex align-items-center justify-content-between px-0 border-bottom">
                        <div>
                          <h3 className="h6 mb-1">ccavenue</h3>
                          <p className="small pe-4">

                          ccavenue Payment Gateway
                          </p>
                        </div>
                        <div>
                          <div className="form-check form-switch">
                            {formData.razorpay !== undefined && (<input
                              className="form-check-input"
                              type="checkbox"
                              name="razorpay"
                              id="razorpay"
                              defaultChecked={formData.razorpay === 'true' && "checked"}
                              defaultValue={1} onChange={handleChange}
                            />)}
                            <label className="form-check-label" htmlFor="razorpay" />
                          </div>
                        </div>
                      </div>

                    </div>



                  </div>




                </div>

                <div className="input-group mt-4 mb-2">

                  {SubmitLoading ? (
                    <button
                      className="btn btn-secondary"
                      type="button"
                      onClick={submitData}
                    >
                      Update Theme
                    </button>
                  ) : (
                    <button
                      class="btn btn-secondary btn-sm"
                      type="button"
                      disabled
                    >
                      <span class="ms-1">Loading...</span>
                      <span
                        class="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                    </button>
                  )}



                </div>

              </div>

            </div>
          </div>
        </div>

        <Gallery />

      </main >
    </>
  );
};

export default ThemeSetting;
