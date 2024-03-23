import { useParams } from "react-router-dom";
import InfoDetailComponent from "../../components/informations/InfoDetailComponent";



function InfoReadPage(){

const {vno} = useParams()

return(
    <div className="">
        <InfoDetailComponent vno={vno}/>
    </div>
);

}

export default InfoReadPage;