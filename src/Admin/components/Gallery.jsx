import React, { useState, useEffect, useContext, Component } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";
import axios from 'axios';
import { triggerChooseimg } from './ChooseImg';
import $ from 'jquery';
import axiosInstance, { weburl } from '../../axiosInstance';
import Swal from 'sweetalert2'; // Import SweetAlert2
import withReactContent from 'sweetalert2-react-content'; // Import React components for SweetAlert2

const MySwal = withReactContent(Swal); // Create a SweetAlert2 instance with React components


const Gallery = () => {

  const [uploadProgress, setUploadProgress] = useState(0); // Initialize uploadProgress state variable


  const navigate = useNavigate();

  const [file, setFile] = useState(null);
  const [files, setFiles] = useState([]); // Define files state variable to store multiple files
  const [title, setTitle] = useState('');
  const [gallery, setGallery] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [setFolderSubmit, setFolderSubmitLoading] = useState(true); // Add loading state
  const [Folder, setFolder] = useState([]);
  const [foldermeta, setFoldermeta] = useState([]);
  const [folderback, setFolderback] = useState('');
  const [isGallery, setGalleryLoading] = useState(true);
  const [isImageGallery, setImageGalleryLoading] = useState(true);



  const [formFolderData, setFolderFormData] = useState({
    _id: "",
    name: "",
    folderId: [],
  });



  const [formData, setFormData] = useState({
    name: "",
    folderId: [],
  });

  const [formUpdateData, setFormUpdateData] = useState({
    name: "",
    folderId: [],
  });




  const getGallery = async (id) => {
    setIsLoading(true);  

    try {
      let data;
      if (id) {
        ({ data } = await axiosInstance.get(`/admin/get-image?id=${id}`));
      } else {
        ({ data } = await axiosInstance.get('/admin/get-image'));
      }

      if (data?.success) {
        setGallery(data.Gallery.reverse());


      }
      setIsLoading(false); 

    } catch (error) {
      console.log(error);
      toast.error("Error fetching Gallery!");
      setIsLoading(false); 
    } finally {

      setTimeout(function () { triggerChooseimg(); }, 100);

    }

  };

  const handleDeleteClick = async (imageId) => {

    MySwal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this Image!',
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

        axiosInstance.delete(`/admin/delete-gallery/${imageId}`)
          .then(() => {
            toast.success("Image Deleted successfully!");
            refreshImage();
          })
          .catch((error) => {
            console.error('Error deleting Image:', error);
            toast.error("Error deleting Image");
          });
      }
    });


  }



  const Getfolder = async () => {
    setGalleryLoading(true);
    try {
      const { data } = await axiosInstance.get(`/admin/get-Folder`);
      console.log("Getfolder", data);
      setFolder(data.Folder.reverse());

    } catch (error) {
      console.error("Error fetching rating:", error);
    } finally {
      setGalleryLoading(false);
      setTimeout(function () { triggerChooseimg(); }, 100);
    }
  };



  useEffect(() => {

    Getfolder();

    getGallery();


  }, []);


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleUpdateChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFolderFormData((prevData) => ({ ...prevData, [name]: type === 'checkbox' ? checked : value }));
  };



  const GetFolderOpenById = async (id) => {

    let data;  

    try {

      setGalleryLoading(true);

      if (id == 'null') {
        getGallery();
        ({ data } = await axiosInstance.get(`/admin/get-folder`));  
      } else {
        getGallery(id);
        ({ data } = await axiosInstance.get(`/admin/get-folder?id=${id}`));  

      }



      console.log("idId", id);

      console.log("GetFolderOpenById", data);
      if (data.parentFolder) {

        let updatedFolders = [...foldermeta];

        const indexToRemove = updatedFolders.findIndex(folder => folder.id === data.parentFolder._id);

        if (indexToRemove !== -1) {
 
          updatedFolders.splice(indexToRemove);
        }


        updatedFolders.push({
          folder: data.parentFolder.name,
          id: data.parentFolder._id
        });


        setFoldermeta(updatedFolders);


        const secondLastIndex = updatedFolders.length - 2;

        const secondLastFolder = updatedFolders[secondLastIndex];
        console.log("Second to last folder:", secondLastFolder);
        setFolderback(secondLastFolder?.id || 'null');

        setFormData({
          ...formData,
          folderId: data.parentFolder._id,
        });

      } else {
        setFolderback(null);
        setFoldermeta([]);

        setFormData({
          ...formData,
          folderId: '',
        });


      }


      setFolder(data.Folder.reverse());

    } catch (error) {
      console.error("Error fetching rating:", error);
    } finally {
      setGalleryLoading(false);
      setTimeout(function () { triggerChooseimg(); }, 100);
    }
  }


  const GetFolderById = async (id) => {
    setFolderFormData({
      ...formFolderData,
      _id: '',
      name: '',
      folderId: [],
    });
    try {
      const { data } = await axiosInstance.get(`/admin/get-folder/${id}`);
      console.log("GetfolderId", data);

      setFolderFormData({
        ...formFolderData,
        name: data.folder.name || '',
        _id: data.folder._id || '',
        folderId: data.folder.folderId,
      });

    } catch (error) {
      console.error("Error fetching rating:", error);
    }


  }



  const DeleteFolderById = async (id) => {

    MySwal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this Folder!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true,
      customClass: {
        popup: 'custom-swal-popup',  
        confirmButton: 'btn-danger',  
      },
    }).then((result) => {
      if (result.isConfirmed) {

        setFolderFormData({
          ...formFolderData,
          _id: '',
          name: '',
          folderId: [],
        });

        axiosInstance.delete(`/admin/delete-folder/${id}`)
          .then(() => {
            toast.success("Delete Folder successfully!");
            refreshFolder();
          })
          .catch((error) => {
            console.error('Error deleting Folder:', error);
            toast.error('Error Delete Folder!');
          });
      }
    });

  }



  const getFolderClear = async () => {
    setFolderFormData({
      ...formFolderData,
      name: '',
      folderId: '',
    });

  }


  const UpdateFolder = async (id) => {
    setFolderSubmitLoading(false);

    try {
      const admintoken = localStorage.getItem('adminToken');
      if (admintoken) {
        await axiosInstance.put(`/admin/update-folder/${id}`, formFolderData);
        toast.success('Update Folder successfully!');
        console.log(formFolderData)
        setFolderFormData({
          ...formFolderData,
          name: '',
          folderId: '',
        });

        refreshFolder();

      }


    } catch (error) {
      console.error('Error On Folder:', error);
      console.log(formData);
      toast.error(error.response.data.message);
    } finally {
      setFolderSubmitLoading(true);
    }


  }

  const refreshFolder = async () => {
    if (formData.folderId) {
      GetFolderOpenById(formData.folderId);
      setTimeout(function () { triggerChooseimg(); }, 100);

    }
    else {
      Getfolder();
      setTimeout(function () { triggerChooseimg(); }, 100);

    }
  }

  const refreshImage = async () => {
    if (formData.folderId) {
      getGallery(formData.folderId)
    }
    else {
      await getGallery();
      triggerChooseimg();
    }
  }

  const AddFolder = async () => {
    setFolderSubmitLoading(false);

    // const updatedFormData = {
    //   ...formData,
    //   value: inputValues,
    //   color: inputColorValues,
    // };

    // console.log(formData)
    try {
      const admintoken = localStorage.getItem('adminToken');
      if (admintoken) {
        await axiosInstance.post(`/admin/add-folder?id=${formData.folderId}`, formData);
        toast.success('Add Folder successfully!');

        setFormData({
          ...formData,
          name: '',
        });

        refreshFolder();

      }


    } catch (error) {
      console.error('Error On Folder:', error);
      console.log(formData);
      toast.error(error.response.data.message);
    } finally {
      setFolderSubmitLoading(true);
    }

  };



  const handleFileChange = (event) => {
 
    const selectedFiles = event.target.files;
    setFiles(selectedFiles); 
    setTitle(event.target.value);
    handleUpload(selectedFiles);  
  };

  const handleUpload = async (files) => {
    setImageGalleryLoading(false);
    try {
      const formImageDataArray = [];  

 
      for (let i = 0; i < files.length; i++) {
        const file = files[i];

        const formImageData = new FormData();
        formImageData.append('image', file);
        formImageData.append('title', title);  

        formImageDataArray.push(formImageData);  
      }

      const imageInput = document.getElementById('imageInput');
      const uploadbox = document.querySelector('.uploadbox');
      const fileNameDisplay = document.getElementById('filname');

      if (files.length > 0) { 

        await Promise.all(formImageDataArray.map(formImageData =>
          axiosInstance.post(`/admin/upload-img?id=${formData.folderId}`, formImageData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
            onUploadProgress: (progressEvent) => {
              const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
              console.log(`Upload Progress: ${progress}%`);
              
              setUploadProgress(progress);  
            }
          })
        ));


        console.log('Images uploaded successfully!');
        toast.success("Images uploaded successfully!");
        imageInput.value = ''; 
        uploadbox.classList.remove('active');
        fileNameDisplay.textContent = ' Drag And Drop Or Select File ';

        refreshImage();
      } else {
        toast.error("Please Choose Image");
      }
    } catch (error) {

      console.error('Error uploading images:', error);
      toast.error("Error uploading images!");
    } finally {
      setImageGalleryLoading(true);
    }
  };


  return (
    <>

      <div
        className="modal fade"
        id="modal-default"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modal-default"
        aria-hidden="true"
      >

        <div
          className="modal-dialog modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="h6 modal-title">Gallery</h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div id="gallery" className="row">

                {isLoading ? (
                  Array.from({ length: 8 }).map((_, index) => (
                    <div className="col-md-6 col-lg-3" key={index}>

                      <div className="blog-entry mb-4">
                        <div className="skeleton mb-3" style={{ minHeight: 100, borderRadius: 5 }}>

                        </div>
                      </div>

                    </div>
                  ))
                ) :
                  (<>


                    <div className="col-6 col-lg-3 col-xl-3 col-xxl-3 mb-3" data-bs-toggle="modal"
                      data-bs-target="#modal-Folder" >
                      <div className="folderopen" style={{ background: '#e0e0e026' }}  >



                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" style={{ background: 'transparent' }} className="addfolder">
                          <path
                            fill="#FFB63A"
                            d="M0 24.11v-12.5a3.15 3.15 0 0 1 3.15-3.15H16.2l8.41 6.29H52.8c2.23 0 4.04 1.81 4.04 4.04v5.32"
                          />
                          <path
                            fill="#FFD352"
                            d="M53.35 56.65H3.49C1.56 56.65 0 55.09 0 53.16V23.73c0-1.93 1.56-3.49 3.49-3.49h49.87c1.93 0 3.49 1.56 3.49 3.49v29.43a3.502 3.502 0 0 1-3.5 3.49z"
                          />
                          <circle cx="52.29" cy="19.06" r="11.71" fill="#1AB999" />
                          <path
                            fill="#F2F5F4"
                            d="M58.92 17.81h-5.37v-5.37a1.25 1.25 0 0 0-2.5 0v5.37h-5.37a1.25 1.25 0 0 0 0 2.5h5.37v5.37a1.25 1.25 0 0 0 2.5 0v-5.37h5.37a1.25 1.25 0 0 0 0-2.5z"
                          />
                        </svg>

                        <h4> Add Folder </h4>

                      </div>

                    </div>


                    <div className="col-6 col-lg-3 col-xl-3 col-xxl-3 mb-3" data-bs-toggle="modal"
                      data-bs-target="#modal-upload"  >
                      <div className="folderopen" style={{ background: '#e0e0e026' }}  >



                        <svg className="addfolder" style={{ background: 'transparent' }}
                          xmlns="http://www.w3.org/2000/svg"
                          enableBackground="new 0 0 48 48"
                          viewBox="0 0 48 48"
                        >
                          <rect width={38} height={30} x={5} y={9} fill="#90a4ae" />
                          <rect width={34} height={26} x={7} y={11} fill="#fff" />
                          <rect width={30} height={14} x={9} y={13} fill="#4fc3f7" />
                          <polygon fill="#b3e5fc" points="9 27 39 27 39 22 9 21" />
                          <rect width={30} height={5} x={9} y={30} fill="#1976d2" />
                          <circle cx={35} cy={22} r={3} fill="#b3e5fc" />
                          <circle cx={31} cy={21} r={3} fill="#b3e5fc" />
                          <circle cx={24} cy={21} r={2} fill="#b3e5fc" />
                          <circle cx={27} cy={21} r={2} fill="#b3e5fc" />
                          <circle cx={11} cy={21} r={2} fill="#b3e5fc" />
                          <circle cx={13} cy={20} r={2} fill="#b3e5fc" />
                          <circle cx={21} cy={20} r={3} fill="#b3e5fc" />
                          <circle cx={17} cy={21} r={3} fill="#b3e5fc" />
                          <circle cx={37} cy={22} r={2} fill="#b3e5fc" />
                          <polygon
                            fill="#0d47a1"
                            points="9 30 39 30 39 27 36 27 31 25 26 27 18 21 9 27"
                          />
                          <circle cx={39} cy={39} r={9} fill="#4caf50" />
                          <rect width={2} height={10} x={38} y={34} fill="#fdfdfd" />
                          <rect
                            width={2}
                            height={10}
                            x={38}
                            y={34}
                            fill="#fdfdfd"
                            transform="rotate(90 39 39)"
                          />
                        </svg>


                        <h4> Add Image </h4>

                      </div>

                    </div>


                    {folderback && (
                      <>
                        <div className="col-6 col-lg-3 col-xl-3 col-xxl-3 mb-3 "   >
                          <div class="folderopen" style={{ background: '#e0e0e026' }} onClick={() => GetFolderOpenById(folderback)} myid={folderback} >

                            <svg
                              className="addfolder"
                              fill="#1f2937"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 60 60"
                              style={{ background: "transparent" }}
                              enableBackground="new 0 0 60 60"
                            >
                              <path
                                fill="#3773b5"
                                d="M46.37,20.77v5.46c-0.33-0.03-0.66-0.05-1-0.05c-6.41,0-11.62,5.21-11.62,11.62c0,2.49,0.79,4.79,2.13,6.68
 H7.57C6.15,44.48,5,43.33,5,41.91V15.15c0-1.42,1.15-2.58,2.57-2.58h14.31c1.2,0,2.29,0.72,2.77,1.82l1.4,3.18
 c0.16,0.38,0.53,0.62,0.94,0.62H43.8C45.22,18.19,46.37,19.35,46.37,20.77z"
                                style={{ fill: "#ffb63a" }}
                              />
                              <path
                                fill="#44464a"
                                d="M45.37,28.18c-5.3,0-9.62,4.32-9.62,9.62c0,5.31,4.32,9.63,9.62,9.63c5.31,0,9.63-4.32,9.63-9.63
 C55,32.5,50.68,28.18,45.37,28.18z M48.61,37.16c-0.2,0.2-0.45,0.29-0.71,0.29s-0.51-0.1-0.71-0.29l-0.82-0.82v5.35
 c0,0.55-0.45,1-1,1s-1-0.45-1-1v-5.35l-0.82,0.82c-0.39,0.39-1.02,0.39-1.41,0s-0.39-1.02,0-1.41l2.53-2.53
 c0.09-0.09,0.2-0.17,0.33-0.22c0.24-0.1,0.52-0.1,0.76,0c0.12,0.05,0.23,0.12,0.33,0.22l2.53,2.53C49,36.14,49,36.77,48.61,37.16z"
                                style={{
                                  fill: "#1ab999",
                                  transform: "rotate(270deg) translate(-139%, 14%)"
                                }}
                              />
                            </svg>




                            <h4> Go Back </h4>
                          </div>
                        </div>

                      </>
                    )

                    }


                    {Folder.map(folder => (
                      <div className="col-6 col-lg-3 col-xl-3 col-xxl-3 mb-3 " key={folder._id}   >

                        <svg xmlns="http://www.w3.org/2000/svg" className="dropdown-icon text-secondary bg-black me-2 p-1" onClick={() => GetFolderById(folder._id)} data-bs-toggle="modal"
                          data-bs-target="#modal-Folder-update"
                          fill="currentColor" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="m9.376 20.028 8.787-11.363c.477-.612.647-1.32.488-2.042-.138-.656-.541-1.28-1.146-1.752L16.03 3.699c-1.284-1.021-2.876-.914-3.789.258l-.986 1.28a.378.378 0 0 0 .063.526l2.547 2.042c.17.162.297.377.33.635a.945.945 0 0 1-.818 1.042.846.846 0 0 1-.647-.182l-2.621-2.086a.313.313 0 0 0-.425.054L3.455 15.33c-.403.505-.541 1.161-.403 1.795l.796 3.451a.4.4 0 0 0 .392.312l3.502-.043a2.104 2.104 0 0 0 1.634-.817Zm4.904-1.075h5.71c.557 0 1.01.46 1.01 1.024 0 .565-.453 1.023-1.01 1.023h-5.71c-.557 0-1.01-.458-1.01-1.023s.453-1.024 1.01-1.024Z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <div class="folderopen" onClick={() => GetFolderOpenById(folder._id)}  >
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="addfolder" >
                            <path
                              fill="#FFB63A"
                              d="M0 24.11v-12.5a3.15 3.15 0 0 1 3.15-3.15H16.2l8.41 6.29H52.8c2.23 0 4.04 1.81 4.04 4.04v5.32"
                            />
                            <path
                              fill="#FFD352"
                              d="M53.35 56.65H3.49C1.56 56.65 0 55.09 0 53.16V23.73c0-1.93 1.56-3.49 3.49-3.49h49.87c1.93 0 3.49 1.56 3.49 3.49v29.43a3.502 3.502 0 0 1-3.5 3.49z"
                            />
                          </svg>
                          <h4> {folder.name}</h4>
                        </div>

                      </div>
                    ))}



                    {gallery.map(gallery => (


                      <div className="col-12 col-lg-6 col-xl-4 col-xxl-3 mb-3" key={gallery._id} >
                        <img
                          src={weburl + 'uploads/' + gallery.filePath}
                          imageid={gallery._id}

                          className="getimg"
                          title={gallery.title}
                          type={gallery.fileType}
                          size={gallery.fileSize}
                          dimensions={gallery.dimensions}
                          date={gallery.createdAt}
                          style={{ minHeight: 100, borderRadius: 5 }}
                          data-bs-dismiss="modal"
                        />

                      </div>



                    ))}



                  </>
                  )}


              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary">
                Choose
              </button>
              <button
                type="button"
                className="btn btn-link text-gray-600 ms-auto"
                data-bs-dismiss="modal"
              >
                Close
              </button>
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
                  <span id="filname"> Drag And Drop Or Select File </span>
                  <input
                    type="file"
                    id="imageInput"
                    accept=".jpg, .jpeg, .png, .pdf,.webp"
                    onChange={handleFileChange}
                    required=""
                    multiple
                  />
                </div>


              </div>

            </div>
            <div className="modal-footer">

              {setFolderSubmit ? (

                <button
                  id="uploadButton"
                  className="btn btn-gray-800 mt-2 animate-up-2"
                  onClick={handleUpload} type="button"
                >
                  Upload
                </button>

              ) : (

                <button class="btn btn-secondary btn-sm" type="button" disabled>
                  <span class="ms-1">Loading...</span>
                  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                </button>

              )}


              <button
                type="button"
                className="btn btn-gray-300 ms-auto"
                data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#modal-default"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="modal-Folder"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modal-Folder"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">

            <div className="modal-body">
              <div className="mb-0">
                <label htmlFor="eventTitle">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="me-1" viewBox="0 0 512 512">
                    <path d="M430.1 192H81.9c-17.7 0-18.6 9.2-17.6 20.5l13 183c.9 11.2 3.5 20.5 21.1 20.5h316.2c18 0 20.1-9.2 21.1-20.5l12.1-185.3c.9-11.2 0-18.2-17.7-18.2zM426.2 143.3c-.5-12.4-4.5-15.3-15.1-15.3H267.9c-21.8 0-24.4.3-40.9-17.4-13.7-14.8-8.3-14.6-36.6-14.6h-75.3c-17.4 0-23.6-1.5-25.2 16.6-1.5 16.7-5 57.2-5.5 63.4h343.4l-1.6-32.7z" />
                  </svg>
                  Folder Name</label>{" "}
                <input type="text" value={formData.name} className="form-control"
                  id="name"
                  name="name"
                  onChange={handleChange} />
              </div>

            </div>
            <div className="modal-footer">

              {setFolderSubmit ? (

                <button className="btn btn-secondary" type="button" data-bs-dismiss="modal" onClick={AddFolder} >
                  Add Folder
                </button>

              ) : (

                <button class="btn btn-secondary btn-sm" type="button" disabled>
                  <span class="ms-1">Loading...</span>
                  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                </button>

              )}


              <button
                type="button"
                className="btn btn-gray-300 ms-auto"
                data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#modal-default"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>


      <div
        className="modal fade"
        id="modal-Folder-update"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modal-Folder-update"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">

            <div className="modal-body">

              {!formFolderData.name ? (<>

                <p
                  className="skeleton"
                  style={{
                    width: "100%",
                    borderRadius: 5,
                    margin: "0px auto 10px",
                    height: 24,
                  }}
                />

                <p
                  className="skeleton"
                  style={{
                    width: "100%",
                    borderRadius: 5,
                    margin: "0px auto",
                    height: 38,
                  }}
                />


              </>) : (<>
                <div className="mb-0">
                  <label htmlFor="eventTitle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="me-1" viewBox="0 0 512 512">
                      <path d="M430.1 192H81.9c-17.7 0-18.6 9.2-17.6 20.5l13 183c.9 11.2 3.5 20.5 21.1 20.5h316.2c18 0 20.1-9.2 21.1-20.5l12.1-185.3c.9-11.2 0-18.2-17.7-18.2zM426.2 143.3c-.5-12.4-4.5-15.3-15.1-15.3H267.9c-21.8 0-24.4.3-40.9-17.4-13.7-14.8-8.3-14.6-36.6-14.6h-75.3c-17.4 0-23.6-1.5-25.2 16.6-1.5 16.7-5 57.2-5.5 63.4h343.4l-1.6-32.7z" />
                    </svg>
                    Folder Name</label>{" "}
                  <input type="text" value={formFolderData.name} className="form-control"
                    id="name"
                    name="name"
                    onChange={handleUpdateChange} />
                </div>
              </>)}


            </div>
            <div className="modal-footer">


              {!formFolderData.name ? (<>

                <p
                  className="skeleton"
                  style={{
                    width: "50%",
                    borderRadius: 5,
                    margin: "0px 0px",
                    height: 38,
                  }}
                >
                  {" "}
                </p>

              </>) : (<>

                {setFolderSubmit ? (
                  <>
                    <button className="btn btn-gray-800 me-2" type="button" data-bs-dismiss="modal" onClick={() => UpdateFolder(formFolderData._id || '')} >
                      Update Folder
                    </button>

                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onClick={() => DeleteFolderById(formFolderData._id || '')}  >Delete Folder</button>
                  </>
                ) : (

                  <button class="btn btn-gray-800 me-2" type="button" disabled>
                    <span class="ms-1">Loading...</span>
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  </button>

                )}


              </>
              )}

              <button
                type="button"
                className="btn btn-gray-300 ms-auto"
                data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#modal-default"
              >
                Close
              </button>


            </div>
          </div>
        </div>
      </div>



    </>
  )
}

export default Gallery

