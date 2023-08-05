import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Landing from "../pages/LandingPage/Landing";
import Home from "../pages/HomePage/Home";
import Login from "../pages/LoginPage/Login";
import Register from "../pages/RegisterPage/Register";
import Profile from "../pages/ProfilePage/Profile";
import EasyProblems from "../pages/EasyProblemPage/EasyProblems";
import MediumProblems from "../pages/MediumProblemPage/MediumProblems";
import AdvanceProblems from "../pages/AdvanceProblemPage/AdvanceProblems";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Landing></Landing>
            },
            {
                path:'home',
                element:<Home></Home>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            },
            {
                path:'profile',
                element:<Profile></Profile>
            },
            {
                path:'easy-problems',
                element:<EasyProblems></EasyProblems>
            },
            {
                path:'medium-problems',
                element:<MediumProblems></MediumProblems>
            },
            {
                path:'advance-problems',
                element:<AdvanceProblems></AdvanceProblems>
            }
        ]
    },
]);

export default router;