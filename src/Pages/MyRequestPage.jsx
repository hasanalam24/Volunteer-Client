import { useContext, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { AppContext } from "../Firebase/AuthProvider";


const MyRequestPage = () => {

    const { user } = useContext(AppContext)
    const [request, setRequest] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/request/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setRequest(data)
            })
    }, [user])

    return (
        <div>
            {
                request.length > 0 ?
                    <>
                        <h1 className="text-2xl font-semibold text-center">My Volunteer Request Posts</h1>
                        <div className="overflow-x-auto ">
                            <table className="table w-[95%] mx-auto">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Post Title</th>
                                        <th>Category</th>
                                        <th>Need Peoples</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                {
                                    request.map(req => <tbody key={req._id}>
                                        <tr className="bg-base-200">
                                            <th>
                                                <img className="w-[30px] h-[30px]" src={req.thumbnail} alt="" />
                                            </th>
                                            <td>{
                                                req.postTile.slice(0, 20)
                                            }....</td>
                                            <td>{req.category}</td>
                                            <td>{req.needPeoples}</td>
                                            <td className="flex gap-3 items-center">
                                                <button>Cancel</button>
                                            </td>
                                        </tr>
                                        <br />
                                    </tbody>)
                                }

                            </table>
                        </div>

                    </>
                    :
                    <div>
                        <div className="flex gap-5 items-center justify-center mt-8 mb-8">
                            <FaSearch className="text-4xl"></FaSearch>
                            <h4 className="text-3xl">No Data Founds!!!</h4>
                        </div>
                    </div>
            }
        </div>
    );
};

export default MyRequestPage;