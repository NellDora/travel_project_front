import InfoListComponent from "../informations/InfoListComponent";
import InfoSearchComponent from "../search/InfoSearchComponent";

function InfoListPage(){
    return(
        <div>
            <InfoSearchComponent/>
            <InfoListComponent/>
        </div>
    );
}

export default InfoListPage