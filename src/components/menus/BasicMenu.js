import { Link } from "react-router-dom";


const BasicMenu = () => {
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
                        <li className="ml-3 mr-3">
                            <Link to ={'/community'}>Community</Link>
                        </li>
                        <li className="ml-3 mr-3">
                            <Link to ={'/gallery'}>Gallery</Link>
                        </li>
                    </ul>

                </div>
                <div className="w-1/12 bg-blue-200">
                    <div className="p-4">
                        <span className="font-extrabold">
                            LOGIN
                        </span>
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