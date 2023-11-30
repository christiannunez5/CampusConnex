import { AiOutlineMessage } from "react-icons/ai";

export const Message = () => {
    return (
        <div id="message-container" className="fixed bg-secondary-1 h-12 w-12 rounded-full cursor-pointer bottom-5 right-4 flex items-center justify-center z-10 border-2 border-white
        md:h-16 md:w-16">
            <AiOutlineMessage id="message-icon" className="h-6 w-6
            md:w-8 md:h-8"></AiOutlineMessage>
        </div>
    )
}