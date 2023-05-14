

export default function Project(){
    return(
        <>
        <div className="w-full py-20 flex flex-col items-center bg-emerald-500">
            <div className="font-bold text-3xl text-center">My Project</div>
            <div className="flex justify-center flex-wrap w-full sm:w-3/4 my-20">
                <div className="w-80 shadow-[10px_10px] p-6 rounded-md bg-white m-3">
                    <img src="https://wallup.net/wp-content/uploads/2018/03/17/540089-programmers-AutoHotkey-code-programming-laptop-ThinkPad.jpg" alt="Thumb" className="w-full h-40 rounded-md object-cover" />
                    <h2 className="font-bold text-lg my-4">Project 1</h2>
                    <a className="w-full block text-center py-1 text-white rounded-sm bg-emerald-600" href="#">Open Project</a>
                </div>
                <div className="w-80 shadow-[10px_10px] p-6 rounded-md bg-white m-3">
                    <img src="https://wallup.net/wp-content/uploads/2018/03/17/540089-programmers-AutoHotkey-code-programming-laptop-ThinkPad.jpg" alt="Thumb" className="w-full h-40 rounded-md object-cover" />
                    <h2 className="font-bold text-lg my-4">Project 1</h2>
                    <a className="w-full block text-center py-1 text-white rounded-sm bg-emerald-600" href="#">Open Project</a>
                </div>
                <div className="w-80 shadow-[10px_10px] p-6 rounded-md bg-white m-3">
                    <img src="https://wallup.net/wp-content/uploads/2018/03/17/540089-programmers-AutoHotkey-code-programming-laptop-ThinkPad.jpg" alt="Thumb" className="w-full h-40 rounded-md object-cover" />
                    <h2 className="font-bold text-lg my-4">Project 1</h2>
                    <a className="w-full block text-center py-1 text-white rounded-sm bg-emerald-600" href="#">Open Project</a>
                </div>
            </div>
        </div>
        </>
    )
}