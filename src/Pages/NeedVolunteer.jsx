
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";
import 'animate.css';

const NeedVolunteer = () => {

    const posts = useLoaderData()

    // const handleSearch = e => {
    //     e.preventDefault()
    //     const form = e.target
    //     const search = form.searchPosts.value
    //     console.log(search)
    //     fetch(`http://localhost:5000/searchpost/${search}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //         })
    // }

    return (
        <div className="space-y-8 w-[95%] mx-auto mt-10 mb-8">
            <Helmet>
                <title>Human Plannet || Need Volunteer</title>
            </Helmet>

            <div className="p-4 text-center">
                <form action="">
                    <input className="bg-gray-100 p-2 " type="text" name="searchPosts" placeholder="Search By Post Name" />
                    <input className="bg-secondary text-white p-2" type="submit" value="Search" />
                </form>
            </div>

            {
                posts.map(post => <div key={post._id} className="relative shadow-lg flex flex-col  p-6 divide-y xl:flex-row items-center justify-center xl:divide-y-0 xl:divide-x dark:bg-gray-50 dark:text-gray-800 dark:divide-gray-300 w-full animate__animated animate__fadeInUp ">
                    <div className="p-3 space-y-3 flex-1 md:p-8 md:w-3/4 animate__animated animate__bounceInRight">
                        <h3 className="text-3xl font-semibold">{post.postTitle}</h3>
                        <p className="text-sm dark:text-gray-600">{
                            post.description.slice(0, 70)
                        }.......</p>

                        <div className="flex gap-8">
                            <p>Dateline: {post.deadline}</p>
                            <p>Location: {post.location}</p>
                            <p>Need Peoples: {post.needPeoples}</p>
                        </div>
                        <div className="">

                            <Link to={`/details/${post._id}`} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
                                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">View Details</span>
                                <span className="relative invisible">View Details</span>
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <img className="h-[200px] w-[350px] md:w-[650px] md:h-[320px]" src={post.thumbnail} alt="" />
                    </div>
                </div>)
            }
        </div>
    );
};

export default NeedVolunteer;