

export default function Contact(){
    const ketikaClick = (e)=>{
        e.preventDefault()
    }

    return(
        <>
        <div className="w-full py-20 flex flex-col items-center">
            <div className="font-bold text-3xl">Contact Me</div>
            <form className="w-3/4 sm:w-5/12" action="">
                <div className="flex flex-col my-10">
                    <label className="text-lg">Name:</label>
                    <input type="text" id="nama" placeholder="john doe..." className="w-full py-4 px-5 mt-5 border-2 outline-none" />
                </div>
                <div className="flex flex-col my-10">
                    <label className="text-lg">Message:</label>
                    <textarea className="w-full p-5 mt-5 border-2 outline-none h-48 resize-none" placeholder="What's up bro.."></textarea>
                </div>
                <button className="py-2 px-6 text-white rounded-md bg-emerald-500" onClick={ketikaClick}>Send</button>
            </form>
        </div>
        </>
    )
}