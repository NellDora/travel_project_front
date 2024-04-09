import { lazy } from "react";
const InfoListComponent = lazy(() => import("../../components/informations/InfoListComponent"));
const InfoSearchComponent = lazy(() => import("../../search/InfoSearchComponent"))




function InfoListPage(){
    return(
        <div>
            <InfoSearchComponent/>
            <InfoListComponent/>
        </div>
    );
}

export default InfoListPage