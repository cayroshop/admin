import React, { useState, useEffect, useContext, Component } from 'react';

import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import axiosInstance, { weburl } from '../../../axiosInstance';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import toast from "react-hot-toast";
import $ from "jquery";


import { Helmet } from "react-helmet";
import builderimg from '../builder/assets/design.gif';



function chooseimg() {
    // Get all elements with the class 'image-preview'
    const imagePreviewElements = document.querySelectorAll('.getimg');

    // Attach a click event listener to each element with the class 'image-preview'
    imagePreviewElements.forEach((imageElement) => {
        imageElement.addEventListener('click', () => {
            // Call the displayImageInfo function with the clicked image element
            displayImageInfo(imageElement);
        });
    });

}

function displayImageInfo(imageElement) {

    const previewImg = document.getElementById('image-preview');

    const inputElement = document.getElementById('image');
    // Get the src attribute of the clicked image
    var src = imageElement.getAttribute("src");

    // Set the value of the input to the src attribute
    inputElement.value = src;

    previewImg.src = inputElement.value;

    console.log(src)
}

const BuildBlogs = () => {
    require('../../pages/builder/assets/style.css')

    const navigate = useNavigate();

    const [gallery, setGallery] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [blog, setBlog] = useState({});

    const { slug } = useParams();

    const [isLoadBlog, setLoadBlog] = useState(true);



    function buildScript() {

        function myComponent() {

            // for h1 heading
            var h1heading = document.getElementById("h1heading");

            let h1_data = `<div id='changeid' name="dragg" >
<div  id='textcode-module-changeid' class="innermodule_edit" name="textcode" >
<div>
<h1 >This is h1 content</h1>

</div>

</div>

<div>
`;


            h1heading.setAttribute("data-content", h1_data);

            // for h2 heading

            var h2heading = document.getElementById("h2heading");

            let h2_data = `<div id='changeid' name="dragg" >
        <div  id='textcode-module-changeid' class="innermodule_edit" name="textcode" >
      <div>
      <h2 >This is h1 content</h2>
       </div>  </div>  <div>`;
            h2heading.setAttribute("data-content", h2_data);

            // for h3 heading

            var h3heading = document.getElementById("h3heading");

            let h3_data = `<div id='changeid' name="dragg" >
        <div  id='textcode-module-changeid' class="innermodule_edit" name="textcode" >
      <div>
      <h3 >This is h3 content</h3>
       </div>  </div>  <div>`;
            h3heading.setAttribute("data-content", h3_data);

            // for h4 heading

            var h4heading = document.getElementById("h4heading");

            let h4_data = `<div id='changeid' name="dragg" >
        <div  id='textcode-module-changeid' class="innermodule_edit" name="textcode" >
      <div>
      <h4 >This is h4 content</h4>
       </div>  </div>  <div>`;
            h4heading.setAttribute("data-content", h4_data);

            // for h5 heading
            var h5heading = document.getElementById("h5heading");

            let h5_data = `<div id='changeid' name="dragg" >
        <div  id='textcode-module-changeid' class="innermodule_edit" name="textcode" >
      <div>
      <h4 >This is h4 content</h4>
       </div>  </div>  <div>`;
            h5heading.setAttribute("data-content", h5_data);

            // for paragraph

            var para = document.getElementById("para");

            //             let para_data = `<div id='changeid' name="dragg"  >
            //  <p class='content_edit'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            //    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            // </div>`;

            let para_data = `<div id='changeid' name="dragg" >
        <div  id='textcode-module-changeid' class="innermodule_edit" name="textcode" >
      <div>
      <p > Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
       </div>  </div>  <div>
       `;
            para.setAttribute("data-content", para_data);

            //for one column


            var one_column = document.getElementById("one_column");

            let one_column_data = `<div id='changeid' draggable='true' name="dragg" class="row">
    
    <div class='col-md-12 innerlayoutbx' id='col-one1-changeid' >
      
    </div>

</div>`;
            one_column.setAttribute("data-content", one_column_data);



            // for two column


            var two_column = document.getElementById("two_column");

            let two_column_data = `<div id='changeid' draggable='true' name="dragg" class="row">
    <div class='col-md-6 innerlayoutbx' id='col-two1-changeid' >
    
    </div>
    
    <div class='col-md-6 innerlayoutbx' id='col-two2-changeid' >
      
    </div>

    

</div>`;
            two_column.setAttribute("data-content", two_column_data);

            // for three column

            var three_column = document.getElementById("three_column");

            let three_column_data = `<div id='changeid' draggable='true' name="dragg" class="row">
    <div class='innerlayoutbx col-md-4 ' id='col-three1-changeid' >
    
    </div>
    
    <div class='innerlayoutbx col-md-4 ' id='col-three2-changeid' >
      
    </div>

    <div class='innerlayoutbx col-md-4 ' id='col-three3-changeid' >
      
    </div>

</div>`;
            three_column.setAttribute("data-content", three_column_data);

            // for four column

            var four_column = document.getElementById("four_column");

            let four_column_data = `<div id='changeid' name="dragg" class="row">
    <div class='col-md-3 innerlayoutbx' id='col-four1-changeid' >
    
    </div>
    
    <div class='col-md-3 innerlayoutbx' id='col-four2-changeid' >
      
    </div>

    <div class='col-md-3 innerlayoutbx' id='col-four3-changeid' >
      
    </div>

    <div class='col-md-3 innerlayoutbx' id='col-four4-changeid' >
      
    </div>

</div>`;
            four_column.setAttribute("data-content", four_column_data);

            // for four column



            var five_column = document.getElementById("five_column");

            let five_column_data = `<div id='changeid' name="dragg" class="row">
    
    <div class="col-md col1 innerlayoutbx" id='col-two1-changeid' name="row_drop" > </div>
<div class="col-md  innerlayoutbx" id='col-five2-changeid'  name="row_drop" > </div>
<div class="col-md innerlayoutbx" id='col-five3-changeid'  name="row_drop" > </div>
<div class="col-md innerlayoutbx" id='col-five4-changeid' name="row_drop"> </div>
<div class="col-md innerlayoutbx" id='col-five5-changeid' name="row_drop" > </div>


</div>`;
            five_column.setAttribute("data-content", five_column_data);

            // for four column



            var six_column = document.getElementById("six_column");

            let six_column_data = `<div id='changeid'  name="dragg" class="row">
    
    <div class="col-md-2 innerlayoutbx" id='col-six1-changeid' name="row_drop" > </div>
<div class="col-md-2 innerlayoutbx" id='col-six2-changeid'  name="row_drop" > </div>
<div class="col-md-2 innerlayoutbx" id='col-six3-changeid'  name="row_drop" > </div>
<div class="col-md-2 innerlayoutbx" id='col-six4-changeid' name="row_drop"> </div>
<div class="col-md-2 innerlayoutbx" id='col-six5-changeid' name="row_drop" > </div>
<div class="col-md-2 innerlayoutbx" id='col-six6-changeid' name="row_drop" > </div>


</div>`;
            six_column.setAttribute("data-content", six_column_data);

            // for image module

            var img_module = document.getElementById("img_module");

            let img_module_data = `
  <div id='changeid' name="dragg" class="image_module">

<img draggable="false" src="https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg" class="img-fluid" id='image-module-changeid' name="image_upload">

<div>
`;
            img_module.setAttribute("data-content", img_module_data);

            // For faq module

            var faq_module = document.getElementById("faq_module");

            let faq_module_data = `
<div class="accordion" id="accordionExample">
<div class="card">
<div class="card-header" id="headingOne">
  <h2 >
    <div class="btn btn-link btn-block text-left content_edit" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Collapsible Group Item #1
    </div>
  </h2>
</div>

<div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
  <div class="card-body">
  <p class='content_edit' >
      Some placeholder content for the first accordion panel. This panel is shown by default, thanks to the <code>.show</code> class.
  </p>
  </div>
</div>
</div>
<div class="card">
<div class="card-header" id="headingTwo">
  <h2 class="mb-0">
    <div class="btn btn-link btn-block text-left collapsed content_edit" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Collapsible Group Item #2
    </div>
  </h2>
</div>
<div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
  <div class="card-body">
    <p class='content_edit' >
      Some placeholder content for the first accordion panel. This panel is shown by default, thanks to the <code>.show</code> class.
  </p>
  </div>
</div>
</div>
<div class="card">
<div class="card-header" id="headingThree">
  <h2 class="mb-0">
    <div class="btn btn-link btn-block text-left collapsed content_edit" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Collapsible Group Item #3
    </div>
  </h2>
</div>
<div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
  <div class="card-body">
   <p class='content_edit' >
      Some placeholder content for the first accordion panel. This panel is shown by default, thanks to the <code>.show</code> class.
  </p>
  </div>
</div>
</div>
</div>

`;
            faq_module.setAttribute("data-content", faq_module_data);




            var cards_module = document.getElementById("cards_module");

            let cards_module_data = `
  <div id='changeid' name="dragg" >

    <div class="card" >
<img draggable="false" src="https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg" class="card-img-top" id='image-module-changeid' name="image_upload">
<div class="card-body">
<h5 class="card-title content_edit">Card title</h5>
<p class="card-text content_edit" >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
<a href="#" class="btn btn-primary content_edit">Go somewhere</a>
</div>
</div>



<div>
`;
            cards_module.setAttribute("data-content", cards_module_data);

            // For Text module


            var textcode_module = document.getElementById("textcode_module");

            let textcode_module_data = `
  <div id='changeid' name="dragg" >
     <div  id='textcode-module-changeid' class="innermodule_edit" name="textcode" >
<div>
This is the blank code You can white Any thing </div>

</div>
     
  <div>
  `;



            textcode_module.setAttribute("data-content", textcode_module_data);



            // For Slider module

            var sliders_module = document.getElementById("slider_module");

            let sliders_module_data = `
  <div id='changeid' name="dragg" >

<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" name="carousel">
<ol class="carousel-indicators">
<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
</ol>
<div class="carousel-inner">
<div class="carousel-item active">
  <img class="d-block w-100" src="/crm/assets/img/slide1.png"  name="image_upload" id='image-module-changeid'  alt="First slide">
  
  <div class="carousel-caption d-none d-md-block">
<h5 class="content_edit" > Second slide label </h5>
<p  class="content_edit"  > Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
</div>

</div>
<div class="carousel-item">
  <img class="d-block w-100" id='image2-module-changeid'  src="/crm/assets/img/slide2.png" name="image_upload" alt="Second slide">
  
  <div class="carousel-caption d-none d-md-block">
 <h5 class="content_edit" > Second slide label </h5>
<p  class="content_edit"  > Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
</div>

</div>
<div class="carousel-item">
  <img class="d-block w-100 " id='image3-module-changeid'  src="/crm/assets/img/slide3.png" name="image_upload" alt="Third slide">
  
<div class="carousel-caption d-none d-md-block">
<h5 class="content_edit" > Second slide label </h5>
<p  class="content_edit"  > Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
</div>

</div>
</div>
<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
<span class="carousel-control-prev-icon" aria-hidden="true"></span>
<span class="sr-only">Previous</span>
</a>
<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
<span class="carousel-control-next-icon" aria-hidden="true"></span>
<span class="sr-only">Next</span>
</a>
</div>



<div>
`;

            sliders_module.setAttribute("data-content", sliders_module_data);


        }



        myComponent();


        /* media gallery function */

        function click_image_upload() {

            //  for close media 
            let media_close_bt = document.getElementById("media_close");
            media_close_bt.addEventListener("click", media_close);


            let image_upload = document.querySelectorAll("[name='image_upload']");

            for (let upload of image_upload) {

                upload.addEventListener("click", choose_media);

            }

            const cars = new Array('');

            console.log(cars);

        }

        click_image_upload();


        function media_close() {

            let img_unselected = document.querySelectorAll("[name='image_select']");

            for (let unselected of img_unselected) {
                unselected.parentNode.classList.remove("img_selected");

            }
            let gallery_box_main = document.getElementById("gallery_box_main");
            gallery_box_main.classList.add("hide_gallery");

        }

        function choose_media() {


            sessionStorage.setItem("save_img_id", this.id);

            let gallery_box_main = document.getElementById("gallery_box_main");

            gallery_box_main.classList.remove("hide_gallery");

            let image_selected = document.querySelectorAll("[name='image_select']");

            for (let select of image_selected) {

                select.addEventListener("click", choose_media_fun);

            }

        }


        function choose_media_fun() {

            let img_unselect = document.getElementById("img_unselected");

            if (!img_unselect == "") {

                let img_unselected = document.querySelectorAll("[name='image_select']");

                for (let unselected of img_unselected) {

                    unselected.parentNode.classList.remove("img_selected");

                }

            }


            var choosebt = document.getElementById("choosebt_img");

            this.parentNode.classList.add("img_selected");

            let data_img = this.src;
            choosebt.setAttribute("data-image", data_img);
            this.parentNode.setAttribute("id", "img_unselected");

            let final_image_select = document.getElementById("choosebt_img");

            final_image_select.addEventListener("click", final_img_select);

            sessionStorage.setItem("save_img_data", data_img);

        }

        function final_img_select() {

            let gallery_box_main = document.getElementById("gallery_box_main");

            gallery_box_main.classList.add("hide_gallery");


            let getimg_id = sessionStorage.getItem("save_img_id");
            let getimg_url = sessionStorage.getItem("save_img_data");

            document.getElementById(getimg_id).src = getimg_url;

        }



        /* media gallery function end */





        function layout_del() {

            let del_layout = document.querySelectorAll("[name='drop_elements']");

            let remove_layout = document.getElementById("edit_sidebar");


            remove_layout.addEventListener("mouseover", del_layout_del);

            for (let del of del_layout) {

                del.addEventListener("click", add_layout_del);

            }

        }

        layout_del();


        // inner module settings


        function inner_module_edit() {

            let innermodule_edit = document.querySelectorAll(".innermodule_edit");


            for (let edit of innermodule_edit) {
                edit.addEventListener("click", add_module_edit);

            }


        }

        inner_module_edit();


        function add_module_edit() {


            var inner_module = document.createElement("div");
            inner_module.setAttribute("id", "inner_del_bx");

            // Set the HTML content of the new element
            inner_module.innerHTML = `
<button id="inner_drag_layout">
<svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5.2 9l-3 3 3 3M9 5.2l3-3 3 3M15 18.9l-3 3-3-3M18.9 9l3 3-3 3M3.3 12h17.4M12 3.2v17.6"/></svg>
  </button>

<button id="inner_setting" name="setting">

<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"  viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
</button>


<button id="inner_copy_layout">
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>  
  </button>


    <button id="inner_close_layout">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
  </button>
`;




            // for both conditions end

            if (!document.getElementById("inner_del_bx") == "") {

                let class_remove = document.querySelectorAll("[name='drop_elements']");

                for (let remove of class_remove) {

                    remove.classList.remove("active_box");

                }

            }

            // for both conditions end

            if (!document.getElementById("inner_del_bx") == "") {

                let inner_class_remove = document.querySelectorAll("[name='textcode']");

                for (let remove of inner_class_remove) {

                    remove.classList.remove("active_box");

                }

                let inner_delbx_remove = document.getElementById("inner_del_bx");

                inner_delbx_remove.remove();

                this.classList.add("active_box");

                this.appendChild(inner_module);




            }



            // onclick hover parent module start 

            if (!document.getElementById("inner_close_layout") == "") {

                let inner_on_del_layout = document.getElementById("inner_close_layout");

                inner_on_del_layout.addEventListener("click", inner_layout_parent_del);

                // for module copy
                if (!document.getElementById("inner_copy_layout") == "") {
                    let inner_copy_layout = document.getElementById("inner_copy_layout");

                    inner_copy_layout.addEventListener("click", inner_copy_module);
                }
                // for module settings
                if (!document.getElementById("inner_setting") == "") {
                    let inner_m_settings = document.getElementById("inner_setting");
                    inner_m_settings.addEventListener("click", text_setting);
                }



            }

            // onclick hover parent module end 

            else {

                this.classList.add("active_box");

                this.appendChild(inner_module);


            }





        }



        function inner_layout_parent_del() {

            this.parentNode.parentNode.parentNode.remove();


        }




        function add_layout_del(event) {

            // for both conditions
            let del_id = event.target.id;

            let del_layout = document.querySelectorAll("[name='drop_elements']");

            let del = document.createElement("div");

            del.setAttribute("id", "del_bx");

            del.innerHTML = `

<button id="drag_layout">
<svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5.2 9l-3 3 3 3M9 5.2l3-3 3 3M15 18.9l-3 3-3-3M18.9 9l3 3-3 3M3.3 12h17.4M12 3.2v17.6"/></svg>
  </button>

<button id="setting" name="setting">

<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"  viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
</button>


<button id="copy_layout">
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>  
  </button>


    <button id="close_layout">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
  </button>

  
  `;

            // for both conditions end

            if (!document.getElementById("del_bx") == "") {

                let class_remove = document.querySelectorAll("[name='drop_elements']");

                for (let remove of class_remove) {

                    remove.classList.remove("active_box");

                }

                let delbx_remove = document.getElementById("del_bx");

                delbx_remove.remove();

                this.classList.add("active_box");

                this.appendChild(del);


            }





            // onclick hover parent module start 

            if (!document.getElementById("close_layout") == "") {

                let on_del_layout = document.getElementById("close_layout");

                on_del_layout.addEventListener("click", layout_parent_del);


                // for module copy

                let copy_layout = document.getElementById("copy_layout");

                copy_layout.addEventListener("click", copy_module);

                // for module settings

                let m_settings = document.getElementById("setting");

                m_settings.addEventListener("click", module_setting);

            }

            // onclick hover parent module end 

            else {

                this.classList.add("active_box");

                this.appendChild(del);


            }




        }



        function layout_parent_del() {

            this.parentNode.parentNode.parentNode.remove();


        }


        function copy_module() {

            let copylayout = document.getElementById("layout-container");

            let copydiv = document.createElement("div");

            copydiv.setAttribute("class", "layout-outer");

            let copyelement = this.parentNode.parentNode.parentNode.innerHTML;

            layout_No = Math.floor(Math.random() * 100000);

            let finalno = 'layout_No' + layout_No;

            copyelement = copyelement.replace(/layout_No/g, finalno);

            copydiv.innerHTML = copyelement;
            console.log(copyelement)

            copylayout.appendChild(copydiv);

            // remove data extra

            let class_remove = document.querySelectorAll("[name='drop_elements']");

            for (let remove of class_remove) {

                remove.classList.remove("active_box");

            }

            let delbx_remove = document.getElementById("del_bx");

            delbx_remove.remove();

            layout_del();
            click_image_upload();
            content_edit();
            dargg_item();

        }


        function inner_copy_module() {

            let copylayout = this.parentNode.parentNode.parentNode.parentNode;

            let copydiv = document.createElement("div");

            copydiv.setAttribute("class", "layout-outer");

            let copyelement = this.parentNode.parentNode.parentNode.innerHTML;

            layout_No = Math.floor(Math.random() * 100000);

            let finalno = 'layout_No' + layout_No;

            copyelement = copyelement.replace(/layout_No/g, finalno);

            copydiv.innerHTML = copyelement;


            copylayout.appendChild(copydiv);

            // remove data extra

            let inner_class_remove = document.querySelectorAll("[name='textcode']");

            for (let remove of inner_class_remove) {

                remove.classList.remove("active_box");

            }


            $("#inner_del_bx").remove();

            dargg_item();
            layout_del();
            click_image_upload();
            content_edit();
            inner_module_edit();

        }



        // text settings

        function text_setting() {

            sessionStorage.setItem("inner_save_setting_id", this.parentNode.parentNode.id);

            let inner_pre_setting_id = sessionStorage.getItem("inner_save_setting_id");

            //  let finalTextcont =  document.getElementById(inner_pre_setting_id).innerHTML;

            let finalTextcont = $('#' + inner_pre_setting_id + '>*').html();

            let sett_text = document.createElement("div");

            const settingbx = document.getElementById("settingbx");


            sett_text.setAttribute("id", "settings_module");
            sett_text.setAttribute("class", "settings_module");

            sett_text.innerHTML = `
        <div class="settings" >
<div class="settings_module_header" >
<h4>Text Setting</h4>
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
</div>

<div class="settings_module_container">


<div class="code-previewtab">

<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
<li class="nav-item" role="presentation">
<button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Content</button>
</li>
<li class="nav-item" role="presentation">
<button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Style</button>
</li>

</ul>
<div class="tab-content" id="pills-tabContent">
<div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">


  
      <div class="tb-container">
      <div class="toolbar">
          <div class="head">
              
              <select onchange="formatDoc('formatBlock', this.value); this.selectedIndex=0;">
                  <option value="" selected="" hidden="" disabled="">Format</option>
                  <option value="h1">Heading 1</option>
                  <option value="h2">Heading 2</option>
                  <option value="h3">Heading 3</option>
                  <option value="h4">Heading 4</option>
                  <option value="h5">Heading 5</option>
                  <option value="h6">Heading 6</option>
                  <option value="p">Paragraph</option>
              </select>
              <select onchange="formatDoc('fontSize', this.value); this.selectedIndex=0;">
                  <option value="" selected="" hidden="" disabled="">Font size</option>
                  <option value="1">Extra small</option>
                  <option value="2">Small</option>
                  <option value="3">Regular</option>
                  <option value="4">Medium</option>
                  <option value="5">Large</option>
                  <option value="6">Extra Large</option>
                  <option value="7">Big</option>
              </select>
              <div class="color">
                  <span>Color</span>
                  <input type="color" oninput="formatDoc('foreColor', this.value); this.value='#000000';">
              </div>
              <div class="color">
                  <span>Background</span>
                  <input type="color" oninput="formatDoc('hiliteColor', this.value); this.value='#fffff';">
              </div>
          </div>
          <div class="btn-toolbar">
              <button onclick="formatDoc('undo')"><i class='uil uil-backward' ></i></button>
              <button onclick="formatDoc('redo')"><i class='uil uil-redo' ></i></button>
              <button onclick="formatDoc('bold')"><i class='uil uil-bold'></i></button>
              <button onclick="formatDoc('underline')"><i class='uil uil-underline' ></i></button>
              <button onclick="formatDoc('italic')"><i class='uil uil-italic' ></i></button>
              <button onclick="formatDoc('strikeThrough')"><i class='uil uil-layers-slash' ></i></button>
              <button onclick="formatDoc('justifyLeft')"><i class='uil uil-align-left' ></i></button>
              <button onclick="formatDoc('justifyCenter')"><i class='uil uil-align-center-justify' ></i></button>
              <button onclick="formatDoc('justifyRight')"><i class='uil uil-align-right' ></i></button>
              <button onclick="formatDoc('justifyFull')"><i class='uil uil-align-justify' ></i></button>
              <button onclick="formatDoc('insertOrderedList')"><i class='uil uil-list-ol' ></i></button>
              <button onclick="formatDoc('insertUnorderedList')"><i class='uil uil-list-ul' ></i></button>
              <button onclick="addLink()"><i class='uil uil-link' ></i></button>
              <button onclick="formatDoc('unlink')"><i class='uil uil-link-broken' ></i></button>
              <button onclick="addImg()"><i class='uil uil-image' ></i></button>
              <button id="show-code" data-active="false"> <i class='uil uil-sort' ></i> </button>
          </div>
      </div>
      <div id="content_text" contenteditable="true" spellcheck="false">
  ${finalTextcont}
      </div>
  </div>
  
  
  </div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
  
  <div class="row">

  
  <div class="col-md-6">

  
  <center>
                            <table>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td><input type="text" class="form-control" placeholder="top" value="15px" id="mtop" name="mtop" style="width: 60px; margin-right: 5px" fdprocessedid="yt3ya"></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td><input type="text" class="form-control" placeholder="left" value="15px" id="mleft" name="mleft" style="width: 60px; margin-right: 5px" fdprocessedid="t1fvy"></td>
                                        <td><p class="mpcenter">margin</p></td>
                                        <td><input type="text" class="form-control" placeholder="right" value="15px" id="mright" name="mright" style="width: 60px; margin-right: 5px" fdprocessedid="5zd4x"></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td><input type="text" class="form-control" placeholder="bottom" value="15px" id="mbottom" name="mbottom" style="width: 60px; margin-right: 5px" fdprocessedid="0tyvb"></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </center>    
                        
  </div>


  <div class="col-md-6">

  
  <center>
                            <table>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td><input type="text" class="form-control" placeholder="top" value="15px" id="ptop" name="ptop" style="width: 60px; margin-right: 5px" fdprocessedid="yt3ya"></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td><input type="text" class="form-control" placeholder="left" value="15px" id="pleft" name="pleft" style="width: 60px; margin-right: 5px" fdprocessedid="t1fvy"></td>
                                        <td><p class="mpcenter">Padding</p></td>
                                        <td><input type="text" class="form-control" placeholder="right" value="15px" id="pright" name="pright" style="width: 60px; margin-right: 5px" fdprocessedid="5zd4x"></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td><input type="text" class="form-control" placeholder="bottom" value="15px" id="pbottom" name="pbottom" style="width: 60px; margin-right: 5px" fdprocessedid="0tyvb"></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </center>
                        

  </div>


  </div>


  <div class="row mt-4">
<div class="col-6 text-center">
<div>
<input type="color" id="color" name="color" value="#0000" />
<label for="head">color</label>
</div>
</div>

<div class="col-6 text-center">
<div>
<input type="text" id="background" name="background" value="#ffff" />
<label for="head">Background</label>
</div>
</div>

<div class="col-12 mt-4">
<div class="slidecontainer">
<input type="range" min="0.1" max="1" value="1" step="0.1" class="opslider" id="opslider">
<p>Opacity: <span id="opacitybx"></span></p>
</div>

</div>


</div>




                        </div>
</div>


      
  </div>
  
  </div>

  <div class="settings_module_footer" >
    <button id="inner_close_setting" >
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
    </button>

    <button id="inner_save_setting" >
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
      </button>

</div>

</div> 
`


            settingbx.appendChild(sett_text);

            // add extra start

            const content_text = document.getElementById('content_text');


            content_text.addEventListener('mouseenter', function () {
                const a = content_text.querySelectorAll('a');
                a.forEach(item => {
                    item.addEventListener('mouseenter', function () {
                        content_text.setAttribute('contenteditable', true);
                        item.target = '_blank';
                    })
                    item.addEventListener('mouseleave', function () {
                        content_text.setAttribute('contenteditable', true);
                    })
                })
            })

            const showCode = document.getElementById('show-code');
            let active = false;

            showCode.addEventListener('click', function () {
                showCode.dataset.active = !active;
                active = !active
                if (active) {
                    content_text.textContent = content_text.innerHTML;
                    content_text.setAttribute('contenteditable', true);
                } else {
                    content_text.innerHTML = content_text.textContent;
                    content_text.setAttribute('contenteditable', true);
                }
            })

            // add extra end


            // remove setting module 

            let inner_close_setting = document.getElementById("inner_close_setting");

            inner_close_setting.addEventListener("click", close_mod_text);


            let inner_save_setting = document.getElementById("inner_save_setting");

            inner_save_setting.addEventListener("click", inner_save_text_setting);

        }

        function close_mod_text() {

            let close_setting_bt = document.getElementById("settings_module")

            close_setting_bt.remove();
        }

        function getstyle(styleId) {

            const computedStyles = window.getComputedStyle(styleId);

            // Get the computed padding values
            const paddingTop = computedStyles.getPropertyValue('padding-top');
            const paddingRight = computedStyles.getPropertyValue('padding-right');
            const paddingBottom = computedStyles.getPropertyValue('padding-bottom');
            const paddingLeft = computedStyles.getPropertyValue('padding-left');

            // Update input fields with extracted values
            document.getElementById('ptop').value = paddingTop;
            document.getElementById('pright').value = paddingRight;
            document.getElementById('pbottom').value = paddingBottom;
            document.getElementById('pleft').value = paddingLeft;
        }

        function getmargin(styleId) {
            const computedStyles = window.getComputedStyle(styleId);
            // Get the computed padding values
            const MarginTop = computedStyles.getPropertyValue('margin-top');
            const MarginRight = computedStyles.getPropertyValue('margin-right');
            const MarginBottom = computedStyles.getPropertyValue('margin-bottom');
            const MarginLeft = computedStyles.getPropertyValue('margin-left');

            // Update input fields with extracted values
            document.getElementById('mtop').value = MarginTop;
            document.getElementById('mright').value = MarginRight;
            document.getElementById('mbottom').value = MarginBottom;
            document.getElementById('mleft').value = MarginLeft;
        }

        function getcolor(styleId) {
            var computedStyles = window.getComputedStyle(styleId);
            var colorMatch = computedStyles.getPropertyValue('color').trim();
            var colorValue = rgbToHex(colorMatch);

            document.getElementById('color').value = colorValue;
        }

        function getbackground(styleId) {
            var computedStyles = window.getComputedStyle(styleId);
            var colorMatch = computedStyles.getPropertyValue('background').trim();
            var colorValue = rgbToHex(colorMatch);

            document.getElementById('background').value = colorValue;
        }
        function rgbToHex(rgb) {
            // Extract the individual R, G, and B values
            const values = rgb.match(/\d+/g);
            if (values) {
                const r = parseInt(values[0]);
                const g = parseInt(values[1]);
                const b = parseInt(values[2]);
                // Convert to hexadecimal notation
                const hexColor = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
                return hexColor;
            }
            return '';
        }

        function opacityfn() {

            var slider = document.getElementById("opslider");
            var output = document.getElementById("opacitybx");
            output.innerHTML = slider.value;

            slider.oninput = function () {
                output.innerHTML = this.value;
            }

        }

        function inner_save_text_setting() {


            let inner_save_setting_id = sessionStorage.getItem("inner_save_setting_id");

            console.log(inner_save_setting_id);

            let contentIn = document.getElementById('content_text').innerHTML;
            document.getElementById(inner_save_setting_id).innerHTML = '<div>' + contentIn + '</div>';


            addpadding(inner_save_setting_id);
            addmargin(inner_save_setting_id);
            addcolor(inner_save_setting_id);
            addbackground(inner_save_setting_id)
            const close_setting_bt = document.getElementById("settings_module");

            close_setting_bt.remove();

            inner_module_edit();


        }


        function addpadding(myboxid) {
            var ptop = document.getElementById('ptop').value;
            var pright = document.getElementById('pright').value;
            var pbottom = document.getElementById('pbottom').value;
            var pleft = document.getElementById('pleft').value;
            var myboxid = document.getElementById(myboxid);
            // Apply styles to the content_text element
            myboxid.style.paddingTop = ptop;
            myboxid.style.paddingRight = pright;
            myboxid.style.paddingBottom = pbottom;
            myboxid.style.paddingLeft = pleft;
            console.log(myboxid)
        }

        function addmargin(myboxid) {
            var mtop = document.getElementById('mtop').value;
            var mright = document.getElementById('mright').value;
            var mbottom = document.getElementById('mbottom').value;
            var mleft = document.getElementById('mleft').value;
            var myboxid = document.getElementById(myboxid);
            // Apply styles to the content_text element
            myboxid.style.marginTop = mtop;
            myboxid.style.marginRight = mright;
            myboxid.style.marginBottom = mbottom;
            myboxid.style.marginLeft = mleft;
            console.log(myboxid)
        }

        function addcolor(myboxid) {
            var color = document.getElementById('color').value;
            var myboxid = document.getElementById(myboxid);
            myboxid.style.color = color;

        }

        function addbackground(myboxid) {
            var color = document.getElementById('background').value;
            var myboxid = document.getElementById(myboxid);
            myboxid.style.background = color;

        }

        function test() {
            alert('red')
        }
        function formatDoc(cmd, value = null) {
            if (value) {
                document.execCommand(cmd, false, value);
            } else {
                document.execCommand(cmd);
            }
        }

        function addLink() {
            const url = prompt('Insert url');
            formatDoc('createLink', url);
        }

        function addImg() {
            const url = prompt('Insert url');
            formatDoc('insertImage', url);
        }



        // text_setting();

        // text module end


        // module setting

        function module_setting() {

            sessionStorage.setItem("save_setting_id", this.parentNode.parentNode.id);

            const settingbx = document.getElementById("settingbx");

            if (settingbx) {
                let sett = document.createElement("div");

                sett.setAttribute("id", "settings_module");
                sett.setAttribute("class", "settings_module");

                sett.innerHTML = ` <div class="settings" >
<div class="settings_module_header" >
<h4>Module Setting</h4>
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
</div>

<div class="settings_module_container">

<h5>Add Classes</h5>

<input class="class_input" name="class_input" id="myinput_class">

<h5>Module Alignmment</h5>

<div class="alignmment_box">

  <button id="align_left" name="select-class" data-class="text-left">
     Align left  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H6M12 5l-7 7 7 7"/></svg>
  </button>

  <button id="align_center" name="select-class" data-class="text-center" >  
    Align center  <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>

  </button>

  <button id="align_right" name="select-class" data-class="text-right" >
   Align Right <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h13M12 5l7 7-7 7"/></svg>      </button>

  </div>

  <hr>

  <h5>Margin Settings</h5>

  <p> Margin Top (MT)</p>

  <div class="alignmment_box">

<button id="mt-1" name="select-class" data-class="mt-1" >
MT 1  <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 11l-5-5-5 5M17 18l-5-5-5 5"/></svg>

</button>

<button id="mt-1" name="select-class" data-class="mt-2" >
MT 2  <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 11l-5-5-5 5M17 18l-5-5-5 5"/></svg>

</button>
<button id="mt-3" name="select-class" data-class="mt-3" >
MT 3  <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 11l-5-5-5 5M17 18l-5-5-5 5"/></svg>

</button>

<button id="mt-4" name="select-class" data-class="mt-4" >
MT 4  <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 11l-5-5-5 5M17 18l-5-5-5 5"/></svg>

</button>

<button id="mt-5" name="select-class" data-class="mt-5">
MT 5  <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 11l-5-5-5 5M17 18l-5-5-5 5"/></svg>

</button>

</div>

<br>
  <p> Margin Right (MR)</p>

  <div class="alignmment_box">

<button id="mr-1" name="select-class" data-class="mr-1">
MR 1 <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13 17l5-5-5-5M6 17l5-5-5-5"/></svg>

</button>

<button id="mr-2" name="select-class" data-class="mr-2" >
MR 2  <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13 17l5-5-5-5M6 17l5-5-5-5"/></svg>
</button>
<button id="mr-3" name="select-class" data-class="mr-3">
MR 3  <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13 17l5-5-5-5M6 17l5-5-5-5"/></svg>
</button>

<button id="mr-4" name="select-class" data-class="mr-4" >
MR 4  <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13 17l5-5-5-5M6 17l5-5-5-5"/></svg>
</button>

<button id="mr-5" name="select-class" data-class="mr-5" >
MR 5  <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13 17l5-5-5-5M6 17l5-5-5-5"/></svg>
</button>

</div>



<br>
  <p> Margin Bottom (MB)</p>

  <div class="alignmment_box">

<button id="mb-1" name="select-class" data-class="mb-1" >
MB 1 <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>

</button>

<button id="mb-2" name="select-class" data-class="mb-2" >
MB 2  <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>
</button>
<button id="mb-3" name="select-class" data-class="mb-3" >
MB 3  <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>
</button>

<button id="mb-4" name="select-class" data-class="mb-4" >
MB 4 <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>
</button>

<button id="mb-5" name="select-class" data-class="mb-5" >
MB 5  <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>
</button>

</div>



<br>
  <p> Margin left (ML)</p>

  <div class="alignmment_box">

<button id="mb-1" name="select-class" data-class="ml-1" >
ML 1 <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13 17l5-5-5-5M6 17l5-5-5-5"/></svg>
</button>

<button id="ml-2" name="select-class" data-class="ml-2" >
ML 2  <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13 17l5-5-5-5M6 17l5-5-5-5"/></svg>
</button>
<button id="ml-3" name="select-class" data-class="ml-3" >
ML 3  <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13 17l5-5-5-5M6 17l5-5-5-5"/></svg>
</button>

<button id="ml-4" name="select-class" data-class="ml-4" >
ML 4 <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13 17l5-5-5-5M6 17l5-5-5-5"/></svg>
</button>

<button id="ml-5" name="select-class" data-class="ml-5" >
ML 5  <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13 17l5-5-5-5M6 17l5-5-5-5"/></svg>
</button>

</div>



<br>
  <p> Margin All (MA)</p>

  <div class="alignmment_box">

<button id="mb-1" name="select-class" data-class="m-1" >
MA 1 <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5.2 9l-3 3 3 3M9 5.2l3-3 3 3M15 18.9l-3 3-3-3M18.9 9l3 3-3 3M3.3 12h17.4M12 3.2v17.6"/></svg>
</button>

<button id="ml-2" name="select-class" data-class="m-2" >
MA 2  <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5.2 9l-3 3 3 3M9 5.2l3-3 3 3M15 18.9l-3 3-3-3M18.9 9l3 3-3 3M3.3 12h17.4M12 3.2v17.6"/></svg>
</button>
<button id="ml-3" name="select-class" data-class="m-3" >
MA 3  <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5.2 9l-3 3 3 3M9 5.2l3-3 3 3M15 18.9l-3 3-3-3M18.9 9l3 3-3 3M3.3 12h17.4M12 3.2v17.6"/></svg>
</button>

<button id="ml-4" name="select-class" data-class="m-4" >
MA 4 <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5.2 9l-3 3 3 3M9 5.2l3-3 3 3M15 18.9l-3 3-3-3M18.9 9l3 3-3 3M3.3 12h17.4M12 3.2v17.6"/></svg>
</button>

<button id="ml-5" name="select-class" data-class="m-5" >
MA 5 <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5.2 9l-3 3 3 3M9 5.2l3-3 3 3M15 18.9l-3 3-3-3M18.9 9l3 3-3 3M3.3 12h17.4M12 3.2v17.6"/></svg>
</button>

</div>
<hr>

<h5>Colors Settings</h5>


  <p> Text Color</p>

  <div class="alignmment_box">

<button id="text-primary" name="select-class"  data-class="text-primary" >
Blue 
</button>

<button id="ml-2" name="select-class" data-class="text-secondary" >
grey
</button>
<button id="ml-3" name="select-class" data-class="text-success" >
green
</button>

<button id="text-danger" name="select-class" data-class="text-danger" >
red
</button>

<button id="text-danger" name="select-class" data-class="text-warning" >
Yellow
</button>


</div>



<br>
  <p> Background Color</p>

  <div class="alignmment_box">

<button id="bg-primary" name="select-class"  data-class="bg-primary" >
Blue 
</button>

<button id="ml-2" name="select-class" data-class="bg-secondary" >
grey
</button>
<button id="ml-3" name="select-class" data-class="bg-success" >
green
</button>

<button id="text-danger" name="select-class" data-class="bg-danger" >
red
</button>

<button id="text-danger" name="select-class" data-class="bg-warning" >
Yellow
</button>


</div>





</div>

<div class="settings_module_footer" >
  <button id="close_setting" >
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
  </button>

  <button id="save_setting" >
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
    </button>

</div>

</div> `

                settingbx.appendChild(sett);

            }

            // check active classes
            let myinput_class = document.getElementById("myinput_class");

            let get_setting_class = this.parentNode.parentNode.className;
            myinput_class.value += get_setting_class + " ";


            let myArray_class = get_setting_class.split(" ");

            let classes_active = document.querySelectorAll("[name='select-class']")

            // for blank save




            for (var i = 0; i < classes_active.length; i++) {

                if (myArray_class.includes(classes_active[i].getAttribute('data-class')) === true) {

                    classes_active[i].classList.add("active_class");

                    classes_active[i].addEventListener("click", function () {
                        this.classList.add("remove_class");

                        let result = myinput_class.value.replace(" " + this.getAttribute('data-class'), "");

                        myinput_class.value = result;

                    });

                }
                else if (myArray_class.includes(classes_active[i].getAttribute('data-class')) === false) {
                    classes_active[i].addEventListener("click", add_class_setting);
                }



            }



            // remove setting module 

            let close_setting = document.getElementById("close_setting");

            close_setting.addEventListener("click", close_mod_setting);

            // add classes setting module 

            // let select_class = document.querySelectorAll("[name='select-class']");

            // for (let select of select_class) {

            //   select.addEventListener("click", add_class_setting);

            // }

            let save_setting = document.getElementById("save_setting");

            save_setting.addEventListener("click", save_class_setting);


        }


        function close_mod_setting() {

            let close_setting_bt = document.getElementById("settings_module")

            close_setting_bt.remove();
        }

        function add_class_setting() {
            let myinput_class = '';
            myinput_class.value += this.getAttribute('data-class') + " ";

            this.classList.add("active_class");

            // for save setting onclick

        }


        function save_class_setting() {


            let save_setting_id = sessionStorage.getItem("save_setting_id");


            let class_add = document.getElementById("myinput_class").value;



            save_setting_id = document.getElementById(save_setting_id);

            save_setting_id.className = class_add;

            // close setting 

            let close_setting_bt = document.getElementById("settings_module")

            close_setting_bt.remove();


        }





        function del_layout_del() {


            if (!document.getElementById("del_bx") == "") {

                let class_remove = document.querySelectorAll("[name='drop_elements']");


                for (let remove of class_remove) {

                    remove.classList.remove("active_box");


                }

                document.getElementById("del_bx").remove();

            }
            if (!document.getElementById("inner_del_bx") == "") {


                let class_remove_inner = document.querySelectorAll("[name='textcode']");


                for (let remove of class_remove_inner) {

                    remove.classList.remove("active_box");


                }
                document.getElementById("inner_del_bx").remove();

            }



        }


        let bar_hide = document.getElementById("editbar_hide");

        bar_hide.addEventListener("click", editbar_hide);

        function editbar_hide() {

            let edit_sidebar = document.getElementById("edit_sidebar");

            edit_sidebar.classList.toggle("hide");

        }


        function content_edit() {

            let edit_elements = document.querySelectorAll(".content_edit");

            for (let edit of edit_elements) {

                edit.addEventListener("click", edit_event);
                edit.addEventListener("mouseout", unedit_event);

            }

        }


        function content_edit_name() {

            let content_edit_name = document.querySelectorAll("[name='content_edit']");

            for (let edit of content_edit_name) {

                edit.addEventListener("click", edit_event);
                edit.addEventListener("mouseout", unedit_event);

            }

        }


        function edit_event() {
            this.setAttribute("contentEditable", "true");
        }

        function unedit_event() {
            this.removeAttribute("contentEditable", "false");
        }

        content_edit();
        content_edit_name();
        // drag on function

        function dargg_item() {

            let dargg_item = document.querySelectorAll("[name='dragg']");


            for (let dragg of dargg_item) {

                dragg.addEventListener("mouseover", dargg_elements);

                dragg.addEventListener("mouseout", undargg_elements);

            }



        }

        dargg_item();

        function dargg_elements() {
            this.setAttribute("draggable", "true");
            this.addEventListener("dragstart", dragg);

            const dropElements = document.querySelectorAll("[name='drop_elements']");
            dropElements.forEach((element) => {
                element.addEventListener("drop", drop);
                element.addEventListener("dragover", allowDrop);
            });
        }

        // drag off function

        function undargg_elements() {

            this.removeAttribute("draggable", "true");
            this.removeAttribute("ondragstart", "dragg(event)");

            $("[name='drop_elements']").removeAttr('ondrop', 'drop(event)');

            $("[name='drop_elements']").removeAttr('ondragover', 'allowDrop(event)');



        }


        var coll = document.getElementsByClassName("add_collapsible");
        var i;

        for (i = 0; i < coll.length; i++) {
            coll[i].addEventListener("click", function () {
                this.classList.toggle("onn");
                var content = this.nextElementSibling;
                content.classList.toggle("open");

            });
        }


        // get input field and add 'keyup' event listener
        let searchInput = document.querySelector('.search-input');
        searchInput.addEventListener('keyup', search);

        // get all title
        let titles = document.querySelectorAll('#search_module button span');
        let searchTerm = '';
        let tit = '';
        let search_module = document.querySelectorAll('#search_module button');
        function search(e) {
            // get input fieled value and change it to lower case
            searchTerm = e.target.value.toLowerCase();

            search_module.forEach((search_module) => {
                // navigate to p in the title, get its value and change it to lower case
                tit = search_module.textContent.toLowerCase();
                // it search term not in the title's title hide the title. otherwise, show it.
                tit.includes(searchTerm) ? search_module.style.display = 'flex' : search_module.style.display = 'none';
            });
        }



        function allowDrop(ev) {
            ev.preventDefault();
        }

        // for cloning
        var data_id;
        var data_class;

        let layout_No = 0;



        function dragg(ev) {

            data_id = ev.target.getAttribute('data-content');
            data_class = ev.target.getAttribute('class');

            if (data_class == 'clone') {
                layout_No = Math.floor(Math.random() * 100000);

                let finalno = 'layout_No' + layout_No;

                data_id = data_id.replace(/changeid/g, finalno);

                document.addEventListener("dragenter", function (ev) {
                    if (ev.target.className == "layoutbox" || ev.target.className == "layoutbox drop") {
                        ev.target.classList.add("drop");

                    }




                }

                );

                document.addEventListener("dragleave", function (ev) {
                    if (ev.target.className == "layoutbox" || ev.target.className == "layoutbox drop") {
                        ev.target.classList.remove("drop");

                    }

                }

                );

            }

            ev.dataTransfer.setData("text", ev.target.id);

        }


        function drop(ev) {

            ev.preventDefault();

            let newid = ev.target.getAttribute('id');

            if (data_class == 'clone') {

                let data_item = document.createElement("div");

                // Create a text node:
                data_item.innerHTML = data_id;

                document.getElementById(newid).appendChild(data_item);

                content_edit();

            }


            else {
                var data = ev.dataTransfer.getData("text");

                ev.target.appendChild(document.getElementById(data));

            }

            ev.target.classList.remove("drop");
            ev.target.removeAttribute("ondrop", "drop(event)");
            ev.target.removeAttribute("ondragover", "allowDrop(event)");


            dargg_item();
            content_edit();
            click_image_upload();
            inner_module_edit();
        }


        // add layout start coding

        let btnAdd = document.querySelector('.add_layout');
        let cart = document.querySelector('.layout-container');

        let itemNo = 0;

        btnAdd.addEventListener("click", () => {
            // create an item and add it to the cart.
            let item = document.createElement("div");

            itemNo = Math.floor(Math.random() * 100000);


            item.className = "layout-outer";
            item.setAttribute("name", "drag_main");
            item.innerHTML = `<div id="layout_No` + itemNo + `" class="layoutbox" name='drop_elements'>

</div>
                                `;
            cart.appendChild(item);

            content_edit();
            layout_del();
            //   drag_main();
        });

    }

    const getBlog = async () => {
        try {
            const { data } = await axiosInstance.get(`/get-blog/${slug}`);
            setBlog(data.blog);
            // Delay the execution of buildScript by 1 second
            setTimeout(() => {
                buildScript();
                setLoadBlog(false);
            }, 1000);

        }
        catch (error) {
            console.log(error);
            toast.error("Error fetching Single Blog!");
            setIsLoading(false); // Set loading state to false in case of an error
        }
    };


    const getGallery = async () => {
        try {
            const { data } = await axiosInstance.get('/admin/allgallery');
            if (data?.success) {
                setGallery(data.gallery);
            }
            setIsLoading(false); // Set loading state to false after fetching data
            chooseimg();

        } catch (error) {
            console.log(error);
            toast.error("Error fetching Gallery!");
            setIsLoading(false); // Set loading state to false in case of an error
        }
    };




    const submitBlog = async () => {

        const layout_container = document.getElementById('layout-container');


        let formData = {}; // Initialize an empty object

        formData = {
            description: layout_container.innerHTML,
        };

        try {
            const admintoken = localStorage.getItem('adminToken');
            if (admintoken) {
                // Send a POST request to your backend API endpoint

                await axiosInstance.put(`/update-blog/${slug}`, formData);

                // Handle success, e.g., show a success message to the user
                console.log('Blog Edit successfully!');
                toast.success("Blog Edit successfully!");
            }

        } catch (error) {
            // Handle errors, e.g., show an error message to the user
            console.error('Error On Blog:', error);
            console.log(formData)
            toast.error(error.response.data.message);

        }
    };


    useEffect(() => {
        getBlog();
        getGallery();
    }, []);


    // Define your JavaScript functions
    function formatDoc(cmd, value = null) {
        if (value) {
            document.execCommand(cmd, false, value);
        } else {
            document.execCommand(cmd);
        }
    }

    function addLink() {
        const url = prompt('Insert URL');
        if (url) {
            formatDoc('createLink', url);
        }
    }

    function addImg() {
        const url = prompt('Insert Image URL');
        if (url) {
            formatDoc('insertImage', url);
        }
    }



    return (

        <>

            <Helmet>
                {/* Include your JavaScript functions within a <script> tag */}
                <script type="text/javascript">
                    {`
            ${formatDoc.toString()}
            ${addLink.toString()}
            ${addImg.toString()}
          `}
                </script>
            </Helmet>



            <section className="mybuilderbox">
                <div className="edit_sidebar" id="edit_sidebar">
                    <div className="fixcomponent">
                        <h4>
                            Mybuilder
                            <svg
                                id="editbar_hide"
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#646464"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M19 12H6M12 5l-7 7 7 7" />
                            </svg>
                        </h4>
                        <div className="inner-search">
                            <div className="input-group rounded">
                                <input
                                    type="text"
                                    id="component-myInput"
                                    className="search-input"
                                    placeholder="Search for Component.."
                                    title="Type in a name"
                                    defaultValue=""
                                />
                                <span className="input-group-text border-0" id="search-addon">
                                    <i className="fa fa-search">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={20}
                                            height={20}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#f5112d"
                                            strokeWidth={3}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <circle cx={11} cy={11} r={8} />
                                            <line x1={21} y1={21} x2="16.65" y2="16.65" />
                                        </svg>
                                    </i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <button type="button" className="add_collapsible onn">
                        Basic{" "}
                    </button>
                    <div className="content_collapsible open" id="search_module">
                        {/*  onclick = 'this.contentEditable = true' onmouseout = 'this.contentEditable = false; */}
                        <button id="h1heading" className="clone" name="dragg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#646464"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
                                <path d="M14 3v5h5M16 13H8M16 17H8M10 9H8" />
                            </svg>
                            <span> H1 Heading </span>
                        </button>
                        <button id="h2heading" className="clone" name="dragg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#646464"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
                                <path d="M14 3v5h5M16 13H8M16 17H8M10 9H8" />
                            </svg>
                            H2 Heading
                        </button>
                        <button id="h3heading" className="clone" name="dragg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#646464"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
                                <path d="M14 3v5h5M16 13H8M16 17H8M10 9H8" />
                            </svg>
                            H3 Heading
                        </button>
                        <button id="h4heading" className="clone" name="dragg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#646464"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
                                <path d="M14 3v5h5M16 13H8M16 17H8M10 9H8" />
                            </svg>
                            H4 Heading
                        </button>
                        <button id="h5heading" draggable="true" className="clone" name="dragg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#646464"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
                                <path d="M14 3v5h5M16 13H8M16 17H8M10 9H8" />
                            </svg>
                            H5 Heading
                        </button>
                        <button id="para" className="clone" name="dragg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#646464"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
                                <path d="M14 3v5h5M16 13H8M16 17H8M10 9H8" />
                            </svg>
                            Paragraph
                        </button>
                    </div>
                    <button type="button" className="add_collapsible onn">
                        layouts{" "}
                    </button>
                    <div className="content_collapsible open" id="search_module">
                        <button id="one_column" className="clone" name="dragg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={40}
                                height={40}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#000000"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
                            </svg>
                            One Column
                        </button>
                        <button id="two_column" className="clone" name="dragg">
                            <svg
                                version="1.2"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 64 64"
                                width={64}
                                height={64}
                            >
                                <path
                                    fillRule="evenodd"
                                    d="m64 0v64h-64v-64zm-33 2h-29v60h29zm2 0v60h29v-60z"
                                />
                            </svg>
                            Two Column
                        </button>
                        <button
                            id="three_column"
                            draggable="true"
                            className="clone"
                            name="dragg"
                        >
                            <svg
                                version="1.2"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 64 64"
                                width={64}
                                height={64}
                            >
                                <style dangerouslySetInnerHTML={{ __html: "" }} />
                                <path
                                    fillRule="evenodd"
                                    d="m64 0v64h-64v-64zm-44 2h-18v60h18zm22 0h-20v60h20zm2 0v60h18v-60z"
                                />
                            </svg>
                            three Column
                        </button>
                        <button id="four_column" className="clone" name="dragg">
                            <svg
                                version="1.2"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 64 64"
                                width={64}
                                height={64}
                            >
                                <style dangerouslySetInnerHTML={{ __html: "" }} />
                                <path
                                    fillRule="evenodd"
                                    d="m64 0v64h-64v-64zm-49 2h-13v60h13zm16 0h-14v60h14zm15 0h-13v60h13zm2 0v60h14v-60z"
                                />
                            </svg>
                            Four Column
                        </button>
                        <button id="five_column" className="clone" name="dragg">
                            <svg
                                version="1.2"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 64 64"
                                width={64}
                                height={64}
                            >
                                <style dangerouslySetInnerHTML={{ __html: "" }} />
                                <path
                                    fillRule="evenodd"
                                    d="m64 0v64h-64v-64zm-49 2h-13v60h13zm16 0h-14v60h14zm15 0h-13v60h13zm2 0v60h14v-60z"
                                />
                            </svg>
                            Five Column
                        </button>
                        <button id="six_column" className="clone" name="dragg">
                            <svg
                                version="1.2"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 64 64"
                                width={64}
                                height={64}
                            >
                                <style dangerouslySetInnerHTML={{ __html: "" }} />
                                <path
                                    fillRule="evenodd"
                                    d="m64 0v64h-64v-64zm-49 2h-13v60h13zm16 0h-14v60h14zm15 0h-13v60h13zm2 0v60h14v-60z"
                                />
                            </svg>
                            Six Column
                        </button>
                    </div>
                    <button type="button" className="add_collapsible onn">
                        Modules{" "}
                    </button>
                    <div className="content_collapsible open" id="search_module">
                        <button id="textcode_module" className="clone" name="dragg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={40}
                                height={40}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#000000"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <polyline points="9 11 12 14 22 4" />
                                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                            </svg>
                            Text Code
                        </button>
                        <button id="img_module" className="clone" name="dragg">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                <path d="M85 5H15C9.5 5 5 9.5 5 15v70c0 5.5 4.5 10 10 10h70c5.5 0 10-4.5 10-10V15c0-5.5-4.5-10-10-10zM15 91c-3.3 0-6-2.7-6-6v-8.2l24-25.9L71.6 91H15zm76-6c0 3.3-2.7 6-6 6h-7.9L48.3 61l22.2-23.1L91 60v25zm0-30.9L72 33.6l-.1-.1c-.1 0-.1-.1-.2-.1 0 0-.1-.1-.2-.1s-.1-.1-.2-.1-.1 0-.2-.1h-1.2c-.1 0-.1 0-.2.1-.1 0-.1.1-.2.1s-.1.1-.2.1-.1.1-.2.1l-.1.1-23.5 24.5-11.1-11.5s-.1 0-.1-.1c-.1-.1-.1-.1-.2-.1 0 0-.1-.1-.2-.1s-.1-.1-.2-.1-.1 0-.2-.1h-1.2c-.1 0-.1 0-.2.1-.1 0-.1 0-.2.1-.1 0-.1.1-.2.1s-.1.1-.2.1c0 0-.1 0-.1.1L9 70.9V15c0-3.3 2.7-6 6-6h70c3.3 0 6 2.7 6 6v39.1zM27 17c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 16c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z" />
                            </svg>
                            Image
                        </button>
                        <button id="faq_module" className="clone" name="dragg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={40}
                                height={40}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#000000"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <rect x={2} y={2} width={20} height={8} rx={2} ry={2} />
                                <rect x={2} y={14} width={20} height={8} rx={2} ry={2} />
                                <line x1={6} y1={6} x2="6.01" y2={6} />
                                <line x1={6} y1={18} x2="6.01" y2={18} />
                            </svg>{" "}
                            Faq
                        </button>
                        <button id="cards_module" className="clone" name="dragg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={40}
                                height={40}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#000000"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <rect x={3} y={3} width={18} height={18} rx={2} />
                                <path d="M3 15h18" />
                            </svg>
                            cards
                        </button>
                        <button id="slider_module" className="clone" name="dragg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={40}
                                height={40}
                                viewBox="0 0 72 72"
                                id="slider"
                            >
                                <path d="M68.5 61.568a6.933 6.933 0 0 1-6.932 6.932H10.432A6.933 6.933 0 0 1 3.5 61.568V26.432a6.933 6.933 0 0 1 6.932-6.932h51.137a6.933 6.933 0 0 1 6.932 6.932v35.136zm-4-35.136a2.932 2.932 0 0 0-2.932-2.932H10.432A2.932 2.932 0 0 0 7.5 26.432v35.137a2.932 2.932 0 0 0 2.932 2.932h51.137a2.932 2.932 0 0 0 2.932-2.932V26.432z" />
                                <path d="M12.5 37.5a1 1 0 01-1-1v-3.802c0-2.721 2.313-5.198 4.903-5.198h18.051a1 1 0 110 2H16.403c-1.461 0-2.903 1.614-2.903 3.198V36.5a1 1 0 01-1 1zM12.5 42.5a1 1 0 01-1-1v-2a1 1 0 112 0v2a1 1 0 01-1 1zM60.454 15.5h-49a2 2 0 010-4h49a2 2 0 010 4zM54.454 7.5h-37a2 2 0 010-4h37a2 2 0 010 4z" />
                            </svg>
                            Slider
                        </button>
                    </div>
                    <br />

                    <div className="footerfix">
                        <Link id="savedata" to={`/edit-blog/${blog._id}`}>
                            Exit Builder
                            <svg
                                style={{ display: "none" }}
                                id="svgload"
                                className="rotating"
                                xmlns="http://www.w3.org/2000/svg"
                                width={18}
                                height={18}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#ffffff"
                                strokeWidth="1.5"
                                strokeLinecap="square"
                                strokeLinejoin="bevel"
                            >
                                <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38" />
                            </svg>
                        </Link>


                        <button id="savedata" onClick={submitBlog} >
                            Save Layout
                            <svg
                                style={{ display: "none" }}
                                id="svgload"
                                className="rotating"
                                xmlns="http://www.w3.org/2000/svg"
                                width={18}
                                height={18}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#ffffff"
                                strokeWidth="1.5"
                                strokeLinecap="square"
                                strokeLinejoin="bevel"
                            >
                                <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38" />
                            </svg>
                        </button>
                    </div>



                </div>

                {isLoadBlog ? (
                    <div class="loadingimg" >
                        <img src={builderimg} alt="fireSpot" />
                    </div>
                ) : (
                    <></>
                )}

                <div className="center_layout" id="center_layout">

                    <div className="layout-container" id="layout-container" dangerouslySetInnerHTML={{ __html: blog.description }} />



                    <button className="add_layout">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#000000"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1={12} y1={5} x2={12} y2={19} />
                            <line x1={5} y1={12} x2={19} y2={12} />
                        </svg>
                    </button>
                </div>
            </section>
            <div id="settingbx"   ></div>
            {/* media gallery start*/}
            <div className="gallery_box_main hide_gallery" id="gallery_box_main">
                <div className="gallery_box">
                    <div className="left_media_bar">
                        <h4>Action</h4>
                        <br />
                        <b>Drop files to upload</b>
                        <input
                            type="file"
                            onchange="document.getElementById('blah').src = window.URL.createObjectURL(this.files[0])"
                        />
                        <br />
                        <img
                            id="blah"
                            alt="your image"
                            width={100}
                            height={100}
                            src="https://banksiafdn.com/wp-content/uploads/2019/10/placeholde-image.jpg"
                        />
                    </div>
                    <div className="right_media_bar">
                        <div className="media_header">
                            <div className="media_header_left">
                                <h3>Choose an Image</h3>
                                <div className="media_center_tab">
                                    <button>Media Library</button>
                                </div>
                            </div>
                            <button className="media_header_right" id="media_close">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={25}
                                    height={25}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1={18} y1={6} x2={6} y2={18} />
                                    <line x1={6} y1={6} x2={18} y2={18} />
                                </svg>
                            </button>
                        </div>
                        <div className="media_content">
                            <div className="media_content_grid">

                                {isLoading ? (
                                    // Display loading skeletons while data is being fetched
                                    Array.from({ length: 1 }).map((_, index) => (
                                        <div className="col-12" key={index}>
                                            <p>Loading...</p>
                                        </div>
                                    ))
                                ) :
                                    (gallery.map(gallery => (

                                        <div key={gallery._id}>
                                            <img
                                                src={weburl+'uploads/' + gallery.filePath}
                                                imageid={gallery._id} className="getimg" name="image_select"
                                            />
                                        </div>




                                    ))
                                    )}


                            </div>
                        </div>
                        <div className="media_footer">
                            <button id="choosebt_img">Upload an Image</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default BuildBlogs