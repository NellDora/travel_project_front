import { API_SERVER_HOST } from "../../api/infoApi"


const host = API_SERVER_HOST


function InfoComponent(props){

    return(
        <div className="w-full">
            <div className="box-content border-gray-300 border-t-2">
                <div className=" m-auto">
                    <div className="flex">
                        <div className="bg-red-950 w-4/12 h-auto  flex mt-3 mb-3 justify-center">
                            <div>
                                <img className=" object-contain" src={`${host}/vacationlands/view/s_${props.image}`}/>
                            </div>
                            
                        </div>
                        <div className=" ml-10 mt-5 w-8/12">
                            <div className="font-extrabold whitespace-nowrap text-ellipsis overflow-hidden">
                                title : {props.title}
                            </div>
                            <div className="font-extrabold whitespace-nowrap text-ellipsis overflow-hidden">
                                content : {props.content}
                            </div>
                            <div className="font-extrabold">
                                reg date : {props.register}
                            </div>
                            <div className="font-extrabold">
                                like : {props.stump}
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
                
            </div>
        </div>
    )
}

export default InfoComponent