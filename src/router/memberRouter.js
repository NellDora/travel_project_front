import { Suspense, lazy } from "react";
import MainPage from "../pages/home/MainPage";
const Loading = <div>Loading....</div>
const Login = lazy(() => import("../pages/member/LoginPage"))

const memberRouter = () => {
    return[
        {
            path:"login",
            element:<Suspense><Login/></Suspense>
        }

    ]
}

export default memberRouter