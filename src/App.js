import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Login from './Admin/pages/Login';
// import { BlogProvider } from './fetchdata/BlogContext';


import Dashboard from './Admin/pages/Dashboard';
import Addblog from './Admin/pages/Blogs/Addblog';
import AddGallery from './Admin/pages/Gallery/addGallery';
import BuildBlogs from './Admin/pages/builder/buildBlogs';
import AdminAllBlogs from './Admin/pages/Blogs/AllBlogs';
import EditAdminBlogs from './Admin/pages/Blogs/EditAdminBlogs';
import AllCategory from './Admin/pages/category/AllCategory';
import EditCategory from './Admin/pages/category/EditCategory';
import AddCategory from './Admin/pages/category/AddCategory';
import AllProduct from './Admin/pages/product/AllProduct';
import EditProduct from './Admin/pages/product/EditProduct';
import AddProduct from './Admin/pages/product/AddProduct';

import AddAttribute from './Admin/pages/attribute/AddAttribute';
import EditAttribute from './Admin/pages/attribute/EditAttribute';
import AllAttribute from './Admin/pages/attribute/AllAttribute';

import AddTag from './Admin/pages/tag/AddTag';
import EditTag from './Admin/pages/tag/EditTag';
import AllTag from './Admin/pages/tag/AllTag';

import MenuBuilder from './Admin/pages/builder/MenuBuilder';
import FooterMenuBuilder from './Admin/pages/builder/FooterMenuBuilder';

import HomeLayout from './Admin/pages/home/HomeLayout';
import AllReview from './Admin/pages/review/AllReview';
import AllOrder from './Admin/pages/order/AllOrder';
import PendingOrder from './Admin/pages/order/PendingOrder';
import CompleteOrder from './Admin/pages/order/CompleteOrder';

import AllUser from './Admin/pages/user/AllUser';
import UserView from './Admin/pages/user/UserView';
import ThemeSetting from './Admin/pages/home/ThemeSetting';

import AllZones from './Admin/pages/zones/AllZones';
import EditZones from './Admin/pages/zones/EditZones';
import AddZones from './Admin/pages/zones/AddZones';

import AllTax from './Admin/pages/tax/AllTax';
import EditTax from './Admin/pages/tax/EditTax';
import AddTax from './Admin/pages/tax/AddTax';

import AllPromo from './Admin/pages/promo/AllPromo';
import EditPromo from './Admin/pages/promo/EditPromo';
import AddPromo from './Admin/pages/promo/AddPromo';
import OrderView from './Admin/pages/order/OrderView';

import AddPage from './Admin/pages/pages/AddPage';
import AllPage from './Admin/pages/pages/AllPage';
import EditPage from './Admin/pages/pages/EditPage';
import AllImages from './Admin/pages/Gallery/AllImages';
import Forgot from './Admin/pages/Forgot';

import Admin404 from './Admin/pages/Admin404';

import { Toaster } from "react-hot-toast";
import './Admin/assets/css/volt.css';



const ScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
};


function App() {

  useEffect(() => {
    // Dynamically create a <link> element to load the CSS file
    const linkElement = document.createElement("link");
    linkElement.rel = "stylesheet";
    linkElement.href = "../assets/css/volt.css"; // Adjust the path as needed
    document.head.appendChild(linkElement);
  }, []);

  return (

    <>

      <Toaster />

      <Routes>


        <Route path="/" element={<Login />} />
        <Route path="/forgot" element={<Forgot />} />


        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addblog" element={<Addblog />} />
        <Route path="/add-gallery" element={<AddGallery />} />
        <Route path="/buildBlogs/:slug" element={<BuildBlogs />} />
        <Route path="/allblogs" element={<AdminAllBlogs />} />
        <Route path="/edit-blog/:slug" element={<EditAdminBlogs />} />

        <Route path="/add-category/" element={<AddCategory />} />
        <Route path="/all-category/" element={<AllCategory />} />
        <Route path="/edit-category/:slug" element={<EditCategory />} />


        <Route path="/add-product/" element={< AddProduct />} />
        <Route path="/all-product/" element={< AllProduct />} />
        <Route path="/edit-product/:slug" element={<EditProduct />} />

        <Route path="/add-attribute/" element={< AddAttribute />} />
        <Route path="/all-attribute/" element={< AllAttribute />} />
        <Route path="/edit-attribute/:slug" element={<EditAttribute />} />

        <Route path="/add-tag/" element={< AddTag />} />
        <Route path="/all-tag/" element={< AllTag />} />
        <Route path="/edit-tag/:slug" element={<EditTag />} />
        <Route path="/add-menu" element={<MenuBuilder />} />
        <Route path="/add-footer-menu" element={<FooterMenuBuilder />} />

        <Route path="/home-layout" element={<HomeLayout />} />
        <Route path="/reviews" element={<AllReview />} />
        <Route path="/all-order" element={<AllOrder />} />
        <Route path="/pending-order" element={<PendingOrder />} />
        <Route path="/complete-order" element={<CompleteOrder />} />

        <Route path="/order/:userId/:orderId" element={<OrderView />} />


        <Route path="/all-user" element={<AllUser />} />


        <Route path="/user/:slug" element={<UserView />} />
        <Route path="/theme-setting" element={<ThemeSetting />} />

        <Route path="/add-zones/" element={< AddZones />} />
        <Route path="/all-zones/" element={< AllZones />} />
        <Route path="/edit-zones/:slug" element={<EditZones />} />

        <Route path="/add-taxes/" element={< AddTax />} />
        <Route path="/all-taxes/" element={< AllTax />} />
        <Route path="/edit-taxes/:slug" element={<EditTax />} />

        <Route path="/add-promo/" element={< AddPromo />} />
        <Route path="/all-promo/" element={< AllPromo />} />
        <Route path="/edit-promo/:slug" element={<EditPromo />} />

        <Route path="/add-page/" element={< AddPage />} />
        <Route path="/all-page/" element={< AllPage />} />
        <Route path="/edit-page/:slug" element={<EditPage />} />
        <Route path="/all-images" element={<AllImages />} />

        

        <Route path="*" element={<Admin404 />} />

      </Routes>
      <ScrollToTop />

    </>
  );
}

export default App;
