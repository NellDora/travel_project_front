

const InfoSearchComponent = () => {
    return(
        <div className="flex flex-wrap justify-center">
            <label className="mt-4 mb-4">local</label>
            <select className="m-4 border-2 border-gray-200 rounded-md">
                <option>All</option>
                <option>Seoul</option>
                <option>Busan</option>
                <option>경주</option>
                <option>전주</option>
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
                <option>ㅎㅎ</option>
                <option>ㅁㅁ</option>
            </select>

        </div>
    );
}

export default InfoSearchComponent