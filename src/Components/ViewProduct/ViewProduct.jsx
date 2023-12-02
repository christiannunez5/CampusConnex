
import { BiExit } from "react-icons/bi";

export const ViewProduct = ({bookImg, bookName, bookPrice, handleQuickView, addCart}) => {
    return (

        <div className="fixed h-screen w-screen flex items-center justify-center z-0" id="view-product-container">

            <div className="w-full h-0 border-2 border-secondary-1 relative flex p-4 gap-4 bg-primary opacity-0
            md:w-8/12" id="product-item">
            
                <div className="w-full h-full bg-slate-white">
                        <img 
                        src={bookImg} alt="" 
                        className="h-full w-full"
                        />
                </div>

                <div className="w-full flex flex-col gap-11 relative">

                    <div className="flex flex-col gap-2 mr-10 font-extralight">
                        <p className="text-base
                        sm:text-xl lg:text-3xl font-light">{bookName}</p>
                        <p className="text-base
                        sm:text-xl">{bookPrice}</p>
                    </div>

                    <div className="w-full bg-secondary-1 text-primary font-extralight mx-auto text-center cursor-pointer text-sm py-2
                    md:text-base" onClick={addCart}>
                        <p>Add to cart</p>
                    </div>

                    <div className="absolute right-0" onClick={handleQuickView}>
                        <BiExit className="text-lg
                        sm:text-2xl cursor-pointer text-black"></BiExit>
                    </div>

                </div>
            </div>
        </div>

    )
}