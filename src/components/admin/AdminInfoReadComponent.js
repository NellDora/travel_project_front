import { useEffect, useState } from "react";
import { getInfo } from "../../api/infoApi";


const initState ={
    vno:0,
    title:"",
    content:"",
    category:"",
    writer:"",
    regDate:"",
    location:"",
    type:""
}

const AdminInfoReadComponent = ({vno}) => {

    

    const [info, setInfo] = useState(initState)



    useEffect(()=>{
        getInfo(vno).then(data=>{
            setInfo(data)
        })
    },[vno]);

    return(
        <div>
            <div className="flex flex-wrap justify-center h-auto">
                <div className="inline-block align-middle">
                    <span></span>
                </div>
                <div className="border-gray-600 w-1/3 h-auto bg-slate-400 border-solid">
                    테스트<br/><br/><br/><br/><br/><br/>
                    
                </div>
                <div>네모</div>

            </div>

            <div className="flex flex-wrap m-7">
                <div className="w-1/4">
                </div>

                {/*글 제목 */}
                <div className="bg-orange-500 w-1/2 flex flex-wrap">
                    <div className="w-1/6 font-extrabold">
                        <span>title</span>
                    </div>
                    <div className="w-5/6">
                        {info.title}
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap m-7">
                <div className="w-1/4">
                </div>

                {/*글 내용 */}
                <div className="bg-orange-500 w-1/2 flex flex-wrap">
                    <div className="w-1/6 font-extrabold">
                        내용
                    </div>
                    <div className="w-5/6">
                        {info.content}
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap m-7">
                <div className="w-1/4">
                </div>

                {/*지역 */}
                <div className="bg-orange-500 w-1/2 flex flex-wrap">
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
                <div className="bg-orange-500 w-1/2 flex flex-wrap">
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

export default AdminInfoReadComponent