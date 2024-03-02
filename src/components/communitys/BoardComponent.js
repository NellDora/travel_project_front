import useCustomMove from "../hook/useCustomMove";

function BoardComponent(props){

    const {moveToBoardRead} = useCustomMove()
    const boardNum = props.bno;
    return(
        <div className="mt-3 mb-3 flex flex-wrap box-border border-t-2 shadow-slate-400 shadow-lg"
            onClick={() => moveToBoardRead(boardNum)}>
            <div className="w-1/12">
                <div className="bg-red-300">
                    <span>게시글 No</span>
                </div>
            </div>

            <div className="w-11/12">
                <div className="flex flex-wrap">
                    <div className="w-1/6">
                        <span className="ml-6">제목</span>
                    </div>
                    <div className="w-5/6">
                        <span className="ml-6">{props.title}</span>
                    </div>
                </div>

                <div className="flex flex-wrap">
                    <div className="w-1/6">
                        <span className="ml-6">내용</span>
                    </div>
                    <div className="w-5/6">
                        <span className="ml-6">{props.content}</span>
                    </div>
                </div>
                
                <div className="flex flex-wrap">
                    <div className="w-1/6">
                        <span className="ml-6">흐익</span>
                    </div>
                    <div className="w-5/6">
                        <span className="ml-6">호로로로로로로로로로</span>
                    </div>
                </div>
                

            </div>

        </div>
    )
}

export default BoardComponent;