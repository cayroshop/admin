import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { authActions } from "../../redux/store";
import toast from "react-hot-toast";
import '../assets/css/volt.css';

// import '../assets/vendor/notyf/notyf.min.css';
// import '../assets/vendor/fullcalendar/main.min.css';
// import '../assets/vendor/apexcharts/dist/apexcharts.css';
// import '../assets/vendor/dropzone/dist/min/dropzone.min.css';
// import '../assets/css/volt.css';


const Navbar = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const dispatch = useDispatch();
    const navigate = useNavigate();
    //state
    const [value, setValue] = useState();

    const isLoginFromLocalStorage = localStorage.getItem('token') ? true : false;
    const [isLogin, setIsLogin] = useState(isLoginFromLocalStorage);

    useEffect(() => {
        setIsLogin(isLoginFromLocalStorage);
    }, [isLoginFromLocalStorage]);

    //logout
    const handleLogout = () => {
        try {
            dispatch(authActions.logout());
            toast.success("Logout Successfully");
            navigate("/admin");
            localStorage.removeItem('adminId');
            localStorage.removeItem('adminToken');

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {

        const checkUserToken = async () => {
            console.log('Effect is running');
            // Check if this is printed multiple times
            const usertoken = localStorage.getItem('adminToken');
            if (!usertoken) {
                console.log('Token !found in local storage');

                navigate('/');

                toast.success("Please login first");
            }
        }
        checkUserToken();
    }, [navigate]);



    return (

        <>
            <nav className="navbar navbar-top navbar-expand navbar-dashboard navbar-dark ps-0 pe-2 pb-0">
                <div className="container-fluid px-0 d-block">
                    <div
                        className="d-block justify-content-between w-100"
                        id="navbarSupportedContent"
                    >
                        <div className="d-flex align-items-center justify-content-between">
                            <button
                                id="sidebar-toggle"
                                className="sidebar-toggle me-3 btn btn-icon-only d-none d-lg-inline-block align-items-center justify-content-center"
                            >
                                <svg
                                    className="toggle-icon"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                            {/* <form className="navbar-search form-inline" id="navbar-search-main">
                                <div className="input-group input-group-merge search-bar">
                                    <span className="input-group-text" id="topbar-addon">
                                        <svg
                                            className="icon icon-xs"
                                            x-description="Heroicon name: solid/search"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="topbarInputIconLeft"
                                        placeholder="Search"
                                        aria-label="Search"
                                        aria-describedby="topbar-addon"
                                    />
                                </div>
                            </form> */}

                            <button class="btn btn-danger" onClick={handleLogout} type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" class="me-2" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 8l4 4-4 4M8 12h7" /></svg>
                                Logout</button>

                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar