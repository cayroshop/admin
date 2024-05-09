import React, { useState, useEffect } from 'react';
import axios from 'axios';
import axiosInstance from '../../../axiosInstance';
import Swal from 'sweetalert2'; // Import SweetAlert2
import withReactContent from 'sweetalert2-react-content'; // Import React components for SweetAlert2

import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import LoadingTable from '../../components/LoadingTable';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";


const MySwal = withReactContent(Swal); // Create a SweetAlert2 instance with React components


function CompleteOrder() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [limit, setlimit] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await axiosInstance.get(`/admin/all-order?page=${currentPage}&limit=${limit}&search=${searchTerm}&status=5`);
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

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };


    // Function to handle delete
    const handleDelete = (categoryId) => {
        MySwal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this data!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true,
            customClass: {
                popup: 'custom-swal-popup', // Add a class to the entire dialog
                confirmButton: 'btn-danger', // Add a class to the confirm button
            },
        }).then((result) => {
            if (result.isConfirmed) {


                axiosInstance.delete(`/admin/delete-order/${categoryId}`)
                    .then(() => {
                        // Refresh the data or update the state after successful deletion
                        fetchData();
                        toast.success("Deleting Order success!");
                    })
                    .catch((error) => {
                        console.error('Error deleting data:', error);
                        toast.error("Error deleting data");
                    });
            }
        });
    };


    const handleStatusChange = (ratingId) => async (event) => {
        const newStatus = event.target.value;
        setLoading(true);

        try {
            await axiosInstance.put(`/admin/update-order/${ratingId}`, { status: newStatus });
            setLoading(false);
            fetchData(currentPage);
            toast.success("Status Updated success!");
        } catch (error) {
            console.error('Error updating rating status:', error);
            setLoading(false);
        }

    };



    const inputRef = React.createRef();

    const handleSearchInputChange = (e) => {
        setCurrentPage(1);
        setTotalPages(1)
        setSearchTerm(e.target.value);


    };

    const handleSearch = () => {
        fetchData(currentPage);

    };

    return (
        <>
            <Sidebar />
            <main className="content">
                <Navbar />
                <div className="py-4">


                    <div className="d-flex justify-content-between w-100 flex-wrap">
                        <div className="mb-3 mb-lg-0">
                            <h1 className="h4"> Completed Orders</h1>
                        </div>

                    </div>
                </div>


                <div className="card">
                    <div className="table-responsive py-4">

                        {loading ? (
                            <LoadingTable />
                        ) : (
                            <>


                                <div className="datatable-top">
                                    <div className="datatable-dropdown">
                                        <label>
                                            <select className="datatable-selector" value={limit} onChange={(e) => {
                                                setlimit(parseInt(e.target.value, 10));
                                                setCurrentPage(1); // Reset current page to 1 when the limit changes
                                            }} >
                                                <option value={5}>5</option>
                                                <option value={10} >
                                                    10
                                                </option>
                                                <option value={15}>15</option>
                                                <option value={20}>20</option>
                                                <option value={25}>25</option>
                                            </select>{" "}

                                            entries per page
                                        </label>
                                    </div>
                                    <div className="d-flex align-items-center gap-2">
                                        <div className="datatable-search">
                                            <input
                                                className="datatable-input"
                                                type="text"
                                                placeholder="Search...(By Order ID)" value={searchTerm}
                                                onChange={handleSearchInputChange}
                                            />
                                        </div>
                                        <button className="btn btn-primary" onClick={handleSearch}> Search
                                        </button>

                                    </div>
                                </div>




                                <table className="table table-flush">
                                    <thead>
                                        <tr>
                                            <th>Order ID</th>
                                            <th>User Detail</th>
                                            <th>Order Detail</th>
                                            <th>Product Status</th>
                                            <th>Payment Mode</th>
                                            <th>Action</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.length !== 0 && data.map((row) => (
                                            <tr key={row._id}>
                                                <td>{row.orderId}</td>
                                                <td> <div style={{ whiteSpace: "break-spaces", maxWidth: 200 }} >
                                                    <b>Name:</b> {row.userId[0].username} <br />
                                                    <b>userId:</b><br /> {row.userId[0]._id}
                                                </div></td>
                                                <td>
                                                    <Link class="btn btn-secondary" to={`/order/${row.userId[0]._id}/${row._id}`}>
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
                                                </td>
                                                <td>
                                                    {
                                                        row.status === '0' ? (<> <span className="badge rounded-pill bg-danger px-3 py-2">Cancel</span><span className='d-block'>
                                                            <b>Reason: </b> {row.reason ? row.reason : 'NA'} </span><span className='d-block'>
                                                                <b>Comment: </b> {row.comment ? row.comment : 'NA'} </span> </>) :
                                                            row.status === '1' ? (<> <span className="badge rounded-pill bg-warning px-3 py-2">Placed</span> </>) :
                                                                row.status === '2' ? (<><span className="badge rounded-pill bg-info px-3 py-2">Accepted</span> </>) :
                                                                    row.status === '3' ? (<><span className="badge rounded-pill bg-info px-3 py-2">Packed</span> </>) :
                                                                        row.status === '4' ? (<> <span className="badge rounded-pill bg-info px-3 py-2"  >Shipped</span> </>) :
                                                                            row.status === '5' ? (<> <span className="badge rounded-pill bg-success">Delivered</span> </>) :
                                                                                (<> <span className="badge rounded-pill bg-danger px-3 py-2">Unknown</span> </>)
                                                    }

                                                </td>
                                                <td  > <div style={{ whiteSpace: "break-spaces", maxWidth: 200 }} >{row.mode} </div></td>


                                                <td>

                                                    <select style={{ width: "fit-content" }} className={`form-control select`} value={row.status} name="status" onChange={handleStatusChange(row._id)}>
                                                        <option value="0">Cancel</option>
                                                        <option value="1">Placed</option>
                                                        <option value="2">Accepted</option>
                                                        <option value="3">Packed</option>
                                                        <option value="4">Shipped</option>
                                                        <option value="5">Delivered</option>
                                                    </select>

                                                    <br />
                                                    <button
                                                        className="btn btn-danger"
                                                        onClick={() => handleDelete(row._id)}
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                                <div className="datatable-bottom">
                                    <div className="datatable-info">  </div>
                                    <nav className="datatable-pagination">
                                        <ul class="datatable-pagination-list">

                                            <li className={`datatable-pagination-list-item ${currentPage === 1 ? 'datatable-hidden' : 'datatable-active'}`}>
                                                <button data-page="1" class="datatable-pagination-list-item-link" onClick={handlePreviousPage} disabled={loading || currentPage === 1}
                                                    aria-label="Page 1">‹</button>
                                            </li>
                                            <li>
                                                <div className="datatable-info py-1 px-3">Showing  Page{' '}
                                                    <strong>
                                                        Showing Page  {currentPage} of {totalPages}

                                                    </strong>{' '} </div>
                                            </li>
                                            <li className={`datatable-pagination-list-item ${currentPage === totalPages ? 'datatable-hidden' : 'datatable-active'}`}>
                                                <button data-page="2" class="datatable-pagination-list-item-link" aria-label="Page 2" onClick={handleNextPage} disabled={loading || currentPage === totalPages}
                                                >  {loading ? 'Loading...' : '›'} </button>
                                            </li>
                                        </ul></nav>
                                </div>



                            </>
                        )}
                    </div>
                </div>
            </main>
        </>
    );
}

export default CompleteOrder;
