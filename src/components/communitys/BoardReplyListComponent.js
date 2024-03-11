import BoardReplyComponent from "./BoardReplyComponent"

function BoardReplyListComponent(){
    return(
        <div className="">
            {/* 가나다라마바사*/}
            <div className="flex justify-center">
                <div className="w-1/6">

                </div>
                <div className="border-blue-300 border-solid border-2 w-4/6">
                    <BoardReplyComponent/>
                    <BoardReplyComponent/>
                    <BoardReplyComponent/>
                </div>
                <div className="w-1/6">

                </div>
            </div>
        </div>
    )
}

export default BoardReplyListComponent