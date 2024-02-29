import { Suspense } from "react";
import MainPage from "../pages/MainPage";
import infoRouter from "./infoRouter";

const { createBrowserRouter } = require("react-router-dom");

const root = createBrowserRouter([
    {
        path:'',
        element:<Suspense><MainPage/></Suspense>
    },
    {
        path:'informations',
        element:<Suspense></Suspense>,
        children:infoRouter()
    },
    {
        path:'/gallery',
        element:<Suspense></Suspense>
    },
    {
        path:'/community',
        element:<Suspense></Suspense>
    }
])

export default root