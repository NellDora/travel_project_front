

const AdminContent =({children}) =>{
    return(
        <div className="flex">
            <div className="flex whitespace-normal h-svh w-1/12 bg-slate-500">
                <div className=" m-1 bg-lime-300">
                    <ul>드랍더 비트
                        <li>헉</li>
                        <li>헉</li>
                        <li>헉</li>
                    </ul>

                    <ul>드랍더 비트
                        <li>헉</li>
                        <li>헉</li>
                        <li>헉</li>
                    </ul>
                </div>
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

export default AdminContent;