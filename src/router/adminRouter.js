import { Suspense } from "react"
import AdminPage from "../pages/admin/AdminPage"
import AdminAddInfoPage from "../pages/admin/AdminAddInfoPage"
import AdminInfoListPage from "../pages/admin/AdminInfoListPage"
import AdminInfoReadPage from "../pages/admin/AdminInfoReadPage"


const adminRouter = () => {
    return[
        {
            
            path:"",
            element:<Suspense></Suspense>
        },
        {
            path:"/admin",
            element:<Suspense><AdminPage/></Suspense>
        },
        {
            path:"/admin/travel",
            element:<Suspense><AdminInfoListPage/></Suspense>
        },
        {
            path:'/admin/travel/read/:vno',
            element:<Suspense><AdminInfoReadPage/></Suspense>
        },
        {
            path:"/admin/travel/register",
            element:<Suspense><AdminAddInfoPage/></Suspense>
        }
    ]
}

export default adminRouter;