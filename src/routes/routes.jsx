import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import Resister from "../Pages/Login/Resister";
import CategoryDetails from "../Pages/Home/CategoryDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/resister',
                element: <Resister></Resister>
            },
            {
                path: '/allToys/:id',
                element: <PrivateRoute><CategoryDetails></CategoryDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/allToys/${params.id}`)
            }
        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    }
]);

export default router;