import { useParams } from "react-router-dom";
import BoardReadComponent from "../../components/communitys/BoardReadComponent";




function BoardReadPage(){

    const {bno} = useParams()

    return(
        <div className="">
            <BoardReadComponent bno={bno}/>
        </div>
    );
}

export default BoardReadPage;