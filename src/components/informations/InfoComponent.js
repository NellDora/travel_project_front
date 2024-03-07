import { API_SERVER_HOST } from "../../api/infoApi"


const host = API_SERVER_HOST


function InfoComponent(props){

    return(
        <div className="w-full">
            <div className="box-content border-gray-300 border-t-2">
                <div className="w-4/5 m-auto">
                    <div className="bg-red-950 w-full h-auto mt-3 mb-3">
                        <img className=" object-contain" src={`${host}/vacationlands/view/s_${props.image}`}>
                        </img>
                    </div>
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
    )
}

export default InfoComponent