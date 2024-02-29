import useCustomMove from "../hook/useCustomMove"
import InfoComponent from "./InfoComponent";

const InfoListComponent = () => {

    const{moveToInfoList, moveToInfoRead} = useCustomMove()

    return(
        <div>
            <div className="flex-wrap justify-items-center flex place-items-center">

                <div className="box-border border-t-2 m-10 w-1/4 shadow-lg"
                    onClick={() => moveToInfoRead()}>
                    
                    <div className="text-center">
                        <span className="font-extrabold size-5">지역명</span>
                    </div>
                    <div className="flex flex-wrap justify-center">
                        <InfoComponent title={"벚꽃"}  content={"붉은 꽃"} register={"2024-02-25"} stump={"255"}/>
                    </div>

                </div>

                <div className="box-border border-t-2 m-10 w-1/4 shadow-lg"
                    onClick={() => moveToInfoRead()}>
                    
                    <div className="text-center">
                        <span className="font-extrabold size-5">지역명</span>
                    </div>
                    <div className="flex flex-wrap justify-center">
                        <InfoComponent title={"벚꽃"}  content={"붉은 꽃"} register={"2024-02-25"} stump={"255"}/>
                    </div>

                </div>
                <div className="box-border border-t-2 m-10 w-1/4 shadow-lg"
                    onClick={() => moveToInfoRead()}>
                    
                    <div className="text-center">
                        <span className="font-extrabold size-5">지역명</span>
                    </div>
                    <div className="flex flex-wrap justify-center">
                        <InfoComponent title={"벚꽃"}  content={"붉은 꽃"} register={"2024-02-25"} stump={"255"}/>
                    </div>

                </div>
                <div className="box-border border-t-2 m-10 w-1/4 shadow-lg"
                    onClick={() => moveToInfoRead()}>
                    
                    <div className="text-center">
                        <span className="font-extrabold size-5">지역명</span>
                    </div>
                    <div className="flex flex-wrap justify-center">
                        <InfoComponent title={"벚꽃"}  content={"붉은 꽃"} register={"2024-02-25"} stump={"255"}/>
                    </div>

                </div>
                <div className="box-border border-t-2 m-10 w-1/4 shadow-lg"
                    onClick={() => moveToInfoRead()}>
                    
                    <div className="text-center">
                        <span className="font-extrabold size-5">지역명</span>
                    </div>
                    <div className="flex flex-wrap justify-center">
                        <InfoComponent title={"벚꽃"}  content={"붉은 꽃"} register={"2024-02-25"} stump={"255"}/>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default InfoListComponent