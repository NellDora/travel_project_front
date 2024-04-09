import { Suspense } from "react"
import AdminPage from "../pages/admin/AdminPage"
import AdminAddInfoPage from "../pages/admin/AdminAddInfoPage"
import AdminInfoListPage from "../pages/admin/AdminInfoListPage"
import AdminInfoReadPage from "../pages/admin/AdminInfoReadPage"
import AdminMainPage from "../pages/admin/AdminMainPage"
import { Navigate } from "react-router-dom"


const adminRouter = () => {
    return[
        {
            
            path:"",
            element:<Navigate replace={true} to={'home'}/>
            
        },
        {
            path:"home",
            element:<Suspense><AdminMainPage/></Suspense>
        },
        {
            path:"travel",
            element:<Suspense><AdminInfoListPage/></Suspense>
        },
        {
            path:'travel/read/:vno',
            element:<Suspense><AdminInfoReadPage/></Suspense>
        },
        {
            path:"travel/register",
            element:<Suspense><AdminAddInfoPage/></Suspense>
        }
    ]
}

export default adminRouter;