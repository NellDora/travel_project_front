import { Suspense } from "react"
import InfoListPage from "../pages/InfoListPage";
import InfoDetailComponent from "../informations/InfoDetailComponent";

const infoRouter = () =>{

    return[
        {
            path:'',
            element:<Suspense><InfoListPage/></Suspense>
        }
        ,
        {
            path:'read',
            element:<Suspense><InfoDetailComponent/></Suspense>
        }
    ]
}

export default infoRouter;