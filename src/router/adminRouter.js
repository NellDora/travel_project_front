import { Suspense } from "react"
import AdminPage from "../pages/admin/AdminPage"


const adminRouter = () => {
    return[
        {
            
            path:"",
            element:<Suspense></Suspense>
        },
        {
            path:"taaa",
            element:<Suspense></Suspense>
        }
    ]
}

export default adminRouter