import LoginComponent from "../../components/member/LoginComponent";
import BasicMenu from "../../components/menus/BasicMenu";


const LoginPage = () => {
    return(
        
        <div>
            <BasicMenu/>
                
            <div className="flex flex-wrap w-full h-full justify-center items-center border-2">
                <LoginComponent/>
            </div>

            
        </div>
       
    );
}

export default LoginPage;