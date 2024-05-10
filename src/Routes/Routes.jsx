import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NeedVolunteer from "../Pages/NeedVolunteer";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import AddVolunteer from "../Pages/AddVolunteer";

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
            {
                path: "addVolunteer",
                element: <AddVolunteer></AddVolunteer>
            },
        ]
    },
]);

export default router