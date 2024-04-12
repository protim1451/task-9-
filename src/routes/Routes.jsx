import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ContactUs from "../pages/ContactUs/ContactUs";
import NotFound from "../pages/NotFound/NotFound";
import PropertyDetails from "../pages/PropertyDetails/PropertyDetails";
import PrivateRoute from "./PrivateRoute";
import Blogs from "../pages/Blogs/Blogs";
import FullBlog from "../pages/Blogs/FullBlog";


const router = createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/property.json'),
            },
            {
                path: '/property/:id',
                element: <PrivateRoute><PropertyDetails></PropertyDetails></PrivateRoute>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element:<Register></Register>,
            },
            {
                path: '/contact',
                element: <ContactUs></ContactUs>,
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>,
                loader: () => fetch('/blogs.json'),
            },
            {
                path: '/blog/:id',
                element: <FullBlog></FullBlog>,
            },
        ],
    },
]);

export default router;