import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../Firebase/AuthProvider";
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css';

const Login = () => {

    const { signInUser, googleLogin } = useContext(AppContext)

    const location = useLocation()
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value
        const password = form.password.value


        signInUser(email, password)
            .then(result => {
                if (result.user) {

                    toast("Login Successfully!")

                }
                navigate(location?.state || "/")
            })
            .catch(() => {
                toast.error("Invalid Email/Password!")
            })
    }

    const handleGoogle = () => {
        googleLogin()
            .then(result => {
                if (result.user) {
                    toast("Login Successfully!")
                    navigate(location?.state || "/")
                }
            })
            .catch(error => {
                console.log(error.message)
            })

    }

    return (
        <div className="flex flex-col md:flex-row lg:flex-row gap-10  w-[90%] mx-auto items-center justify-center mt-10 mb-10 ">
            <Helmet>
                <title>Human Plannet || Login</title>
            </Helmet>
            <div className="flex-1">
                <img className="w-full h-[400px] lg:h-[600px] animate__animated animate__fadeInLeft" src="https://i.ibb.co/myTQ8R5/3865645.jpg" alt="" />
            </div>


            <div className="flex-1 ">
                <div className="">
                    <h1 className="text-5xl md:text-4xl font-bold animate__animated animate__fadeInRight"><span className="text-secondary">Welcome Back</span> <br />Login!</h1>

                </div>
                <div className=" shrink-0 w-full max-w-sm shadow-2xl bg-base-100 rounded-xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control animate__animated animate__fadeInTopRight">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />

                        </div>
                        <div className="form-control animate__animated animate__fadeInBottomLeft">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required />

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6 animate__animated animate__fadeInUp">
                            <button className="btn btn-secondary">Login</button>
                        </div>
                    </form>
                    <div>
                        <div className="divider">OR</div>
                        <div onClick={handleGoogle} className="ml-5 bg-gray-100 rounded-2xl w-[50px] h-[50px] mb-2">
                            <img className="animate__animated animate__zoomIn" src="https://i.ibb.co/cLDFfkY/google-logo.png" alt="" />

                        </div>
                    </div>
                    <div className="p-4">
                        <p className=" animate__animated animate__fadeInRightBig">New User? Please <Link to="/register" className="text-green-500 font-medium">Register</Link> here</p>
                    </div>
                </div>


            </div>
            <ToastContainer />
        </div>

    );
};

export default Login;