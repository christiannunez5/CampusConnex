import { FaChevronRight } from "react-icons/fa";

export const RightArrow = ({ onClick, ...rest }) => {
    const {
        onMove,
        carouselState: { currentSlide, deviceType }
    } = rest;

    return (
        
        <div className="w-10 h-10 bg-black absolute top-99px right-0 flex items-center justify-center rounded-full cursor-pointer hover:brightness-125" 
        id="arrow-right" onClick={() => onClick()}>
            <FaChevronRight className="text-2xl"></FaChevronRight>
        </div>
    );
}

