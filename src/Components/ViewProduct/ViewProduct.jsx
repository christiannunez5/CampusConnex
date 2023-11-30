
import { BiExit } from "react-icons/bi";

export const ViewProduct = ({bookImg, bookName, bookPrice, handleQuickView}) => {
    return (
        <div className="fixed h-screen w-screen flex items-center justify-center z-0 " id="view-product-container">

            <div className="w-8/12 h-0 border-2 border-secondary-1 relative flex p-4 gap-4 bg-primary opacity-0" id="product-item">

                <div className="w-full h-full bg-slate-600">
                        <img 
                        src={bookImg} alt="" 
                        className="h-full w-full"
                        />
                </div>

                <div className="w-full flex flex-col gap-11 relative">

                    <div className="flex flex-col gap-2 mr-10 font-extralight">
                        <p className="text-3xl font-light">{bookName}</p>
                        <p className="text-xl">{bookPrice}</p>
                    </div>

                    <div className="flex flex-col text-black">
                        <label htmlFor="" className="text-black font-extralight">Quanity</label>
                        <input type="number" id="quantity" name="quantity" 
                        min="1" max="100" 
                        step="1" className="w-20 h-12 pl-4 outline-secondary-1 border border-black"/>
                    </div>

                    <div className="w-full bg-secondary-1 text-primary mx-auto p-2 text-center cursor-pointer">
                        <p>Add to cart</p>
                    </div>

                    <div className="absolute right-0" onClick={handleQuickView}>
                        <BiExit className="text-2xl cursor-pointer text-black"></BiExit>
                    </div>

                </div>
            </div>
        </div>

    )
}