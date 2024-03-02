import { Suspense } from "react";
import MainPage from "../pages/MainPage";
import infoRouter from "./infoRouter";
import InfoPage from "../pages/informations/InfoPage";
import communityRouter from "./communityRouter";
import ComminityPage from "../pages/community/CommunityPage";

const { createBrowserRouter } = require("react-router-dom");


const root = createBrowserRouter([
    {
        path:'',
        element:<Suspense><MainPage/></Suspense>
    },
    {
        path:'travel',
        element:<Suspense><InfoPage/></Suspense>,
        children:infoRouter()
    },
    {
        path:'/gallery',
        element:<Suspense></Suspense>
    },
    {
        path:'/community',
        element:<Suspense><ComminityPage/></Suspense>,
        children:communityRouter()
    }
])

export default root