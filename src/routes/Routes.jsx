import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ContactUs from "../pages/ContactUs/ContactUs";
import NotFound from "../pages/NotFound/NotFound";


const router = createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
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
        ],
    },
]);

export default router;