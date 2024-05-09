import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AppContext } from "../../Firebase/AuthProvider";
import { toast } from "react-toastify";



const Navbar = () => {

    const { user, signOutUser } = useContext(AppContext)



    const navLinks = <>
        <NavLink to="/"><li>Home</li></NavLink>
        <NavLink to="/needVolunteer"><li>Need Volunteer</li></NavLink>
        <NavLink to="/register"><li>Register</li></NavLink>
    </>

    const handleLogOut = () => {
        toast('LogOut Done')
        signOutUser()


    }

    return (
        <div className="navbar bg-base-100 flex items-center justify-center">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold">
                        {navLinks}
                    </ul>
                </div>
                <div>
                    <img className="hidden lg:flex lg:-ml-6 lg:w-[130px] h-[100px]" src="https://i.ibb.co/KNyrbGC/Human-Logo.pngs" alt="" />
                    <a className="text-lg  font-medium lg:hidden">Human Plannet</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-4 font-semibold">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.email ? <Link onClick={handleLogOut}><button className="btn">LogOut</button></Link>
                        :
                        <Link to="/login"><button className="btn">Login</button></Link>
                }


            </div>
        </div>
    );
};

export default Navbar;