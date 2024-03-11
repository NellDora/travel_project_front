import { useParams } from "react-router-dom";
import BoardReadComponent from "../../components/communitys/BoardReadComponent";
import BoardReplyComponent from "../../components/communitys/BoardReplyComponent";
import BoardReplyListComponent from "../../components/communitys/BoardReplyListComponent";




function BoardReadPage(){

    const {bno} = useParams()

    return(
        <div className="">
            <BoardReadComponent bno={bno}/>
            
            <BoardReplyListComponent/>
        </div>
    );
}

export default BoardReadPage;