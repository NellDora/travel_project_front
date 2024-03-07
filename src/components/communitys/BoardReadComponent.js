import { useEffect, useState } from "react";
import { getBoard } from "../../api/boardApi";


const initState ={
    bno:0,
    title:"",
    content:"",
    category:"",
    writer:"",
    regDate:""
}

function BoardReadComponent({bno}){

    const [board, setBoard] = useState(initState)

    useEffect(()=>{
        getBoard(bno).then(data=>{
            setBoard(data)
        })
    },[bno]);

    const datetime = board.regDate.split(" ")

    return(
        <div className="">
            {/* 가나다라마바사*/}
            <div className="flex justify-center">
                <div className="w-1/6">

                </div>
                <div className="border-blue-300 border-solid border-2 w-4/6">
                    <div className="m-4 text-lg">
                        <span>{board.writer}</span>
                    </div>
                    <div className="m-4 text-lg">
                        <p>{board.regDate}</p>
                        <span>{datetime[0]} - {datetime[1]}</span>
                    </div>
                    <div className="m-4 text-3xl font-extrabold">
                        {board.title}
                    </div>
                    <textarea className="m-4 text-lg w-11/12 resize-none min-h-64 h-auto border-2 border-gray-300 border-none" name="content"
                     value={board.content} readOnly></textarea>
                    
                    <div>

                    </div>
                </div>
                <div className="w-1/6">

                </div>
            </div>
        </div>
    );
}

export default BoardReadComponent