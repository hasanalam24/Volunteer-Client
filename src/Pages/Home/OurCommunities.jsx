
const OurCommunities = ({ posts }) => {


    return (
        <div className="relative bg-[#0E2030] h-[350px] h-lg:[300px] w-full">
            <div className="absolute top-16 left-1/2 -translate-x-1/2">
                <h1 className="text-2xl text-white text-center font-semibold mb-2">Subscribe Us</h1>
                <form action="" className="flex flex-col gap-5">

                    <input className="p-1" type="email" placeholder="Email" />
                    <input className="p-1" type="password" placeholder="Password" />
                    <input className="text-white bg-orange-600 p-1 rounded-lg font-medium" type="submit" value="Subscribe" />
                </form>

            </div>
            <div className="flex gap-5 absolute top-64  left-1/2 -translate-x-1/2">
                {/* <h1 className="text-4xl text-white text-center font-bold absolute top-32 left-1/2 -translate-x-1/2">Posts: {posts.length}+</h1> */}
                <h1 className="text-2xl text-white">Posts: {posts.length}+</h1>
                <h1 className="text-2xl text-white">Users: 1500+</h1>
                <h1 className="text-2xl text-white">Requests: 1956+</h1>
            </div>
        </div>
    );
};

export default OurCommunities;