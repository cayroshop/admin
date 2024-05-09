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


function AllReview() {
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
      const response = await axiosInstance.get(`/admin/all-review?page=${currentPage}&limit=${limit}&search=${searchTerm}`);
      setData(response.data.Rating || []);
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


        axiosInstance.delete(`/admin/delete-rating/${categoryId}`)
          .then(() => {
            // Refresh the data or update the state after successful deletion
            fetchData();
            toast.success("Deleting Rating success!");
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
      await axiosInstance.put(`/admin/update-rating/${ratingId}`, { status: newStatus });
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
              <h1 className="h4"> All Reviews</h1>
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
                        placeholder="Search..." value={searchTerm}
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
                      <th>ID</th>
                      <th>User Detail</th>
                      <th>Product Detail</th>
                      <th>Comment</th>
                      <th>Action</th>

                    </tr>
                  </thead>
                  <tbody>
                    {data.map((row) => (
                      <tr key={row._id}>
                        <td>{row._id}</td>
                        <td> <div style={{ whiteSpace: "break-spaces", maxWidth: 200 }} ><b> Name:</b>{row.userId?.username || ''} <br /><b>userId:</b>{row.userId?._id || ''}  </div></td>
                        <td>  <div style={{ whiteSpace: "break-spaces", maxWidth: 200 }} ><b> Product Name:</b>{row.productId?.title || ''}<br /> <Link class="badge badge-md bg-secondary ms-1 text-gray-800" target="_blank" to={`/product/${row.productId?._id || ''}`}> View Product</Link>
                          {/* <b>Product Id:</b>{row.productId._id}   */}
                        </div></td>
                        <td  > <div style={{ whiteSpace: "break-spaces", maxWidth: 200 }} >{row.comment} </div></td>

                        <td>

                          <select style={{ width: "fit-content" }}
                            className={`form-control select ${row.status == 0 ? "btn-primary" : "text-white btn-success"}`}
                            value={row.status} name="status" onChange={handleStatusChange(row._id)}>
                            <option value="1">Show</option>
                            <option value="0">Hide</option>
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

export default AllReview;
