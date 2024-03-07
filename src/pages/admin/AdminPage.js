import React from "react"
import { Outlet } from "react-router-dom"
import AdminContent from "../../components/contents/AdminContent"
import BasicMenu from "../../components/menus/BasicMenu"


function AdminPage(){
    return(
        <div>
            <BasicMenu/>
            <AdminContent>
                <div className="h-lvh">
                    <div className="flex justify-center h-10 m-4">
                        <div className="font-extrabold text-2xl">
                            여행 관련 글
                        </div>
                    </div>
                    <Outlet/>
                </div>
            </AdminContent>
        </div>
    )
}

export default AdminPage