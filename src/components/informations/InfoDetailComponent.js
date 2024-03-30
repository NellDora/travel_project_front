import { useEffect, useState } from "react";
import { getInfo } from "../../api/infoApi";
import ImageSlider from "../etc/ImageSlider";


const initState ={
    vno:0,
    title:"",
    content:"",
    category:"",
    writer:"",
    regDate:"",
    location:"",
    type:"",
    uploadFileNames:[]
}





const InfoDetailComponent = ({vno}) => {

    

    const [info, setInfo] = useState(initState)



    useEffect(()=>{
        getInfo(vno).then(data=>{
            setInfo(data)
        })
    },[vno]);

    return(
        <div>
            <div className="flex flex-wrap justify-center h-auto">
                
                <div className="border-gray-600 w-1/3 h-auto bg-slate-400 border-solid">
                    <div className="text-center  m-3">
                        <span className="text-3xl text-center">{info.title}</span>
                    </div>
                    <div>
                        <ImageSlider images={info.uploadFileNames}/>
                    </div>
                    
                </div>
            </div>

            <div className="flex flex-wrap m-7">
                <div className="w-1/4">
                </div>

                {/*글 제목 */}
                <div className=" w-1/2 flex flex-wrap shadow-lg ">
                    <div className="w-11/12 font-extrabold">
                    <span className=" text-2xl">{info.title}</span>
                    </div>
                </div>

            </div>

            <div className="flex flex-wrap m-7">
                <div className="w-1/4">
                </div>
                {/*address */}
                <div className=" w-1/2 flex flex-wrap shadow-lg ">
                    <div className="w-11/12 font-extrabold">
                    <span className=" text-2xl ">address</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap m-7">
                <div className="w-1/4">
                </div>

                {/*글 내용 */}
                <div className=" w-1/2 flex flex-wrap shadow-lg ">
                    
                    <div className="w-11/12">
                        <textarea className=" m-4 text-lg w-full resize-none min-h-64 h-auto border-2 border-gray-300 border-none " value={info.content} readOnly></textarea>
                        <span></span>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap m-7">
                <div className="w-1/4">
                </div>

                {/*지역 */}
                <div className=" w-1/2 flex flex-wrap">
                    <div className="w-1/6 font-extrabold">
                        지역
                    </div>
                    <div className="w-5/6">
                        {info.location}
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap m-7">
                <div className="w-1/4">
                </div>

                {/*글 제목 */}
                <div className=" w-1/2 flex flex-wrap">
                    <div className="w-1/6 font-extrabold">
                        type
                    </div>
                    <div className="w-5/6">
                        {info.type}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default InfoDetailComponent