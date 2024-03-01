import { Outlet } from "react-router-dom";
import BasicMenu from "../components/menus/BasicMenu";
import BasicContent from "../components/contents/BasicContent";

function InfoPage(){
    return(
        <div>
            <BasicMenu/>
            <BasicContent>
                <div className="h-lvh">
                    <div className="flex justify-center h-10 m-4">
                        <div className="font-extrabold text-2xl">
                            아름다운 명소를 소개합니다 - 전체
                        </div>
                    </div>
                    <Outlet/>
                </div>
            </BasicContent>
        </div>
    )
}

export default InfoPage;