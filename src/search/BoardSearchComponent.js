import useCustomMove from "../components/hook/useCustomMove";

const BoardSearchComponent = () => {

    const {moveToBoardWrite} = useCustomMove()

    return(
        <div className="flex">
            <div className="w-1/6 bg-black">
                ghdn
            </div>
            <div className="flex flex-wrap justify-center w-5/6">
                <label className="mt-4 mb-4">Type</label>
                <select className="m-4 border-2 border-gray-200 rounded-md">
                    <option>All</option>
                    <option>Travel</option>
                    <option>recruitment</option>
                    <option>story</option>
                    <option>good</option>
                </select>

                <label className="mt-4 mb-4">Theme</label>
                <select className="m-4 border-2 border-gray-200 rounded-md">
                    <option>All</option>
                    <option>landscape</option>
                    <option>food</option>
                    <option>leisure</option>
                </select>

                <label className="mt-4 mb-4">호우</label>
                <select className="m-4 border-2 border-gray-200 rounded-md">
                    <option>전체</option>
                    <option>seoul</option>
                    <option>busan</option>
                </select>
            </div>

            <div className="w-1/6 m-4" onClick={()=> moveToBoardWrite()}>
                글쓰기
            </div>
        </div>
        
    );
}

export default BoardSearchComponent