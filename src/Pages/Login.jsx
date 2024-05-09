import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../Firebase/AuthProvider";



const Login = () => {

    const { signInUser, googleLogin } = useContext(AppContext)

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value
        const password = form.password.value

        // const userInfo = { email, password }
        // console.log(userInfo)
        signInUser(email, password)
            .then(result => {
                if (result.user) {
                    alert("Login Succesfully");
                }
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const handleGoogle = () => {
        googleLogin()
            .then(result => {
                if (result.user) {
                    alert("google Login done");
                }
            })
            .catch(error => {
                console.log(error.message)
            })

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login!</h1>

                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
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
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <button onClick={handleGoogle} className="btn">Google</button>
                </div>
                <div>
                    <p>New User? Please <Link to="/register" className="text-green-500 font-medium">Register</Link> here</p>
                </div>

            </div>

        </div>
    );
};

export default Login;