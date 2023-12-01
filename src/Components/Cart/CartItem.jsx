import { FaTrashCan } from "react-icons/fa6";

export const CartItem = ({bookImg, bookName, bookPrice, quantity, handleQuantity, deleteCartItem}) => {

    return (

        <div className="grid grid-cols-2 py-4 w-full gap-2 border-b-2 relative overflow-x-hidden" id="cart-item">
            
            <div className="w-full h-full bg-secondary-3 relative cursor-pointer" id="cart-image">
                <img className="w-full h-full" 
                src={bookImg} alt="" />

                <div className="hidden absolute bottom-0 bg-black-rgba w-9 h-9 rounded-full items-center justify-center" id="delete-container" onClick={deleteCartItem}>
                    <FaTrashCan className="text-xl text-red-700 float-right"/>
                </div>

            </div>

            <div className="w-full  text-secondary-1 font-light h-full pr-2">

                <div className="w-full flex flex-col gap-2">

                   <div>
                        <p className="text-base">{bookName}</p>
                        <p className="text-sm">{bookPrice}</p>
                   </div>

                   <div className="w-16 border border-black h-5 relative grid place-content-center">
                        {quantity != 0 && <p className="absolute left-0 bg-secondary-3 h-full w-4 grid place-content-center cursor-pointer" onClick={handleQuantity}>-</p>}
                        <p className="absolute right-0 bg-secondary-3 h-full w-4 grid place-content-center cursor-pointer" onClick={handleQuantity}>+</p>
                        <p className="text-sm">{quantity}</p>
                   </div>

                </div>


            </div>

        </div>
    )

    return quantity;
}