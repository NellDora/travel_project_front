import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const BasicMenu = () => {

    const loginState = useSelector(state => state.loginSlice)
    
    console.log("loginState......")
    console.log(loginState)
    
    return(
        <div>
            <nav className='flex bg-blue-200 fixed top-0 w-full'>
                <div className="w-1/12 bg-blue-200 text-center">
                    <div className="p-4">
                        <span className="font-extrabold">ND</span>
                    </div>
                </div>
                <div className='flex justify-center w-10/12'>
                    <ul className="flex p-4 text-blue-400 font-bold">
                        <li className="ml-3 mr-3">
                            <Link to ={'/'}>home</Link>
                        </li>
                        <li className="ml-3 mr-3">
                            <Link to ={'/travel'}>Travel</Link>
                        </li>

                        {loginState.id ?
                        <>
                        <li className="ml-3 mr-3">
                            <Link to ={'/community'}>Community</Link>
                        </li>
                        <li className="ml-3 mr-3">
                            <Link to ={'/gallery'}>Gallery</Link>
                        </li>
                        </>
                        :<></>
                        }
                    </ul>

                </div>
                <div className="w-1/12 bg-blue-200">
                    <div className="p-4">
                        {! loginState.id ?
                            <div className="text-white text-sm m-1 rounded">
                                <Link to={'/memberlogin'}>Login</Link>
                            </div>
                            :

                            <div className="text-white text-sm m-1 rounded">
                                <Link to={'/member/logout'}>Logout</Link>
                            </div>
                            }
                    </div>
                </div>
                
            </nav>

            <div className=" mt-12">
                <span> </span>
            </div>
        </div>
    );
}

export default BasicMenu;