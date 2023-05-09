import Aboutimg from '../img/about.jpg'

export default function About(){
    return(
        <>
        <div id="about" className="flex justify-evenly flex-col sm:px-20 sm:flex-row py-20 items-center">
            <div className="w-1/2 flex justify-center items-center">
                <img className="w-72 rounded-lg object-cover" src={Aboutimg} />
            </div>
            <div className="w-1/2 mt-10 sm:mt-0">
                <span className="font-bold text-2xl">About Me</span>
                <div className="sm:p-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptate consequuntur cupiditate accusantium earum atque autem, tempore delectus ex cum et quos possimus velit dolore ratione sapiente consectetur commodi. Libero?
                </div>
            </div>
        </div>
        </>
    )
}