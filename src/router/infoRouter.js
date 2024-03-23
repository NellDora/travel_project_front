import { Suspense } from "react"
import InfoListPage from "../pages/informations/InfoListPage";
import InfoDetailComponent from "../components/informations/InfoDetailComponent";
import InfoReadPage from "../pages/informations/InfoReadPage";

const infoRouter = () =>{

    return[
        {
            path:'',
            element:<Suspense><InfoListPage/></Suspense>
        }
        ,
        {
            path:'read/:vno',
            element:<Suspense><InfoReadPage/></Suspense>
        }
    ]
}

export default infoRouter;