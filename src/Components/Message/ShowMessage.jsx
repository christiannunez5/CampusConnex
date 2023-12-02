import { useRef, useState } from "react";
import { IoSend } from "react-icons/io5";

export const ShowMessage = ({handleMessage}) => {

    const temp = useRef(null);
    const [count, setCount] = useState(1);
    const [userMessage, setUserMessage] = useState("");
    const [firstMessage, setFirstMessage] = useState("");
    const [messages, setMessages] = useState([])
    const [currentTime, setCurrentTime] = useState("");

    const getTime = () => {
        const Temp = new Date();
        let hours = Temp.getHours();
        if (hours >= 12)
        {
            hours = hours - 12;
        }   

        let minutes = Temp.getMinutes();
        if (minutes < 10)
            minutes = "0" + minutes;

        const time = hours  + " : " + minutes;
        return time;
    }
   

    const addMessage = () => {
        setCurrentTime(getTime())
        if (count === 1)
            setFirstMessage(userMessage)

        else
            setMessages([...messages, userMessage])

        setCount(prev => prev + 1)
        temp.current.value = "";
        
    }

    console.log(firstMessage)


    return (
        <div className="fixed right-0 bottom-0 z-30 w-full h-0 opacity-0
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

            <div className="bg-secondary-3 p-2" id="show-message-center">
                
                <div className="w-full  h-full">

                    {firstMessage != "" && 
                    <div id="time-now" className="h-6 w-12 mx-auto text-center bg-slate-400 text-white rounded-lg grid place-content-center mb-4">
                        <p className="text-xs font-light">{currentTime}</p>
                    </div>
                    }

                    <div className="w-full inline-flex flex-col gap-2 overflow-y-scroll h-full pb-10" id="tempMessages">

                        {firstMessage !== "" && 
                        <>
                        <MessageItem message={firstMessage} ></MessageItem>
                        <div className="flex items-start w-full" id="computer-message">
                            <p className="bg-slate-400 inline-block h-auto py-2 px-4 rounded-2xl max-w-95 font-light break-all">hi</p>
                        </div>
                        </>
                        }              

                        {messages.map((message, index) => {
                            return (
                                <MessageItem message={message} key={index}>

                                </MessageItem>
                            )
                        })}



                    </div>

                </div>  

            </div>

            <div className="h-20 w-full bg-primary flex items-center justify-center p-4 gap-2 absolute bottom">
                <input type="text" name="" id="" placeholder="Type a message" ref={temp}
                onChange={(e) => setUserMessage(e.target.value)}
                className="outline-none h-9 bg-slate-100 w-full px-3 text-black font-light text-sm rounded-xl"/>

                <div className="h-5 w-5 grid place-content-center cursor-pointer" onClick={addMessage}>
                    <IoSend className="text-gray-600 h"></IoSend>
                </div>
            </div>
        </div>
    )
}

export const MessageItem = ({message}) => {
    return (
        <div className="flex justify-end items-end" id="user-message">
            <p className="bg-red-400 inline-block h-inherit rounded-2xl py-2 px-4 break-all max-w-95 font-light">{message}</p>
        </div>
    )
}