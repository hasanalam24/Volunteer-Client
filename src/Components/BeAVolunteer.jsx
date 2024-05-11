import { useContext, useState } from "react";
import { AppContext } from "../Firebase/AuthProvider";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BeAVolunteer = () => {
    const [startDate, setStartDate] = useState(new Date());
    const { user } = useContext(AppContext)
    const details = useLoaderData()


    const { postTile, thumbnail, description, needPeoples, location, category, deadline } = details

    const handleRequest = e => {
        e.preventDefault()
        const form = e.target
        const postTile = form.postTile.value
        const thumbnail = form.thumbnail.value
        const description = form.description.value
        const needPeoples = form.needPeoples.value
        const location = form.location.value
        const category = form.category.value
        const deadline = startDate
        const username = form.username.value
        const email = form.email.value
        const requestImage = user.photoURL
        const suggestion = form.suggestion.value
        const status = form.status.value

        const requestInfo = { postTile, thumbnail, description, needPeoples, location, category, deadline, username, email, requestImage, suggestion, status }


        fetch('http://localhost:5000/request', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(requestInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast("Request Send Successfully!")

                }
            })


    }



    return (
        <div>
            <div>
                <img className="relative h-[1230px] md:h-[790px] lg:h-[790px] w-full " src="https://i.ibb.co/FhFYpmR/colin-cassidy-d0e-AMp-UPXgo-unsplash.jpg" alt="" />
            </div>
            <Helmet>
                <title>Human Plannet || Request Volunteer</title>
            </Helmet>
            <section className="p-6 mt-12 mb-8 absolute top-10 w-[95%] mx-auto">
                <form onSubmit={handleRequest} noValidate="" action="" className="container flex flex-col mx-auto space-y-1">
                    <div className="pl-6">
                        <p className="font-medium text-white text-center text-4xl">Request Be A Volunteer Post</p>

                    </div>
                    <fieldset className=" gap-6 p-6 pt-2 rounded-md shadow-sm dark:bg-gray-50">

                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3 animate__animated animate__bounceInLeft">
                                <label className="text-md font-medium text-white ">Post Title</label>
                                <input id="postTitle" type="text" name="postTile"
                                    value={postTile} placeholder="Post Title" className="w-full rounded-md p-2" />
                            </div>
                            <div className="col-span-full sm:col-span-3 animate__animated animate__bounceInRight">
                                <label className="text-md font-medium text-white">Thumbnail</label>
                                <input id="thumbnail" type="text" name="thumbnail"
                                    value={thumbnail} placeholder="Thumbnail" className="w-full rounded-md p-2" />
                            </div>
                            <div className="col-span-full animate__animated animate__bounceInLeft">
                                <label className="text-md font-medium text-white">Description</label>
                                <textarea id="description" name="description"
                                    value={description} placeholder="Description" className="w-full rounded-md p-2"></textarea>
                            </div>
                            <div className="col-span-full sm:col-span-3 animate__animated animate__bounceInLeft">
                                <label className="text-md font-medium text-white">How Much Needed?</label>
                                <input id="needVol" type="text"
                                    value={needPeoples} name="needPeoples" placeholder="Example: 10" className="w-full rounded-md p-2" />
                            </div>

                            <div className="col-span-full sm:col-span-3 animate__animated animate__bounceInRight">
                                <label className="text-md font-medium text-white">Location</label>
                                <input id="location" type="text"
                                    value={location} name="location" placeholder="Location" className="w-full rounded-md p-2" />
                            </div>
                            <div className="col-span-full sm:col-span-3 animate__animated animate__bounceInLeft">
                                <h1 className="text-md font-medium text-white">Select Category</h1>
                                <select className="p-2 rounded-md" name="category" id="">
                                    <option selected value={category}>{category}</option>

                                </select>
                            </div>
                            <div className="col-span-full sm:col-span-3 flex flex-col animate__animated animate__bounceInRight">
                                <label htmlFor="" className="text-md font-medium text-white">Deadline</label>
                                <DatePicker className="p-2 rounded-md" selected={deadline} onChange={(date) => setStartDate(date)}
                                    format='yyyy-MM-dd' />
                            </div>
                            <div className="col-span-full sm:col-span-3 animate__animated animate__bounceInLeft">
                                <label className="text-md font-medium text-white ">Suggestion</label>
                                <input id="" type="text" name="suggestion"
                                    placeholder="Suggestion" className="w-full rounded-md p-2" />
                            </div>
                            <div className="col-span-full sm:col-span-3 animate__animated animate__bounceInRight">
                                <label className="text-md font-medium text-white">Status</label>
                                <input id="" type="text" name="status"
                                    value="Request" className="w-full rounded-md p-2" />
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
                        <input className="btn bg-sky-600 text-white w-full " type="submit" value="Request" />
                    </div>
                </form>
            </section>
            <ToastContainer />
        </div >
    );
};

export default BeAVolunteer;