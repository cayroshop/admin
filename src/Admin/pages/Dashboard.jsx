import React, { useState, useEffect, useContext, Component } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import toast from "react-hot-toast";
import axiosInstance from '../../axiosInstance';
import axios from 'axios';

const Dashboard = () => {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [limit, setlimit] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');
  
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get(`/admin/all-order?page=${currentPage}&limit=${limit}&search=${searchTerm}&status=1,2,3,4`);
        setData(response.data.Order || []);
        setCurrentPage(response.data.currentPage);
        setTotalPages(response.data.totalPages);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
  
    };
  
    useEffect(() => {
      fetchData(currentPage);
    }, [currentPage, limit]);


    useEffect(() => {
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
                    <div className="dropdown">
                        <Link
                            to="/addBlog#blogs"
                            className="btn btn-gray-800 d-inline-flex align-items-center me-2 dropdown-toggle"
                        >
                            <svg
                                className="icon icon-xs me-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                />
                            </svg>
                            Add Blog
                        </Link>
                    </div>
                </div>


                <div className="row">
                    <div className="col-xl-4 col-md-6">
                        <div className="card bg-primary text-white mb-4">
                            <div className="card-body">All Blogs</div>
                            <div className="card-footer d-flex align-items-center justify-content-between">
                                <Link
                                    className="small text-white stretched-link"
                                    to="/allblogs"
                                >
                                    View Details
                                </Link>
                                <div className="small text-white">
                                    <svg
                                        className="svg-inline--fa fa-angle-right"
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="angle-right"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 256 512"
                                        data-fa-i2svg=""
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M246.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 41.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
                                        />
                                    </svg>
                                    {/* <i class="fas fa-angle-right"></i> Font Awesome fontawesome.com */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="card bg-warning text-white mb-4">
                            <div className="card-body">Add Blogs</div>
                            <div className="card-footer d-flex align-items-center justify-content-between">
                                <Link
                                    className="small text-white stretched-link"
                                    to="/addBlog#blogs"
                                >
                                    View Details
                                </Link>
                                <div className="small text-white">
                                    <svg
                                        className="svg-inline--fa fa-angle-right"
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="angle-right"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 256 512"
                                        data-fa-i2svg=""
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M246.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 41.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
                                        />
                                    </svg>
                                    {/* <i class="fas fa-angle-right"></i> Font Awesome fontawesome.com */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="card bg-success text-white mb-4">
                            <div className="card-body">Gallery</div>
                            <div className="card-footer d-flex align-items-center justify-content-between">
                                <Link className="small text-white stretched-link" to="/add-gallery">
                                    View Details
                                </Link>
                                <div className="small text-white">
                                    <svg
                                        className="svg-inline--fa fa-angle-right"
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="angle-right"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 256 512"
                                        data-fa-i2svg=""
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M246.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 41.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
                                        />
                                    </svg>
                                    {/* <i class="fas fa-angle-right"></i> Font Awesome fontawesome.com */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


<div className='row'>
<div className="col-md-6 mb-3">

<div className="col-12">
                        <div className="card bg-primary text-white mb-4">
                            <div className="card-body">All Order</div>
                            <div className="card-footer d-flex align-items-center justify-content-between">
                                <Link
                                    className="small text-white stretched-link"
                                    to="/all-order"
                                >
                                    View Details
                                </Link>
                                <div className="small text-white">
                                    <svg
                                        className="svg-inline--fa fa-angle-right"
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="angle-right"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 256 512"
                                        data-fa-i2svg=""
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M246.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 41.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
                                        />
                                    </svg>
                                    {/* <i class="fas fa-angle-right"></i> Font Awesome fontawesome.com */}
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="col-12">
                        <div className="card bg-warning  text-white mb-4">
                            <div className="card-body">All Products</div>
                            <div className="card-footer d-flex align-items-center justify-content-between">
                                <Link
                                    className="small text-white stretched-link"
                                    to="/all-product"
                                >
                                    View Details
                                </Link>
                                <div className="small text-white">
                                    <svg
                                        className="svg-inline--fa fa-angle-right"
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="angle-right"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 256 512"
                                        data-fa-i2svg=""
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M246.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 41.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
                                        />
                                    </svg>
                                    {/* <i class="fas fa-angle-right"></i> Font Awesome fontawesome.com */}
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="col-12">
                        <div className="card bg-success  text-white mb-4">
                            <div className="card-body">All Users</div>
                            <div className="card-footer d-flex align-items-center justify-content-between">
                                <Link
                                    className="small text-white stretched-link"
                                    to="/all-user"
                                >
                                    View Details
                                </Link>
                                <div className="small text-white">
                                    <svg
                                        className="svg-inline--fa fa-angle-right"
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="angle-right"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 256 512"
                                        data-fa-i2svg=""
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M246.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 41.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
                                        />
                                    </svg>
                                    {/* <i class="fas fa-angle-right"></i> Font Awesome fontawesome.com */}
                                </div>
                            </div>
                        </div>
                    </div>



</div>

<div className="col-md-6 mb-3">
              <div className="card notification-card border-0 shadow" style={data.length === 0 ? { height: 'auto' } : null}>
                <div className="card-header d-flex align-items-center">
                  <h2 className="fs-5 fw-bold mb-0">    < i class="ri-box-2-fill"></i> Total Order</h2>
                  <div className="ms-auto">

                    <div class="avatar d-flex align-items-center justify-content-center fw-bold rounded bg-secondary"><span>{data.length || 0}</span></div>



                  </div>
                </div>

                {data.length !== 0 && (
                  <div className="card-body">
                    <div className="list-group list-group-flush list-group-timeline">

                      {data.map((Pro) => (

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
                                  data Id : {Pro?.orderId} {'  |   '} Price : ₹{Pro.totalAmount}
                                </h3>
                             

                                <Link class="btn btn-secondary my-3" to={`/order/${Pro.userId[0]._id}/${Pro._id}`}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height={20}
                              width={20}
                              fill="currentColor"
                              enableBackground="new 0 0 1024 1024"
                              viewBox="0 0 1024 1024"
                              className="me-1"
                            >
                              <path d="M490 324.2v219.5c-18-9.6-36.2-19.2-54.4-28.8-45.6-24.1-91.2-48.2-136.9-72.3-6.6-3.5-12.7-7.1-19.7-10.5V212.7c2 1.2 4.7 2.4 7 3.6.1.1.2.1.3.2 6.8 3.6 13.5 7.1 20.3 10.7 2.2 1.2 4.5 2.4 6.7 3.6 2.3 1.2 4.5 2.4 6.8 3.6 4.5 2.4 9.1 4.8 13.6 7.2 45.6 24.1 91.3 48 136.9 72.1.2.1.3 0 .5.1 1.1.6 2.2 1.3 3.3 1.3h0c.2 1 .4.6.5.7 2.6 1.4 5.1 2.9 7.7 4.3 1.5.8 2.8 1.7 4.3 2.5C488 323 489 323.7 490 324.2zM745 213.1v219.2c0 0-.1 0-.1 0-3.2 1.5-5.6 2.9-8.4 4.4-43.5 23-87 45.9-130.5 68.9-.8.4-1.5.9-2.4 1.3-23.2 12.2-46.6 24.2-69.6 36.5V324.2c2-1.5 5.4-2.9 8.2-4.4 43.5-23 87-46 130.5-68.9C696.8 238.2 721 225.8 745 213.1zM720.2 176.8c-17 9-33.9 17.9-50.9 26.9-45.6 24.1-91.2 48.2-136.9 72.3-6.8 3.6-13.6 7.2-20.4 10.8-25.1-13.3-50.2-26.5-75.3-39.8-44.3-23.4-88.5-46.8-132.8-70.2 17-9 33.9-17.9 50.9-26.9 45.6-24.1 91.2-48.2 136.8-72.3 6.8-3.6 13.6-7.2 20.4-10.8 25.1 13.3 50.2 26.5 75.4 39.8C631.6 130 675.9 153.4 720.2 176.8zM236 727.4v219.2c-19-9.4-35.9-18.9-53.7-28.3-45.6-24.1-91.1-48.2-136.7-72.2-6.9-3.6-14.5-7.3-20.5-10.9V615.8c3 2.1 7.8 4.2 11.8 6.2.6.3 1.1.6 1.6.9 6.8 3.6 13.6 7.4 20.5 11 6.8 3.6 13.6 7 20.4 11h0c45.3 24 90.6 47.7 135.9 71.6.1 0 .2 0 .3 0 .1 0 .2 0 .2.1.2.1.3.1.5.2 1.3.7 2.5 1.3 3.8 2 5.2 2.8 10.3 5.6 15.6 8.4 0 0 0 0 0 0C235.7 727.3 235.8 727.4 236 727.4L236 727.4zM490 616v219.2c-25 13.3-50.3 26.6-75.5 39.9-45.2 23.9-89.5 47.7-135.5 71.6V727.3c0-.2.7-.3 1-.5 2.5-1.3 5-2.6 7.4-3.9 19-10.1 38.1-20.1 57.1-30.2 24.5-12.9 49-25.9 73.4-38.8 9-4.8 18-9.5 27.1-14.2 2.2-1.1 4.3-2.3 6.5-3.4 10.3-5.4 20.5-10.7 30.8-16.2C485 618.7 488 617.4 490 616zM465 579.7L465 579.7c-16 9-33.6 18-50.6 26.9-45.6 24.1-91.1 48.2-136.7 72.4-3.4 1.8-6.7 3.6-10.1 5.4-3.4 1.8-6.8 3.6-10.2 5.4L182.2 650c-44.3-23.4-88.5-46.8-132.7-70.2 17-9 33.9-17.9 50.9-26.9 45.6-24.1 91.2-48.1 136.8-72.2 6.8-3.6 13.6-7.7 20.4-10.7h0c6.3 3 12.5 6.5 18.8 9.8 18.8 10 37.4 19.8 56.2 29.8C376.8 533 421 556.3 465 579.7zM745 727.4v219.2c-19-9.4-35.9-18.9-53.8-28.3-45.6-24.1-91.1-48.2-136.7-72.2-6.9-3.6-13.5-7.3-20.5-10.9V615.6c18 9.6 36.2 19.2 54.4 28.9 45.6 24.1 91.2 48.3 136.9 72.4 1.3.7 2.5 1.3 3.8 2C734.4 721.7 739 724.6 745 727.4zM999.1 616.1c-20.4 10.8-40.9 21.4-61.4 32.2-.1.1-.2.1-.3.2-1.5.8-2.9 1.5-4.4 2.3-1.5.8-2.9 1.5-4.3 2.3-.5.3-1.1.6-1.6.8.3-.1.5-.3.8-.4-.1.1-.3.1-.4.2-.1.1-.3.1-.4.2-43.5 23-87 45.9-130.4 68.9-.3.2-.7.3-1 .5-2.3 1.3-4.5 2.5-7.3 3.8 0 0-.1-.1-.1-.1H788v219.6c46-23.8 90.3-47.7 135.5-71.6 25.2-13.3 50.5-26.6 75.5-39.9L999.1 616.1C999 616.1 999.1 616.1 999.1 616.1zM788.3 727.2c2.4-1.3 4.8-2.6 7.3-3.8C793.2 724.7 791.1 726 788.3 727.2zM974.6 579.8c-17 9-33.9 17.9-50.9 26.9-45.6 24.1-91.2 48.2-136.8 72.3-2.5 1.3-5.1 2.7-7.6 4-.1 0-.2.1-.2.1-2.7 1.4-5.4 2.9-8.2 4.4-1.5.8-2.9 1.4-4.3 2.4h0c-25.1-14-50.2-26.7-75.4-40-22.1-11.7-44.3-23.5-66.4-35.2-11.1-5.9-22.1-11.7-33.2-17.5-2.8-1.5-5.5-2.9-8.3-4.4-8.3-4.4-16.5-8.8-24.8-13.2 16.9-8.9 33.9-17.9 50.8-26.8 45.6-24.1 91.2-48.2 136.9-72.3 6.8-3.6 13.6-7.2 20.4-10.8 25.1 13.3 50.2 26.6 75.3 39.8C886.1 533 930.3 556.4 974.6 579.8z" />
                            </svg>

                            View Order</Link>

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


</div>

            </main>
        </>
    )
}

export default Dashboard