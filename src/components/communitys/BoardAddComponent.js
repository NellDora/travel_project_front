import { useState } from "react";
import { postBoard } from "../../api/boardApi";
import useCustomMove from "../hook/useCustomMove";
import BasicResultModal from "../common/BasicResultModal";

const initState = {
    title:'',
    content:''
}


const BoardAddComponent = () => {

    const[board, setBoard] = useState({...initState})

    const [result, setResult] = useState(null);

    const {moveToBoardList} = useCustomMove()

    const handleChangeBoard = (e) =>{
        board[e.target.name] = e.target.value
        setBoard({...board})
    }

    const handleClickAdd = () =>{
        console.log(board)
        postBoard(board).then(result=>{
            setResult(result)
            setBoard({...board})
        })
    }

    const closeModal = () =>{
        setResult(null)
        moveToBoardList()
    }

    return(
        <div className="">
        {/* 가나다라마바사*/}
            <div className="flex justify-center">
                <div className="w-1/6">

                </div>
                 <div className="border-blue-300 rounded-xl border-solid border-2 w-4/6">

                <input className="m-6 text-2xl border-b-2 border-gray-300" name="title" type="text" placeholder="Please enter the title" 
                    value={board.title} onChange={handleChangeBoard}></input>
                
                <textarea className="m-6 text-lg w-11/12 resize-none min-h-64 h-auto border-2 border-gray-300" name="content"
                     value={board.content} onChange={handleChangeBoard} placeholder="Please enter the content"></textarea>

                
                <label className="ml-10">type</label>
                <select className="m-5">
                    <option>호우</option>
                    <option>호우</option>
                </select>

                <div className="flex">
                    <div className=" w-2/3">

                    </div>
                    <div className=" w-1/3">
                        <button className="ml-10 m-5" onClick={handleClickAdd}> Summit</button>
                        <button className="m-5"> Cancel</button>
                    </div>
                    
                </div>

            </div>
            <div className="w-1/6">

            </div>

            {result ? <BasicResultModal category={'게시글'} title={board.title} callbackFn={closeModal}/>:<></>}

        </div>
    </div>
    );
}

export default BoardAddComponent