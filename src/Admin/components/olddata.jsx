import React, { useState, useEffect, useContext, Component } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";
import axios from 'axios';
import { triggerChooseimg } from './ChooseImg';
import $ from 'jquery';
import axiosInstance, { weburl } from '../../axiosInstance';



const Gallery = () => {

    const [gallery, setGallery] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getGallery = async () => {
        try {
            const { data } = await axiosInstance.get('/admin/allgallery');
            if (data?.success) {
                setGallery(data.gallery.reverse());
            }
            setIsLoading(false); // Set loading state to false after fetching data
            triggerChooseimg();

        } catch (error) {
            console.log(error);
            toast.error("Error fetching Gallery!");
            setIsLoading(false); // Set loading state to false in case of an error
        }
    };

    useEffect(() => {

        getGallery();
    }, [])

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
                                    // Display loading skeletons while data is being fetched
                                    Array.from({ length: 8 }).map((_, index) => (
                                        <div className="col-md-6 col-lg-3" key={index}>

                                            <div className="blog-entry mb-4">
                                                <div className="skeleton mb-3" style={{ minHeight: 100, borderRadius: 5 }}>

                                                </div>
                                            </div>

                                        </div>
                                    ))
                                ) :
                                    (gallery.map(gallery => (


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



                                    ))
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

        </>
    )
}

export default Gallery

