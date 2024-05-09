import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import toast from "react-hot-toast";
import Gallery from "../../components/Gallery";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import Select from "react-select";
import { triggerChooseimg } from "../../components/ChooseImg";
import { error } from "jquery";
import axiosInstance from "../../../axiosInstance";
const EditProduct = () => {
  const [Catdata, setData] = useState([]);
  const [TagData, setTagData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const [loading, setLoading] = useState(true); // Add loading state
  const [SubmitLoading, setSubmitLoading] = useState(true); // Add loading state

  const [Category, setCategory] = useState({});
  const [editorValue, setEditorValue] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [nonSelectedOptions, setnonSelectedOptions] = useState([]);

  const [selectedTagOptions, setSelectedTagOptions] = useState([]);
  const [nonSelectedTagOptions, setnonSelectedTagOptions] = useState([]);

  const [ValueVariation, setValueVariation] = useState([]);
  const [Variation, setVariation] = useState([]);
  const [AllVariation, setAllVariation] = useState([]);
  const [AddVarLoading, setAddVarLoading] = useState(true); // Add loading state

  const { slug } = useParams();

  const navigate = useNavigate();

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
    status: "",
    stock: "",
    weight: "",
    pImage: "",
    images: "",
    gst: "",
    hsn: "",
    sku: "",
  });

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
            value="assets/images/placeholder.png"
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
      fetchcurrent();
    }, 1);
  };

  const removeImageDiv = (event) => {
    const button = event.target;
    const parentDiv = button.parentNode; // Accessing the parent div
    parentDiv.remove(); // Remove the parent div
  };

  // product Features
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

  // add specification


  const [SpecificationsData, setSpecificationsData] = useState({
    specifications: [],
  });

  const addSpecification = () => {
    const newSpecification = {
      heading: "",
      labels: [{ label: "", value: "" }],
    };

    // Ensure that SpecificationsData.specifications is not undefined
    if (!SpecificationsData.specifications) {
      setSpecificationsData({
        ...SpecificationsData,
        specifications: [newSpecification],
      });
    } else {
      const updatedSpecifications = [
        ...SpecificationsData.specifications,
        newSpecification,
      ];
      setSpecificationsData({
        ...SpecificationsData,
        specifications: updatedSpecifications,
      });
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


  const getCategory = async () => {
    try {
      const { data } = await axiosInstance.get(`/admin/get-Product/${slug}`);
      setCategory(data.Product);
      console.log(data);
      setLoading(false); // Set loading to false when data is fetched
      // Set the formData.username based on the blog's slug
      setFormData((prevData) => ({
        ...prevData,
        title: data.Product.title,
        slug: data.Product.slug,
        description: data.Product.description,
        metaTitle: data.Product.metaTitle,
        metaDescription: data.Product.metaDescription,
        metaKeywords: data.Product.metaKeywords,
        Category: data.Product.Category,
        regularPrice: data.Product.regularPrice,
        salePrice: data.Product.salePrice,
        status: data.Product.status,
        pImage: data.Product.pImage,
        images: data.Product.images,
        tag: data.Product.tag,
        stock: data.Product.stock,
        variations: data.Product.variations,
        features: data.Product.features,
        weight: data.Product.weight,
        gst: data.Product.gst,
        specifications: data.Product.specifications,
        sku: data.Product.sku,
        hsn: data.Product.hsn,

      }));
      setValueVariation(data.Product.variations);
      if (data.Product.specifications !== undefined) {
        setSpecificationsData(data.Product.specifications)
      }
      console.log('data.Product.specifications', data.Product.specifications)
      setEditorValue(data.Product.description);
      // setTimeout(setnow, 2000);
      setTimeout(fetchcurrent(), 1000);
      // fetchcurrent();
      const fetchData = async () => {
        try {
          const response = await axiosInstance.get("/all-category");
          console.log(response.data.categories);
          setData(response.data.categories);
          setLoading(false);

          const SelectData = response.data.categories;

          if (
            Array.isArray(SelectData) &&
            data.Product.Category &&
            Array.isArray(data.Product.Category)
          ) {
            const categoryIds = data.Product.Category;

            const categorizedOptions = SelectData.reduce(
              (acc, category) => {
                const option = {
                  value: category._id,
                  label: category.title,
                };

                if (categoryIds.includes(category._id)) {
                  acc.selectedOptions.push(option);
                } else {
                  acc.nonSelectedOptions.push(option);
                }

                return acc;
              },
              { selectedOptions: [], nonSelectedOptions: [] }
            );

            setSelectedOptions(categorizedOptions.selectedOptions);
            setnonSelectedOptions(categorizedOptions.nonSelectedOptions);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
          setLoading(false);
        } finally {
          setLoading(false);
        }
      };

      const fetchTagData = async () => {
        try {
          const response = await axiosInstance.get("/admin/all-tag");
          setTagData(response.data.Tag);
          setLoading(true);
          const SelectTagData = response.data.Tag;

          if (
            Array.isArray(SelectTagData) &&
            data.Product.tag &&
            Array.isArray(data.Product.tag)
          ) {
            const categoryIds = data.Product.tag || [];

            const categorizedOptions = SelectTagData.reduce(
              (acc, category) => {
                const option = {
                  value: category._id,
                  label: category.name,
                };

                if (categoryIds.includes(category._id)) {
                  acc.selectedTagOptions.push(option);
                } else {
                  acc.nonSelectedTagOptions.push(option);
                }

                return acc;
              },
              { selectedTagOptions: [], nonSelectedTagOptions: [] }
            );

            setSelectedTagOptions(categorizedOptions.selectedTagOptions);
            setnonSelectedTagOptions(categorizedOptions.nonSelectedTagOptions);
          } else {
          }
        } catch (error) {
          console.error("Error fetching data:", error);
          setLoading(false);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
      fetchcurrent();
      fetchTagData();
    } catch (error) {
      console.log(error);
      toast.error("Error fetching Single company!");
      setLoading(false); // Set loading to false when data is fetched
    }
  };





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
    setSelectedTagOptions(selectedTagValues);
    setFormData((prevData) => ({
      ...prevData,
      tag: categoryIds, // Setting the array of ObjectId values
    }));
  };

  const addVariations = async () => {
    setAddVarLoading(false);
    try {
      const response = await axiosInstance.get("/admin/all-attribute");
      console.log(response.data.Attribute);
      setVariation(response.data.Attribute);
      console.log("attribute", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setAddVarLoading(true);
    }
  };

  const getAllVariations = async () => {
    try {
      const response = await axiosInstance.get("/admin/all-attribute");
      console.log("AllVariation", response.data.Attribute);
      setAllVariation(response.data.Attribute);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const createButtons = () => {
    console.log("myvarition", Variation);
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

  const [showCode, setShowCode] = useState(false);

  const handleDescriptionChange = (value) => {
    try {
      setFormData((prevData) => ({
        ...prevData,
        description: value,
      }));
    } catch (error) {
      console.error("Error in handleDescriptionChange:", error);
    }
  };

  const toggleShowCode = () => {
    setShowCode(!showCode);
  };

  function fetchcurrent() {
    // const imagePreviewElements = document.querySelectorAll('.getimg');
    // if (imagePreviewElements) {
    //   imagePreviewElements.forEach((imageElement) => {
    //     imageElement.addEventListener('click', () => {
    //       console.log('choooseing')
    //       const imageInputs = document.querySelectorAll('#imageContainer input[type="hidden"]');
    //       const inputValues = [];
    //       imageInputs.forEach(input => {
    //         inputValues.push(input.value);
    //       });
    //     });
    //   });
    // }
  }


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };


  const [inputValues, setInputValues] = useState({}); // State to hold input values

  // Function to handle changes in the input fields for variations

  // const handleInputChange = (e, variationType, inputIndex) => {
  //   const { name, value } = e.target;
  //   const updatedInputValues = { ...inputValues };

  //   // Create a unique identifier for each input
  //   const inputId = `${variationType}-${inputIndex}`;

  //   updatedInputValues[inputId] = { ...updatedInputValues[inputId], [name]: value };
  //   setInputValues(updatedInputValues);
  // };

  useEffect(() => {
    getCategory();
    getAllVariations();
  }, []);

  const submitData = async () => {
    setSubmitLoading(false);


    const myFeatures = document.querySelectorAll(
      '#myFeatures input'
    );
    const FeaturesValues = Array.from(myFeatures).map((input) => input.value);


    const imageInputs = document.querySelectorAll(
      '#imageContainer input[type="hidden"]'
    );
    const inputValues = Array.from(imageInputs).map((input) => input.value);
    const getimage = document.getElementById("imageid");

    const variationsContainer = document.getElementById("VariationsValue");
    const variationInputs = variationsContainer.querySelectorAll(".col-md-12");

    const structuredData = {};

    variationInputs.forEach((variation) => {
      const inputs = variation.querySelectorAll("input.form-control");
      const select = variation.querySelector(".form-control.select");

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

    // console.log(structuredData);

    const updatedFormData = {
      ...formData,
      pImage: getimage.src,
      images: inputValues,
      variations: structuredData,
      specifications: SpecificationsData,
      features: FeaturesValues,
    };

    console.log('updatedFormData', updatedFormData)
    try {
      const admintoken = localStorage.getItem("adminToken");
      if (admintoken) {
        await axiosInstance.put(`/admin/update-product/${slug}`, updatedFormData);
        toast.success("Product updated successfully!");
        navigate("/all-product");
      }
    } catch (error) {
      console.error("Error on updating product:", error);
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
                Edit Product
              </li>
            </ol>
          </nav>
          <div className="d-flex justify-content-between w-100 flex-wrap">
            <div className="mb-3 mb-lg-0">
              <h1 className="h4">Edit Product</h1>
            </div>
            <div>
              {" "}
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
        <div id="add-blog-form">
          <div className="row">
            <div className="col-md-8 mb-4">
              <div className="card border-0 shadow components-section">
                <div className="card-body">
                  {loading ? (
                    <>
                      <div className="row mb-4">
                        <div className="col-lg-12 col-sm-12">
                          <div className="row">
                            <br />
                            <div className="col-md-12">
                              <div className="mb-4">
                                <p
                                  className="skeleton"
                                  style={{
                                    width: "100%",
                                    borderRadius: 5,
                                    margin: "0px auto 10px",
                                    height: 70,
                                  }}
                                >
                                  {" "}
                                </p>
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div className="mb-4">
                                <p
                                  className="skeleton"
                                  style={{
                                    width: "100%",
                                    borderRadius: 5,
                                    margin: "0px auto 10px",
                                    height: 70,
                                  }}
                                >
                                  {" "}
                                </p>
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div className="mb-4">
                                <p
                                  className="skeleton"
                                  style={{
                                    width: "100%",
                                    borderRadius: 5,
                                    margin: "0px auto 10px",
                                    height: 70,
                                  }}
                                >
                                  {" "}
                                </p>
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div className="mb-4">
                                <p
                                  className="skeleton"
                                  style={{
                                    width: "100%",
                                    borderRadius: 5,
                                    margin: "0px auto 10px",
                                    height: 70,
                                  }}
                                >
                                  {" "}
                                </p>
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div className="mb-4">
                                <p
                                  className="skeleton"
                                  style={{
                                    width: "100%",
                                    borderRadius: 5,
                                    margin: "0px auto 10px",
                                    height: 70,
                                  }}
                                >
                                  {" "}
                                </p>
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div className="mb-4">
                                <p
                                  className="skeleton"
                                  style={{
                                    width: "100%",
                                    borderRadius: 5,
                                    margin: "0px auto 10px",
                                    height: 70,
                                  }}
                                >
                                  {" "}
                                </p>
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div className="mb-4">
                                <p
                                  className="skeleton"
                                  style={{
                                    width: "100%",
                                    borderRadius: 5,
                                    margin: "0px auto 10px",
                                    height: 70,
                                  }}
                                >
                                  {" "}
                                </p>
                              </div>
                            </div>

                            <div className="col-md-12">
                              <div className="mb-4">
                                <p
                                  className="skeleton"
                                  style={{
                                    width: "100%",
                                    borderRadius: 5,
                                    margin: "0px auto 10px",
                                    height: 135,
                                  }}
                                >
                                  {" "}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="row mb-4">
                        <div className="col-lg-12 col-sm-12">
                          <div className="row">
                          
                            <div className="col-md-12">
                              <div className="mb-4">
                                <label htmlFor="username">Name</label>
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
                                  onChange={handleChange}
                                />
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div className="mb-4">
                                <label htmlFor="slug">
                                  Product Regular Price{" "}
                                </label>
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
                                <label htmlFor="slug">
                                  Product Sale Price{" "}
                                </label>
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
                                Add Image ( 1000px X 1000px )  
                              </button>
                              <div id="imageContainer" className="row">
                                {formData.pImage && (
                                  <>
                                    {formData.images.map((image, index) => (
                                      <div
                                        className="col-md-3 col-6"
                                        key={index}
                                      >
                                        <div
                                          className={`input-group imageupload-bx mb-3`}
                                        >
                                          <img
                                            className="image-preview"
                                            src={image}
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
                                            value={image}
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
                                    ))}
                                  </>
                                )}

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
                                    {showCode ? "Show Editor" : "Show Code"}
                                  </button>
                                </label>

                                {showCode ? (
                                  <textarea
                                    className="form-control"
                                    value={editorValue}
                                    onChange={(value) => {
                                      setEditorValue(value); // Update the editorValue state
                                      handleDescriptionChange(value); // Pass the value to your handleDescriptionChange function if needed
                                    }}
                                    rows={5}
                                    cols={80}
                                    name="description"
                                  />
                                ) : (
                                  <ReactQuill
                                    value={editorValue}
                                    onChange={(value) => {
                                      setEditorValue(value); // Update the editorValue state
                                      handleDescriptionChange(value); // Pass the value to your handleDescriptionChange function if needed
                                    }}
                                    modules={{
                                      toolbar: [
                                        [{ header: "1" }, { header: "2" }],
                                        [{ size: [] }],
                                        ["bold", "italic", "underline"],
                                        [
                                          { list: "ordered" },
                                          { list: "bullet" },
                                        ],
                                        ["link"],
                                        ["clean"],
                                      ],
                                    }}
                                    formats={[
                                      "header",
                                      "size",
                                      "bold",
                                      "italic",
                                      "underline",
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
                                  rows="4"
                                  name="metaDescription"
                                  id="metaDescription"
                                  value={formData.metaDescription}
                                  onChange={handleChange}
                                ></textarea>
                              </div>
                            </div>

                            <div className="col-md-12">
                              <div className="mb-4">
                                <label htmlFor="metaKeywords">
                                  Meta Keywords
                                </label>
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
                                  {formData.features && (
                                    <>
                                      {formData.features.map(
                                        (features, index) => (
                                          <div
                                            className="col-md-12 mb-2 d-flex gap-2"
                                            key={index}
                                          >
                                            <input
                                              type="text"
                                              className="form-control"
                                              id={`Features${index + 1}`}
                                              placeholder="Type Features"
                                              name="productImg[]"
                                              value={features}
                                            />

                                            <button
                                              className="btn btn-danger d-block m-auto"
                                              onClick={removeFeatures}
                                            >
                                              Delete
                                            </button>
                                            <br />
                                          </div>
                                        )
                                      )}
                                    </>
                                  )}

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
                                <label htmlFor="metaTitle">GST %</label>
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

<hr/>

                            <div className="col-12 mb-2">
                              <b className="text-dark"> 
                              {formData.title} - <span className="text-success">  ( {Math.round((((formData.regularPrice - formData.salePrice) / formData.regularPrice) * 100))}% OFF ) </span>
                               </b>
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

                              <div id="VariationsContainer">
                                {createButtons()}
                              </div>


                              <div id="VariationsValue" className="mt-4">

                                {Object.keys(formData?.variations || {}).map(
                                  (variationType, index) => (
                                    <div key={index}>
                                      {formData.variations[variationType].map(
                                        (variation, innerIndex) => (
                                          <div
                                            key={`${index}-${innerIndex}`}
                                            className="col-md-12 mb-4 d-flex gap-2"
                                          >
                                            <input
                                              type="text"
                                              className="btn btn-secondary btn-sm m-0 mydisabled"
                                              placeholder="Regular Price"
                                              id={`imageproduct${innerIndex}`}
                                              name={variationType}
                                              disabled
                                              value={variationType} // Assuming the first key is the type (Color, Size, Weight)
                                            />

                                            <select
                                              className="form-control select"
                                              id="parent"
                                              name={variationType}
                                            >
                                              <option disabled selected>
                                                {" "}
                                                Select Variation
                                              </option>

                                              {AllVariation.map(
                                                (Allvariation, innerIndex) => (
                                                  <React.Fragment key={index}>
                                                    {Allvariation.name ===
                                                      variationType && (
                                                        <>
                                                          {Allvariation.value.map(
                                                            (
                                                              value,
                                                              innerIndex
                                                            ) => (
                                                              <option
                                                                key={innerIndex}
                                                                selected={
                                                                  variation[
                                                                  Object.keys(
                                                                    variation
                                                                  )[0]
                                                                  ] == value
                                                                }
                                                              >
                                                                {" "}
                                                                {value}
                                                              </option>
                                                            )
                                                          )}
                                                        </>
                                                      )}
                                                  </React.Fragment>
                                                )
                                              )}
                                            </select>

                                            {/* 
                                            {AllVariation.map((variation, index) => variation[Object.keys(variation)[0]])}
<Select
  className="form-control select custom-select"
  id="parent"
  name={variationType} 
  value={AllVariation.map((Allvariation, outerIndex) => (
    <React.Fragment key={outerIndex}>
      {Allvariation.name === variationType && Allvariation.value.map((value, innerIndex) => (
        <React.Fragment key={innerIndex}>
          {selected.variation[Object.keys(selected.variation)[0]] === value && (
            // Render your value here if the match is true
            <>{value}</>
          )}
        </React.Fragment>
      ))}
    </React.Fragment>
  ))}
  
  options={AllVariation
    .filter(variation => variation.name === variationType)
    .map(variation => variation.value.map(value => ({ value, label: value })))
    .flat()
  }
>
 
</Select> */}
                                            {/* Assuming regular, sale, and stock fields are in a specific order */}
                                            {Object.values(variation)
                                              .slice(1)
                                              .map((value, inputIndex) => (
                                                <input
                                                  key={inputIndex}
                                                  type="number"
                                                  className="form-control"
                                                  placeholder={
                                                    inputIndex === 0
                                                      ? "Regular Price"
                                                      : inputIndex === 1
                                                        ? "Sale Price"
                                                        : "Stock"
                                                  }
                                                  id={`imageproduct${innerIndex}`}
                                                  name={variationType}
                                                  value={value}
                                                  onChange={(event) => {
                                                    const updatedVariation = [
                                                      ...formData.variations[
                                                      variationType
                                                      ],
                                                    ];
                                                    updatedVariation[
                                                      innerIndex
                                                    ][
                                                      Object.keys(variation)[
                                                      inputIndex + 1
                                                      ]
                                                    ] = event.target.value;

                                                    const updatedFormData = {
                                                      ...formData,
                                                    };
                                                    updatedFormData.variations[
                                                      variationType
                                                    ] = updatedVariation;

                                                    setFormData(
                                                      updatedFormData
                                                    );
                                                  }}
                                                />
                                              ))}
                                            <button
                                              className="btn btn-danger d-block m-0"
                                              onClick={removeImageDiv}
                                            >
                                              Delete
                                            </button>
                                            <br />
                                          </div>
                                        )
                                      )}
                                    </div>
                                  )
                                )}



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
                                    {/* 
<div className="customselect"> 


<div
        contentEditable
        className="inputdiv form-control"
        placeholder="Search..."
        onFocus={(e) => {
          const selectElement = e.target.nextSibling;
          if (selectElement) {
            selectElement.setAttribute("size", "5");
            selectElement.classList.add("active"); // Add custom class
          }
        }}

        onInput={(e) => {
          setSearchTerm(e.currentTarget.textContent)
          const selectElement = e.target.nextSibling;
          if (selectElement) {
            selectElement.setAttribute("size", "5");
            selectElement.classList.add("active"); // Add custom class

          }
        }
          
        }
      ></div>

                                    <select
                                      className="form-control select"
                                      id="parent"
                                      name={Variations.name}
                                
                                      onChange={(e) => {
                                        e.target.removeAttribute("size");
                                       // e.previousSibling.classList.remove("active");
                                       e.target.previousSibling.classList.remove("active"); 
                                      
                                      }}
                                      onClick={(e) => {
                                        e.target.setAttribute("size", "5");
                                         console.log(e.target.previousSibling)
                                         e.target.previousSibling.classList.add("active");
                                        }
                                      }
                                    >
                                      <option disabled selected>
                                        {" "}
                                        Select Variation
                                      </option>
                                      {Variations.value.filter(value => value.toLowerCase().includes(searchTerm.toLowerCase())).map(
                                        (value, innerIndex) => (
                                          <option key={innerIndex}>
                                            {" "}
                                            {value}
                                          </option>
                                        )
                                      )}
                                    </select>


                                    </div> */}

                                    <select
                                      className="form-control select"
                                      id="parent"
                                      name={Variations.name}
                                      placeholder="Select Variation"
                                      options={Variations.value.map((value, index) => ({ value, label: value }))}
                                    >
                                      {Variations.value.map((value, innerIndex) => (
                                        <option key={innerIndex}>{value}</option>
                                      ))}
                                    </select>


                                    {/* 
<Select
                                      className="form-control select custom-select"
                                      id="parent"
                                      name={Variations.name}
                                      
                                      options={Variations.value.map((value, index) => ({ value, label: value }))}

                                    />
                                       */}




                                    <input
                                      key={index}
                                      type="number"
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
                                  {loading ? <>
                                    <div
                                      className="card-1 skeleton"
                                      style={{ height: 213, borderRadius: 20 }}
                                    ></div>
                                  </> : <>
                                    {SpecificationsData && SpecificationsData.specifications && SpecificationsData.specifications.length > 0 && SpecificationsData.specifications.map(

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
                                  </>}


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
                                      <line
                                        x1="12"
                                        y1="5"
                                        x2="12"
                                        y2="19"
                                      ></line>
                                      <line
                                        x1="5"
                                        y1="12"
                                        x2="19"
                                        y2="12"
                                      ></line>
                                    </svg>
                                    Add Specification
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow components-section">
                <div className="card-body">
                  {loading ? (
                    <>
                      <div className="row">
                        <h5
                          className="skeleton"
                          style={{
                            width: "100%",
                            borderRadius: 5,
                            margin: "0px auto 10px",
                            height: 50,
                          }}
                        >
                          {" "}
                        </h5>

                        <hr />

                        <p
                          className="skeleton mb-3"
                          style={{
                            width: "100%",
                            borderRadius: 5,
                            margin: "0px auto 10px",
                            height: 250,
                          }}
                        >
                          {" "}
                        </p>

                        <div className="col-6 ">
                          <p
                            className="skeleton mb-3"
                            style={{
                              width: "100%",
                              borderRadius: 5,
                              margin: "0px auto 10px",
                              height: 40,
                            }}
                          >
                            {" "}
                          </p>
                        </div>
                      </div>
                      <div className="col-6">
                        <p
                          className="skeleton mb-3"
                          style={{
                            width: "100%",
                            borderRadius: 5,
                            margin: "0px auto 10px",
                            height: 40,
                          }}
                        >
                          {" "}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="row">
                      <h5> Product Image ( 1000px X 1000px) </h5>

                        <hr />

                        <div className="input-group imageupload-bx mb-3">
                          <img
                            src={formData.pImage}
                            className=""
                            id="imageid"
                            data-bs-toggle="modal"
                            data-bs-target="#modal-default"
                          />
                          <input
                            type="hidden"
                            className="form-control imageopen"
                            id="imageinput"
                            name="image"
                            defaultValue={formData.pImage}
                            onChange={handleChange}
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
                              options={[
                                ...selectedOptions,
                                ...nonSelectedOptions,
                              ]}
                            />
                          </div>
                        </div>
                        {/* 
                        <div className="col-md-12">
                          <div className="mb-4">
                            <label htmlFor="title">Product Tag</label>

                            <Select
                              isMulti
                              value={selectedTagOptions}
                              name="Category"
                              onChange={handleTagChange}
                              placeholder={
                                loading ? "Loading..." : "Select options"
                              }
                              options={[
                                ...selectedTagOptions,
                                ...nonSelectedTagOptions,
                              ]}
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
checked={formData.status === 'true' && "checked"}
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
checked={formData.status === 'false' && "checked"}
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
                    </>
                  )}

                  <div className="col-12">
                    {SubmitLoading ? (
                      <button
                        className="btn btn-secondary"
                        type="button"
                        onClick={submitData}
                      >
                        Update Product
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
        </div>
      </main>
    </>
  );
};

export default EditProduct;
