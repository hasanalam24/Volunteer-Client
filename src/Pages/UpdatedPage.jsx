import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AppContext } from "../Firebase/AuthProvider";
import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdatedPage = () => {
    const [startDate, setStartDate] = useState(new Date());
    const { user } = useContext(AppContext)
    const datas = useLoaderData()
    const navigate = useNavigate()

    const handleUpdated = e => {
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
        const owenerImage = user.photoURL

        const updatedInfo = { postTile, thumbnail, description, needPeoples, location, category, deadline, username, email, owenerImage }



        Swal.fire({
            title: "Are you sure?",
            text: "You want to Update this Item!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Update it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/updated/${datas._id}`, {
                    method: "PUT",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(updatedInfo)
                })
                    .then(res => res.json())
                    .then(data => {

                        if (data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Updated!",
                                text: "Your Post has been Updated.",
                                icon: "success"
                            });
                            navigate('/')
                        }
                    })


            }
        });




    }



    return (
        <div>
            <section className="p-6 bg-gray-200 dark:bg-gray-200 dark:text-gray-900">
                <form onSubmit={handleUpdated} noValidate="" action="" className="container flex flex-col mx-auto space-y-1">
                    <div className="pl-6">
                        <p className="font-medium">Update Volunteer Post Information</p>

                    </div>
                    <fieldset className="grid grid-cols-4 gap-6 p-6 pt-2 rounded-md shadow-sm dark:bg-gray-50">

                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-md font-medium">Post Title</label>
                                <input id="postTitle" type="text" name="postTile" placeholder="Post Title"
                                    defaultValue={datas.postTile} className="w-full rounded-md p-2" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-md font-medium">Thumbnail</label>
                                <input id="thumbnail" type="text" name="thumbnail"
                                    defaultValue={datas.thumbnail} placeholder="Thumbnail" className="w-full rounded-md p-2" />
                            </div>
                            <div className="col-span-full">
                                <label className="text-md font-medium">Description</label>
                                <textarea id="description" name="description"
                                    defaultValue={datas.description} placeholder="Description" className="w-full rounded-md p-2"></textarea>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-md font-medium">How Much Needed?</label>
                                <input id="needVol" type="text" name="needPeoples"
                                    defaultValue={datas.needPeoples} placeholder="Example: 10" className="w-full rounded-md p-2" />
                            </div>

                            <div className="col-span-full sm:col-span-3">
                                <label className="text-md font-medium">Location</label>
                                <input id="location" type="text" name="location"
                                    defaultValue={datas.location} placeholder="Location" className="w-full rounded-md p-2" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <h1 className="text-md font-medium">Select Category</h1>
                                <select className="p-2 rounded-md" name="category" id="">
                                    <option selected disabled>{datas.category}</option>
                                    <option value="Health Care">Health Care</option>
                                    <option value="Education">Education</option>
                                    <option value="Social Service">Social Service</option>
                                    <option value="Animal Welfare">Animal Welfare</option>
                                </select>
                            </div>
                            <div className="col-span-full sm:col-span-3 flex flex-col">
                                <label htmlFor="" className="text-md font-medium">Deadline</label>
                                <DatePicker className="p-2 rounded-md" selected={startDate} onChange={(date) => setStartDate(date)} />
                            </div>
                        </div>
                    </fieldset>
                    <div className="pl-6">
                        <p className="font-medium text-lg">Your Information</p>

                    </div>
                    <fieldset className="grid grid-cols-4 gap-6 p-6 pt-2 rounded-md shadow-sm dark:bg-gray-50">

                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="username" className="text-md font-medium">Username</label>
                                <input id="username" type="text" name="username"
                                    placeholder="Username" value={user?.displayName} className="w-full rounded-md p-2" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="website" className="text-md font-medium">Email</label>
                                <input id="email" type="email" name="email"
                                    placeholder="Email" value={user?.email} className="w-full rounded-md p-2" />
                            </div>


                        </div>

                    </fieldset>
                    <div>
                        <input className="btn btn-secondary w-full" type="submit" value="Updated Post" />
                    </div>
                </form>
            </section>
        </div >
    );
};

export default UpdatedPage;