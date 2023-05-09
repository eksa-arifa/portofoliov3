 import Profile from '../img/profile.jpeg'
 import FeatherIcon from 'feather-icons-react';
 import React from 'react';
 import TextTransition, { presets } from 'react-text-transition';

 
 
 
 export default function Home(){
    const TEXTS = ['Revvs', 'Programmer', 'Students'];
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
      const intervalId = setInterval(
        () => setIndex((index) => index + 1),
        1500, 
      );
      return () => clearTimeout(intervalId);
    }, []);

    return(
        <>
        <div id='home' className="w-full h-screen flex items-center justify-center bg-gradient-to-b from-emerald-950 via-emerald-700 to-emerald-400">
            <div className="flex md:flex-row flex-col justify-center items-center w-full md:w-3/4 h-full md:h-auto bg-white bg-opacity-40 backdrop-blur-md rounded-md mt-20 md:mt-0">
                <div className="p-10">
                    <img className="w-52 h-52 rounded-full border-4 border-emerald-600" src={Profile} alt="profile" />
                </div>
                <div className="p-10">
                    <div className="font-bold text-3xl text-emerald-600">Wellcome in my Perfect Sites</div>
                    <div className='text-3xl flex'><span className='mx-2'>I'm a</span> <span className='text-emerald-600'><TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition></span></div>
                    <ul className='flex my-8'>
                        <li className='mr-6'><a className='block p-3 rounded-md bg-emerald-600 text-white hover:text-emerald-500' href="#"><FeatherIcon icon="instagram"/></a></li>
                        <li className='mr-6'><a className='block p-3 rounded-md bg-emerald-600 text-white hover:text-emerald-500' href="#"><FeatherIcon icon="github"/></a></li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
 }