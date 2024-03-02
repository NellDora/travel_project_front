import BasicMenu from "../../components/menus/BasicMenu";
import BasicContent from "../../components/contents/BasicContent";
import { Outlet } from "react-router-dom";

function ComminityPage(){
    return(
        <div>
            <BasicMenu/>
            <BasicContent>
                <div className="h-lvh">
                    <div className="flex justify-center h-10 m-4">
                        <div className="font-extrabold text-2xl">
                            여행 관련 글
                        </div>
                    </div>
                    <Outlet/>
                </div>
            </BasicContent>
        </div>
    );
}

export default ComminityPage;