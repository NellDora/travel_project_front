import ScrollEventComponent from "../../components/home/ScrollEventComponent";
import BasicMenu from "../../components/menus/BasicMenu";
import imageSrc from "../../image/busanimage.jpg"
function MainPage(props){
    return(
        <div>
            <div>
                <BasicMenu/>
                <div className=" w-full">
                    <img src={imageSrc} alt="busan" className="w-full" />
                </div>
                <ScrollEventComponent/>
            </div>
        </div>
    );
}




export default MainPage;