
const BasicResultModal =({category,title,callbackFn}) =>{
    return(
        <div className="fixed top-0 left-0 z-[1055] flex h-full w-full justify-center bg-black bg-opacity-20">
            <div
            className="absolute bg-white shadow dark:bg-gray-700 opacity-100 w-1/4 rounded mt-10 mb-10 px-6 min-w-[600px]">

                    <div
                        className="justify-center bg-warning-400 mt-6 mb-6 text-2xl border-b-4 border-gray-500">
                        {category} 작성이 완료 되었습니다.
                    </div>
                    <div className="text-4xl border-orange-400 border-b-4 pt-4 pb-4">
                        작성한 글 정보 : {title}
                    </div>

                    <div className="justify-end flex">
                        <button
                            className="rounded bg-blue-500 mt-4 mb-4 px-6 pt-4 pb-4 text-lg text-white"
                            onClick={()=>
                            {
                                if(callbackFn){
                                    callbackFn()
                                }
                            }}
                            >Close  Modal

                        </button>
                    </div>
            </div>

        </div>
    );
}

export default BasicResultModal