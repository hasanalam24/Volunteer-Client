import { Link } from "react-router-dom";


const NeedSection = ({ posts }) => {

    return (
        <div>
            {posts.length < 1 ? <div className="mt-8 text-center mb-8"> <span className="loading loading-spinner text-primary"></span></div> :
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 mb-10">
                    {
                        posts.slice(0, 6).map(post => <div key={post._id} className="rounded-lg bg-base-100 shadow-xl border-b-4 border-b-red-600 p-4">
                            <figure><img className="h-[270px] rounded-xl" src={post.thumbnail} alt="" /></figure>
                            <div className="mt-4 ">
                                <h2 className="card-title mb-3">{post.postTitle}</h2>
                                <p>{post.description.slice(0, 150)}...</p>
                                <div>
                                    <p className="font-medium">Category: <span>{post.category}</span></p>
                                    <p className="font-medium">Deadline: {post.deadline}</p>
                                </div>
                                <div className="flex items-center justify-start mt-4">
                                    <Link to={`/details/${post._id}`} className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                                        <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-red-600 group-hover:h-full"></span>
                                        <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                        </span>
                                        <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                        </span>
                                        <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">View Details</span>
                                    </Link>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            }
            <div className="text-center mb-8">
                <Link to="/needVolunteer">
                    <button className="btn btn-outline btn-secondary">See All Posts</button>
                </Link>
            </div>
        </div>
    );
};

export default NeedSection;