import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<h2>hello</h2>
            }
        ]
    },
]);

export default router;