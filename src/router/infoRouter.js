import { Suspense } from "react"
import InfoListPage from "../pages/informations/InfoListPage";
import InfoDetailComponent from "../components/informations/InfoDetailComponent";

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