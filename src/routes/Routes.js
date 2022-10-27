import { createBrowserRouter } from "react-router-dom";
import AllCourse from "../components/AllCourse/AllCourse";
import Blog from "../components/Blog/Blog";
import CheckOut from "../components/CheckOut/CheckOut";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import Courses from "../components/Courses/Courses";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Faq from "../components/Faq/Faq";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Profile from "../components/Profile/Profile";
import Register from "../components/Register/Register";
import CourseLayout from "../layout/CourseLayout";
import Main from "../layout/Main";
import PrivetRoutes from "./PrivetRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'courses',
                loader: () => {
                    return fetch('https://coding-school-server.vercel.app/course');
                } ,
                element: <CourseLayout></CourseLayout>,
                children: [
                    {
                        path: '/courses/:id',
                        loader: ({params}) => fetch(`https://coding-school-server.vercel.app/course/${params.id}`),
                        element: <Courses></Courses>,
                    },
                    {
                        path: 'details/:id',
                        loader: ({params}) => fetch(`https://coding-school-server.vercel.app/course/${params.id}`),
                        element: <CourseDetails></CourseDetails>
                    },
                    {
                        path: 'checkout/:id',
                        loader: ({params}) => fetch(`https://coding-school-server.vercel.app/course/${params.id}`),
                        element: <PrivetRoutes><CheckOut></CheckOut></PrivetRoutes>
                    }
                ]      
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: 'faq',
                element: <Faq></Faq>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'profile',
                element: <PrivetRoutes><Profile></Profile></PrivetRoutes>
            },
            {
                path: 'checkout',
                element: <PrivetRoutes><CheckOut></CheckOut></PrivetRoutes>
            }
        ]
    }
]);



export default  router;