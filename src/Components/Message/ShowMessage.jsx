import { useState } from "react";
import { IoSend } from "react-icons/io5";

export const ShowMessage = ({handleMessage, currentTime}) => {

    

    return (
        <div className="fixed right-0 bottom-0 z-30 w-full h-0 opacity-0 flex flex-col
        sm:w-320" id="show-message">

            <div className="h-20 w-full bg-secondary-1 text-primary p-4 relative">
                <div className="w-full relative">
                    <p className="font-primary">CampusConnex</p>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <p className="font-extralight text-sm">We’ll reply as soon as we can</p>
                    </div>
                    <p className="absolute top-0 right-0 cursor-pointer" onClick={handleMessage}>X</p>
                </div>
            </div>

            <div className="h-full bg-secondary-3 p-2" id="show-message-center">
                
                <div className="w-full h-full">

                    <div id="time-now" className="h-6 w-12 mx-auto text-center bg-slate-400 text-white rounded-lg grid place-content-center mb-2">
                        <p className="text-xs font-light">{currentTime}</p>
                    </div>

                    <div className="w-full border border-black inline-flex flex-col gap-2 h-full overflow-y-scroll" id="messages">

                        <div className="flex justify-end items-end" id="user-message">
                            <p className="bg-red-400 inline-block h-inherit py-2 px-6 rounded-2xl">hello</p>
                        </div>

                        <div className="flex items-start" id="computer-message">
                            <p className="bg-red-400 inline-block h-inherit py-2 px-6 rounded-2xl">hi</p>
                        </div>

                        <div className="flex justify-end items-end" id="user-message">
                            <p className="bg-red-400  inline-block h-inherit py-2 px-6 rounded-2xl">nigagasdasdsad</p>
                        </div>

                    </div>

                </div>  


            </div>

            <div className="h-20 w-full bg-primary flex items-center justify-center p-4 gap-2">
                <input type="text" name="" id="" placeholder="Type a message"
                className="outline-none h-9 bg-slate-100 w-full px-3 text-black font-light text-sm rounded-xl"/>

                <div className="h-5 w-5 grid place-content-center cursor-pointer">
                    <IoSend className="text-gray-600 h"></IoSend>
                </div>
            </div>
        </div>
    )
}