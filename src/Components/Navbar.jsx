import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AppContext } from "../Firebase/AuthProvider";
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

const Navbar = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")
    const { user, signOutUser } = useContext(AppContext)

    useEffect(() => {
        localStorage.setItem("theme", theme)
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme)
    }, [theme])

    const navLinks = <>
        <NavLink to="/"><li>Home</li></NavLink>
        <NavLink to="/needVolunteer"><li>Need Volunteer</li></NavLink>
        <NavLink to="/register"><li>Register</li></NavLink>
        <NavLink to="/payments"><li>Payments</li></NavLink>
    </>

    const handleLogOut = () => {
        signOutUser()
    }

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("synthwave")
        }
        else {
            setTheme("light")
        }
    }

    return (
        <div className=" navbar bg-base-100 shadow-lg fixed mb-8 z-30 flex items-center justify-center">
            <div className="navbar-start h-14 ">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold">
                        {navLinks}
                    </ul>
                </div>
                <div>
                    <img className="hidden lg:ml-6 lg:flex lg:w-[130px] h-[100px]" src="https://i.ibb.co/KNyrbGC/Human-Logo.pngs" alt="" />
                    <a className="text-lg  font-medium lg:hidden">Human Plannet</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-4 font-semibold">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="mr-5">
                    <label className="cursor-pointer grid place-items-center">
                        <input onChange={handleToggle} type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                        <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                        <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>
                </div>
                {
                    user?.email ? <>
                        <div className="flex items-center justify-center gap-3 mr-8">



                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn m-1">My Profile</div>
                                <ul tabIndex={0} className="dropdown-content z-[10] menu p-2 shadow bg-base-100 rounded-box w-60 space-y-1 font-medium mr-10">
                                    <Link to="/addVolunteer"><button className="hover:bg-gray-200 p-2 rounded-md">Add Volunteer Post</button></Link>
                                    <Link to={`/addposts/${user.email}`}><button className="hover:bg-gray-200 p-2 rounded-md">Manage My Post</button></Link>
                                    <Link to={`/myrequest/${user.email}`}><button className="hover:bg-gray-200 p-2 rounded-md">My Volunteer Requested Post</button></Link>
                                    <Link onClick={handleLogOut}><button className="btn btn-block">LogOut</button></Link>
                                </ul>
                            </div>
                            <img data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName} className="rounded-full w-[40px] h-[40px]" src={user?.photoURL} alt="" />
                        </div>
                    </>
                        :
                        <div className="mr-6">

                            <Link to="/login"><button className="btn">Login</button></Link>
                        </div>

                }


            </div>
            <Tooltip id="my-tooltip" />
        </div>
    );
};

export default Navbar;