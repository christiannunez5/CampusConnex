import { AiOutlineMessage } from "react-icons/ai";

export const Message = () => {
    return (
        <div id="message-container" className="fixed bg-secondary-1 h-16 w-16 rounded-full cursor-pointer bottom-5 right-10 flex items-center justify-center z-20">
            <AiOutlineMessage id="message-icon" className="w-8 h-8"></AiOutlineMessage>
        </div>
    )
}