import { useParams } from "react-router-dom";
import AdminInfoReadComponent from "../../components/admin/AdminInfoReadComponent";


function AdminInfoReadPage(){

const {vno} = useParams()

return(
    <div className="">
        <AdminInfoReadComponent vno={vno}/>
    </div>
);

}

export default AdminInfoReadPage;