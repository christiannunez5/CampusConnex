import { FaChevronRight } from "react-icons/fa";

export const RightArrow = ({ onClick, ...rest }) => {
    const {
        onMove,
        carouselState: { currentSlide, deviceType }
    } = rest;

    return (
        
        <div className="absolute w-10 h-10 bg-black-rgba right-0 flex items-center justify-center rounded-full cursor-pointer hover:bg-black" 
            id="arrow-right" onClick={() => onClick()}>
            <FaChevronRight className="text-2xl text-primary"></FaChevronRight>
        </div>
    );
}

