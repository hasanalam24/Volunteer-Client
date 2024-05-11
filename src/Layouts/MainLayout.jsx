import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";



const MainLayout = () => {
    return (
        <div className="">

            <div className="h-12">
                <Navbar></Navbar>

            </div>
            <div className="min-h-[calc(100vh-200px)] container mx-auto">
                <Outlet></Outlet>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default MainLayout;