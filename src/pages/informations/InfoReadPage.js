import { useParams } from "react-router-dom";
import {lazy} from "react"
const InfoDetailComponent  = lazy(()=> import("../../components/informations/InfoDetailComponent"));


function InfoReadPage(){

const {vno} = useParams()

return(
    <div className="">
        <InfoDetailComponent vno={vno}/>
    </div>
);

}

export default InfoReadPage;