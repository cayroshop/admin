import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import toast from "react-hot-toast";
import Gallery from "../../components/Gallery";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import Select from "react-select";
import { triggerChooseimg } from "../../components/ChooseImg";
import axiosInstance from "../../../axiosInstance";

const AddProduct = () => {
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedTagOptions, setTagSelectedOptions] = useState([]);

  const [AddVarLoading, setAddVarLoading] = useState(true); // Add loading state

  const [SubmitLoading, setSubmitLoading] = useState(true); // Add loading state

  const [imageDivs, setImageDivs] = useState([]);

  const addImageDiv = () => {
    const newImageDiv = (
      <div key={imageDivs.length} className={`col-md-3 col-6`}>
        <div className={`input-group imageupload-bx mb-3`}>
          <img
            className="image-preview"
            src="/assets/images/placeholder.png"
            alt="Preview"
            id={`imageinput${imageDivs.length}`}
            data-bs-toggle="modal"
            data-bs-target="#modal-default"
          />
          <input
            type="hidden"
            className="form-control imageopen"
            id={`imageproduct${imageDivs.length}`}
            name="productImg[]"
            value="/assets/images/placeholder.png"
          />
        </div>
        <button
          className="btn btn-danger d-block m-auto"
          onClick={removeImageDiv}
        >
          Delete
        </button>
        <br />
      </div>
    );

    const updatedImageDivs = [...imageDivs, newImageDiv];
    setImageDivs(updatedImageDivs);
    setTimeout(function () {
      triggerChooseimg();
    }, 1);
  };

  const removeImageDiv = (event) => {
    const button = event.target;
    const parentDiv = button.parentNode; // Accessing the parent div
    parentDiv.remove(); // Remove the parent div
  };

  // product feature 

  const [Features, setFeatures] = useState([]);

  const addFeatures = () => {
    const newFeatures = (
      <div key={Features.length} className="col-md-12 mb-2 d-flex gap-2">
        <input
          type="text"
          className="form-control"
          placeholder="Type Features"
          id={`Features${Features.length}`}
        />

        <button
          className="btn btn-danger d-block m-auto"
          onClick={removeFeatures}
        >
          Delete
        </button>
        <br />
      </div>
    );

    const updatedFeatures = [...Features, newFeatures];
    setFeatures(updatedFeatures);
  };

  const removeFeatures = (event) => {
    const button = event.target;
    const parentDiv = button.parentNode; // Accessing the parent div
    parentDiv.remove(); // Remove the parent div
  };

  // specifications start

  const [specifications, setSpecifications] = useState([]);

  const [SpecificationsData, setSpecificationsData] = useState({
    specifications: [],
  });

  const addSpecification = () => {
    const newSpecification = {
      heading: "",
      labels: [{ label: "", value: "" }],
    };

    // Check if SpecificationsData is defined
    if (!SpecificationsData) {
      // If SpecificationsData is undefined, initialize it with specifications array containing newSpecification
      setSpecificationsData({
        specifications: [newSpecification],
      });
    } else {
      // If SpecificationsData is defined, check if specifications is defined
      if (!SpecificationsData.specifications) {
        // If specifications is undefined, set it to contain only newSpecification
        setSpecificationsData({
          ...SpecificationsData,
          specifications: [newSpecification],
        });
      } else {
        // If specifications is defined, append newSpecification to the existing array
        const updatedSpecifications = [
          ...SpecificationsData.specifications,
          newSpecification,
        ];
        setSpecificationsData({
          ...SpecificationsData,
          specifications: updatedSpecifications,
        });
      }
    }
  };

  const removeSpecification = (index) => {
    const filteredSpecifications = SpecificationsData.specifications.filter(
      (_, i) => i !== index
    );
    setSpecificationsData({
      ...SpecificationsData,
      specifications: filteredSpecifications,
    });
  };

  const addLabelValue = (specIndex) => {
    const updatedSpecifications = [...SpecificationsData.specifications];
    updatedSpecifications[specIndex].labels.push({ label: "", value: "" });
    setSpecificationsData({
      ...SpecificationsData,
      specifications: updatedSpecifications,
    });
  };

  const removeLabelValue = (specIndex, labelIndex) => {
    const updatedSpecifications = [...SpecificationsData.specifications];
    updatedSpecifications[specIndex].labels.splice(labelIndex, 1);
    setSpecificationsData({
      ...SpecificationsData,
      specifications: updatedSpecifications,
    });
  };

  const handleInputChange = (specIndex, labelIndex, field, value) => {
    const updatedSpecifications = [...SpecificationsData.specifications];
    if (labelIndex !== null) {
      updatedSpecifications[specIndex].labels[labelIndex][field] = value;
    } else {
      updatedSpecifications[specIndex][field] = value;
    }
    setSpecificationsData({
      ...SpecificationsData,
      specifications: updatedSpecifications,
    });
  };

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    description: "",
    metaTitle: "",
    metaDescription: "",
    metaKeywords: "",
    regularPrice: "",
    salePrice: "",
    variations: "",
    tag: "",
    Category: "",
    status: "true",
    pImage: "",
    images: "",
    sku: "",
    hsn: "",
  });

  const handleselectChange = (selectedValues) => {
    const categoryIds = selectedValues.map((category) => category.value); // Extracting ObjectId values

    setSelectedOptions(selectedValues);
    setFormData((prevData) => ({
      ...prevData,
      Category: categoryIds, // Setting the array of ObjectId values
    }));
  };

  const handleTagChange = (selectedTagValues) => {
    const categoryIds = selectedTagValues.map((Tag) => Tag.value); // Extracting ObjectId values
    setTagSelectedOptions(selectedTagValues);
    setFormData((prevData) => ({
      ...prevData,
      tag: categoryIds, // Setting the array of ObjectId values
    }));
  };

  const [showCode, setShowCode] = useState(false);
  const handleDescriptionChange = (value) => {
    setFormData({ ...formData, description: value });
  };

  const toggleShowCode = () => {
    setShowCode(!showCode);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleSlugChange = (e) => {
    const { value } = e.target;
    // Convert to lowercase and remove disallowed characters
    var slug = value.toLowerCase().replace(/[^\w\s-]/g, "");

    slug = slug.replace(/\s+/g, "-");

    setFormData((prevData) => ({
      ...prevData,
      slug: slug,
    }));
  };

  const [data, setData] = useState([]);
  const [TagData, setTagData] = useState([]);

  const [loading, setLoading] = useState(true); // Add loading state
  const [Variation, setVariation] = useState([]);
  const [ValueVariation, setValueVariation] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get("/all-category");
      console.log(response.data.categories);
      setData(response.data.categories);
      setLoading(false);
      fetchcurrent();
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  function fetchcurrent() { }

  const fetchTagData = async () => {
    try {
      const response = await axiosInstance.get("/admin/all-tag");
      console.log("tag", response.data.Tag);
      setTagData(response.data.Tag);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const addVariations = async () => {
    setAddVarLoading(false);

    try {
      const response = await axiosInstance.get("/admin/all-attribute");
      console.log(response.data.Attribute);
      setVariation(response.data.Attribute);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setAddVarLoading(true);
    }
  };

  const createButtons = () => {
    return Variation.map((variation, index) => (
      <button
        key={index}
        className="btn btn-primary btn-sm mx-2"
        type="button"
        onClick={() => handleVariationClick(variation)}
      >
        {variation.name}
      </button>
    ));
  };

  const [selectedVariations, setSelectedVariations] = useState([]);

  const handleVariationClick = (variation) => {
    console.log("Clicked variation:", variation);
    const newValue = variation.value;
    const newName = variation.name;
    setSelectedVariations((oldVariations) => [
      ...oldVariations,
      { value: newValue, name: newName },
    ]);
  };

  useEffect(() => {
    fetchTagData();
    fetchData();
  }, []);

  const submitData = async () => {
    setSubmitLoading(false);

    const imageInputs = document.querySelectorAll(
      '#imageContainer input[type="hidden"]'
    );
    const inputValues = Array.from(imageInputs).map((input) => input.value);

    const myFeatures = document.querySelectorAll(
      '#myFeatures input'
    );
    const FeaturesValues = Array.from(myFeatures).map((input) => input.value);

    const getimage = document.getElementById("image-preview");

    const variationsContainer = document.getElementById("VariationsValue");
    const variationInputs = variationsContainer.querySelectorAll(".col-md-12");

    const structuredData = {};

    variationInputs.forEach((variation) => {
      const inputs = variation.querySelectorAll("input.form-control");
      const select = variation.querySelector("select");

      const variationType = select.getAttribute("name");
      const selectedValue = select.value;

      if (!structuredData[variationType]) {
        structuredData[variationType] = [];
      }

      const data = {
        [variationType]: selectedValue,
        regular: inputs[0].value,
        sale: inputs[1].value,
        stock: inputs[2].value,
      };

      structuredData[variationType].push(data);
    });

    // console.log("specifications", FeaturesValues);

    let updatedFormData;

    if(formData.status === undefined ){

       updatedFormData = {
        ...formData,
        pImage: getimage.src,
        images: inputValues,
        variations: structuredData,
        features: FeaturesValues,
        specifications: SpecificationsData,
        status:"true",
      };

   }else{
     updatedFormData = {
      ...formData,
      pImage: getimage.src,
      images: inputValues,
      variations: structuredData,
      features: FeaturesValues,
      specifications: SpecificationsData,
    };
   }

    try {
      const admintoken = localStorage.getItem("adminToken");
      if (admintoken) {
        await axiosInstance.post("/admin/add-product", updatedFormData);
        console.log("Product Add successfully!");
        toast.success("Product Add successfully!");
        navigate("/all-product");
      }
    } catch (error) {
      console.error("Error On Product:", error);
      console.log(formData);
      toast.error(error.response.data.message);
    } finally {
      setSubmitLoading(true);
    }
  };

  return (
    <>
      <Sidebar />
      <main class="content">
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
                <a href="#">Admin</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Add Products
              </li>
            </ol>
          </nav>
          <div className="d-flex justify-content-between w-100 flex-wrap">
            <div className="mb-3 mb-lg-0">
              <h1 className="h4">Add Products</h1>
            </div>
            <div>
              <Link
                to="/all-product"
                id="goBackButton"
                className="btn btn-primary d-inline-flex align-items-center"
              >
                <svg
                  style={{ transform: "rotate(180deg)" }}
                  className="icon icon-sm"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Go back
              </Link>
            </div>
          </div>
        </div>
        <form method="post" id="add-blog-form">
          <div className="row">
            <div className="col-md-8 mb-4">
              <div className="card border-0 shadow components-section">
                <div className="card-body">
                  <div className="row mb-4">
                    <div className="col-lg-12 col-sm-12">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="mb-4">
                            <label htmlFor="title">Name</label>
                            <input
                              type="text"
                              className="form-control"
                              id="title"
                              value={formData.title}
                              name="title"
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className="col-md-12">
                          <div className="mb-4">
                            <label htmlFor="slug">slug </label>
                            <input
                              type="text"
                              className="form-control"
                              id="slug"
                              value={formData.slug}
                              name="slug"
                              onChange={handleSlugChange}
                            />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="mb-4">
                            <label htmlFor="slug">Product Regular Price </label>
                            <input
                              type="number"
                              className="form-control"
                              id="regularPrice"
                              value={formData.regularPrice}
                              name="regularPrice"
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="mb-4">
                            <label htmlFor="slug">Product Sale Price </label>
                            <input
                              type="number"
                              className="form-control"
                              id="salePrice"
                              value={formData.salePrice}
                              name="salePrice"
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <hr />

                        <div className="col-md-12">
                          <button
                            onClick={addImageDiv}
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
                              <rect x="3" y="3" width="18" height="18" rx="2" />
                              <circle cx="8.5" cy="8.5" r="1.5" />
                              <path d="M20.4 14.5L16 10 4 20" />
                            </svg>
                            Add Image ( 1000px X 1000px )  

                          </button>
                          <div id="imageContainer" className="row">

                            {imageDivs.map((imageDiv, index) => (
                              <React.Fragment key={index}>
                                {imageDiv}
                              </React.Fragment>
                            ))}
                          </div>
                        </div>

                        <div className="col-md-12">
                          <div className="mb-4">
                            <label
                              htmlFor="description"
                              className="d-flex align-items-center justify-content-between"
                            >
                              {" "}
                              Description
                              <span></span>
                              <button
                                onClick={toggleShowCode}
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
                                  <polyline points="16 18 22 12 16 6"></polyline>
                                  <polyline points="8 6 2 12 8 18"></polyline>
                                </svg>
                                {showCode ? "Show Editor" : "Show Code"}
                              </button>
                            </label>

                            {showCode ? (
                              <textarea
                                className="form-control"
                                value={formData.description}
                                onChange={(e) =>
                                  handleDescriptionChange(e.target.value)
                                }
                                rows={5}
                                cols={80}
                              />
                            ) : (
                              <ReactQuill
                                value={formData.description}
                                onChange={handleDescriptionChange}
                                modules={{
                                  toolbar: [
                                    [
                                      { header: "1" },
                                      { header: "2" },
                                      { font: [] },
                                    ],
                                    [{ size: [] }],
                                    [
                                      "bold",
                                      "italic",
                                      "underline",
                                      "strike",
                                      "blockquote",
                                    ],
                                    [{ list: "ordered" }, { list: "bullet" }],
                                    ["link"],
                                    ["clean"],
                                  ],
                                }}
                                formats={[
                                  "header",
                                  "font",
                                  "size",
                                  "bold",
                                  "italic",
                                  "underline",
                                  "strike",
                                  "blockquote",
                                  "list",
                                  "bullet",
                                  "link",
                                ]}
                                bounds={".app"}
                              />
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-12">
                          <div className="mb-4">
                            <label htmlFor="metaTitle">Meta Title</label>
                            <input
                              type="text"
                              className="form-control"
                              id="metaTitle"
                              value={formData.metaTitle}
                              name="metaTitle"
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className="col-md-12">
                          <div className="mb-4">
                            <label htmlFor="metaDescription">
                              Meta Description
                            </label>
                            <textarea
                              className="form-control"
                              value={formData.metaDescription}
                              rows="4"
                              name="metaDescription"
                              id="metaDescription"
                              onChange={handleChange}
                            ></textarea>
                          </div>
                        </div>

                        <div className="col-md-12">
                          <div className="mb-4">
                            <label htmlFor="metaKeywords">Meta Keywords</label>
                            <textarea
                              className="form-control"
                              rows="4"
                              value={formData.metaKeywords}
                              name="metaKeywords"
                              id="metaKeywords"
                              onChange={handleChange}
                            ></textarea>
                          </div>
                        </div>

                        <hr />

                        <div className="col-md-12">
                          <div className="mb-4">
                            <label
                              htmlFor="KeyFeatures"
                              className="d-block mb-2"
                            >
                              Key Features
                            </label>

                            <div id="myFeatures">
                              {Features.map((Features, index) => (
                                <React.Fragment key={index}>
                                  {Features}
                                </React.Fragment>
                              ))}
                            </div>

                            <button
                              onClick={addFeatures}
                              className="btn btn-secondary btn-sm"
                              type="button"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#1f2937"
                                stroke-width="2"
                                stroke-linecap="square"
                                stroke-linejoin="arcs"
                              >
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                              </svg>
                              Add Features
                            </button>
                          </div>

                        </div>

                        <hr />


                        <div className="col-md-4">
                          <div className="mb-4">
                            <label htmlFor="metaTitle">Total Stock</label>
                            <input
                              type="number"
                              className="form-control"
                              id="stock"
                              value={formData.stock}
                              name="stock"
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="mb-4">
                            <label htmlFor="metaTitle">Total Weight in KG</label>
                            <input
                              type="number"
                              className="form-control"
                              id="weight"
                              value={formData.weight}
                              name="weight"
                              onChange={handleChange}
                            />
                          </div>
                        </div>


                        <div className="col-md-4">
                          <div className="mb-4">
                            <label htmlFor="gst">GST %</label>
                            <input
                              type="number"
                              className="form-control"
                              id="gst"
                              value={formData.gst}
                              name="gst"
                              onChange={handleChange}
                            />
                          </div>
                        </div>


                        <div className="col-md-12 mb-3 ">
                          {AddVarLoading ? (
                            <button
                              onClick={addVariations}
                              className="btn btn-secondary btn-sm"
                              type="button"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#1f2937"
                                stroke-width="2"
                                stroke-linecap="square"
                                stroke-linejoin="arcs"
                              >
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                              </svg>
                              Add Variations
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

                          <div id="VariationsContainer">{createButtons()}</div>

                          {/* <table class="table table-bordered mt-3">
                            <thead>
                              <tr>
                                <th scope="col" className="text-center">
                                  Name
                                </th>
                                <th scope="col" className="text-center">
                                  Variation
                                </th>
                                <th scope="col" className="text-center">
                                  Regular ₹
                                </th>
                                <th scope="col" className="text-center">
                                  Sale ₹
                                </th>
                                <th scope="col" className="text-center">
                                  Stock
                                </th>
                                <th
                                  scope="col"
                                  className="text-center"
                                  style={{ maxWidth: "80px" }}
                                >
                                  Action
                                </th>
                              </tr>
                            </thead>
                          </table> */}

                          <div id="VariationsValue" className="mt-4">
                            {/* Iterate through selectedVariations to display selected values */}
                            {selectedVariations.map((Variations, index) => (
                              <div
                                key={index}
                                className="col-md-12 mb-4 d-flex gap-2"
                              >
                                <input
                                  key={index}
                                  type="text"
                                  className="btn btn-secondary btn-sm m-0 mydisabled"
                                  placeholder="Regular Price"
                                  id={`imageproduct${index}`}
                                  value={Variations.name}
                                  name={Variations.name}
                                  disabled
                                />

                                <select
                                  className="form-control select"
                                  id="parent"
                                  name={Variations.name}
                                >
                                  <option disabled selected>
                                    {" "}
                                    Select Variation
                                  </option>
                                  {Variations.value.map((value, innerIndex) => (
                                    <option key={innerIndex}> {value}</option>
                                  ))}
                                </select>

                                <input
                                  key={index}
                                  type="text"
                                  className="form-control"
                                  placeholder="Regular Price"
                                  id={`imageproduct${index}`}
                                  name={Variations.name}
                                />

                                <input
                                  key={index}
                                  type="text"
                                  className="form-control"
                                  placeholder="Sale Price"
                                  id={`imageproduct${index}`}
                                  name={Variations.name}
                                />

                                <input
                                  key={index}
                                  type="text"
                                  className="form-control"
                                  placeholder="Stock"
                                  id={`imageproduct${index}`}
                                  name={Variations.name}
                                />

                                <button
                                  className="btn btn-danger d-block m-0 "
                                  onClick={removeImageDiv}
                                >
                                  Delete
                                </button>
                                <br />
                              </div>
                            ))}
                          </div>



                          <div className="row">
                            <div className="col-md-6">
                              <div className="mb-4">
                                <label htmlFor="metaTitle">Variations Bundle ID</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="hsn"
                                  value={formData.hsn}
                                  name="hsn"
                                  onChange={handleChange}
                                />
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div className="mb-4">
                                <label htmlFor="metaTitle">Products SKU</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="sku"
                                  value={formData.sku}
                                  name="sku"
                                  onChange={handleChange}
                                />
                              </div>
                            </div>

                          </div>


                          <hr />

                          <div className="col-md-12">
                            <div className="mb-4">
                              <label
                                htmlFor="KeyFeatures"
                                className="d-block mb-2"
                              >
                                Key Specification
                              </label>

                              {SpecificationsData.specifications.map(
                                (specification, specIndex) => (
                                  <div
                                    key={specIndex}
                                    className="col-md-12 mb-2"
                                    style={{
                                      background: "#f2f4f6",
                                      padding: 10,
                                      borderRadius: 10,
                                    }}
                                  >
                                    {/* <h6>Specification {specIndex + 1}</h6> */}
                                    <div className="mb-2">
                                      <label>Heading:</label>
                                      <input
                                        type="text"
                                        className="form-control"

                                        value={specification.heading}
                                        onChange={(e) =>
                                          handleInputChange(
                                            specIndex,
                                            null,
                                            "heading",
                                            e.target.value
                                          )
                                        }
                                      />
                                    </div>
                                    {specification.labels.map(
                                      (label, labelIndex) => (
                                        <div
                                          key={labelIndex}
                                          className="row mb-2"
                                        >
                                          <div className="col-md-5">
                                            <label>Label:</label>
                                            <input
                                              type="text"
                                              className="form-control"

                                              value={label.label}
                                              onChange={(e) =>
                                                handleInputChange(
                                                  specIndex,
                                                  labelIndex,
                                                  "label",
                                                  e.target.value
                                                )
                                              }
                                            />
                                          </div>
                                          <div className="col-md-5">
                                            <label>Value:</label>
                                            <input
                                              type="text"
                                              className="form-control"

                                              value={label.value}
                                              onChange={(e) =>
                                                handleInputChange(
                                                  specIndex,
                                                  labelIndex,
                                                  "value",
                                                  e.target.value
                                                )
                                              }
                                            />
                                          </div>
                                          <div className="col-md-2">
                                            <label className="d-block">
                                              Action
                                            </label>
                                            {labelIndex === 0 && (
                                              <button
                                                className="btn btn-primary mt-0"
                                                onClick={() =>
                                                  addLabelValue(specIndex)
                                                }
                                                type="button"
                                              >
                                                <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  width={20}
                                                  height={20}
                                                  viewBox="0 0 24 24"
                                                  fill="none"
                                                  stroke="white"
                                                  strokeWidth={2}
                                                  strokeLinecap="square"
                                                  strokeLinejoin="arcs"
                                                >
                                                  <line
                                                    x1={12}
                                                    y1={5}
                                                    x2={12}
                                                    y2={19}
                                                  />
                                                  <line
                                                    x1={5}
                                                    y1={12}
                                                    x2={19}
                                                    y2={12}
                                                  />
                                                </svg>
                                              </button>
                                            )}
                                            {labelIndex !== 0 && (
                                              <button
                                                className="btn btn-danger mt-0"
                                                onClick={() =>
                                                  removeLabelValue(
                                                    specIndex,
                                                    labelIndex
                                                  )
                                                }
                                                type="button"
                                              >
                                                <svg
                                                  width="20px"
                                                  class="dropdown-icon text-white"
                                                  fill="white"
                                                  viewBox="0 0 20 20"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                >
                                                  <path
                                                    fill-rule="evenodd"
                                                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                    clip-rule="evenodd"
                                                  ></path>
                                                </svg>
                                              </button>
                                            )}
                                          </div>
                                        </div>
                                      )
                                    )}
                                    <button
                                      className="btn btn-danger"
                                      onClick={() =>
                                        removeSpecification(specIndex)
                                      }
                                      type="button"
                                    >
                                      Delete
                                    </button>
                                  </div>
                                )
                              )}

                              <button
                                onClick={addSpecification}
                                className="btn btn-secondary btn-sm mb-2"
                                type="button"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="#1f2937"
                                  stroke-width="2"
                                  stroke-linecap="square"
                                  stroke-linejoin="arcs"
                                >
                                  <line x1="12" y1="5" x2="12" y2="19"></line>
                                  <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                                Add Specification
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow components-section">
                <div className="card-body">
                  <div className="row">
                    <h5> Product Image ( 1000px X 1000px) </h5>

                    <hr />

                    <div className="input-group imageupload-bx mb-3">
                      <img
                        src="/assets/images/placeholder.png"
                        className=" "
                        id="image-preview"
                        data-bs-toggle="modal"
                        data-bs-target="#modal-default"
                      />
                      <input
                        type="hidden"
                        className="form-control imageopen"
                        id="image"
                        name="image"
                        value={formData.image}
                        defaultValue="/assets/images/placeholder.png"
                      />
                    </div>

                    <div className="col-md-12">
                      <div className="mb-4">
                        <label htmlFor="title">Product category</label>

                        <Select
                          isMulti
                          value={selectedOptions}
                          name="Category"
                          onChange={handleselectChange}
                          placeholder={
                            loading ? "Loading..." : "Select options"
                          }
                          options={data.map((category) => ({
                            value: category._id,
                            label: category.title,
                          }))}
                        />
                      </div>
                    </div>

                    {/* <div className="col-md-12">
                      <div className="mb-4">
                        <label htmlFor="title">Product Tags</label>

                        <Select
                          isMulti
                          value={selectedTagOptions}
                          name="tag"
                          onChange={handleTagChange}
                          placeholder={
                            loading ? "Loading..." : "Select options"
                          }
                          options={TagData.map((Tag) => ({
                            value: Tag._id,
                            label: Tag.name,
                          }))}
                        />
                      </div>
                    </div> */}

                    <div className="col-4 ">
                      <div className="mb-4">
                        <label className="my-1 me-2" htmlFor="status">
                          Status
                        </label>
                      </div>
                    </div>
                

                    <div className="col-8 ">

<div className="form-check">
<input
className="form-check-input"
type="radio"
name="status"
id="status"
value="true"
onChange={handleChange}
checked="checked"
/>
<label className="form-check-label text-success"  htmlFor="status">
Active
</label>
</div>
<div className="form-check">
<input
className="form-check-input text-danger"
type="radio"
name="status"
id="status1"
value="false"
onChange={handleChange}
/>
<label className="form-check-label  text-danger" htmlFor="status1">
Inactive
</label>
</div>
  
</div>

                    <div className="col-lg-4">
                      <Gallery />
                    </div>
                  </div>
                  <div className="col-12">
                    {SubmitLoading ? (
                      <button
                        className="btn btn-secondary"
                        type="button"
                        onClick={submitData}
                      >
                        Add Product
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
        </form>
      </main>
    </>
  );
};

export default AddProduct;
