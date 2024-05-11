import { useContext, useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";
import { AppContext } from "../Firebase/AuthProvider";
import { MdAutoDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const MangeMyPost = () => {
    const [posts, setposts] = useState([])
    const { user } = useContext(AppContext)
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:5000/addposts/${user.email}`, { credentials: 'include' })
            .then(res => res.json())
            .then(data => {
                setposts(data)

            })
    }, [user])

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/delete/${id}`, {
                    method: "DELETE",

                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            navigate("/")
                        }
                    })
            }
        });
    }

    return (
        <div className="mt-12 mb-8">
            <Helmet>
                <title>Human Plannet || Manage My Post</title>
            </Helmet>
            {
                posts.length > 0 ?
                    <>
                        <h1 className="text-2xl font-semibold text-center">My Need Volunteer Post</h1>
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
                                    posts.map(post => <tbody key={post._id}>
                                        <tr className="bg-base-200">
                                            <th>
                                                <img className="w-[30px] h-[30px]" src={post.thumbnail} alt="" />
                                            </th>
                                            <td>{
                                                post.postTile.slice(0, 20)
                                            }....</td>
                                            <td>{post.category}</td>
                                            <td>{post.needPeoples}</td>
                                            <td className="flex gap-3 items-center">
                                                <Link to={`/updated/${post._id}`}><FaEdit className="text-green-600 text-lg"></FaEdit></Link>
                                                <button onClick={() => handleDelete(post._id)}> <MdAutoDelete className="text-red-600 text-lg"></MdAutoDelete> </button>
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

export default MangeMyPost;