
import { Link, useLoaderData } from "react-router-dom";


const NeedVolunteer = () => {

    const posts = useLoaderData()

    return (
        <div className="space-y-8 w-[90%] mx-auto">
            {
                posts.map(post => <div key={post._id} className="relative shadow-lg flex flex-col  p-6 divide-y xl:flex-row items-center justify-center xl:divide-y-0 xl:divide-x dark:bg-gray-50 dark:text-gray-800 dark:divide-gray-300 w-full">
                    <div className="p-3 space-y-1 flex-1">
                        <h3 className="text-3xl font-semibold">{post.postTile}</h3>
                        <p className="text-sm dark:text-gray-600">{
                            post.description.slice(0, 70)
                        }.......</p>

                        <div className="flex gap-8">
                            <p>Dateline: {post.deadline}</p>
                            <p>Location: {post.location}</p>
                            <p>Need Peoples: {post.needPeoples}</p>
                        </div>
                        <div>
                            <Link to={`${post._id}`}>
                                <button className="btn">View Details</button>
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 p-3">
                        <img className="h-[200px] w-[260px]" src={post.thumbnail} alt="" />
                    </div>
                </div>)
            }
        </div>
    );
};

export default NeedVolunteer;