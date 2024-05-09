import React, { useState, useEffect, useContext, Component } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from '../components/Navbar';
import axios from 'axios';
import axiosInstance from '../../axiosInstance';
import { useDispatch } from 'react-redux';
import { authActions } from '../../redux/store';
import { toast } from 'react-hot-toast';

const Login = () => {



  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const credentials = {
    email: inputs.email,
    password: inputs.password
  };
  const [loginError, setLoginError] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    const checkUserToken = async () => {
      console.log('Effect is running');
      // Check if this is printed multiple times
      const usertoken = localStorage.getItem('adminToken');
      if (usertoken) {
        console.log('Token found in local storage'); // Check if this is printed multiple times

        navigate('/dashboard');

        toast.success("Welcome back Admin");
      }
    }
    checkUserToken();
  }, [dispatch, navigate]);


  //handle input change
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

  };

  //form handle
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axiosInstance.post('/admin', credentials);
      const { success, token, admin, message } = data;

      if (success) {
        // Save token and user ID to localStorage
        localStorage.setItem('adminToken', admin.token);
        localStorage.setItem('adminId', admin._id);

        toast.success("login sucesssfully");

        // Dispatch login action if you're using Redux
        dispatch(authActions.login());

        // Redirect user or perform other actions upon successful login
        navigate('/dashboard'); // Redirect to dashboard or any other desired route
      }
      else {
        toast.error(message);
        console.log("Message from backend:", message);

      }

    } catch (error) {
      console.error('Error during login:', error);
      // Handle network errors, API issues, etc.
      toast.error(error.response.data.message);

    }
  };



  return (
    <>
      <Helmet>
      </Helmet>
      <div id="auth">
        <main>
          <section className="vh-lg-100 mt-5 mt-lg-0 bg-soft d-flex align-items-center">
            <div className="container">
              <p className="text-center">
                <a
                  href="/"
                  className="d-flex align-items-center justify-content-center"
                >
                  <svg
                    className="icon icon-xs me-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Back to homepage
                </a>
              </p>
              <div
                className="row justify-content-center form-bg-image"
                data-background-lg="../../assets/img/illustrations/signin.svg"
                style={{
                  background: 'url("../../assets/img/illustrations/signin.svg")'
                }}
              >
                <div className="col-12 d-flex align-items-center justify-content-center">
                  <div className="bg-white shadow border-0 rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                    <div className="text-center text-md-center mb-4 mt-md-0">
                      <h1 className="mb-0 h3">Sign in to our platform</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <div className="form-group mb-4">
                        <label htmlFor="email">Your Email</label>
                        <div className="input-group">
                          <span className="input-group-text" id="basic-addon1">
                            <svg
                              className="icon icon-xs text-gray-600"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                          </span>
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            id="email"
                            value={inputs.email}
                            onChange={handleChange}

                            required=""
                            fdprocessedid="gxml2x"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="form-group mb-4">
                          <label htmlFor="password">Your Password</label>
                          <div className="input-group">
                            <span className="input-group-text" id="basic-addon2">
                              <svg
                                className="icon icon-xs text-gray-600"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                            <input
                              type="password"
                              placeholder="password"
                              className="form-control"
                              id="password"
                              name="password" onChange={handleChange}
                              required=""
                              value={inputs.password}

                            />
                          </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-top mb-4">

                          <div>
                            <Link
                              to="/forgot"
                              className="small text-right"
                            >
                              Lost password?
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="d-grid">
                        <button
                          type="submit"
                          className="btn btn-gray-800"
                          fdprocessedid="w2ipxt"
                        >
                          Sign in
                        </button>
                      </div>
                    </form>



                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

    </>


  )
}

export default Login