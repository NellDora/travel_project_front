

const BasicContent =({children}) =>{
    return(
        <div className="flex">
            <div className="flex whitespace-normal h-svh w-1/12 bg-slate-300">
                <span className=" text-wrap">ghgh</span>
            </div>

            <div className="w-10/12">
                <main>
                    {children}
                </main>
            </div>
            <div className="flex h-svh w-1/12 bg-slate-300">
                ghghgh
            </div>
        </div>

    );
}

export default BasicContent;