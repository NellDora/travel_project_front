import { Suspense, lazy } from "react";
import MainPage from "../pages/home/MainPage";
import infoRouter from "./infoRouter";
import InfoPage from "../pages/informations/InfoPage";
import communityRouter from "./communityRouter";
import ComminityPage from "../pages/community/CommunityPage";
import AdminPage from "../pages/admin/AdminPage";
import adminRouter from "./adminRouter";
import memberRouter from "./memberRouter";
import LoginPage from "../pages/member/LoginPage";

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
    },
    {
        path:'admin',
        element:<Suspense><AdminPage/></Suspense>,
        children:adminRouter()
    },
    {
        path:'member',
        children:memberRouter()
    },
    {
        path:'login',
        element:<Suspense><LoginPage/></Suspense>,
    }
])

export default root