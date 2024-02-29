import { Suspense } from "react"

const infoRouter = () =>{

    return[
        {
            path:'',
            element:<Suspense></Suspense>
        }
        ,
        {
            path:'read',
            element:<Suspense></Suspense>
        }
    ]
}

export default infoRouter;