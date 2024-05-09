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
import Papa from 'papaparse';



const MySwal = withReactContent(Swal); // Create a SweetAlert2 instance with React components


function AllProduct() {

  const [file, setFile] = useState(null);

  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limit, setlimit] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [isImport, setisImport] = useState(false);


  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(`/admin/all-product-fillter?page=${currentPage}&limit=${limit}&search=${searchTerm}`);
      setData(response.data.Product);
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


  const ExportData = async () => {
    try {
      const response = await axiosInstance.get(`/admin/export/allproducts/`, { responseType: 'blob' });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'exported_data.csv');
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    } catch (error) {
      console.error('Error exporting data:', error);
      toast.error('Error exporting data:', error);
    }

  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };


  const handleImport = async () => {
    if (!file) {
      toast.error('Please select a file to import');
      return;
    }


    const reader = new FileReader();

    // Handle errors that might occur during file reading
    reader.onerror = () => {
      toast.error('Error reading the file');
    };

    reader.onload = async () => {
      const csvData = reader.result;

      // Check if the file is empty
      if (!csvData || csvData.length === 0) {
        toast.error('The selected file is empty');
        return;
      }

      const { data } = Papa.parse(csvData, { header: true });

      try {

        setisImport(true);

        const formattedData = data.map(row => {
          // Ensure that the properties exist before accessing them
          const formattedRow = {
            p_id: row.p_id,
            title: row.title,
            description: row.description,
            pImage: row.pImage,
            slug: row.slug,
            regularPrice: parseFloat(row.regularPrice),
            salePrice: parseFloat(row.salePrice),
            status: row.status,
            stock: parseInt(row.stock),
            weight: row.weight,
            gst: row.gst,
            hsn: row.gst,
            sku: row.sku,
            metaTitle: row.metaTitle,
            metaDescription: row.metaDescription,
            metaKeywords: row.metaKeywords,
          };

          // Check if the 'images' property exists before splitting it
          if (row.images) {
            formattedRow.images = JSON.parse(row.images);
          }
          // Check if the 'category' property exists before splitting it
          if (row.category) {
            formattedRow.Category = row.category.split(',');
          }
          console.log('formattedData', formattedRow)

          return formattedRow;
        });

        const response = await axiosInstance.post(`/admin/import/allproducts`, formattedData);

        if (response.data.success) {
          toast.success('Products imported successfully!');
          console.log('Response:', response.data);
          setisImport(false);
        } else {
          toast.error('Error importing products:', response.data.message);
        }


      } catch (error) {
        console.error('Error importing data:', error);
        toast.error('Error importing products:', error.message);
      }
    };

    reader.readAsText(file);
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
  const handleDelete = (dataId) => {
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


        axiosInstance.delete(`/admin/delete-product/${dataId}`)
          .then(() => {
            // Refresh the data or update the state after successful deletion
            fetchData();
            toast.success("Deleting Product success!");
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

        {isImport && (
          <>
            <div
              className=""
              style={{
                width: "100%",
                borderRadius: 5,
                margin: 0,
                height: "100%",
                position: "absolute",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 99999,
                background: '#ffffff8f',
                left: 0,
                top: 0,
                color: "white",
                fontSize: "20em"
              }}
            >
              <div class="loading_icon"></div>
            </div>

          </>)}


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
                All Product
              </li>
            </ol>
          </nav>


          <div className="d-flex justify-content-between w-100 flex-wrap">
            <div className="mb-3 mb-lg-0">
              <h1 className="h4"> All Product</h1>
            </div>
            <div>

              <div className="btn-toolbar mb-2 mb-md-0">
                <Link
                  to="/add-product"
                  className="btn btn-sm btn-gray-800 d-inline-flex align-items-center"
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
                  </svg>{" "}
                  Add Product
                </Link>
                <div className="btn-group ms-2 ms-lg-3">
                  <button type="button" className="btn btn-sm btn-outline-gray-600" data-bs-toggle="modal"
                    data-bs-target="#modal-upload" >
                    Import
                  </button>{" "}
                  <button type="button" onClick={ExportData} className="btn btn-sm btn-outline-gray-600">
                    Export
                  </button>
                </div>
              </div>



            </div>
          </div>

        </div>



        <div
          className="modal fade"
          id="modal-upload"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modal-upload"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">

              <div className="modal-body">

                <div id="uploadData">
                  <div className="uploadbox">
                    <svg
                      className="dropdown-icon text-gray-400 me-2"
                      width={40}
                      height={40}
                      fill="black"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* SVG path content */}
                    </svg>
                    <span id="filname"> Drag And Drop Or Select CSV File </span>
                    <input
                      type="file"
                      id="file"
                      accept=".csv"
                      onChange={handleFileChange}
                      name='file'
                    />
                  </div>


                </div>

              </div>
              <div className="modal-footer">

                <button
                  id="uploadButton"
                  className="btn btn-gray-800 mt-2 animate-up-2"
                  onClick={handleImport} type="button"
                >
                  Upload
                </button>



                <button
                  type="button"
                  className="btn btn-gray-300 ms-auto"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
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
                      <th>Action</th>

                    </tr>
                  </thead>
                  <tbody>
                    {data.map((row) => (
                      <tr key={row._id}>
                        <td> <span>  {row.p_id} </span> <span class={`badge ${row.status === 'true' ? 'bg-success' : 'bg-danger'} font-small px-2 py-1 text-white-800 ms-2 fw-bold`}> {row.status === 'true' ? 'Active' : 'inactive'} </span>  </td>
                        <td>{row.title}</td>
                        <td>{row.slug}</td>
                        <td>
                          <Link to={`/edit-product/${row._id}`} className="btn btn-primary me-2">
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


export default AllProduct;
