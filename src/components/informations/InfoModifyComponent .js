import { useRef, useState } from "react";
import useCustomMove from "../hook/useCustomMove";
import { postInfo } from "../../api/infoApi";
import BasicResultModal from "../common/BasicResultModal";

const initState = {
    title:'',
    content:'',
    type:'',
    theme:'',
    location:''
}

const InfoAddComponent = () =>{

    const[info, setInfo] = useState({...initState})

    const uploadRef = useRef()

    const [result, setResult] = useState(null);

    const {moveToInfoList} = useCustomMove()

    const handleChangeInfo = (e) =>{
        info[e.target.name] = e.target.value
        setInfo({...info})
    }

    const handleClickAdd = () =>{
        console.log(info)

        const formData = new FormData()

        const files = uploadRef.current.files

        console.log(files)

        for(let i =0; i< files.length; i++){
            formData.append("files", files[i])
        }
        formData.append("title", info.title)
        formData.append("content", info.content)
        formData.append("type", info.type)

        postInfo(formData)

    }

    const closeModal = () =>{
        setResult(null)
        moveToInfoList()
    }
    
    return(
        <div className="">
        {/* 가나다라마바사*/}
            <div className="flex justify-center">
                <div className="w-1/6">

                </div>
                 <div className="border-blue-300 rounded-xl border-solid border-2 w-4/6">

                <input className="m-6 text-2xl border-b-2 border-gray-300" name="title" type="text" placeholder="Please enter the title" 
                    value={info.title} onChange={handleChangeInfo}></input>
                
                <textarea className="m-6 text-lg w-11/12 resize-none min-h-64 h-auto border-2 border-gray-300" name="content"
                     value={info.content} onChange={handleChangeInfo} placeholder="Please enter the content"></textarea>

                
                <label className="ml-10">location</label>
                <select className="m-5">
                    <option>seoul</option>
                    <option>seoul</option>
                    <option>seoul</option>
                </select>

                <label className="ml-10">type</label>
                <select className="m-5">
                    <option>view</option>
                    <option>food</option>
                    <option>history</option>
                </select>

                <div className="flex justify-center">
                    <div className=" relative mb-4 flex p-4 flex-wrap items-stretch">
                        <div className="w-1/5 p-6 text-right font-bold">
                            Files
                        </div>
                        <input ref={uploadRef}
                                className="w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md"
                                type={'file'} multiple={true}>

                        </input>
                    </div>

                </div>

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

                {result ? <BasicResultModal category={'게시글'} title={info.title} callbackFn={closeModal}/>:<></>}
            </div>
        </div>
    )
}

export default InfoAddComponent;