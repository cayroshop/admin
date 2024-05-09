import React, { useState, useEffect } from 'react';
import axios from 'axios';
import axiosInstance from '../../../axiosInstance'; import Swal from 'sweetalert2'; // Import SweetAlert2
import withReactContent from 'sweetalert2-react-content'; // Import React components for SweetAlert2

import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import LoadingTable from '../../components/LoadingTable';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";


const MySwal = withReactContent(Swal); // Create a SweetAlert2 instance with React components


function AllCategory() {
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
      const response = await axiosInstance.get(`/admin/all-category-fillter?page=${currentPage}&limit=${limit}&search=${searchTerm}`);
      setData(response.data.Category);
      setEmployees(response.data.Category); // Use response.data directly
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


  const copyUrl = (id) => {
    const url = `/category/${id}`;
    // Copying URL to clipboard
    navigator.clipboard.writeText(url)
      .then(() => {
        console.log('URL copied to clipboard:', url);
        toast.success("Category URL copied successfully!");
      })
      .catch((error) => {
        toast.error("Category URL copied Failed!");
        console.error('Failed to copy URL to clipboard:', error);
        // Handle errors here
      });
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


        axiosInstance.delete(`/admin/delete-category/${categoryId}`)
          .then(() => {
            // Refresh the data or update the state after successful deletion
            fetchData();
            toast.success("Deleting Category success!");
          })
          .catch((error) => {
            console.error('Error deleting data:', error);
            toast.error("Error deleting data");
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
                <Link to="/dashboard">Admin</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                All Category
              </li>
            </ol>
          </nav>

          <div className="d-flex justify-content-between w-100 flex-wrap">
            <div className="mb-3 mb-lg-0">
              <h1 className="h4"> All Category</h1>
            </div>
            <div>
              <Link
                to="/add-category"
                id="goBackButton"
                className="btn btn-primary d-inline-flex align-items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="arcs"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                Add category
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
                      <th>Slug</th>
                      <th>Copy Url</th>
                      <th>Action</th>

                    </tr>
                  </thead>
                  <tbody>
                    {data.map((row) => (
                      <tr key={row._id}>
                        <td>
                          <span
                            style={{
                              display: "table-cell",
                              WebkitLineClamp: 1,
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              maxWidth: 100,
                              height: 10,
                              whiteSpace: "nowrap"
                            }}
                          >  {row._id} </span>
                          <span class={`badge ${row.status === 'true' ? 'bg-success' : 'bg-danger'} font-small px-2 py-1 text-white-800 ms-2 fw-bold`}> {row.status === 'true' ? 'Active' : 'inactive'} </span>

                        </td>
                        <td>{row.title}</td>
                        <td>{row.slug}</td>
                        <td>    <button
                          className="btn btn-primary"
                          onClick={() => copyUrl(row._id)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={25}
                            height={25}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#ffffff"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                            <rect x={8} y={2} width={8} height={4} rx={1} ry={1} />
                          </svg>

                        </button> </td>
                        <td>
                          <Link to={`/edit-category/${row._id}`} className="btn btn-primary me-2">
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

export default AllCategory;
