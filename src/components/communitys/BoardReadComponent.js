import { useEffect, useState } from "react";
import { getBoard } from "../../api/boardApi";


const initState ={
    bno:0,
    title:"",
    content:""
}

function BoardReadComponent({bno}){

    const [board, setBoard] = useState(initState)

    useEffect(()=>{
        getBoard(bno).then(data=>{
            setBoard(data)
        })
    },[bno]);

    return(
        <div className="">
            {/* 가나다라마바사*/}
            <div className="flex justify-center">
                <div className="w-1/6">

                </div>
                <div className="border-blue-300 border-solid border-2 w-4/6">
                    <div className="m-4 text-3xl">
                        {board.title}
                    </div>
                    <div className="m-4 text-lg">
                        {board.content}
                    </div>
                </div>
                <div className="w-1/6">

                </div>
            </div>
        </div>
    );
}

export default BoardReadComponent