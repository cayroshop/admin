import React, { useState, useEffect } from "react";
import logo from '../assets/img/light.svg';
import { Link } from 'react-router-dom';
const Sidebar = () => {


    return (
        <>

            <nav className="navbar navbar-dark navbar-theme-primary px-4 col-12 d-lg-none">
                <a className="navbar-brand me-lg-5" href="../../index.html">
                    <img
                        className="navbar-brand-dark"
                        src={logo}
                        alt="Volt logo"
                    />{" "}
                    <img
                        className="navbar-brand-light"
                        src={logo}
                        alt="Volt logo"
                    />
                </a>
                <div className="d-flex align-items-center">
                    <button
                        className="navbar-toggler d-lg-none collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#sidebarMenu"
                        aria-controls="sidebarMenu"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                </div>
            </nav>


            <nav
                id="sidebarMenu"
                className="sidebar d-lg-block bg-gray-800 text-white collapse simplebar-scrollable-y"
                data-simplebar="init"
            >
                <div className="simplebar-wrapper" style={{ margin: 0 }}>
                    <div className="simplebar-height-auto-observer-wrapper">
                        <div className="simplebar-height-auto-observer" />
                    </div>
                    <div className="simplebar-mask">
                        <div className="simplebar-offset" style={{ right: 0, bottom: 0 }}>
                            <div
                                className="simplebar-content-wrapper"
                                style={{ height: "auto", overflow: "hidden scroll" }}
                            >
                                <div className="simplebar-content" style={{ padding: 0 }}>
                                    <div className="sidebar-inner px-2 pt-3">
                                        <div className="user-card d-flex d-md-none justify-content-between justify-content-md-center pb-4">
                                            <div className="d-flex align-items-center">
                                                <div className="avatar-lg me-4">
                                                    <img
                                                        src="../../assets/img/team/profile-picture-3.jpg"
                                                        className="card-img-top rounded-circle border-white"
                                                        alt="Bonnie Green"
                                                    />
                                                </div>
                                                <div className="d-block">
                                                    <h2 className="h5 mb-3">Hi, Jane</h2>
                                                    <a
                                                        href="../../pages/examples/sign-in.html"
                                                        className="btn btn-secondary btn-sm d-inline-flex align-items-center"
                                                    >
                                                        <svg
                                                            className="icon icon-xxs me-1"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                                            />
                                                        </svg>
                                                        Sign Out
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="collapse-close d-md-none">
                                                <a
                                                    href="#sidebarMenu"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#sidebarMenu"
                                                    aria-controls="sidebarMenu"
                                                    aria-expanded="true"
                                                    aria-label="Toggle navigation"
                                                >
                                                    <svg
                                                        className="icon icon-xs"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                        <ul className="nav flex-column pt-3 pt-md-0">
                                            <li className="nav-item">
                                                <Link
                                                    to="/dashboard"
                                                    className="nav-link d-flex align-items-center"
                                                >
                                                    <span className="sidebar-icon">
                                                        <img
                                                            src={logo}
                                                            height={20}
                                                            width={20}
                                                            alt="Volt Logo"
                                                        />{" "}
                                                    </span>
                                                    <span className="mt-1 sidebar-text"> Ecomm App</span>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link
                                                    to="/dashboard"
                                                    className="nav-link d-flex align-items-center justify-content-between"
                                                >
                                                    <span>
                                                        <span className="sidebar-icon">
                                                            <svg
                                                                className="icon icon-xs me-2"
                                                                fill="currentColor"
                                                                viewBox="0 0 20 20"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                                                                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                                                            </svg>
                                                        </span>
                                                        <span className="sidebar-text">Dashboard</span>
                                                    </span>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link collapsed d-flex justify-content-between align-items-center"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#submenu-components"
                                                    hef="#blogs"
                                                >
                                                    <span>
                                                        <span className="sidebar-icon">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 16 16"
                                                                fill="currentColor"
                                                                width={20}
                                                                height={20}
                                                            >
                                                                <path d="M15.592 6.19c-.338-.144-1.787.016-2.189-.347-.284-.262-.302-.736-.413-1.368-.186-1.059-.263-1.299-.456-1.716C11.831 1.273 10.147 0 8.617 0H5.07C2.28 0 0 2.277 0 5.057v5.896C0 13.728 2.28 16 5.07 16h5.827c2.79 0 5.055-2.272 5.071-5.047L16 6.87s0-.505-.408-.68zM5.134 4.133h2.812c.536 0 .971.433.971.962 0 .53-.435.967-.971.967H5.134a.972.972 0 0 1-.971-.967c0-.53.435-.962.971-.962zm5.715 7.708H5.134a.971.971 0 0 1-.971-.962c0-.529.435-.962.971-.962h5.715c.531 0 .966.433.966.962a.97.97 0 0 1-.966.962z" />
                                                            </svg>
                                                        </span>
                                                        <span className="sidebar-text">Blogs</span>
                                                    </span>
                                                    <span className="link-arrow">
                                                        <svg
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
                                                    </span>
                                                </a>
                                                <div
                                                    className="multi-level collapse show"
                                                    role="list"
                                                    id="submenu-components"
                                                    aria-expanded="false"
                                                >
                                                    <ul className="flex-column nav">
                                                        <li className="nav-item">
                                                            <Link className="nav-link" to="/allblogs#blogs">
                                                                <span className="sidebar-text">All Blogs</span>
                                                            </Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link className="nav-link" to="/addBlog#blogs">
                                                                <span className="sidebar-text">Add Blog</span>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>



                                            <li className="nav-item">
                                                <a
                                                    className="nav-link collapsed d-flex justify-content-between align-items-center"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#submenu-components"
                                                    hef="#blogs"
                                                >
                                                    <span>
                                                        <span className="sidebar-icon">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 16 16"
                                                                fill="currentColor"
                                                                width={20}
                                                                height={20}
                                                            >
                                                                <path d="M15.592 6.19c-.338-.144-1.787.016-2.189-.347-.284-.262-.302-.736-.413-1.368-.186-1.059-.263-1.299-.456-1.716C11.831 1.273 10.147 0 8.617 0H5.07C2.28 0 0 2.277 0 5.057v5.896C0 13.728 2.28 16 5.07 16h5.827c2.79 0 5.055-2.272 5.071-5.047L16 6.87s0-.505-.408-.68zM5.134 4.133h2.812c.536 0 .971.433.971.962 0 .53-.435.967-.971.967H5.134a.972.972 0 0 1-.971-.967c0-.53.435-.962.971-.962zm5.715 7.708H5.134a.971.971 0 0 1-.971-.962c0-.529.435-.962.971-.962h5.715c.531 0 .966.433.966.962a.97.97 0 0 1-.966.962z" />
                                                            </svg>
                                                        </span>
                                                        <span className="sidebar-text">Page</span>
                                                    </span>
                                                    <span className="link-arrow">
                                                        <svg
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
                                                    </span>
                                                </a>
                                                <div
                                                    className="multi-level collapse"
                                                    role="list"
                                                    id="submenu-components"
                                                    aria-expanded="false"
                                                >
                                                    <ul className="flex-column nav">
                                                        <li className="nav-item">
                                                            <Link className="nav-link" to="/all-page">
                                                                <span className="sidebar-text">All Page</span>
                                                            </Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link className="nav-link" to="/add-page">
                                                                <span className="sidebar-text">Add Page</span>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>




                                            <li className="nav-item">
                                                <a
                                                    className="nav-link collapsed d-flex justify-content-between align-items-center"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#gallery-components"
                                                    hef="#gallery"
                                                >
                                                       <span>
                                                        <span className="sidebar-icon">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="icon icon-xs me-2"
                                                                width={20}
                                                                height={20}
                                                                fill="currentColor"
                                                                viewBox="0 0 32 32"
                                                            >
                                                                <g transform="translate(-108 -148)">
                                                                    <path
                                                                        style={{ InkscapeStroke: "none" }}
                                                                        fillRule="currentColor"
                                                                        d="M113 153c-1.6447 0-3 1.3553-3 3v11c0 1.6447 1.3553 3 3 3h2v-9c0-1.6447 1.3553-3 3-3h15v-2c0-1.6447-1.3553-3-3-3zM128.06641 166.48047l-4.29883 5.16015a1.0001 1.0001 0 01-1.47461.0664L120 169.41406l-2.9375 2.9375C117.19895 172.73718 117.55457 173 118 173h16.58594z"
                                                                        color="#9ca3af"
                                                                    />
                                                                    <path
                                                                        style={{ InkscapeStroke: "none" }}
                                                                        fillRule="currentColor"
                                                                        d="m 118,160 c -0.5713,0 -1,0.4287 -1,1 v 8.58594 l 2.29297,-2.29297 a 1.0001,1.0001 0 0 1 1.41406,0 l 2.22656,2.22656 4.29883,-5.16015 a 1.0001,1.0001 0 0 1 0.72266,-0.35743 1.0001,1.0001 0 0 1 0.75195,0.29102 L 136,171.58594 V 161 c 0,-0.5713 -0.4287,-1 -1,-1 z m 3,2 a 1,1 0 0 1 1,1 1,1 0 0 1 -1,1 1,1 0 0 1 -1,-1 1,1 0 0 1 1,-1 z"
                                                                        color="#9ca3af"
                                                                    />
                                                                </g>
                                                            </svg>
                                                        </span>
                                                        <span className="sidebar-text">Gallery</span>
                                                    </span>
                                                    <span className="link-arrow">
                                                        <svg
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
                                                    </span>
                                                </a>
                                                <div
                                                    className="multi-level collapse"
                                                    role="list"
                                                    id="gallery-components"
                                                    aria-expanded="false"
                                                >
                                                    <ul className="flex-column nav">
                                                        <li className="nav-item">
                                                            <Link className="nav-link" to="/add-gallery">
                                                                <span className="sidebar-text">My Gallery</span>
                                                            </Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link className="nav-link" to="/all-images">
                                                                <span className="sidebar-text">All Images</span>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>





                                            <li className="nav-item">
                                                <a
                                                    className="nav-link collapsed d-flex justify-content-between align-items-center"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#submenu-category"
                                                    hef="#category"
                                                >
                                                    <span>
                                                        <span className="sidebar-icon">

                                                            <svg width={20} fill="currentColor" height={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="m31,30.95001v-13.95001h-13.95001c.5,7.46997,6.48004,13.45001,13.95001,13.95001Z" /><path d="m32,33c-6.48999,0-12.14001-3.66003-15-9.02002v23.02002h29.95001c-.52002-7.79999-7.02002-14-14.95001-14Z" /><path d="m33,31.04999c6.06.35999,11.28998,3.89001,14,8.96997v-23.01996h-14v14.04999Z" /><path d="M53 10H11c-.54999 0-1 .45001-1 1v42c0 .54999.45001 1 1 1h42c.54999 0 1-.45001 1-1V11c0-.54999-.45001-1-1-1zm-4 38c0 .54999-.45001 1-1 1H16c-.54999 0-1-.45001-1-1V16c0-.54999.45001-1 1-1h32c.54999 0 1 .45001 1 1v32zM59 14h-3v36h3c.54999 0 1-.45001 1-1V15c0-.54999-.45001-1-1-1zM4 15v34c0 .54999.45001 1 1 1h3V14h-3c-.54999 0-1 .45001-1 1z" /></svg>

                                                        </span>
                                                        <span className="sidebar-text">Categories</span>
                                                    </span>
                                                    <span className="link-arrow">
                                                        <svg
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
                                                    </span>
                                                </a>
                                                <div
                                                    className="multi-level collapse "
                                                    role="list"
                                                    id="submenu-category"
                                                    aria-expanded="false"
                                                >
                                                    <ul className="flex-column nav">
                                                        <li className="nav-item">
                                                            <Link className="nav-link" to="/all-category">
                                                                <span className="sidebar-text">All Category</span>
                                                            </Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link className="nav-link" to="/add-category">
                                                                <span className="sidebar-text">Add Category</span>
                                                            </Link>
                                                        </li>

                                                    </ul>
                                                </div>
                                            </li>






                                            <li className="nav-item">
                                                <a
                                                    className="nav-link collapsed d-flex justify-content-between align-items-center"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#submenu-product"
                                                    hef="#blogs"
                                                >
                                                    <span>
                                                        <span className="sidebar-icon">

                                                            <svg xmlns="http://www.w3.org/2000/svg" height={20} width={20} fill="currentColor" enable-background="new 0 0 1024 1024" viewBox="0 0 1024 1024"><path d="M490 324.2v219.5c-18-9.6-36.2-19.2-54.4-28.8-45.6-24.1-91.2-48.2-136.9-72.3-6.6-3.5-12.7-7.1-19.7-10.5V212.7c2 1.2 4.7 2.4 7 3.6.1.1.2.1.3.2 6.8 3.6 13.5 7.1 20.3 10.7 2.2 1.2 4.5 2.4 6.7 3.6 2.3 1.2 4.5 2.4 6.8 3.6 4.5 2.4 9.1 4.8 13.6 7.2 45.6 24.1 91.3 48 136.9 72.1.2.1.3 0 .5.1 1.1.6 2.2 1.3 3.3 1.3h0c.2 1 .4.6.5.7 2.6 1.4 5.1 2.9 7.7 4.3 1.5.8 2.8 1.7 4.3 2.5C488 323 489 323.7 490 324.2zM745 213.1v219.2c0 0-.1 0-.1 0-3.2 1.5-5.6 2.9-8.4 4.4-43.5 23-87 45.9-130.5 68.9-.8.4-1.5.9-2.4 1.3-23.2 12.2-46.6 24.2-69.6 36.5V324.2c2-1.5 5.4-2.9 8.2-4.4 43.5-23 87-46 130.5-68.9C696.8 238.2 721 225.8 745 213.1zM720.2 176.8c-17 9-33.9 17.9-50.9 26.9-45.6 24.1-91.2 48.2-136.9 72.3-6.8 3.6-13.6 7.2-20.4 10.8-25.1-13.3-50.2-26.5-75.3-39.8-44.3-23.4-88.5-46.8-132.8-70.2 17-9 33.9-17.9 50.9-26.9 45.6-24.1 91.2-48.2 136.8-72.3 6.8-3.6 13.6-7.2 20.4-10.8 25.1 13.3 50.2 26.5 75.4 39.8C631.6 130 675.9 153.4 720.2 176.8zM236 727.4v219.2c-19-9.4-35.9-18.9-53.7-28.3-45.6-24.1-91.1-48.2-136.7-72.2-6.9-3.6-14.5-7.3-20.5-10.9V615.8c3 2.1 7.8 4.2 11.8 6.2.6.3 1.1.6 1.6.9 6.8 3.6 13.6 7.4 20.5 11 6.8 3.6 13.6 7 20.4 11h0c45.3 24 90.6 47.7 135.9 71.6.1 0 .2 0 .3 0 .1 0 .2 0 .2.1.2.1.3.1.5.2 1.3.7 2.5 1.3 3.8 2 5.2 2.8 10.3 5.6 15.6 8.4 0 0 0 0 0 0C235.7 727.3 235.8 727.4 236 727.4L236 727.4zM490 616v219.2c-25 13.3-50.3 26.6-75.5 39.9-45.2 23.9-89.5 47.7-135.5 71.6V727.3c0-.2.7-.3 1-.5 2.5-1.3 5-2.6 7.4-3.9 19-10.1 38.1-20.1 57.1-30.2 24.5-12.9 49-25.9 73.4-38.8 9-4.8 18-9.5 27.1-14.2 2.2-1.1 4.3-2.3 6.5-3.4 10.3-5.4 20.5-10.7 30.8-16.2C485 618.7 488 617.4 490 616zM465 579.7L465 579.7c-16 9-33.6 18-50.6 26.9-45.6 24.1-91.1 48.2-136.7 72.4-3.4 1.8-6.7 3.6-10.1 5.4-3.4 1.8-6.8 3.6-10.2 5.4L182.2 650c-44.3-23.4-88.5-46.8-132.7-70.2 17-9 33.9-17.9 50.9-26.9 45.6-24.1 91.2-48.1 136.8-72.2 6.8-3.6 13.6-7.7 20.4-10.7h0c6.3 3 12.5 6.5 18.8 9.8 18.8 10 37.4 19.8 56.2 29.8C376.8 533 421 556.3 465 579.7zM745 727.4v219.2c-19-9.4-35.9-18.9-53.8-28.3-45.6-24.1-91.1-48.2-136.7-72.2-6.9-3.6-13.5-7.3-20.5-10.9V615.6c18 9.6 36.2 19.2 54.4 28.9 45.6 24.1 91.2 48.3 136.9 72.4 1.3.7 2.5 1.3 3.8 2C734.4 721.7 739 724.6 745 727.4zM999.1 616.1c-20.4 10.8-40.9 21.4-61.4 32.2-.1.1-.2.1-.3.2-1.5.8-2.9 1.5-4.4 2.3-1.5.8-2.9 1.5-4.3 2.3-.5.3-1.1.6-1.6.8.3-.1.5-.3.8-.4-.1.1-.3.1-.4.2-.1.1-.3.1-.4.2-43.5 23-87 45.9-130.4 68.9-.3.2-.7.3-1 .5-2.3 1.3-4.5 2.5-7.3 3.8 0 0-.1-.1-.1-.1H788v219.6c46-23.8 90.3-47.7 135.5-71.6 25.2-13.3 50.5-26.6 75.5-39.9L999.1 616.1C999 616.1 999.1 616.1 999.1 616.1zM788.3 727.2c2.4-1.3 4.8-2.6 7.3-3.8C793.2 724.7 791.1 726 788.3 727.2zM974.6 579.8c-17 9-33.9 17.9-50.9 26.9-45.6 24.1-91.2 48.2-136.8 72.3-2.5 1.3-5.1 2.7-7.6 4-.1 0-.2.1-.2.1-2.7 1.4-5.4 2.9-8.2 4.4-1.5.8-2.9 1.4-4.3 2.4h0c-25.1-14-50.2-26.7-75.4-40-22.1-11.7-44.3-23.5-66.4-35.2-11.1-5.9-22.1-11.7-33.2-17.5-2.8-1.5-5.5-2.9-8.3-4.4-8.3-4.4-16.5-8.8-24.8-13.2 16.9-8.9 33.9-17.9 50.8-26.8 45.6-24.1 91.2-48.2 136.9-72.3 6.8-3.6 13.6-7.2 20.4-10.8 25.1 13.3 50.2 26.6 75.3 39.8C886.1 533 930.3 556.4 974.6 579.8z" /></svg>


                                                        </span>
                                                        <span className="sidebar-text">Products</span>
                                                    </span>
                                                    <span className="link-arrow">
                                                        <svg
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
                                                    </span>
                                                </a>
                                                <div
                                                    className="multi-level collapse "
                                                    role="list"
                                                    id="submenu-product"
                                                    aria-expanded="false"
                                                >
                                                    <ul className="flex-column nav">
                                                        <li className="nav-item">
                                                            <Link className="nav-link" to="/all-product">
                                                                <span className="sidebar-text">All Product</span>
                                                            </Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link className="nav-link" to="/add-product">
                                                                <span className="sidebar-text">Add Product</span>
                                                            </Link>
                                                        </li>

                                                        {/* <li className="nav-item">
                                                            <Link className="nav-link" to="/all-tag">
                                                                <span className="sidebar-text">Product Tag</span>
                                                            </Link>
                                                        </li> */}

                                                    </ul>
                                                </div>
                                            </li>



                                            <li className="nav-item">
                                                <a
                                                    className="nav-link collapsed d-flex justify-content-between align-items-center"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#submenu-attribute"
                                                    hef="#blogs"
                                                >
                                                    <span>
                                                        <span className="sidebar-icon">


                                                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={18} stroke="currentColor" fill="currentColor" viewBox="0 0 32 32"><path d="M9.58 15.17a.83.83 0 0 0 0 1.66.83.83 0 0 0 0-1.66zM22.42 6a.84.84 0 0 0 0 1.67.84.84 0 0 0 0-1.67zm-4.59 18.33a.84.84 0 0 0 0 1.67.84.84 0 0 0 0-1.67z" /><path d="M29 2H3a1 1 0 0 0-1 1v26a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Zm-2 24.17h-6.52a2.83 2.83 0 0 1-5.29 0H5a1 1 0 0 1 0-2h10.19a2.82 2.82 0 0 1 5.29 0H27a1 1 0 0 1 0 2ZM27 17H12.23a2.83 2.83 0 0 1-5.29 0H5a1 1 0 0 1 0-2h1.94a2.83 2.83 0 0 1 5.29 0H27a1 1 0 0 1 0 2Zm0-9.17h-1.94a2.82 2.82 0 0 1-5.29 0H5a1 1 0 0 1 0-2h14.77a2.83 2.83 0 0 1 5.29 0H27a1 1 0 0 1 0 2Z" /></svg>

                                                        </span>
                                                        <span className="sidebar-text">Attributes</span>
                                                    </span>
                                                    <span className="link-arrow">
                                                        <svg
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


                                                    </span>
                                                </a>
                                                <div
                                                    className="multi-level collapse "
                                                    role="list"
                                                    id="submenu-attribute"
                                                    aria-expanded="false"
                                                >
                                                    <ul className="flex-column nav">
                                                        <li className="nav-item">
                                                            <Link className="nav-link" to="/all-attribute">
                                                                <span className="sidebar-text">All Attribute</span>
                                                            </Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link className="nav-link" to="/add-attribute">
                                                                <span className="sidebar-text">Add Attribute</span>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>



                                            <li className="nav-item">
                                                <a
                                                    className="nav-link collapsed d-flex justify-content-between align-items-center"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#submenu-orders"
                                                    hef="#orders"
                                                >
                                                    <span>
                                                        <span className="sidebar-icon">

                                                            <svg height={20} width={20} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                                                                <path d="M950.8 320c0-.3-.1-.5-.1-.8 0-7.8-8.5-12.2-15.1-8.6-14.3 7.6-28.6 15.3-42.9 22.9-34 18.2-68.1 36.4-102.1 54.6-41.3 22.1-82.6 44.1-123.8 66.2-35.7 19.1-71.4 38.2-107.1 57.2-15.9 8.5-32.3 16.4-47.9 25.4-12.5-6.7-25.1-13.4-37.7-20.1-34-18.2-68.1-36.4-102.1-54.6-41.3-22.1-82.6-44.1-123.8-66.2-35.7-19.1-71.4-38.2-107.1-57.2-17.3-9.3-34.5-19-52-27.8-.2-.1-.7-.3-.9-.4-6.6-3.5-15.2.8-15.2 8.6v387.9c0 17.8-.5 35.8.2 53.7 0 .3.1.5.1.8 0 3.4 1.9 7 5 8.6 14.2 7.6 28.5 15.2 42.8 22.8 34.2 18.3 68.4 36.5 102.6 54.8l123.6 66c35.6 19 71.3 38 106.9 57.1 17.4 9.3 34.6 19 52.1 27.8.3.1.5.3.7.4 2 1.1 3.9 1.4 5.7 1.2h.2c1.4-.1 2.9-.5 4.2-1.2 14.2-7.6 28.5-15.2 42.7-22.8 34.2-18.3 68.4-36.5 102.6-54.8l123.6-66c35.6-19 71.2-38 106.8-57.1 17.3-9.3 35.3-17.8 52.2-27.8.2-.1.7-.3.9-.4 3.8-2 5.1-5.3 5.1-8.6v-388c0-17.7.5-35.7-.2-53.6z" />
                                                                <path d="M703.5 123.2c-3.4 2-6.9 3.9-10.3 5.9-2.8 1.6-5.5 3.1-8.3 4.7-.7.4-1.4.8-2 1.2-35.7 20.3-71.4 40.5-107.1 60.8-44 25-88 49.9-132 74.9-38.1 21.6-76.1 43.2-114.1 64.8-10.2 5.8-20.4 11.4-30.7 17.1-3.5 1.9-6.9 3.9-10.3 5.8-3.4 2-6.8 3.9-10.2 5.9-16-8.5-32.1-17-48.1-25.4-33.6-17.7-67.1-35.5-100.7-53.2l-42-22.2c-6.5-3.4-6.5-13.8 0-17.3.9-.5 1.8-1 2.8-1.5 19.8-10.5 39.6-20.9 59.4-31.4 36.5-19.3 73.1-38.6 109.6-57.9 40.2-21.2 80.3-42.4 120.5-63.7 31.7-16.7 63.4-33.4 95-50.1 8.6-4.5 17.2-9.1 25.8-13.6 5.5-2.9 10.2-6.2 16.8-3 16.8 8.3 33.2 17.5 49.8 26.3 34.9 18.4 69.7 36.8 104.6 55.3 10.5 5.5 21 11 31.5 16.6zm237.7 131.6c.3 3.3-1.1 6.5-5 8.6-.9.5-1.8 1-2.8 1.5-19.8 10.5-39.6 21-59.4 31.4-36.5 19.3-73.1 38.6-109.6 57.9-40.2 21.2-80.3 42.5-120.5 63.7-31.6 16.7-63.3 33.4-94.9 50.2-8.6 4.5-17.2 9.1-25.8 13.6-5.5 2.9-10.2 6.2-16.8 3-16.8-8.3-33.2-17.6-49.8-26.3-34.9-18.4-69.7-36.9-104.6-55.3-10.4-5.5-20.9-11-31.3-16.6 3.4-2 6.9-3.9 10.3-5.9 2.7-1.5 5.4-3.1 8.1-4.6.7-.4 1.5-.8 2.2-1.3 35.6-20.2 71.3-40.5 106.9-60.7 44-25 88-49.9 132-74.9 38.1-21.6 76.1-43.2 114.1-64.8 10.2-5.8 20.5-11.5 30.8-17.2 3.5-1.9 6.9-3.9 10.3-5.9 3.4-2 6.8-3.9 10.2-5.9 16 8.5 32 16.9 48 25.3 33.6 17.7 67.1 35.5 100.7 53.2l42 22.2c3.8 2.2 5.2 5.5 4.9 8.8z" />
                                                            </svg>




                                                        </span>
                                                        <span className="sidebar-text">Orders</span>
                                                    </span>
                                                    <span className="link-arrow">



                                                        <svg
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


                                                    </span>
                                                </a>
                                                <div
                                                    className="multi-level collapse "
                                                    role="list"
                                                    id="submenu-orders"
                                                    aria-expanded="false"
                                                >
                                                    <ul className="flex-column nav">
                                                        <li className="nav-item">
                                                            <Link className="nav-link" to="/all-order">
                                                                <span className="sidebar-text">All Order</span>
                                                            </Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link className="nav-link" to="/pending-order">
                                                                <span className="sidebar-text"> Pending Order </span>
                                                            </Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link className="nav-link" to="/complete-order">
                                                                <span className="sidebar-text"> Completed Order </span>
                                                            </Link>
                                                        </li>



                                                    </ul>
                                                </div>
                                            </li>






                                            <li className="nav-item">
                                                <Link to="/reviews" className="nav-link">
                                                    <span className="sidebar-icon">

                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="currentColor"
                                                            stroke="none"
                                                            className="icon icon-xs me-0"
                                                            fillRule="evenodd"
                                                            strokeLinejoin="round"
                                                            strokeMiterlimit={2}
                                                            clipRule="evenodd"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M12,13.444l-3.437,2.115c-0.372,0.229 -0.844,0.215 -1.202,-0.034c-0.358,-0.249 -0.534,-0.687 -0.448,-1.115l0.805,-4.028l-2.647,-2.647c-0.303,-0.303 -0.402,-0.756 -0.252,-1.159c0.15,-0.402 0.521,-0.68 0.95,-0.71l3.641,-0.26l1.582,-3.691c0.173,-0.404 0.569,-0.665 1.008,-0.665c0.439,0 0.835,0.261 1.008,0.665l1.582,3.691l3.641,0.26c0.429,0.03 0.8,0.308 0.95,0.71c0.15,0.403 0.051,0.856 -0.252,1.159l-2.647,2.647l0.805,4.028c0.086,0.428 -0.09,0.866 -0.448,1.115c-0.358,0.249 -0.83,0.263 -1.202,0.034l-3.437,-2.115Z" />
                                                            <path d="M10.644 15.453l.186.013c.387.027.722.278.858.641.135.364.046.772-.228 1.046l-1.745 1.746.533 2.667c.078.386-.082.781-.405 1.006-.323.226-.749.238-1.084.031l-2.259-1.39-2.259 1.39c-.335.207-.761.195-1.084-.031-.323-.225-.483-.62-.405-1.006l.533-2.667-1.745-1.745c-.274-.275-.363-.683-.228-1.047.136-.363.471-.614.858-.641l2.38-.17 1.04-2.426c.132-.307.407-.523.727-.583l-.385 1.927c-.164.818.173 1.655.858 2.132.685.476 1.587.502 2.297.065l1.557-.958zM17.683 12.287c.32.06.595.276.727.583l1.04 2.426 2.38.17c.387.027.722.278.858.641.135.364.046.772-.228 1.046l-1.745 1.746.533 2.667c.078.386-.082.781-.405 1.006-.323.226-.749.238-1.084.031l-2.259-1.39-2.259 1.39c-.335.207-.761.195-1.084-.031-.323-.225-.483-.62-.405-1.006l.533-2.667-1.745-1.745c-.274-.275-.363-.683-.228-1.047.136-.363.471-.614.858-.641l.186-.013 1.557.958c.71.437 1.612.411 2.297-.065.685-.477 1.022-1.314.858-2.132l-.385-1.927z" />
                                                        </svg>


                                                    </span>
                                                    <span className="sidebar-text">Reviews</span>
                                                </Link>
                                            </li>



                                            <li className="nav-item">
                                                <Link to="/all-user" className="nav-link">
                                                    <span className="sidebar-icon">


                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            enableBackground="new 0 0 30 30"
                                                            viewBox="0 0 30 30"
                                                            fill="currentColor"
                                                            stroke="none"
                                                            className="icon icon-xs me-0"
                                                        >
                                                            <path d="M18.9433346 23.2542229c.0091286.2462788-.082056.483427-.2553539.6567802-.173296.1732407-.4104443.2735558-.656723.2735558H3.9123354c-.2462785 0-.4833715-.1003151-.6475384-.2735558-.1732967-.1733532-.2736676-.4105015-.2645378-.6567802.0821114-4.3141022 3.6574347-7.8255739 7.9715376-7.8255739C15.2859554 15.4286489 18.8612785 18.9401207 18.9433346 23.2542229zM6.4935269 10.0656366c0-2.343987 1.915338-4.2501955 4.2593799-4.2501955s4.2503071 1.9062085 4.2503071 4.2501955c0 2.3532276-1.9062643 4.2594357-4.2503071 4.2594357S6.4935269 12.4188643 6.4935269 10.0656366zM16.7203465 12.4645882c0-1.9899902 1.6199951-3.6099854 3.6099854-3.6099854 1.9799805 0 3.5999756 1.6199951 3.5999756 3.6099854 0 1.9799805-1.6199951 3.6000977-3.5999756 3.6000977C18.3403416 16.0646858 16.7203465 14.4445686 16.7203465 12.4645882zM27.0003147 23.1645393c0 .2700195-.0999756.5300293-.289978.7200928-.1900024.1899414-.4400024.2999268-.710022.2999268h-5.2000122c.1100464-.3199463.1500244-.6499023.1400146-.9699707-.039978-2.3299561-.8999634-4.4699707-2.2999878-6.1599121.5999756-.1800537 1.2299805-.2700195 1.8599854-.2700195C24.0203342 16.7846565 26.9403172 19.6445198 27.0003147 23.1645393z" />
                                                        </svg>



                                                    </span>
                                                    <span className="sidebar-text">All Users</span>
                                                </Link>
                                            </li>



                                            <li className="nav-item">
                                                <a
                                                    className="nav-link collapsed d-flex justify-content-between align-items-center"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#submenu-Localisation"
                                                    hef="#Localisation"
                                                >
                                                    <span>
                                                        <span className="sidebar-icon">


                                                            <svg xmlns="http://www.w3.org/2000/svg" height={20} width={20} fill="currentColor" viewBox="0 0 64 64"><path d="M47.07351,34.49959a12.667,12.667,0,0,1,2.91.34,25.349,25.349,0,0,0,1.06006-4.92c1.75995-14.1-10.22-26.81-23.72-26.41-15.08-.37-27.31,14.85-23.04,30.01a23.71714,23.71714,0,0,0,6.15,10.72l15.82,15.82a1.53346,1.53346,0,0,0,2.14,0l7.49-7.49C31.68392,44.53138,37.96268,34.33635,47.07351,34.49959Zm-19.75,3.37a10.50943,10.50943,0,0,1-10.49-10.5c.29-6.96,5.39-10.44,10.49-10.45C40.71353,17.0096,41.71353,37.11959,27.32351,37.86959Z" /><path d="M27.31661 19.86745a7.50915 7.50915 0 00-7.5 7.5c.3526 9.92731 14.6554 9.92383 15-.00012A7.50269 7.50269 0 0027.31661 19.86745zM60.138 57.93905l-5.37647-5.376a9.43678 9.43678 0 001.81592-5.56342c-.51918-12.59841-18.47852-12.60358-19 .00008-.10944 7.64979 9.00095 12.25808 15.063 7.68419l5.37644 5.37628A1.5 1.5 0 0060.138 57.93905zM47.07748 53.49959a6.50752 6.50752 0 01-6.5-6.5c.30538-8.60276 12.69592-8.60055 13 .00011A6.50752 6.50752 0 0147.07748 53.49959z" /></svg>




                                                        </span>
                                                        <span className="sidebar-text">Localisation</span>
                                                    </span>
                                                    <span className="link-arrow">



                                                        <svg
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


                                                    </span>
                                                </a>
                                                <div
                                                    className="multi-level collapse "
                                                    role="list"
                                                    id="submenu-Localisation"
                                                    aria-expanded="false"
                                                >
                                                    <ul className="flex-column nav">
                                                        <li className="nav-item">
                                                            <Link className="nav-link" to="/add-zones">
                                                                <span className="sidebar-text">Add Zones</span>
                                                            </Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link className="nav-link" to="/all-zones">
                                                                <span className="sidebar-text"> All Zones </span>
                                                            </Link>
                                                        </li>

                                                        <li className="nav-item">

                                                            <Link className="nav-link" to="/add-taxes">
                                                                <span className="sidebar-text"> Add Charges </span>
                                                            </Link>
                                                        </li>



                                                        <li className="nav-item">

                                                            <Link className="nav-link" to="/all-taxes">
                                                                <span className="sidebar-text"> All Charges </span>
                                                            </Link>
                                                        </li>

                                                    </ul>
                                                </div>
                                            </li>


                                            <li className="nav-item">
                                                <a
                                                    className="nav-link collapsed d-flex justify-content-between align-items-center"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#submenu-promo"
                                                    hef="#promo"
                                                >
                                                    <span>
                                                        <span className="sidebar-icon">

                                                            <svg xmlns="http://www.w3.org/2000/svg" height={20} width={20} fill="currentColor" viewBox="0 0 16 16"><circle cx="11.5" cy="10.5" r=".5" /><path d="M15 3H5v1H4V3H1c-.551 0-1 .449-1 1v2.5a.5.5 0 0 0 .5.5C1.327 7 2 7.673 2 8.5S1.327 10 .5 10a.5.5 0 0 0-.5.5V13c0 .561.439 1 1 1h3v-1h1v1h10a.99.99 0 0 0 1-1V4a.99.99 0 0 0-1-1zM5 12H4v-1h1v1zm0-2H4V9h1v1zm0-2H4V7h1v1zm0-2H4V5h1v1zm3.5-1c.827 0 1.5.673 1.5 1.5S9.327 8 8.5 8 7 7.327 7 6.5 7.673 5 8.5 5zm-1 7a.499.499 0 0 1-.384-.82l5-6a.5.5 0 0 1 .767.641l-5 6A.5.5 0 0 1 7.5 12zm4 0c-.827 0-1.5-.673-1.5-1.5S10.673 9 11.5 9s1.5.673 1.5 1.5-.673 1.5-1.5 1.5z" /><circle cx="8.5" cy="6.5" r=".5" /></svg>


                                                        </span>
                                                        <span className="sidebar-text">Promo code</span>
                                                    </span>
                                                    <span className="link-arrow">



                                                        <svg
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


                                                    </span>
                                                </a>
                                                <div
                                                    className="multi-level collapse "
                                                    role="list"
                                                    id="submenu-promo"
                                                    aria-expanded="false"
                                                >
                                                    <ul className="flex-column nav">
                                                        <li className="nav-item">
                                                            <Link className="nav-link" to="/add-promo">
                                                                <span className="sidebar-text">Add Promo code</span>
                                                            </Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link className="nav-link" to="/all-promo">
                                                                <span className="sidebar-text"> All Promo code </span>
                                                            </Link>
                                                        </li>

                                                    </ul>
                                                </div>
                                            </li>



                                            <li className="nav-item">
                                                <a
                                                    className="nav-link collapsed d-flex justify-content-between align-items-center"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#submenu-settings"
                                                    hef="#settings"
                                                >
                                                    <span>
                                                        <span className="sidebar-icon">

                                                            <svg height={20} width={20} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 66">
                                                                <path d="m64.4 40.6-4.6-1.9c-.4-1.2-.8-2.3-1.4-3.3l1.9-4.6c.1-.4.1-.8-.2-1.1L57.3 27c-.3-.3-.7-.4-1.1-.2l-4.6 1.9c-1-.6-2.1-1-3.3-1.4l-1.9-4.6c-.2-.4-.5-.6-.9-.6h-3.9c-.4 0-.8.3-.9.6l-1.9 4.6c-1.2.3-2.3.8-3.3 1.4l-4.6-1.9c-.4-.1-.8-.1-1.1.2L27 29.7c-.3.3-.4.7-.2 1.1l1.9 4.6c-.6 1-1 2.1-1.4 3.3l-4.6 1.9c-.4.1-.6.5-.6.9v3.9c0 .4.2.8.6.9l4.6 1.9c.3 1.1.8 2.3 1.4 3.3l-1.9 4.6c-.1.4-.1.8.2 1.1l2.8 2.8c.3.3.7.4 1.1.2l4.6-1.9c1 .6 2.1 1 3.3 1.4l1.9 4.6c.2.4.5.6.9.6h3.9c.4 0 .8-.2.9-.6l1.9-4.6c1.2-.3 2.2-.8 3.3-1.4l4.6 1.9c.4.1.8.1 1.1-.2l2.8-2.8c.3-.3.4-.7.2-1.1l-1.9-4.6c.6-1 1-2.1 1.4-3.3l4.6-1.9c.4-.2.6-.5.6-.9v-3.9c0-.3-.2-.7-.6-.9zm-14.1 2.9c0 3.7-3 6.8-6.8 6.8-3.7 0-6.8-3-6.8-6.8s3-6.8 6.8-6.8 6.8 3.1 6.8 6.8zm-18-23.6-2.7-2.4c0-.8 0-1.6-.1-2.5l2.4-2.6c.3-.3.3-.7.2-1.1l-1.2-2.6c-.2-.4-.6-.7-1-.7l-3.6.2c-.6-.6-1.2-1.2-1.8-1.6L24.4 3c0-.4-.3-.8-.7-.9l-2.8-1c-.4-.1-.8 0-1.1.3L17.5 4c-.8 0-1.6 0-2.4.1l-2.6-2.4c-.3-.3-.7-.3-1.1-.2L8.6 2.7c-.4.2-.6.6-.6 1l.2 3.6c-.6.6-1.2 1.2-1.6 1.8L3 9.3c-.4 0-.8.3-.9.7l-1 2.8c-.1.4 0 .8.3 1.1L4 16.2c0 .8 0 1.6.1 2.5l-2.4 2.6c-.3.3-.3.7-.2 1.1L2.7 25c.2.4.5.6 1 .6l3.6-.2c.6.6 1.2 1.2 1.8 1.6l.2 3.6c0 .4.3.8.7.9l2.8 1c.1 0 .2.1.3.1.3 0 .5-.1.7-.3l2.4-2.7c.8 0 1.6 0 2.4-.1l2.7 2.4c.3.3.7.3 1.1.2l2.6-1.2c.4-.2.6-.5.6-.9l-.2-3.6c.6-.6 1.2-1.2 1.6-1.8l3.6-.1c.4 0 .8-.3.9-.7l1-2.8c.2-.4.1-.8-.2-1.1zm-10.7-3.1c0 2.6-2.1 4.8-4.8 4.8-2.6 0-4.8-2.1-4.8-4.8s2.1-4.8 4.8-4.8c2.7 0 4.8 2.2 4.8 4.8zm43.1-2.6-1.8-1.6c0-.5 0-1-.1-1.5l1.6-1.8c.3-.3.3-.7.2-1.1l-.9-1.8c-.2-.4-.5-.6-1-.6l-2.2.2c-.3-.4-.7-.7-1.1-1l-.1-2.4c0-.4-.3-.8-.7-.9L56.7 1c-.4-.1-.8 0-1.1.3L54 3.1c-.5 0-1 0-1.5.1l-1.7-1.6c-.3-.3-.7-.3-1.1-.2l-1.8.9c-.4.2-.6.5-.6 1l.1 2.4c-.4.3-.7.7-1 1.1L44 6.7c-.4 0-.8.3-.9.7l-.7 1.9c-.1.4 0 .8.3 1.1l1.8 1.6c0 .5 0 1 .1 1.5L43 15.2c-.3.3-.3.7-.2 1.1l.9 1.8c.2.4.6.6 1 .6l2.4-.1c.3.4.7.7 1.1 1l.1 2.4c0 .4.3.8.7.9l1.9.7c.1 0 .2.1.3.1.3 0 .5-.1.7-.3l1.6-1.8c.5 0 1 0 1.5-.1l1.8 1.6c.3.3.7.3 1.1.2l1.8-.9c.4-.2.6-.6.6-1l-.3-2.3c.4-.3.7-.7 1-1.1l2.4-.1c.4 0 .8-.3.9-.7l.7-1.9c.1-.4 0-.8-.3-1.1zm-8-1.9c0 1.7-1.4 3-3 3-1.7 0-3-1.4-3-3s1.4-3 3-3c1.7 0 3 1.3 3 3z" />
                                                            </svg>



                                                        </span>
                                                        <span className="sidebar-text">Home Settings</span>
                                                    </span>
                                                    <span className="link-arrow">



                                                        <svg
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


                                                    </span>
                                                </a>
                                                <div
                                                    className="multi-level collapse "
                                                    role="list"
                                                    id="submenu-settings"
                                                    aria-expanded="false"
                                                >
                                                    <ul className="flex-column nav">
                                                        <li className="nav-item">
                                                            <Link className="nav-link" to="/add-menu">
                                                                <span className="sidebar-text">Menu Settings</span>
                                                            </Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link className="nav-link" to="/add-footer-menu">
                                                                <span className="sidebar-text">Footer Menu Settings</span>
                                                            </Link>
                                                        </li>

                                                        <li className="nav-item">
                                                            <Link className="nav-link" to="/home-layout">
                                                                <span className="sidebar-text"> Home Layout </span>
                                                            </Link>
                                                        </li>

                                                        <li className="nav-item">
                                                            <Link className="nav-link" to="/theme-setting">
                                                                <span className="sidebar-text"> Theme Setting </span>
                                                            </Link>
                                                        </li>

                                                    </ul>
                                                </div>
                                            </li>



                                            {/* <li className="nav-item">
                                                <a href="/logout" className="nav-link">
                                                    <span className="sidebar-icon">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth={3}
                                                            strokeLinecap="square"
                                                            strokeLinejoin="bevel"
                                                            className="icon icon-xs me-2"
                                                        >
                                                            <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
                                                            <line x1={12} y1={2} x2={12} y2={12} />
                                                        </svg>
                                                    </span>
                                                    <span className="sidebar-text">Logout</span>
                                                </a>
                                            </li> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="simplebar-placeholder"
                        style={{ width: 260, height: 348 }}
                    />
                </div>
                <div
                    className="simplebar-track simplebar-horizontal"
                    style={{ visibility: "hidden" }}
                >
                    <div
                        className="simplebar-scrollbar"
                        style={{ width: 0, display: "none" }}
                    />
                </div>
                <div
                    className="simplebar-track simplebar-vertical"
                    style={{ visibility: "visible" }}
                >
                    <div
                        className="simplebar-scrollbar"
                        style={{
                            height: 328,
                            display: "block",
                            transform: "translate3d(0px, 0px, 0px)"
                        }}
                    />
                </div>
            </nav>
        </>
    )
}

export default Sidebar