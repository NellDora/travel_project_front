import { Suspense } from "react"
import AdminPage from "../pages/admin/AdminPage"
import AdminAddInfoPage from "../pages/admin/AdminAddInfoPage"


const adminRouter = () => {
    return[
        {
            
            path:"",
            element:<Suspense></Suspense>
        },
        {
            path:"taaa",
            element:<Suspense><AdminAddInfoPage/></Suspense>
        }
    ]
}

export default adminRouter;