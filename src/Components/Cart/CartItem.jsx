import { useState } from "react";


export const CartItem = ({bookImg, bookName, bookPrice, quantity, handleQuantity}) => {

    return (

        <div className="grid grid-cols-2 py-4 w-full gap-2 border-b-2">

            <div className="w-full h-full bg-secondary-3">

                <img className="w-full h-full"
                src={bookImg} alt="" />
            </div>

            <div className="w-full  text-secondary-1 font-light h-full pr-2">

                <div className="w-full flex flex-col gap-2">

                   <div>
                        <p className="text-base">{bookName}</p>
                        <p className="text-sm">{bookPrice}</p>
                   </div>

                   <div className="w-16 border border-black h-5 relative grid place-content-center">
                        <p className="absolute left-0 bg-secondary-3 h-full w-4 grid place-content-center cursor-pointer" >-</p>
                        <p className="absolute right-0 bg-secondary-3 h-full w-4 grid place-content-center cursor-pointer" onClick={handleQuantity}>+</p>
                        <p className="text-sm">{quantity}</p>
                   </div>

                </div>


            </div>

        </div>
    )

    return quantity;
}