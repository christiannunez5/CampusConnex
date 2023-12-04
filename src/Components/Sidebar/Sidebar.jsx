import { MdOutlineExitToApp } from "react-icons/md";

export const Sidebar = ({profileImg, username, handleSidebar}) => {

    return (

        <div className="transition-all opacity-0 duration-500 fixed w-screen h-screen bg-white z-50 translate-x-full" id="sidebar">
            
            <div className="absolute top-4 right-4 h-10 w-10 bg-secondary-1 rounded-full grid place-content-center cursor-pointer" onClick={handleSidebar}>
                <MdOutlineExitToApp className="text-2xl text-white"></MdOutlineExitToApp>
            </div>


            <div className="w-full flex justify-center mt-5">
                <div className="w-40 h-40 rounded-full border-4 border-secondary-1" id="profile">
                    <img src={profileImg} alt="" className="h-full w-full rounded-full"/>
                </div>
            </div>


            <div className="text-center w-full mt-4">
                <h1 className="text-3xl font-bold">{username}</h1>
            </div>

            <div className="w-full border border-black mt-20 bg-secondary-1 pb-60">
                <ul className="flex flex-col w-full text-white font-light">
                    <li className="grid place-content-center h-16 bg-secondary-1 border-b-2 cursor-pointer">About</li>
                    <li className="grid place-content-center h-16 bg-secondary-1 border-b-2 cursor-pointer">Login</li>
                    <li className="grid place-content-center h-16 bg-secondary-1 border-b-2 cursor-pointer">Bookstore</li>
                    <li className="grid place-content-center h-16 bg-secondary-1 border-b-2 cursor-pointer">Contact</li>
                    <li className="grid place-content-center h-16 bg-secondary-1 border-b-2 cursor-pointer">Register</li>
                </ul>
            </div>



        </div>
    )
}