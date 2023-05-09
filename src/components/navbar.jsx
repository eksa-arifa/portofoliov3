import FeatherIcon from 'feather-icons-react';
import React from 'react';

function Navbar(){

    const [navbar, setNavbar] = React.useState(false)


    function eventHandler(){
        if(navbar){
            setNavbar(false)
        }else{
            setNavbar(true)
        }
    }

    return(
        <>
         <nav className="fixed w-full flex justify-between px-10 py-5 bg-white bg-opacity-60 backdrop-blur-sm shadow-sm items-center rounded-b-xl z-50">
            <div className="font-bold text-3xl text-emerald-600">Eks<span className="text-emerald-900">Revvs</span>.</div>
            <ul className={`${navbar ? 'flex' : 'hidden'}  fixed top-24 right-4 flex-col bg-slate-600 p-4 rounded-md sm:flex sm:static sm:bg-transparent sm:flex-row`}>
                <li className="mx-2"><a href="#" className="text-emerald-600 hover:text-cyan-500">Home</a></li>
                <li className="mx-2"><a href="#" className="text-emerald-600 hover:text-cyan-500">About</a></li>
                <li className="mx-2"><a href="#" className="text-emerald-600 hover:text-cyan-500">Skill</a></li>
                <li className="mx-2"><a href="#" className="text-emerald-600 hover:text-cyan-500">Project</a></li>
                <li className="mx-2"><a href="#" className="text-emerald-600 hover:text-cyan-500">Achievment</a></li>
                <li className="mx-2"><a href="#" className="text-emerald-600 hover:text-cyan-500">Contact</a></li>
            </ul>
            <a onClick={eventHandler} className='text-emerald-600 block sm:hidden p-2 rounded-md bg-slate-600 shadow-md'><FeatherIcon icon={`${navbar ? 'x' : 'menu'}`}/></a>
         </nav>
        </>
    )
}

export default Navbar