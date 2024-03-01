
function InfoComponent(props){

    return(
        <div className="w-full">
            <div className="box-content border-gray-300 border-t-2">
                <div className="w-4/5 m-auto">
                    <div className="bg-red-950 w-full h-36 mt-3 mb-3">
                        사진 집어 넣을 곳
                    </div>
                    <div className="font-extrabold">
                        title : {props.title}
                    </div>
                    <div className="font-extrabold">
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