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
import BeAVolunteer from "../Components/BeAVolunteer";
import MangeMyPost from "../Pages/MangeMyPost";
import UpdatedPage from "../Pages/UpdatedPage";
import MyRequestPage from "../Pages/MyRequestPage";
import Payments from "../Components/Payments";

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
                path: "payments",
                element: <Payments></Payments>
            },
            {
                path: "needVolunteer",
                element: <NeedVolunteer></NeedVolunteer>,
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
            {
                path: "request/:id",
                element: <PrivateRoute>
                    <BeAVolunteer></BeAVolunteer>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/addpost/${params.id}`)
            },
            {
                path: "addposts/:email",
                element: <PrivateRoute>
                    <MangeMyPost></MangeMyPost>
                </PrivateRoute>
            },
            {
                path: "updated/:id",
                element: <PrivateRoute>
                    <UpdatedPage></UpdatedPage>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/addpost/${params.id}`)
            },
            {
                path: "myrequest/:email",
                element: <PrivateRoute>
                    <MyRequestPage></MyRequestPage>
                </PrivateRoute>,

            },
        ]
    },
]);

export default router