import Aboutimg from '../img/about.jpg'

export default function Skills(){
    return(
        <>
        <div id="about" className="flex justify-evenly sm:flex-row sm:px-20 items-center flex-col-reverse ">
            <div className="w-1/2 mt-10 sm:mt-0 sm:p-10 p-0 mb-10 sm:mb-0">
                <span className="font-bold text-2xl">Skills</span>
                <div className='sm:p-4 p-0'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptate consequuntur cupiditate accusantium earum atque autem, tempore delectus ex cum et quos possimus velit dolore ratione sapiente consectetur commodi. Libero?
                </div>
            </div>
            <div className="w-1/2 flex justify-center items-center">
                <img className="w-72 rounded-lg object-cover" src={Aboutimg} />
            </div>
        </div>
        </>
    )
}