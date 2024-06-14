
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AppContext } from "../Firebase/AuthProvider";
import { Helmet } from "react-helmet-async";
import 'animate.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddVolunteer = () => {
    const [startDate, setStartDate] = useState(new Date());
    const { user } = useContext(AppContext)

    const handleAddVolunteer = e => {
        e.preventDefault()
        const form = e.target
        const postTitle = form.postTitle.value
        const thumbnail = form.thumbnail.value
        const description = form.description.value
        const needPeoples = form.needPeoples.value
        const location = form.location.value
        const category = form.category.value
        const deadline = startDate
        const username = form.username.value
        const email = form.email.value
        const owenerImage = user.photoURL

        const postInfo = { postTitle, thumbnail, description, needPeoples, location, category, deadline, username, email, owenerImage }

        fetch('http://localhost:5000/addpost', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast("Post Added Successfully!")
                }
            })



    }
    return (
        <div>
            <div>
                <img className="relative h-[1100px] md:h-[710px] lg:h-[730px] w-full " src="https://i.ibb.co/3B4dNmB/billy-huynh-W8-KTS-mh-FUE-unsplash.jpg" alt="" />
            </div>
            <Helmet>
                <title>Human Plannet || Add Volunteer</title>
            </Helmet>
            <section className="p-6 mt-12 mb-8 absolute top-10 w-[95%] mx-auto">
                <form onSubmit={handleAddVolunteer} noValidate="" action="" className="container flex flex-col mx-auto space-y-1">
                    <div className="pl-6">
                        <p className="font-medium text-white text-center text-4xl">Add Volunteer Post Information</p>

                    </div>
                    <fieldset className=" gap-6 p-6 pt-2 rounded-md shadow-sm dark:bg-gray-50">

                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3 animate__animated animate__bounceInLeft">
                                <label className="text-md font-medium text-white ">Post Title</label>
                                <input id="postTitle" type="text" name="postTitle" placeholder="Post Title" className="w-full rounded-md p-2" />
                            </div>
                            <div className="col-span-full sm:col-span-3 animate__animated animate__bounceInRight">
                                <label className="text-md font-medium text-white">Thumbnail</label>
                                <input id="thumbnail" type="text" name="thumbnail" placeholder="Thumbnail" className="w-full rounded-md p-2" />
                            </div>
                            <div className="col-span-full animate__animated animate__bounceInLeft">
                                <label className="text-md font-medium text-white">Description</label>
                                <textarea id="description" name="description" placeholder="Description" className="w-full rounded-md p-2"></textarea>
                            </div>
                            <div className="col-span-full sm:col-span-3 animate__animated animate__bounceInLeft">
                                <label className="text-md font-medium text-white">How Much Needed?</label>
                                <input id="needVol" type="text" name="needPeoples" placeholder="Example: 10" className="w-full rounded-md p-2" />
                            </div>

                            <div className="col-span-full sm:col-span-3 animate__animated animate__bounceInRight">
                                <label className="text-md font-medium text-white">Location</label>
                                <input id="location" type="text" name="location" placeholder="Location" className="w-full rounded-md p-2" />
                            </div>
                            <div className="col-span-full sm:col-span-3 animate__animated animate__bounceInLeft">
                                <h1 className="text-md font-medium text-white">Select Category</h1>
                                <select className="p-2 rounded-md" name="category" id="">
                                    <option disabled selected>Choose</option>
                                    <option value="Health Care">Health Care</option>
                                    <option value="Education">Education</option>
                                    <option value="Social Service">Social Service</option>
                                    <option value="Animal Welfare">Animal Welfare</option>
                                </select>
                            </div>
                            <div className="col-span-full sm:col-span-3 flex flex-col animate__animated animate__bounceInRight">
                                <label htmlFor="" className="text-md font-medium text-white">Deadline</label>
                                <DatePicker className="p-2 rounded-md" selected={startDate} onChange={(date) => setStartDate(date)} format='yyyy-MM-dd' />
                            </div>
                        </div>
                    </fieldset>
                    <div className="w-[96%] mx-auto p-3 border-2 hover:bg-[#546e7a] ">
                        <p className="font-medium text-2xl text-white text-center">Your Information</p>

                    </div>
                    <fieldset className="grid grid-cols-4 gap-6 p-6 pt-2 rounded-md shadow-sm dark:bg-gray-50">

                        <div className="grid grid-cols-6 gap-4 col-span-full ">
                            <div className="col-span-full sm:col-span-3 animate__animated animate__bounceInLeft">
                                <label htmlFor="username" className="text-md font-medium text-white">Username</label>
                                <input id="username" type="text" name="username"
                                    placeholder="Username" value={user?.displayName} className="w-full rounded-md p-2" />
                            </div>
                            <div className="col-span-6 sm:col-span-3 animate__animated animate__bounceInRight">
                                <label htmlFor="" className="text-md font-medium text-white">Email</label>
                                <input id="email" type="email" name="email"
                                    placeholder="Email" value={user?.email} className="w-full rounded-md p-2" />
                            </div>


                        </div>

                    </fieldset>
                    <div className="w-[96%] mx-auto">
                        <input className="btn bg-[#039be5] text-white w-full " type="submit" value="Add Post" />
                    </div>
                </form>
            </section>
            <ToastContainer />
        </div >
    );
};

export default AddVolunteer;