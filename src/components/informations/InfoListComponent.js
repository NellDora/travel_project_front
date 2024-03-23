import { useEffect, useState } from "react";
import useCustomMove from "../hook/useCustomMove"
import InfoComponent from "./InfoComponent";
import { getInfoList } from "../../api/infoApi";
import PageComponent from "../common/PageComponent";

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

                <div className=" justify-items-center place-items-cente flex">
                    <div className=" w-1/12">

                    </div>
                    <div className="w-3/12 bg-slate-400"> 
                            <div className="m-10 flex">
                                <div className="w-1/4">
                                    <span>search</span>
                                </div>
                                <input className="3/4" type="text"></input>
                            </div>
                            <div className="m-10 flex">
                                <div className="w-1/2">
                                    <span>theme</span>
                                </div>
                                <select className=" w-1/2 rounded-2xl">
                                    <option>ALL</option>
                                    <option>view</option>
                                    <option>food</option>
                                    <option>history</option>
                                </select>
                            </div>
                            <div className="m-10 flex">
                                <div className="w-1/2">
                                    <span>stand</span>
                                </div>
                                <select className=" w-1/2 rounded-2xl">
                                    <option>ALL</option>
                                    <option>recently</option>
                                    <option>favorite</option>
                                    <option>lastly</option>
                                </select>
                            </div>
                    </div>
                    <div className="w-6/12">
                        {serverData.dtoList.map(info =>
                            <div className="box-border border-t-2 m-10 w-11/12 shadow-lg shadow-slate-400 border-gray-300 border-2"
                            onClick={() => moveToInfoRead(info.vno)}>
                                    <div className="text-center">
                                    <span className="font-extrabold size-5">지역명</span>
                                </div>
                                <div className="flex flex-wrap justify-center">
                                    <InfoComponent title={info.title}  content={info.content} register={"2024-02-25"} stump={"255"}
                                    image={info.uploadFileNames[0]}/>
                                </div>
                            </div>
                            )}
                            <PageComponent serverData={serverData} />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default InfoListComponent