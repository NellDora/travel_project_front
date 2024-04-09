import {lazy, Suspense } from "react"
const InfoListPage = lazy(()=> import ("../pages/informations/InfoListPage"));
const InfoDetailComponent  = lazy(()=> import("../components/informations/InfoDetailComponent"));
const InfoReadPage = lazy(()=> import("../pages/informations/InfoReadPage"));

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