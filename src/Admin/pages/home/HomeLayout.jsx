import React, { useState, useEffect } from "react";
import axios from 'axios';
import axiosInstance from '../../../axiosInstance'; import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import toast from "react-hot-toast";
import Nestable from "react-nestable";
import { triggerChooseimg } from "../../components/ChooseImg";
import Gallery from "../../components/Gallery";
import { Helmet } from "react-helmet";
import $ from "jquery";

const HomeLayout = () => {


  const [loading, setLoading] = useState(true); // Add loading state
  const [Products, setProducts] = useState([]); // Add loading state



  const getProducts = async () => {
    try {
      const { data } = await axiosInstance.get("/all-products");
      console.log("attr", data);
      setProducts(data.products)
    } catch (error) {
      console.error("Error fetching attributes:", error);
    }
  };


  useEffect(() => {
    getProducts();

  }, []);



  const [formData, setFormData] = useState({
    home_slider: "",
    trending_product: "",
    trending_product_banner: "",
    trending_product_carousal: "",
    best_selling_laptop: "",
    collection_heading: "",
    collection_paragraph: "",
    collection_url: "",
    collection_img: "",
    latest_product: "",
    latest_product_banner: "",
    latest_product_carousal: "",
    best_selling_smartphone: ""
  });


  const [imageSliderDivs, setImageSliderDivs] = useState([]);

  const addSliderImageDiv = () => {
    const newImageDiv = (
      <div key={imageSliderDivs.length} className={`col-md-4 col-6`}>
        <div className={`input-group imageupload-bx mb-3`}>
          <img
            className="image-preview"
            src="/assets/images/placeholder.png"
            alt="Preview"
            id={`imageinputSlider${imageSliderDivs.length}`}
            data-bs-toggle="modal"
            data-bs-target="#modal-default"
          />
          <input
            type="hidden"
            className="form-control imageopen"
            id={`imageinputSlider1${imageSliderDivs.length}`}
            name="productSliderImg[]"
            value="/assets/images/placeholder.png"
          />
        </div>
        <button
          className="btn btn-danger d-block m-auto"
          onClick={removeSliderImageDiv}
        >
          Delete
        </button>
        <br />
      </div>
    );

    const updatedImageDivs = [...imageSliderDivs, newImageDiv];
    setImageSliderDivs(updatedImageDivs);
    setTimeout(function () {
      triggerChooseimg();

    }, 1);
  };

 

  const [imageTbannerDivs, setImageTbannerDivs] = useState([]);

  const addTbannerImageDiv = () => {
    const newTbannerImageDiv = (
      <div key={imageTbannerDivs.length} className={`col-md-6 col-6`}>

        <div className="imageTbannerDivs-box">


          <div className={`input-group imageupload-bx mb-3`}>
            <img
              className="image-preview"
              src="/assets/images/placeholder.png"
              alt="Preview"
              id={`imageinputTbannerImg${imageTbannerDivs.length}`}
              data-bs-toggle="modal"
              data-bs-target="#modal-default"
            />
            <input
              type="hidden"
              className="form-control imageopen"
              id={`imageinputTbanner${imageTbannerDivs.length}`}
              name="productTbannerImg[]"
              value="/assets/images/placeholder.png"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="title" className="text-center d-block">Image Url</label>
            <input
              type="text"
              className="form-control productTbannerUrl"
              id={`productTbannerUrl${imageTbannerDivs.length}`}
              name="productTbannerUrl[]"

            />
          </div>

        </div>
        <button
          className="btn btn-danger d-block m-auto"
          onClick={removeSliderImageDiv}
        >
          Delete
        </button>


        <br />
      </div>
    );

    const updatedImageDivs = [...imageTbannerDivs, newTbannerImageDiv];
    setImageTbannerDivs(updatedImageDivs);
    setTimeout(function () {
      triggerChooseimg();
    }, 1);
  };
 


  const [imageTbanner2Divs, setImageTbanner2Divs] = useState([]);

  const addTbanner2ImageDiv = () => {
    const newTbannerImageDiv = (
      <div key={imageTbanner2Divs.length} className={`col-md-6 col-6`}>


        <div className="imageTbanner2Divs-box">

          <div className={`input-group imageupload-bx mb-3`}>
            <img
              className="image-preview"
              src="/assets/images/placeholder.png"
              alt="Preview"
              id={`imageinputTbanner2${imageTbanner2Divs.length}`}
              data-bs-toggle="modal"
              data-bs-target="#modal-default"
            />
            <input
              type="hidden"
              className="form-control imageopen"
              id={`imageinputTbanner2Url${imageTbanner2Divs.length}`}
              name="imageinputTbanner2Url[]"
              value="/assets/images/placeholder.png"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="title" className="text-center d-block">Image Url</label>
            <input
              type="text"
              className="form-control productTbanner2Url"
              id={`productTbanner2Url${imageTbanner2Divs.length}`}
              name="productTbanner2Url[]"

            />
          </div>

        </div>
        <button
          className="btn btn-danger d-block m-auto"
          onClick={removeSliderImageDiv}
        >
          Delete
        </button>


        <br />
      </div>
    );

    const updatedImageDivs = [...imageTbanner2Divs, newTbannerImageDiv];
    setImageTbanner2Divs(updatedImageDivs);
    setTimeout(function () {
      triggerChooseimg();
    }, 1);
  };
 

  const [imageTcarousalDivs, setImageTcarousalDivs] = useState([]);

  const addTcarousalImageDiv = () => {
    const newTbannerImageDiv = (
      <div key={imageTcarousalDivs.length} className={`col-md-3 col-6`}>
        <div className="imageTcarousalDivs-box">
          <div className={`input-group imageupload-bx mb-3`}>
            <img
              className="image-preview"
              src="/assets/images/placeholder.png"
              alt="Preview"
              id={`imageTcarousalinputS${imageTcarousalDivs.length}`}
              data-bs-toggle="modal"
              data-bs-target="#modal-default"
            />
            <input
              type="hidden"
              className="form-control imageopen"
              id={`imageTcarousalinputSImg${imageTcarousalDivs.length}`}
              name="productTcarousalImg[]"
              value="/assets/images/placeholder.png"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="title" className="text-center d-block">Image Url</label>
            <input
              type="text"
              className="form-control imageTcarousalDivs"
              id={`productTcarousalUrl${imageTcarousalDivs.length}`}
              name="productTcarousalUrl[]"

            />
          </div>

        </div>
        <button
          className="btn btn-danger d-block m-auto"
          onClick={removeSliderImageDiv}
        >
          Delete
        </button>
        <br />
      </div>
    );

    const updatedImageDivs = [...imageTcarousalDivs, newTbannerImageDiv];
    setImageTcarousalDivs(updatedImageDivs);
    setTimeout(function () {
      triggerChooseimg();
    }, 1);
  };

 

  const [imageTcarousal2Divs, setImageTcarousal2Divs] = useState([]);

  const addTcarousal2ImageDiv = () => {
    const newTbannerImageDiv = (
      <div key={imageTcarousal2Divs.length} className={`col-md-3 col-6`}>
        <div className="imageTcarousal2Divs-box">

          <div className={`input-group imageupload-bx mb-3`}>
            <img
              className="image-preview"
              src="/assets/images/placeholder.png"
              alt="Preview"
              id={`imageTcarousal2inputSImg${imageTcarousal2Divs.length}`}
              data-bs-toggle="modal"
              data-bs-target="#modal-default"
            />
            <input
              type="hidden"
              className="form-control imageopen"
              id={`imageTcarousal2inputS${imageTcarousal2Divs.length}`}
              name="productTcarousal2Img[]"
              value="/assets/images/placeholder.png"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="title" className="text-center d-block">Image Url</label>
            <input
              type="text"
              className="form-control productTcarousal2Url"
              id={`productTcarousal2Url${imageTcarousal2Divs.length}`}
              name="productTcarousal2Url[]"

            />
          </div>
        </div>
        <button
          className="btn btn-danger d-block m-auto"
          onClick={removeSliderImageDiv}
        >
          Delete
        </button>
        <br />
      </div>
    );

    const updatedImageDivs = [...imageTcarousal2Divs, newTbannerImageDiv];
    setImageTcarousal2Divs(updatedImageDivs);
    setTimeout(function () {
      triggerChooseimg();
    }, 1);
  };


  const removeSliderImageDiv = (event) => {
    const button = event.target;
    const parentDiv = button.parentNode;  
    parentDiv.remove();  
  };


  const [SubmitLoading, setSubmitLoading] = useState(true);  

  const [layout, setLayout] = useState([]);

  const [isLoading, setIsLoading] = useState(true);


  const getData = async () => {
    try {
      const { data } = await axiosInstance.get(`/home-layout-data`);
      setLayout(data.homeLayout);
      setIsLoading(false); // Set loading state to false in case of an error
      console.log('data', data);

      setTimeout(function () {
        triggerChooseimg();
      }, 1);

      setFormData((prevData) => ({
        ...prevData,

        collection_heading: data.homeLayout.collection_heading,
        collection_paragraph: data.homeLayout.collection_paragraph,
        collection_url: data.homeLayout.collection_url,

      }));

    }
    catch (error) {
      console.log(error);
      toast.error("Error fetching Home layout!");
      setIsLoading(false);  
    }
  };

  useEffect(() => {
    getData();
  }, []);


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };


  const submitData = async () => {
    setSubmitLoading(false);
 
    const imageSliderInputs = document.querySelectorAll(
      '#imageSliderContainer input[type="hidden"]'
    );
    const inputSliderValues = Array.from(imageSliderInputs).map((input) => input.value);

     const selectTrendingElement = document.getElementById('TrendingProductsSelect');
    const selectedTrendingOptions = Array.from(selectTrendingElement.selectedOptions).map(option => option.value);

     const imageTrendingBannerContainer = document.getElementById('imageTrendingBannerContainer');
    const imageTrendingBannerInputs = imageTrendingBannerContainer.querySelectorAll('.imageTbannerDivs-box');

    const imageTrendingBannerData = [];

    imageTrendingBannerInputs.forEach((input, index) => {
      const imageInput = input.querySelector('.imageopen').value;
      const imageUrlInput = input.querySelector('.productTbannerUrl').value;

      const imageDataItem = {
        imageInput,
        imageUrlInput
      };

      imageTrendingBannerData.push(imageDataItem);
    });
 
    const imageTrendingCarousalContainer = document.getElementById('imageTrendingCarousalContainer');
    const imageTrendingCarousalInputs = imageTrendingCarousalContainer.querySelectorAll('.imageTcarousalDivs-box');

    const imageTrendingCarousalData = [];

    imageTrendingCarousalInputs.forEach((input, index) => {
      const imageInput = input.querySelector('.imageopen').value;
      const imageUrlInput = input.querySelector('.imageTcarousalDivs').value;

      const imageDataItem = {
        imageInput,
        imageUrlInput
      };

      imageTrendingCarousalData.push(imageDataItem);
    });


    const imageTrendingBanner2Container = document.getElementById('imageTrendingBanner2Container');
    const imageTrendingBanner2Inputs = imageTrendingBanner2Container.querySelectorAll('.imageTbanner2Divs-box');

    const imageTrendingBanner2Data = [];

    imageTrendingBanner2Inputs.forEach((input, index) => {
      const imageInput = input.querySelector('.imageopen').value;
      const imageUrlInput = input.querySelector('.productTbanner2Url').value;

      const imageDataItem = {
        imageInput,
        imageUrlInput
      };

      imageTrendingBanner2Data.push(imageDataItem);
    });

 
    const imageTrendingCarousal2Container = document.getElementById('imageTrendingCarousal2Container');
    const imageTrendingCarousal2Inputs = imageTrendingCarousal2Container.querySelectorAll('.imageTcarousal2Divs-box');

    const imageTrendingCarousal2Data = [];

    imageTrendingCarousal2Inputs.forEach((input, index) => {
      const imageInput = input.querySelector('.imageopen').value;
      const imageUrlInput = input.querySelector('.productTcarousal2Url').value;

      const imageDataItem = {
        imageInput,
        imageUrlInput
      };

      imageTrendingCarousal2Data.push(imageDataItem);
    });
 
    const selectBestSellingLaptopElement = document.getElementById('BestSellingLaptopSelect');
    const selectedBestSellingLaptopOptions = Array.from(selectBestSellingLaptopElement.selectedOptions).map(option => option.value);

    const selectBestSellingSmartphoneElement = document.getElementById('BestSellingSmartphoneSelect');
    const selectedBestSellingSmartphoneOptions = Array.from(selectBestSellingSmartphoneElement.selectedOptions).map(option => option.value);


    const selectLatestProductSelectElement = document.getElementById('LatestProductSelect');
    const selectedLatestProductSelectOptions = Array.from(selectBestSellingSmartphoneElement.selectedOptions).map(option => option.value);


    const selectRecommendedProductSelectElement = document.getElementById('RecommendedProductsSelect');
    const selectRecommendedProductSelectOptions = Array.from(selectRecommendedProductSelectElement.selectedOptions).map(option => option.value);


    const imageinputCollectionimg = document.getElementById('imageinputCollectionimg').value;

    const updatedFormData = {
      ...formData,
      home_slider: inputSliderValues,
      trending_product: selectedTrendingOptions,
      trending_product_banner: imageTrendingBannerData,
      trending_product_carousal: imageTrendingCarousalData,
      best_selling_laptop: selectedBestSellingLaptopOptions,
      collection_img: imageinputCollectionimg,
      latest_product: selectedLatestProductSelectOptions,
      latest_product_banner: imageTrendingBanner2Data,
      latest_product_carousal: imageTrendingCarousal2Data,
      best_selling_smartphone: selectedBestSellingSmartphoneOptions,
      recommended_products: selectRecommendedProductSelectOptions
    };

    console.log(updatedFormData)

    try {
      const admintoken = localStorage.getItem("adminToken");
      if (admintoken) {
        await axiosInstance.put(`/admin/edit-home-layout`, updatedFormData);
        toast.success("Home Layout Updated successfully!");
        window.location.reload();
      }
    } catch (error) {
      console.error("Error On Menu:", error);
      toast.error(error.response.data.message);
    } finally {
      setSubmitLoading(true);
    }
  };



  return (
    <>
      {!isLoading && <>

        <Helmet>
          <link href="https://raw.githack.com/ttskch/select2-bootstrap4-theme/master/dist/select2-bootstrap4.css" rel="stylesheet" />
          <link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/css/select2.min.css" rel="stylesheet" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/js/select2.min.js"> </script>

          <script>
            {`
    $(function () {
      $('select').each(function () {
        $(this).select2({
          theme: 'bootstrap4',
          width: 'style',
          placeholder: $(this).attr('placeholder'),
          allowClear: Boolean($(this).data('allow-clear')),
        });
      })
    });
    `}
          </script>

        </Helmet>
      </>}


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
              Home Layout
            </li>
          </ol>
        </nav>

        <div className="card p-4">


          {isLoading ? Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="col-lg-12 mt-2">
              <div
                className="card-1 skeleton"
                style={{ height: 54, borderRadius: 10 }}
              ></div>
            </div>
          )) : (<>

          </>)}

          <div className={` ${isLoading ? 'd-none' : 'd-block'}`}>


            <div className="accordion mb-2" id="accordionSlider">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    <svg
                      width={20}
                      fill="currentColor"
                      height={20}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 64 64" className="me-2"
                    >
                      <path d="m31,30.95001v-13.95001h-13.95001c.5,7.46997,6.48004,13.45001,13.95001,13.95001Z" />
                      <path d="m32,33c-6.48999,0-12.14001-3.66003-15-9.02002v23.02002h29.95001c-.52002-7.79999-7.02002-14-14.95001-14Z" />
                      <path d="m33,31.04999c6.06.35999,11.28998,3.89001,14,8.96997v-23.01996h-14v14.04999Z" />
                      <path d="M53 10H11c-.54999 0-1 .45001-1 1v42c0 .54999.45001 1 1 1h42c.54999 0 1-.45001 1-1V11c0-.54999-.45001-1-1-1zm-4 38c0 .54999-.45001 1-1 1H16c-.54999 0-1-.45001-1-1V16c0-.54999.45001-1 1-1h32c.54999 0 1 .45001 1 1v32zM59 14h-3v36h3c.54999 0 1-.45001 1-1V15c0-.54999-.45001-1-1-1zM4 15v34c0 .54999.45001 1 1 1h3V14h-3c-.54999 0-1 .45001-1 1z" />
                    </svg>
                    Home Slider  
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse "
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionSlider"
                >
                  <div className="accordion-body">

                    <div id="imageSliderContainer" className="row mt-4">
                      {layout.home_slider && (
                        <>
                          {layout.home_slider.map((image, index) => (
                            <div
                              className="col-md-4 col-6"
                              key={index}
                            >
                              <div
                                className={`input-group imageupload-bx mb-3`}
                              >
                                <img
                                  className="image-preview"
                                  src={image}
                                  alt="Preview"
                                  id={`imageinputN1${index + 1}`}
                                  data-bs-toggle="modal"
                                  data-bs-target="#modal-default"
                                />
                                <input
                                  type="hidden"
                                  className="form-control imageopen"
                                  id={`imageproductN1${index + 1}`}
                                  name="productImg[]"
                                  value={image}
                                />
                              </div>
                              <button
                                className="btn btn-danger d-block m-auto"
                                onClick={removeSliderImageDiv}
                              >
                                Delete
                              </button>
                              <br />
                            </div>
                          ))}
                        </>
                      )}

                      {imageSliderDivs.map((imageSliderDivs, index) => (
                        <React.Fragment key={index}>
                          {imageSliderDivs}
                        </React.Fragment>
                      ))}
                    </div>

                    <div className="col-md-12">
                      <button
                        onClick={addSliderImageDiv}
                        className="btn btn-secondary btn-sm"
                        type="button"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mx-1"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#1f2937"
                          stroke-width="1.5"
                          stroke-linecap="square"
                          stroke-linejoin="arcs"
                        >
                          <rect
                            x="3"
                            y="3"
                            width="18"
                            height="18"
                            rx="2"
                          />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <path d="M20.4 14.5L16 10 4 20" />
                        </svg>
                        Add Slider (2000 × 658 px)
                      </button> 


                    </div>




                  </div>
                </div>
              </div>

            </div>


            <div className="accordion mb-2" id="accordionTrending">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingaccordionTrending">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOneTrending"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height={20}
                      width={20}
                      fill="currentColor"
                      enableBackground="new 0 0 1024 1024"
                      viewBox="0 0 1024 1024"
                      className="me-2"
                    >
                      <path d="M490 324.2v219.5c-18-9.6-36.2-19.2-54.4-28.8-45.6-24.1-91.2-48.2-136.9-72.3-6.6-3.5-12.7-7.1-19.7-10.5V212.7c2 1.2 4.7 2.4 7 3.6.1.1.2.1.3.2 6.8 3.6 13.5 7.1 20.3 10.7 2.2 1.2 4.5 2.4 6.7 3.6 2.3 1.2 4.5 2.4 6.8 3.6 4.5 2.4 9.1 4.8 13.6 7.2 45.6 24.1 91.3 48 136.9 72.1.2.1.3 0 .5.1 1.1.6 2.2 1.3 3.3 1.3h0c.2 1 .4.6.5.7 2.6 1.4 5.1 2.9 7.7 4.3 1.5.8 2.8 1.7 4.3 2.5C488 323 489 323.7 490 324.2zM745 213.1v219.2c0 0-.1 0-.1 0-3.2 1.5-5.6 2.9-8.4 4.4-43.5 23-87 45.9-130.5 68.9-.8.4-1.5.9-2.4 1.3-23.2 12.2-46.6 24.2-69.6 36.5V324.2c2-1.5 5.4-2.9 8.2-4.4 43.5-23 87-46 130.5-68.9C696.8 238.2 721 225.8 745 213.1zM720.2 176.8c-17 9-33.9 17.9-50.9 26.9-45.6 24.1-91.2 48.2-136.9 72.3-6.8 3.6-13.6 7.2-20.4 10.8-25.1-13.3-50.2-26.5-75.3-39.8-44.3-23.4-88.5-46.8-132.8-70.2 17-9 33.9-17.9 50.9-26.9 45.6-24.1 91.2-48.2 136.8-72.3 6.8-3.6 13.6-7.2 20.4-10.8 25.1 13.3 50.2 26.5 75.4 39.8C631.6 130 675.9 153.4 720.2 176.8zM236 727.4v219.2c-19-9.4-35.9-18.9-53.7-28.3-45.6-24.1-91.1-48.2-136.7-72.2-6.9-3.6-14.5-7.3-20.5-10.9V615.8c3 2.1 7.8 4.2 11.8 6.2.6.3 1.1.6 1.6.9 6.8 3.6 13.6 7.4 20.5 11 6.8 3.6 13.6 7 20.4 11h0c45.3 24 90.6 47.7 135.9 71.6.1 0 .2 0 .3 0 .1 0 .2 0 .2.1.2.1.3.1.5.2 1.3.7 2.5 1.3 3.8 2 5.2 2.8 10.3 5.6 15.6 8.4 0 0 0 0 0 0C235.7 727.3 235.8 727.4 236 727.4L236 727.4zM490 616v219.2c-25 13.3-50.3 26.6-75.5 39.9-45.2 23.9-89.5 47.7-135.5 71.6V727.3c0-.2.7-.3 1-.5 2.5-1.3 5-2.6 7.4-3.9 19-10.1 38.1-20.1 57.1-30.2 24.5-12.9 49-25.9 73.4-38.8 9-4.8 18-9.5 27.1-14.2 2.2-1.1 4.3-2.3 6.5-3.4 10.3-5.4 20.5-10.7 30.8-16.2C485 618.7 488 617.4 490 616zM465 579.7L465 579.7c-16 9-33.6 18-50.6 26.9-45.6 24.1-91.1 48.2-136.7 72.4-3.4 1.8-6.7 3.6-10.1 5.4-3.4 1.8-6.8 3.6-10.2 5.4L182.2 650c-44.3-23.4-88.5-46.8-132.7-70.2 17-9 33.9-17.9 50.9-26.9 45.6-24.1 91.2-48.1 136.8-72.2 6.8-3.6 13.6-7.7 20.4-10.7h0c6.3 3 12.5 6.5 18.8 9.8 18.8 10 37.4 19.8 56.2 29.8C376.8 533 421 556.3 465 579.7zM745 727.4v219.2c-19-9.4-35.9-18.9-53.8-28.3-45.6-24.1-91.1-48.2-136.7-72.2-6.9-3.6-13.5-7.3-20.5-10.9V615.6c18 9.6 36.2 19.2 54.4 28.9 45.6 24.1 91.2 48.3 136.9 72.4 1.3.7 2.5 1.3 3.8 2C734.4 721.7 739 724.6 745 727.4zM999.1 616.1c-20.4 10.8-40.9 21.4-61.4 32.2-.1.1-.2.1-.3.2-1.5.8-2.9 1.5-4.4 2.3-1.5.8-2.9 1.5-4.3 2.3-.5.3-1.1.6-1.6.8.3-.1.5-.3.8-.4-.1.1-.3.1-.4.2-.1.1-.3.1-.4.2-43.5 23-87 45.9-130.4 68.9-.3.2-.7.3-1 .5-2.3 1.3-4.5 2.5-7.3 3.8 0 0-.1-.1-.1-.1H788v219.6c46-23.8 90.3-47.7 135.5-71.6 25.2-13.3 50.5-26.6 75.5-39.9L999.1 616.1C999 616.1 999.1 616.1 999.1 616.1zM788.3 727.2c2.4-1.3 4.8-2.6 7.3-3.8C793.2 724.7 791.1 726 788.3 727.2zM974.6 579.8c-17 9-33.9 17.9-50.9 26.9-45.6 24.1-91.2 48.2-136.8 72.3-2.5 1.3-5.1 2.7-7.6 4-.1 0-.2.1-.2.1-2.7 1.4-5.4 2.9-8.2 4.4-1.5.8-2.9 1.4-4.3 2.4h0c-25.1-14-50.2-26.7-75.4-40-22.1-11.7-44.3-23.5-66.4-35.2-11.1-5.9-22.1-11.7-33.2-17.5-2.8-1.5-5.5-2.9-8.3-4.4-8.3-4.4-16.5-8.8-24.8-13.2 16.9-8.9 33.9-17.9 50.8-26.8 45.6-24.1 91.2-48.2 136.9-72.3 6.8-3.6 13.6-7.2 20.4-10.8 25.1 13.3 50.2 26.6 75.3 39.8C886.1 533 930.3 556.4 974.6 579.8z" />
                    </svg>
                    Choose Trending products 
                  </button>
                </h2>
                <div
                  id="collapseOneTrending"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingaccordionTrending"
                  data-bs-parent="#headingaccordionTrending"
                >
                  <div className="accordion-body">

                    <div className="col-md-12">




                      <div className="mb-4">
                        <label htmlFor="title">Choose Trending products</label>


                        <select multiple="true" placeholder="Select Trending products" id="TrendingProductsSelect" data-allow-clear={1} >

                          {Products ? (Products.map((product) => (
                            <option key={product.id} value={product._id}
                              selected={!isLoading && layout?.trending_product?.includes(product._id) ? 'selected' : null}

                            >{product.title}</option>
                          ))) : (<>
                            loading....
                          </>)}



                        </select>

                      </div>
                    </div>


                    <div id="imageTrendingBannerContainer" className="row mt-4">
                      {layout.trending_product_banner && (
                        <>
                          {layout.trending_product_banner.map((banner, index) => (
                            <div
                              className="col-md-6 col-6"
                              key={index}
                            >
                              <div className="imageTbannerDivs-box">

                                <div
                                  className={`input-group imageupload-bx mb-3`}
                                >
                                  <img
                                    className="image-preview"
                                    src={banner.imageInput}
                                    alt="Preview"
                                    id={`imageinputN${index + 1}`}
                                    data-bs-toggle="modal"
                                    data-bs-target="#modal-default"
                                  />
                                  <input
                                    type="hidden"
                                    className="form-control imageopen"
                                    id={`imageproductN${index + 1}`}
                                    name="productImg[]"
                                    value={banner.imageInput || ''}
                                  />
                                </div>


                                <div className="mb-4">
                                  <label htmlFor="title" className="text-center d-block">
                                    Image Url
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control productTbannerUrl"
                                    id={`productTbannerUrlD${index + 1}`}
                                    name="productTbannerUrl[]"
                                    defaultValue={banner.imageUrlInput || ''}
                                    onChange={(e) => {
                                      const value = e.target.value; // Get the value directly
                                      console.log(value); // Do something with the value if needed
                                    }}
                                  />
                                </div>


                              </div>

                              <button
                                className="btn btn-danger d-block m-auto"
                                onClick={removeSliderImageDiv}
                              >
                                Delete
                              </button>
                              <br />
                            </div>
                          ))}
                        </>
                      )}

                      {imageTbannerDivs.map((imageTbannerDivs, index) => (
                        <React.Fragment key={index}>
                          {imageTbannerDivs}
                        </React.Fragment>
                      ))}
                    </div>

                    <div className="col-md-12">
                      <button
                        onClick={addTbannerImageDiv}
                        className="btn btn-secondary btn-sm"
                        type="button"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mx-1"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#1f2937"
                          stroke-width="1.5"
                          stroke-linecap="square"
                          stroke-linejoin="arcs"
                        >
                          <rect
                            x="3"
                            y="3"
                            width="18"
                            height="18"
                            rx="2"
                          />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <path d="M20.4 14.5L16 10 4 20" />
                        </svg>
                        Add Banner (1500 × 500 px)
                      </button>


                    </div>


<hr></hr>

                    <div id="imageTrendingCarousalContainer" className="row mt-4">



                      {layout.trending_product_carousal && (
                        <>
                          {layout.trending_product_carousal.map((carousal, index) => (
                            <div
                              className="col-md-4 col-6"
                              key={index}
                            >
                              <div className="imageTcarousalDivs-box">

                                <div
                                  className={`input-group imageupload-bx mb-3`}
                                >
                                  <img
                                    className="image-preview"
                                    src={carousal.imageInput}
                                    alt="Preview"
                                    id={`productTcarousalUrlO${index + 1}`}
                                    data-bs-toggle="modal"
                                    data-bs-target="#modal-default"
                                  />
                                  <input
                                    type="hidden"
                                    className="form-control imageopen"
                                    id={`productTcarousalUrlI${index + 1}`}
                                    name="productImg[]"
                                    value={carousal.imageInput}
                                  />
                                </div>



                                <div className="mb-4">
                                  <label htmlFor="title" className="text-center d-block">
                                    Image Url
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control imageTcarousalDivs"
                                    id={`productTcarousalUrlD${index + 1}`}
                                    name="productTcarousalUrl[]"
                                    defaultValue={carousal.imageUrlInput || ''}
                                    onChange={(e) => {
                                      const value = e.target.value; // Get the value directly
                                      console.log(value); // Do something with the value if needed
                                    }}
                                  />
                                </div>

                              </div>


                              <button
                                className="btn btn-danger d-block m-auto"
                                onClick={removeSliderImageDiv}
                              >
                                Delete
                              </button>
                              <br />
                            </div>
                          ))}
                        </>
                      )}

                      {imageTcarousalDivs.map((imageTcarousalDivs, index) => (
                        <React.Fragment key={index}>
                          {imageTcarousalDivs}
                        </React.Fragment>
                      ))}
                    </div>

                    <div className="col-md-12">
                      <button
                        onClick={addTcarousalImageDiv}
                        className="btn btn-secondary btn-sm"
                        type="button"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mx-1"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#1f2937"
                          stroke-width="1.5"
                          stroke-linecap="square"
                          stroke-linejoin="arcs"
                        >
                          <rect
                            x="3"
                            y="3"
                            width="18"
                            height="18"
                            rx="2"
                          />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <path d="M20.4 14.5L16 10 4 20" />
                        </svg>
                        Add Carousal (1000 × 1000 px)
                      </button> 


                    </div>



                  </div>
                </div>
              </div>

            </div>


            <div className="accordion mb-2" id="accordionSelling">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOneSelling">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOneSelling"
                    aria-expanded="false"
                    aria-controls="collapseOneSelling"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height={20}
                      width={20}
                      fill="currentColor"
                      enableBackground="new 0 0 1024 1024"
                      viewBox="0 0 1024 1024"
                      className="me-2"
                    >
                      <path d="M490 324.2v219.5c-18-9.6-36.2-19.2-54.4-28.8-45.6-24.1-91.2-48.2-136.9-72.3-6.6-3.5-12.7-7.1-19.7-10.5V212.7c2 1.2 4.7 2.4 7 3.6.1.1.2.1.3.2 6.8 3.6 13.5 7.1 20.3 10.7 2.2 1.2 4.5 2.4 6.7 3.6 2.3 1.2 4.5 2.4 6.8 3.6 4.5 2.4 9.1 4.8 13.6 7.2 45.6 24.1 91.3 48 136.9 72.1.2.1.3 0 .5.1 1.1.6 2.2 1.3 3.3 1.3h0c.2 1 .4.6.5.7 2.6 1.4 5.1 2.9 7.7 4.3 1.5.8 2.8 1.7 4.3 2.5C488 323 489 323.7 490 324.2zM745 213.1v219.2c0 0-.1 0-.1 0-3.2 1.5-5.6 2.9-8.4 4.4-43.5 23-87 45.9-130.5 68.9-.8.4-1.5.9-2.4 1.3-23.2 12.2-46.6 24.2-69.6 36.5V324.2c2-1.5 5.4-2.9 8.2-4.4 43.5-23 87-46 130.5-68.9C696.8 238.2 721 225.8 745 213.1zM720.2 176.8c-17 9-33.9 17.9-50.9 26.9-45.6 24.1-91.2 48.2-136.9 72.3-6.8 3.6-13.6 7.2-20.4 10.8-25.1-13.3-50.2-26.5-75.3-39.8-44.3-23.4-88.5-46.8-132.8-70.2 17-9 33.9-17.9 50.9-26.9 45.6-24.1 91.2-48.2 136.8-72.3 6.8-3.6 13.6-7.2 20.4-10.8 25.1 13.3 50.2 26.5 75.4 39.8C631.6 130 675.9 153.4 720.2 176.8zM236 727.4v219.2c-19-9.4-35.9-18.9-53.7-28.3-45.6-24.1-91.1-48.2-136.7-72.2-6.9-3.6-14.5-7.3-20.5-10.9V615.8c3 2.1 7.8 4.2 11.8 6.2.6.3 1.1.6 1.6.9 6.8 3.6 13.6 7.4 20.5 11 6.8 3.6 13.6 7 20.4 11h0c45.3 24 90.6 47.7 135.9 71.6.1 0 .2 0 .3 0 .1 0 .2 0 .2.1.2.1.3.1.5.2 1.3.7 2.5 1.3 3.8 2 5.2 2.8 10.3 5.6 15.6 8.4 0 0 0 0 0 0C235.7 727.3 235.8 727.4 236 727.4L236 727.4zM490 616v219.2c-25 13.3-50.3 26.6-75.5 39.9-45.2 23.9-89.5 47.7-135.5 71.6V727.3c0-.2.7-.3 1-.5 2.5-1.3 5-2.6 7.4-3.9 19-10.1 38.1-20.1 57.1-30.2 24.5-12.9 49-25.9 73.4-38.8 9-4.8 18-9.5 27.1-14.2 2.2-1.1 4.3-2.3 6.5-3.4 10.3-5.4 20.5-10.7 30.8-16.2C485 618.7 488 617.4 490 616zM465 579.7L465 579.7c-16 9-33.6 18-50.6 26.9-45.6 24.1-91.1 48.2-136.7 72.4-3.4 1.8-6.7 3.6-10.1 5.4-3.4 1.8-6.8 3.6-10.2 5.4L182.2 650c-44.3-23.4-88.5-46.8-132.7-70.2 17-9 33.9-17.9 50.9-26.9 45.6-24.1 91.2-48.1 136.8-72.2 6.8-3.6 13.6-7.7 20.4-10.7h0c6.3 3 12.5 6.5 18.8 9.8 18.8 10 37.4 19.8 56.2 29.8C376.8 533 421 556.3 465 579.7zM745 727.4v219.2c-19-9.4-35.9-18.9-53.8-28.3-45.6-24.1-91.1-48.2-136.7-72.2-6.9-3.6-13.5-7.3-20.5-10.9V615.6c18 9.6 36.2 19.2 54.4 28.9 45.6 24.1 91.2 48.3 136.9 72.4 1.3.7 2.5 1.3 3.8 2C734.4 721.7 739 724.6 745 727.4zM999.1 616.1c-20.4 10.8-40.9 21.4-61.4 32.2-.1.1-.2.1-.3.2-1.5.8-2.9 1.5-4.4 2.3-1.5.8-2.9 1.5-4.3 2.3-.5.3-1.1.6-1.6.8.3-.1.5-.3.8-.4-.1.1-.3.1-.4.2-.1.1-.3.1-.4.2-43.5 23-87 45.9-130.4 68.9-.3.2-.7.3-1 .5-2.3 1.3-4.5 2.5-7.3 3.8 0 0-.1-.1-.1-.1H788v219.6c46-23.8 90.3-47.7 135.5-71.6 25.2-13.3 50.5-26.6 75.5-39.9L999.1 616.1C999 616.1 999.1 616.1 999.1 616.1zM788.3 727.2c2.4-1.3 4.8-2.6 7.3-3.8C793.2 724.7 791.1 726 788.3 727.2zM974.6 579.8c-17 9-33.9 17.9-50.9 26.9-45.6 24.1-91.2 48.2-136.8 72.3-2.5 1.3-5.1 2.7-7.6 4-.1 0-.2.1-.2.1-2.7 1.4-5.4 2.9-8.2 4.4-1.5.8-2.9 1.4-4.3 2.4h0c-25.1-14-50.2-26.7-75.4-40-22.1-11.7-44.3-23.5-66.4-35.2-11.1-5.9-22.1-11.7-33.2-17.5-2.8-1.5-5.5-2.9-8.3-4.4-8.3-4.4-16.5-8.8-24.8-13.2 16.9-8.9 33.9-17.9 50.8-26.8 45.6-24.1 91.2-48.2 136.9-72.3 6.8-3.6 13.6-7.2 20.4-10.8 25.1 13.3 50.2 26.6 75.3 39.8C886.1 533 930.3 556.4 974.6 579.8z" />
                    </svg>
                    Best Selling Laptop

                  </button>
                </h2>
                <div
                  id="collapseOneSelling"
                  className="accordion-collapse collapse "
                  aria-labelledby="headingOneSelling"
                  data-bs-parent="#accordionSelling"
                >
                  <div className="accordion-body">

                    <div className="mb-4">
                      <label htmlFor="title">Choose Best Selling Laptop</label>


                      <select multiple="true" placeholder="Select Best Selling Laptop" id="BestSellingLaptopSelect" data-allow-clear={1} >

                        {layout.best_selling_laptop && Products && (Products.map((product) => (
                          <option key={product.id} value={product._id}
                            selected={layout.best_selling_laptop.includes(product._id) ? true : false}
                          >{product.title}</option>
                        )))}


                      </select>
                    </div>

                  </div>
                </div>
              </div>

            </div>



            <div className="accordion mb-2" id="accordionBox">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOneBox">
                  <button
                    className="accordion-button collapsed"

                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOneBox"
                    aria-expanded="false"
                    aria-controls="collapseOneBox"
                  >

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height={20}
                      width={20}
                      fill="currentColor"
                      viewBox="0 0 24 24"

                      stroke="white"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x={3} y={3} width={18} height={18} rx={2} />
                      <path d="M15 3v18" />
                    </svg>

                    Collection Box

                  </button>
                </h2>
                <div
                  id="collapseOneBox"
                  className="accordion-collapse collapse"
                  aria-labelledby="collapseOneBox"
                  data-bs-parent="#accordionBox"
                >
                  <div className="accordion-body">
                    <div className="row">

                      <div className="col-md-8">
                        <div className="mb-4">
                          <label htmlFor="title">Collection Heading</label>
                          <input
                            type="text"
                            className="form-control"
                            id="collection_heading"
                            name="collection_heading"
                            value={formData.collection_heading || ''}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="mb-4">
                          <label htmlFor="title">Collection Paragraph</label>
                          <input
                            type="text"
                            className="form-control"
                            id="collection_paragraph"
                            name="collection_paragraph" value={formData.collection_paragraph || ''}
                            onChange={handleChange}
                          />
                        </div>


                        <div className="mb-4">
                          <label htmlFor="title">Collection Url</label>
                          <input
                            type="text"
                            className="form-control"
                            id="collection_url"
                            name="collection_url"
                            value={formData.collection_url || ''}
                            onChange={handleChange}
                          />
                        </div>


                      </div>

                      <div className="col-md-4">

                        <div className="col-12">
                          <label htmlFor="title">Collection Image (894 × 678 px )</label>
                          <div className="input-group imageupload-bx mb-3">
                            <img
                              className="image-preview"
                              src={layout.collection_img}
                              alt="Preview"
                              id="imageinputCollectionimg"
                              data-bs-toggle="modal"
                              data-bs-target="#modal-default"
                            />
                            <input
                              type="hidden"
                              className="form-control imageopen"
                              id="imageinputCollectionimg"
                              name="productCollectionimg"
                              value={layout.collection_img}
                            />
                          </div>

                        </div>

                      </div>

                    </div>



                  </div>
                </div>
              </div>

            </div>


            <div className="accordion mb-2" id="accordionLatest">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingaccordionLatest">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOneLatest"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height={20}
                      width={20}
                      fill="currentColor"
                      enableBackground="new 0 0 1024 1024"
                      viewBox="0 0 1024 1024"
                      className="me-2"
                    >
                      <path d="M490 324.2v219.5c-18-9.6-36.2-19.2-54.4-28.8-45.6-24.1-91.2-48.2-136.9-72.3-6.6-3.5-12.7-7.1-19.7-10.5V212.7c2 1.2 4.7 2.4 7 3.6.1.1.2.1.3.2 6.8 3.6 13.5 7.1 20.3 10.7 2.2 1.2 4.5 2.4 6.7 3.6 2.3 1.2 4.5 2.4 6.8 3.6 4.5 2.4 9.1 4.8 13.6 7.2 45.6 24.1 91.3 48 136.9 72.1.2.1.3 0 .5.1 1.1.6 2.2 1.3 3.3 1.3h0c.2 1 .4.6.5.7 2.6 1.4 5.1 2.9 7.7 4.3 1.5.8 2.8 1.7 4.3 2.5C488 323 489 323.7 490 324.2zM745 213.1v219.2c0 0-.1 0-.1 0-3.2 1.5-5.6 2.9-8.4 4.4-43.5 23-87 45.9-130.5 68.9-.8.4-1.5.9-2.4 1.3-23.2 12.2-46.6 24.2-69.6 36.5V324.2c2-1.5 5.4-2.9 8.2-4.4 43.5-23 87-46 130.5-68.9C696.8 238.2 721 225.8 745 213.1zM720.2 176.8c-17 9-33.9 17.9-50.9 26.9-45.6 24.1-91.2 48.2-136.9 72.3-6.8 3.6-13.6 7.2-20.4 10.8-25.1-13.3-50.2-26.5-75.3-39.8-44.3-23.4-88.5-46.8-132.8-70.2 17-9 33.9-17.9 50.9-26.9 45.6-24.1 91.2-48.2 136.8-72.3 6.8-3.6 13.6-7.2 20.4-10.8 25.1 13.3 50.2 26.5 75.4 39.8C631.6 130 675.9 153.4 720.2 176.8zM236 727.4v219.2c-19-9.4-35.9-18.9-53.7-28.3-45.6-24.1-91.1-48.2-136.7-72.2-6.9-3.6-14.5-7.3-20.5-10.9V615.8c3 2.1 7.8 4.2 11.8 6.2.6.3 1.1.6 1.6.9 6.8 3.6 13.6 7.4 20.5 11 6.8 3.6 13.6 7 20.4 11h0c45.3 24 90.6 47.7 135.9 71.6.1 0 .2 0 .3 0 .1 0 .2 0 .2.1.2.1.3.1.5.2 1.3.7 2.5 1.3 3.8 2 5.2 2.8 10.3 5.6 15.6 8.4 0 0 0 0 0 0C235.7 727.3 235.8 727.4 236 727.4L236 727.4zM490 616v219.2c-25 13.3-50.3 26.6-75.5 39.9-45.2 23.9-89.5 47.7-135.5 71.6V727.3c0-.2.7-.3 1-.5 2.5-1.3 5-2.6 7.4-3.9 19-10.1 38.1-20.1 57.1-30.2 24.5-12.9 49-25.9 73.4-38.8 9-4.8 18-9.5 27.1-14.2 2.2-1.1 4.3-2.3 6.5-3.4 10.3-5.4 20.5-10.7 30.8-16.2C485 618.7 488 617.4 490 616zM465 579.7L465 579.7c-16 9-33.6 18-50.6 26.9-45.6 24.1-91.1 48.2-136.7 72.4-3.4 1.8-6.7 3.6-10.1 5.4-3.4 1.8-6.8 3.6-10.2 5.4L182.2 650c-44.3-23.4-88.5-46.8-132.7-70.2 17-9 33.9-17.9 50.9-26.9 45.6-24.1 91.2-48.1 136.8-72.2 6.8-3.6 13.6-7.7 20.4-10.7h0c6.3 3 12.5 6.5 18.8 9.8 18.8 10 37.4 19.8 56.2 29.8C376.8 533 421 556.3 465 579.7zM745 727.4v219.2c-19-9.4-35.9-18.9-53.8-28.3-45.6-24.1-91.1-48.2-136.7-72.2-6.9-3.6-13.5-7.3-20.5-10.9V615.6c18 9.6 36.2 19.2 54.4 28.9 45.6 24.1 91.2 48.3 136.9 72.4 1.3.7 2.5 1.3 3.8 2C734.4 721.7 739 724.6 745 727.4zM999.1 616.1c-20.4 10.8-40.9 21.4-61.4 32.2-.1.1-.2.1-.3.2-1.5.8-2.9 1.5-4.4 2.3-1.5.8-2.9 1.5-4.3 2.3-.5.3-1.1.6-1.6.8.3-.1.5-.3.8-.4-.1.1-.3.1-.4.2-.1.1-.3.1-.4.2-43.5 23-87 45.9-130.4 68.9-.3.2-.7.3-1 .5-2.3 1.3-4.5 2.5-7.3 3.8 0 0-.1-.1-.1-.1H788v219.6c46-23.8 90.3-47.7 135.5-71.6 25.2-13.3 50.5-26.6 75.5-39.9L999.1 616.1C999 616.1 999.1 616.1 999.1 616.1zM788.3 727.2c2.4-1.3 4.8-2.6 7.3-3.8C793.2 724.7 791.1 726 788.3 727.2zM974.6 579.8c-17 9-33.9 17.9-50.9 26.9-45.6 24.1-91.2 48.2-136.8 72.3-2.5 1.3-5.1 2.7-7.6 4-.1 0-.2.1-.2.1-2.7 1.4-5.4 2.9-8.2 4.4-1.5.8-2.9 1.4-4.3 2.4h0c-25.1-14-50.2-26.7-75.4-40-22.1-11.7-44.3-23.5-66.4-35.2-11.1-5.9-22.1-11.7-33.2-17.5-2.8-1.5-5.5-2.9-8.3-4.4-8.3-4.4-16.5-8.8-24.8-13.2 16.9-8.9 33.9-17.9 50.8-26.8 45.6-24.1 91.2-48.2 136.9-72.3 6.8-3.6 13.6-7.2 20.4-10.8 25.1 13.3 50.2 26.6 75.3 39.8C886.1 533 930.3 556.4 974.6 579.8z" />
                    </svg>
                    Choose Latest products
                  </button>
                </h2>
                <div
                  id="collapseOneLatest"
                  className="accordion-collapse collapse "
                  aria-labelledby="headingaccordionLatest"
                  data-bs-parent="#headingaccordionLatest"
                >
                  <div className="accordion-body">

                    <div className="col-md-12">



                      <div className="mb-4">
                        <label htmlFor="title">  Choose Latest products</label>
                        <select multiple="true" placeholder="Choose Latest products" id="LatestProductSelect" data-allow-clear={1} >

                          {Products ? (Products.map((product) => (
                            <option key={product.id} value={product._id}
                              selected={!isLoading && layout?.latest_product?.includes(product._id) ? 'selected' : null}
                            >{product.title}</option>
                          ))) : (<>
                            loading....
                          </>)}


                        </select>

                      </div>
                    </div>


                    <div id="imageTrendingBanner2Container" className="row mt-4">
                      {layout.latest_product_banner && (
                        <>
                          {layout.latest_product_banner.map((banner, index) => (
                            <div
                              className="col-md-6 col-6"
                              key={index}
                            >

                              <div className="imageTbanner2Divs-box">

                                <div
                                  className={`input-group imageupload-bx mb-3`}
                                >
                                  <img
                                    className="image-preview"
                                    src={banner.imageInput}
                                    alt="Preview"
                                    id={`imageinputTbanner2img${index + 1}`}
                                    data-bs-toggle="modal"
                                    data-bs-target="#modal-default"
                                  />
                                  <input
                                    type="hidden"
                                    className="form-control imageopen"
                                    id={`imageinputImageTbanner2Url${index + 1}`}
                                    name="productImg[]"
                                    value={banner.imageInput}
                                  />
                                </div>

                                <div className="mb-4">
                                  <label htmlFor="title" className="text-center d-block">
                                    Image Url
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control productTbanner2Url"
                                    id={`productTbanner2UrlD${index + 1}`}
                                    name="productTbanner2Url[][]"
                                    defaultValue={banner.imageUrlInput || ''}
                                    onChange={(e) => {
                                      const value = e.target.value; // Get the value directly
                                      console.log(value); // Do something with the value if needed
                                    }}
                                  />
                                </div>


                              </div>


                              <button
                                className="btn btn-danger d-block m-auto"
                                onClick={removeSliderImageDiv}
                              >
                                Delete
                              </button>
                              <br />
                            </div>
                          ))}
                        </>
                      )}

                      {imageTbanner2Divs.map((imageTbanner2Divs, index) => (
                        <React.Fragment key={index}>
                          {imageTbanner2Divs}
                        </React.Fragment>
                      ))}
                    </div>

                    <div className="col-md-12">
                      <button
                        onClick={addTbanner2ImageDiv}
                        className="btn btn-secondary btn-sm"
                        type="button"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mx-1"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#1f2937"
                          stroke-width="1.5"
                          stroke-linecap="square"
                          stroke-linejoin="arcs"
                        >
                          <rect
                            x="3"
                            y="3"
                            width="18"
                            height="18"
                            rx="2"
                          />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <path d="M20.4 14.5L16 10 4 20" />
                        </svg>
                        Add Banner (1500 × 500 px)
                      </button>


                    </div>




                    <div id="imageTrendingCarousal2Container" className="row mt-4">
                      {layout.latest_product_carousal && (
                        <>
                          {layout.latest_product_carousal.map((carousal, index) => (
                            <div
                              className="col-md-4 col-6"
                              key={index}
                            >
                              <div className="imageTcarousal2Divs-box">

                                <div
                                  className={`input-group imageupload-bx mb-3`}
                                >
                                  <img
                                    className="image-preview"
                                    src={carousal.imageInput}
                                    alt="Preview"
                                    id={`imageTcarousal2inputSImgD${index + 1}`}
                                    data-bs-toggle="modal"
                                    data-bs-target="#modal-default"
                                  />
                                  <input
                                    type="hidden"
                                    className="form-control imageopen"
                                    id={`imageTcarousal2inputImage${index + 1}`}
                                    name="productImg[]"
                                    value={carousal.imageInput}

                                  />
                                </div>

                                <div className="mb-4">
                                  <label htmlFor="title" className="text-center d-block">
                                    Image Url
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control productTcarousal2Url"
                                    id={`productTcarousal2UrlD${index + 1}`}
                                    name="productTcarousal2Url[][]"
                                    defaultValue={carousal.imageUrlInput || ''}
                                    onChange={(e) => {
                                      const value = e.target.value; // Get the value directly
                                      console.log(value); // Do something with the value if needed
                                    }}
                                  />
                                </div>


                              </div>

                              <button
                                className="btn btn-danger d-block m-auto"
                                onClick={removeSliderImageDiv}
                              >
                                Delete
                              </button>
                              <br />
                            </div>
                          ))}
                        </>
                      )}

                      {imageTcarousal2Divs.map((imageTcarousal2Divs, index) => (
                        <React.Fragment key={index}>
                          {imageTcarousal2Divs}
                        </React.Fragment>
                      ))}
                    </div>

                    <div className="col-md-12">
                      <button
                        onClick={addTcarousal2ImageDiv}
                        className="btn btn-secondary btn-sm"
                        type="button"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mx-1"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#1f2937"
                          stroke-width="1.5"
                          stroke-linecap="square"
                          stroke-linejoin="arcs"
                        >
                          <rect
                            x="3"
                            y="3"
                            width="18"
                            height="18"
                            rx="2"
                          />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <path d="M20.4 14.5L16 10 4 20" />
                        </svg>
                        Add Carousal (1000 × 1000 px)
                      </button>


                    </div>



                  </div>
                </div>
              </div>

            </div>


            <div className="accordion mb-2" id="headingOneSellingSmart">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOneSellingSmart">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOneSellingSmart"
                    aria-expanded="false"
                    aria-controls="collapseOneSellingSmart"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height={20}
                      width={20}
                      fill="currentColor"
                      enableBackground="new 0 0 1024 1024"
                      viewBox="0 0 1024 1024"
                      className="me-2"
                    >
                      <path d="M490 324.2v219.5c-18-9.6-36.2-19.2-54.4-28.8-45.6-24.1-91.2-48.2-136.9-72.3-6.6-3.5-12.7-7.1-19.7-10.5V212.7c2 1.2 4.7 2.4 7 3.6.1.1.2.1.3.2 6.8 3.6 13.5 7.1 20.3 10.7 2.2 1.2 4.5 2.4 6.7 3.6 2.3 1.2 4.5 2.4 6.8 3.6 4.5 2.4 9.1 4.8 13.6 7.2 45.6 24.1 91.3 48 136.9 72.1.2.1.3 0 .5.1 1.1.6 2.2 1.3 3.3 1.3h0c.2 1 .4.6.5.7 2.6 1.4 5.1 2.9 7.7 4.3 1.5.8 2.8 1.7 4.3 2.5C488 323 489 323.7 490 324.2zM745 213.1v219.2c0 0-.1 0-.1 0-3.2 1.5-5.6 2.9-8.4 4.4-43.5 23-87 45.9-130.5 68.9-.8.4-1.5.9-2.4 1.3-23.2 12.2-46.6 24.2-69.6 36.5V324.2c2-1.5 5.4-2.9 8.2-4.4 43.5-23 87-46 130.5-68.9C696.8 238.2 721 225.8 745 213.1zM720.2 176.8c-17 9-33.9 17.9-50.9 26.9-45.6 24.1-91.2 48.2-136.9 72.3-6.8 3.6-13.6 7.2-20.4 10.8-25.1-13.3-50.2-26.5-75.3-39.8-44.3-23.4-88.5-46.8-132.8-70.2 17-9 33.9-17.9 50.9-26.9 45.6-24.1 91.2-48.2 136.8-72.3 6.8-3.6 13.6-7.2 20.4-10.8 25.1 13.3 50.2 26.5 75.4 39.8C631.6 130 675.9 153.4 720.2 176.8zM236 727.4v219.2c-19-9.4-35.9-18.9-53.7-28.3-45.6-24.1-91.1-48.2-136.7-72.2-6.9-3.6-14.5-7.3-20.5-10.9V615.8c3 2.1 7.8 4.2 11.8 6.2.6.3 1.1.6 1.6.9 6.8 3.6 13.6 7.4 20.5 11 6.8 3.6 13.6 7 20.4 11h0c45.3 24 90.6 47.7 135.9 71.6.1 0 .2 0 .3 0 .1 0 .2 0 .2.1.2.1.3.1.5.2 1.3.7 2.5 1.3 3.8 2 5.2 2.8 10.3 5.6 15.6 8.4 0 0 0 0 0 0C235.7 727.3 235.8 727.4 236 727.4L236 727.4zM490 616v219.2c-25 13.3-50.3 26.6-75.5 39.9-45.2 23.9-89.5 47.7-135.5 71.6V727.3c0-.2.7-.3 1-.5 2.5-1.3 5-2.6 7.4-3.9 19-10.1 38.1-20.1 57.1-30.2 24.5-12.9 49-25.9 73.4-38.8 9-4.8 18-9.5 27.1-14.2 2.2-1.1 4.3-2.3 6.5-3.4 10.3-5.4 20.5-10.7 30.8-16.2C485 618.7 488 617.4 490 616zM465 579.7L465 579.7c-16 9-33.6 18-50.6 26.9-45.6 24.1-91.1 48.2-136.7 72.4-3.4 1.8-6.7 3.6-10.1 5.4-3.4 1.8-6.8 3.6-10.2 5.4L182.2 650c-44.3-23.4-88.5-46.8-132.7-70.2 17-9 33.9-17.9 50.9-26.9 45.6-24.1 91.2-48.1 136.8-72.2 6.8-3.6 13.6-7.7 20.4-10.7h0c6.3 3 12.5 6.5 18.8 9.8 18.8 10 37.4 19.8 56.2 29.8C376.8 533 421 556.3 465 579.7zM745 727.4v219.2c-19-9.4-35.9-18.9-53.8-28.3-45.6-24.1-91.1-48.2-136.7-72.2-6.9-3.6-13.5-7.3-20.5-10.9V615.6c18 9.6 36.2 19.2 54.4 28.9 45.6 24.1 91.2 48.3 136.9 72.4 1.3.7 2.5 1.3 3.8 2C734.4 721.7 739 724.6 745 727.4zM999.1 616.1c-20.4 10.8-40.9 21.4-61.4 32.2-.1.1-.2.1-.3.2-1.5.8-2.9 1.5-4.4 2.3-1.5.8-2.9 1.5-4.3 2.3-.5.3-1.1.6-1.6.8.3-.1.5-.3.8-.4-.1.1-.3.1-.4.2-.1.1-.3.1-.4.2-43.5 23-87 45.9-130.4 68.9-.3.2-.7.3-1 .5-2.3 1.3-4.5 2.5-7.3 3.8 0 0-.1-.1-.1-.1H788v219.6c46-23.8 90.3-47.7 135.5-71.6 25.2-13.3 50.5-26.6 75.5-39.9L999.1 616.1C999 616.1 999.1 616.1 999.1 616.1zM788.3 727.2c2.4-1.3 4.8-2.6 7.3-3.8C793.2 724.7 791.1 726 788.3 727.2zM974.6 579.8c-17 9-33.9 17.9-50.9 26.9-45.6 24.1-91.2 48.2-136.8 72.3-2.5 1.3-5.1 2.7-7.6 4-.1 0-.2.1-.2.1-2.7 1.4-5.4 2.9-8.2 4.4-1.5.8-2.9 1.4-4.3 2.4h0c-25.1-14-50.2-26.7-75.4-40-22.1-11.7-44.3-23.5-66.4-35.2-11.1-5.9-22.1-11.7-33.2-17.5-2.8-1.5-5.5-2.9-8.3-4.4-8.3-4.4-16.5-8.8-24.8-13.2 16.9-8.9 33.9-17.9 50.8-26.8 45.6-24.1 91.2-48.2 136.9-72.3 6.8-3.6 13.6-7.2 20.4-10.8 25.1 13.3 50.2 26.6 75.3 39.8C886.1 533 930.3 556.4 974.6 579.8z" />
                    </svg>
                    Best Selling Smartphone

                  </button>
                </h2>
                <div
                  id="collapseOneSellingSmart"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingOneSellingSmart"
                  data-bs-parent="#accordionSellingSmart"
                >
                  <div className="accordion-body">

                    <div className="mb-4">
                      <label htmlFor="title">Choose Best Selling Smartphone</label>

                      <select multiple="true" placeholder="Select Best Selling Smartphone" id="BestSellingSmartphoneSelect" data-allow-clear={1} >


                        {Products ? (Products.map((product) => (
                          <option key={product.id} value={product._id}
                            selected={!isLoading && layout.best_selling_smartphone.includes(product._id) ? 'selected' : null}
                          >{product.title}</option>
                        ))) : (<>
                          loading....
                        </>)}


                      </select>
                    </div>

                  </div>
                </div>
              </div>

            </div>
            <hr className="mt-3 mb-3" />
            <h5> Product Section</h5>
            <div className="accordion mb-2" id="headingOneRecommendedProduct">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingRecommendedProduct">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOneRecommendedProduct"
                    aria-expanded="false"
                    aria-controls="collapseOneRecommendedProduct"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height={20}
                      width={20}
                      fill="currentColor"
                      enableBackground="new 0 0 1024 1024"
                      viewBox="0 0 1024 1024"
                      className="me-2"
                    >
                      <path d="M490 324.2v219.5c-18-9.6-36.2-19.2-54.4-28.8-45.6-24.1-91.2-48.2-136.9-72.3-6.6-3.5-12.7-7.1-19.7-10.5V212.7c2 1.2 4.7 2.4 7 3.6.1.1.2.1.3.2 6.8 3.6 13.5 7.1 20.3 10.7 2.2 1.2 4.5 2.4 6.7 3.6 2.3 1.2 4.5 2.4 6.8 3.6 4.5 2.4 9.1 4.8 13.6 7.2 45.6 24.1 91.3 48 136.9 72.1.2.1.3 0 .5.1 1.1.6 2.2 1.3 3.3 1.3h0c.2 1 .4.6.5.7 2.6 1.4 5.1 2.9 7.7 4.3 1.5.8 2.8 1.7 4.3 2.5C488 323 489 323.7 490 324.2zM745 213.1v219.2c0 0-.1 0-.1 0-3.2 1.5-5.6 2.9-8.4 4.4-43.5 23-87 45.9-130.5 68.9-.8.4-1.5.9-2.4 1.3-23.2 12.2-46.6 24.2-69.6 36.5V324.2c2-1.5 5.4-2.9 8.2-4.4 43.5-23 87-46 130.5-68.9C696.8 238.2 721 225.8 745 213.1zM720.2 176.8c-17 9-33.9 17.9-50.9 26.9-45.6 24.1-91.2 48.2-136.9 72.3-6.8 3.6-13.6 7.2-20.4 10.8-25.1-13.3-50.2-26.5-75.3-39.8-44.3-23.4-88.5-46.8-132.8-70.2 17-9 33.9-17.9 50.9-26.9 45.6-24.1 91.2-48.2 136.8-72.3 6.8-3.6 13.6-7.2 20.4-10.8 25.1 13.3 50.2 26.5 75.4 39.8C631.6 130 675.9 153.4 720.2 176.8zM236 727.4v219.2c-19-9.4-35.9-18.9-53.7-28.3-45.6-24.1-91.1-48.2-136.7-72.2-6.9-3.6-14.5-7.3-20.5-10.9V615.8c3 2.1 7.8 4.2 11.8 6.2.6.3 1.1.6 1.6.9 6.8 3.6 13.6 7.4 20.5 11 6.8 3.6 13.6 7 20.4 11h0c45.3 24 90.6 47.7 135.9 71.6.1 0 .2 0 .3 0 .1 0 .2 0 .2.1.2.1.3.1.5.2 1.3.7 2.5 1.3 3.8 2 5.2 2.8 10.3 5.6 15.6 8.4 0 0 0 0 0 0C235.7 727.3 235.8 727.4 236 727.4L236 727.4zM490 616v219.2c-25 13.3-50.3 26.6-75.5 39.9-45.2 23.9-89.5 47.7-135.5 71.6V727.3c0-.2.7-.3 1-.5 2.5-1.3 5-2.6 7.4-3.9 19-10.1 38.1-20.1 57.1-30.2 24.5-12.9 49-25.9 73.4-38.8 9-4.8 18-9.5 27.1-14.2 2.2-1.1 4.3-2.3 6.5-3.4 10.3-5.4 20.5-10.7 30.8-16.2C485 618.7 488 617.4 490 616zM465 579.7L465 579.7c-16 9-33.6 18-50.6 26.9-45.6 24.1-91.1 48.2-136.7 72.4-3.4 1.8-6.7 3.6-10.1 5.4-3.4 1.8-6.8 3.6-10.2 5.4L182.2 650c-44.3-23.4-88.5-46.8-132.7-70.2 17-9 33.9-17.9 50.9-26.9 45.6-24.1 91.2-48.1 136.8-72.2 6.8-3.6 13.6-7.7 20.4-10.7h0c6.3 3 12.5 6.5 18.8 9.8 18.8 10 37.4 19.8 56.2 29.8C376.8 533 421 556.3 465 579.7zM745 727.4v219.2c-19-9.4-35.9-18.9-53.8-28.3-45.6-24.1-91.1-48.2-136.7-72.2-6.9-3.6-13.5-7.3-20.5-10.9V615.6c18 9.6 36.2 19.2 54.4 28.9 45.6 24.1 91.2 48.3 136.9 72.4 1.3.7 2.5 1.3 3.8 2C734.4 721.7 739 724.6 745 727.4zM999.1 616.1c-20.4 10.8-40.9 21.4-61.4 32.2-.1.1-.2.1-.3.2-1.5.8-2.9 1.5-4.4 2.3-1.5.8-2.9 1.5-4.3 2.3-.5.3-1.1.6-1.6.8.3-.1.5-.3.8-.4-.1.1-.3.1-.4.2-.1.1-.3.1-.4.2-43.5 23-87 45.9-130.4 68.9-.3.2-.7.3-1 .5-2.3 1.3-4.5 2.5-7.3 3.8 0 0-.1-.1-.1-.1H788v219.6c46-23.8 90.3-47.7 135.5-71.6 25.2-13.3 50.5-26.6 75.5-39.9L999.1 616.1C999 616.1 999.1 616.1 999.1 616.1zM788.3 727.2c2.4-1.3 4.8-2.6 7.3-3.8C793.2 724.7 791.1 726 788.3 727.2zM974.6 579.8c-17 9-33.9 17.9-50.9 26.9-45.6 24.1-91.2 48.2-136.8 72.3-2.5 1.3-5.1 2.7-7.6 4-.1 0-.2.1-.2.1-2.7 1.4-5.4 2.9-8.2 4.4-1.5.8-2.9 1.4-4.3 2.4h0c-25.1-14-50.2-26.7-75.4-40-22.1-11.7-44.3-23.5-66.4-35.2-11.1-5.9-22.1-11.7-33.2-17.5-2.8-1.5-5.5-2.9-8.3-4.4-8.3-4.4-16.5-8.8-24.8-13.2 16.9-8.9 33.9-17.9 50.8-26.8 45.6-24.1 91.2-48.2 136.9-72.3 6.8-3.6 13.6-7.2 20.4-10.8 25.1 13.3 50.2 26.6 75.3 39.8C886.1 533 930.3 556.4 974.6 579.8z" />
                    </svg>
                    Recommended Products

                  </button>
                </h2>
                <div
                  id="collapseOneRecommendedProduct"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingOneRecommendedProduct"
                  data-bs-parent="#accordionRecommendedProduct"
                >
                  <div className="accordion-body">

                    <div className="mb-4">
                      <label htmlFor="title">Choose Recommended Products</label>

                      <select multiple="true" placeholder="Select Recommended Products" id="RecommendedProductsSelect" data-allow-clear={1} >


                        {Products ? (Products.map((product) => (
                          <option key={product.id} value={product._id}
                            selected={!isLoading && layout.recommended_products.includes(product._id) ? 'selected' : null}
                          >{product.title}</option>
                        ))) : (<>
                          loading....
                        </>)}


                      </select>
                    </div>

                  </div>
                </div>
              </div>

            </div>



            <div className="col-12 mt-4">
              {SubmitLoading ? (
                <button
                  className="btn btn-secondary"
                  type="button"
                  onClick={submitData}
                >
                  Update layout
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

          <Gallery />



        </div>


      </main>
    </>
  );
};

export default HomeLayout;