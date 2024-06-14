import { Helmet } from "react-helmet-async";
import BannerSlider from "./BannerSlider";
import NeedSection from "./NeedSection";
import OurCommunities from "./OurCommunities";
import { useEffect, useState } from "react";

//https://human-plannet-server.vercel.app

const Home = () => {
    const [posts, setPosts] = useState([])
    const [newDate, setNewDate] = useState(true)

    // useEffect(() => {
    //     fetch(`http://localhost:5000/addpost?sort=${newDate ? 'asc' : 'des'}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setPosts(data)
    //         })
    // }, [newDate])
    useEffect(() => {
        fetch(`http://localhost:5000/addpost?sort=${newDate ? 'asc' : 'des'}`)
            .then(res => res.json())
            .then(data => {
                setPosts(data)
            })
    }, [newDate])

    return (
        <div>
            <Helmet>
                <title>Human Plannet || Home</title>
            </Helmet>

            <BannerSlider></BannerSlider>

            <div>
                <div className="border-b-4 border-b-red-600 w-3/4 lg:w-[30%] mx-auto mt-8 mb-4">
                    <p className="text-center text-lg">Join Our Communities</p>
                    <h1 className="text-2xl lg:text-4xl font-bold text-center ">We Need Volunteers</h1>

                </div>
                <button
                    onClick={() => setNewDate(!newDate)}
                    className="btn btn-secondary">{
                        newDate ? "Sort by New Date" : "Sort by Old Date"
                    }</button>
                <NeedSection posts={posts}></NeedSection>
            </div>
            <div>
                <OurCommunities posts={posts}></OurCommunities>
            </div>
        </div>
    );
};

export default Home;