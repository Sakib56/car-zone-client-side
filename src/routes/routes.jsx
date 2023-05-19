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

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/resister',
                element:<Resister></Resister>
            }
        ]
    },
    {
        path:"*",
        element:<ErrorPage></ErrorPage>
    }
]);

export default router;