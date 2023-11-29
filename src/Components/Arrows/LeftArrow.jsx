import { FaChevronLeft } from "react-icons/fa";

export const LeftArrow = ({ onClick, ...rest }) => {
    const {
        onMove,
        carouselState: { currentSlide, deviceType }
    } = rest;

    return (
        <div id="arrow-left" className="w-10 h-10 bg-black-rgba absolute left-0 flex items-center justify-center rounded-full cursor-pointer hover:bg-black" 
        onClick={() => onClick()}>
            <FaChevronLeft className="text-primary text-2xl"></FaChevronLeft>
        </div>
    )
}