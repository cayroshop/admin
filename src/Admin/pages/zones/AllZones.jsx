import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'; // Import SweetAlert2
import withReactContent from 'sweetalert2-react-content'; // Import React components for SweetAlert2

import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import LoadingTable from '../../components/LoadingTable';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";
import axiosInstance from '../../../axiosInstance';

const MySwal = withReactContent(Swal); // Create a SweetAlert2 instance with React components


function AllZones() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [employees, setEmployees] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limit, setlimit] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(`/admin/all-zones?page=${currentPage}&limit=${limit}&search=${searchTerm}`);
      setData(response.data.zones);
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


        axiosInstance.delete(`/admin/delete-zones/${categoryId}`)
          .then(() => {
            // Refresh the data or update the state after successful deletion
            fetchData();
            toast.success("Deleting zones success!");
          })
          .catch((error) => {
            console.error('Error zones data:', error);
            toast.error("Error zones data");
          });
      }
    });
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
              <h1 className="h4"> All Zones</h1>
            </div>
            <div>
              <Link
                to="/add-zones"
                id="goBackButton"
                className="btn btn-primary d-inline-flex align-items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="arcs"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                Add Zones
              </Link>
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
                      <th>Name</th>
                      <th>Status</th>
                      <th>Action</th>

                    </tr>
                  </thead>
                  <tbody>
                    {data.map((row) => (
                      <tr key={row._id}>
                        <td>{row._id}</td>
                        <td>{row.name} {row.primary === 'true' && (<span class={`badge bg-success font-small px-2 py-1 text-white-800 ms-2 fw-bold`}> primary </span>)}</td>
                        <td> <span class={`badge ${row.status === 'true' ? 'bg-success' : 'bg-danger'} bg-success font-small px-2 py-1 text-white-800 ms-2 fw-bold`}> {row.status === 'true' ? 'Active' : 'inactive'} </span> </td>
                        <td>
                          <Link to={`/edit-zones/${row._id}`} className="btn btn-primary me-2">
                            Edit
                          </Link>
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

export default AllZones;
