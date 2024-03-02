import {lazy, Suspense} from "react"
import BoardListPage from "../pages/community/BoardListPage";
import BoardReadPage from "../pages/community/BoardReadPage";
import BoardWritePage from "../pages/community/BoardAddPage";


const communityRouter = () => {

    return [
        {
            path:"",
            element:<Suspense><BoardListPage/></Suspense>
        },
        {
            path:"read/:bno",
            element:<Suspense><BoardReadPage/></Suspense>
        },
        {
            path:"write",
            element:<Suspense><BoardWritePage/></Suspense>
        }
    ]
}

export default communityRouter;