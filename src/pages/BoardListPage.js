import BoardComponent from "../components/communitys/BoardComponent"
import BoardSearchComponent from "../search/BoardSearchComponent";

const BoardListPage = () => {
    return (
        <div>
            <BoardSearchComponent/>
            <div className="flex-wrap justify-items-center flex place-items-center">
                <div className="w-1/6">

                </div>
                <div className="w-4/6 shadow-lg ">
                    <BoardComponent/>
                    <BoardComponent/>
                    <BoardComponent/>
                    <BoardComponent/>
                    <BoardComponent/>
                </div>
            </div>
        </div>
    );
}

export default BoardListPage;