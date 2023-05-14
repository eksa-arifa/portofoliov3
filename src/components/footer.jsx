import FeatherIcon from "feather-icons-react"




export default function Footer(){
    return(
        <>
        <footer className="w-full flex flex-col pt-20 items-center bg-emerald-600">
            <div className="flex items-center py-20">
                <a className="mx-4 hover:bg-slate-500 p-3 bg-white rounded-full" href="#"><FeatherIcon icon="instagram"/></a>
                <a className="mx-4 hover:bg-slate-500 p-3 bg-white rounded-full" href="#"><FeatherIcon icon="github"/></a>
            </div>
            <div className="text-xl text-center">
                "Perjalanan panjang dimulai dari satu langkah kecil"
            </div>
            <div className="flex font-bold py-10">Created with <FeatherIcon className="mx-2 text-red-600" fill="red" icon="heart"/> by Revvs</div>
        </footer>
        </>
    )
}