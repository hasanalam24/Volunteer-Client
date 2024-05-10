import { useContext, useState } from "react";
import { AppContext } from "../Firebase/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {

    const { signUpUser, updateUser, signOutUser } = useContext(AppContext)
    const [errorText, setErrorText] = useState()
    const navigate = useNavigate()

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value
        const email = form.email.value
        const photo = form.photo.value
        const password = form.password.value

        const userInfo = { name, email, password, photo }


        if (password.length < 6) {
            setErrorText('Password must be at least 6 characters')
            return
        }
        else if (!/[a-z]/.test(password)) {
            setErrorText('Must have an Lowercase letter in the password')
            return
        }
        else if (!/[A-Z]/.test(password)) {
            setErrorText('Must have an Uppercase letter in the password')
            return
        }



        signUpUser(email, password)
            .then(result => {
                console.log('register user', result.user)

                updateUser(name, photo)
                    .then(() => {

                        signOutUser()
                        navigate('/login')
                    })

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
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="text" name="photo" placeholder="PhotoURL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required />

                            <p className="text-red-500">{errorText}</p>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
                <div>
                    <p>Already have an account? Please <Link to="/login" className="text-green-500 font-medium">Login</Link> here</p>
                </div>

            </div>
        </div>
    );
};

export default Register;