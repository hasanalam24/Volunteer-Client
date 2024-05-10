import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NeedVolunteer from "../Pages/NeedVolunteer";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import AddVolunteer from "../Pages/AddVolunteer";
import PrivateRoute from "./PrivateRoute";
import DetailsPage from "../Pages/DetailsPage";

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
                element: <PrivateRoute><NeedVolunteer></NeedVolunteer></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/addpost')
            },
            {
                path: "details/:id",
                element: <PrivateRoute>
                    <DetailsPage></DetailsPage>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/addpost/${params.id}`)
            },
            {
                path: "addVolunteer",
                element: <PrivateRoute><AddVolunteer></AddVolunteer></PrivateRoute>
            },
        ]
    },
]);

export default router