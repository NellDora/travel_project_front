

const BasicContent =({children}) =>{
    return(
        <div className="flex justify-center">
            <div className="flex whitespace-normal h-svh w-1/12 ">
                <span className=" text-wrap">ghgh</span>
            </div>

            <div className="w-10/12">
                <main>
                    {children}
                </main>
            </div>
            <div className="flex h-svh w-1/12 ">
                ghghgh
            </div>
        </div>

    );
}

export default BasicContent;