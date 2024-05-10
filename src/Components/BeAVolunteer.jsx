import { useContext } from "react";
import { AppContext } from "../Firebase/AuthProvider";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";



const BeAVolunteer = () => {

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
        const deadline = form.deadline.value
        const username = form.username.value
        const email = form.email.value
        const requestImage = user.photoURL
        const suggestion = form.suggestion.value

        const requestInfo = { postTile, thumbnail, description, needPeoples, location, category, deadline, username, email, requestImage, suggestion }


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
                    alert('request done')

                }
            })


    }



    return (
        <div>
            <Helmet>
                <title>Human Plannet || Be A Volunteer</title>
            </Helmet>

            <section className="p-6 bg-gray-200 dark:bg-gray-200 dark:text-gray-900">
                <form onSubmit={handleRequest} noValidate="" action="" className="container flex flex-col mx-auto space-y-1">
                    <div className="pl-6">
                        <p className="font-medium">Request For Volunteer</p>

                    </div>
                    <fieldset className="grid grid-cols-4 gap-6 p-6 pt-2 rounded-md shadow-sm dark:bg-gray-50">

                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-md font-medium">Post Title</label>
                                <input id="postTitle" type="text" name="postTile" value={postTile} placeholder="Post Title" className="w-full rounded-md p-2" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-md font-medium">Thumbnail</label>
                                <input id="thumbnail" type="text" name="thumbnail" placeholder="Thumbnail" value={thumbnail} className="w-full rounded-md p-2" />
                            </div>
                            <div className="col-span-full">
                                <label className="text-md font-medium">Description</label>
                                <textarea id="description" name="description" placeholder="Description" value={description} className="w-full rounded-md p-2"></textarea>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-md font-medium">How Much Needed?</label>
                                <input id="" type="text" value={needPeoples} name="needPeoples" placeholder="Example: 10" className="w-full rounded-md p-2" />
                            </div>

                            <div className="col-span-full sm:col-span-3">
                                <label className="text-md font-medium">Location</label>
                                <input id="location" type="text" value={location} name="location" placeholder="Location" className="w-full rounded-md p-2" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-md font-medium">Selected Category</label>
                                <input id="" type="text" value={category} name="category" placeholder="category" className="w-full rounded-md p-2" />
                            </div>
                            <div className="col-span-full sm:col-span-3 flex flex-col">
                                <label className="text-md font-medium">Deadline</label>
                                <input id="" type="text" value={deadline} name="deadline" placeholder="deadline" className="w-full rounded-md p-2" />
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
                                <input id="email" type="email" name="requestEmail"
                                    placeholder="Email" value={user?.email} className="w-full rounded-md p-2" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="website" className="text-md font-medium">Suggestion</label>
                                <input id="" type="text" name="suggestion"
                                    placeholder="Suggestion" className="w-full rounded-md p-2" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="website" className="text-md font-medium">Status</label>
                                <input id="" type="text" name="status"
                                    placeholder="Status" value="Requested" className="w-full rounded-md p-2" />
                            </div>


                        </div>

                    </fieldset>
                    <div>
                        <input className="btn bg-green-600 text-white w-full" type="submit" value="Request" />
                    </div>
                </form>
            </section>
        </div >
    );
};

export default BeAVolunteer;