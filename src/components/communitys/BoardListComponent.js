import { useEffect, useState } from "react";
import BoardSearchComponent from "../../search/BoardSearchComponent";
import BoardComponent from "./BoardComponent";
import { getBoardList } from "../../api/boardApi";
import useCustomMove from "../hook/useCustomMove";

const initState ={
    dtoList:[],
    pageNumList:[],
    pageRequestDTO:null,
    prev:false,
    next : false,
    totalCount : 0,
    prevPage: 0,
    nextPage : 0,
    totalPage : 0,
    current : 0,

}

const BoardListComponent = () => {

    const{page,size, refresh, moveToBoardList, moveToBoardRead} = useCustomMove()

    const[serverData, setServerData] = useState(initState)

    useEffect(()=>{
        getBoardList({page,size}).then(data=>{
            console.log(data)
            setServerData(data)
        })
    },[page,size],refresh)
  

    return (
        <div>
            <BoardSearchComponent/>
            <div className="">

                {serverData.dtoList.map(board =>
                    <div className="flex-wrap justify-items-center flex place-items-cente">
                        <div className="w-1/6 ">
                        </div>
                        <div className="w-4/6 shadow-lg ">
                            <BoardComponent title={board.title} content={board.content} bno={board.bno}/>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default BoardListComponent