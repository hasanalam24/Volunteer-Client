import { useContext } from "react";
import { AppContext } from "../Firebase/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

    const { signUpUser } = useContext(AppContext)

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value
        const password = form.password.value

        const user = { email, password }
        console.log(user)
        signUpUser(email, password)
            .then(result => {
                console.log('register user', result.user)
                toast("Register Succesfully");

            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Register!</h1>

                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Register;