import { useEffect, useState } from "react";
import useCustomMove from "../hook/useCustomMove"
import InfoComponent from "./InfoComponent";
import { getInfoList } from "../../api/infoApi";

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

const InfoListComponent = () => {

    const{page,size, refresh, moveToInfoList, moveToInfoRead} = useCustomMove()
    
    const[serverData, setServerData] = useState(initState)

    
    useEffect(()=>{
        getInfoList({page,size}).then(data=>{
            console.log(data)
            setServerData(data)
        })
    }, [page, size], refresh)

    return(
        <div>
            <div>

                <div className="flex-wrap justify-items-center flex place-items-cente">

                    {serverData.dtoList.map(info =>
                        <div className="box-border border-t-2 m-10 w-1/4 shadow-lg shadow-slate-400 border-gray-300 border-2"
                        onClick={() => moveToInfoRead()}>
                                <div className="text-center">
                                <span className="font-extrabold size-5">지역명</span>
                            </div>
                            <div className="flex flex-wrap justify-center">
                                <InfoComponent title={info.title}  content={info.content} register={"2024-02-25"} stump={"255"}
                                image={info.uploadFileNames[0]}/>
                            </div>
                        </div>
                        )}

                </div>

            </div>
        </div>
    );
}

export default InfoListComponent