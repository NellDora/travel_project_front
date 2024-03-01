import {lazy, Suspense} from "react"
import BoardListPage from "../pages/BoardListPage";
import BoardReadPage from "../pages/BoardReadPage";
import BoardWritePage from "../pages/BoardAddPage";


const communityRouter = () => {

    return [
        {
            path:"",
            element:<Suspense><BoardListPage/></Suspense>
        },
        {
            path:"read",
            element:<Suspense><BoardReadPage/></Suspense>
        },
        {
            path:"write",
            element:<Suspense><BoardWritePage/></Suspense>
        }
    ]
}

export default communityRouter;