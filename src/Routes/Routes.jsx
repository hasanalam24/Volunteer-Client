import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NeedVolunteer from "../Pages/NeedVolunteer";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "register",
                element: <Register></Register>
            },
            {
                path: "needVolunteer",
                element: <NeedVolunteer></NeedVolunteer>
            },
        ]
    },
]);

export default router