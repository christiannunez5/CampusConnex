import { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { CartItem } from "./CartItem";

export const ViewCart = ({cartItems, handleQuantity, deleteCartItem}) => {

    const [total, setTotal] = useState("");
    
    const handleCart = () => {
        const cartContainer = document.querySelector("#view-cart-container");
        const viewCart = document.querySelector("#view-cart")
        viewCart.classList.toggle("slide-left")
        cartContainer.classList.toggle("cart-container-extended");
    }

    const getTotal = () => {
        setTotal("");
        cartItems.map((data, key) => {
            const bookPrice = data.price.substring(1);
            const bookSubTotal = eval(`${bookPrice} * ${data.quantity}`)
            setTotal(prev => eval(`${prev} + ${bookSubTotal}`))
    })

        return total;
    }

    const roundNumber = (stringNumber) => {
        const floatingNumber = parseFloat(stringNumber);
        const roundedNumber = parseFloat(floatingNumber.toFixed(2));
        return roundedNumber;
    }
    

    useEffect(() => {
        getTotal();
    },[cartItems])

   
    return (
        <div id="view-cart-container" className="fixed w-screen font-secondary flex justify-end z-50 h-0">

            <div id="view-cart" className=" h-screen bg-white translate-x-full">

                <div className="w-full h-20 bg-secondary-1 text-primary flex items-center relative justify-center">
                    <FaChevronRight className="absolute left-7 text-base cursor-pointer" onClick={handleCart}/>
                    <h1 className="text-2xl font-secondary font-light">Cart</h1>
                </div>

                {total !== "" ?
                <>
                <div className={total !== "" ? "p-6 relative flex flex-col gap-3" : "text-center"} id="cart-center">

                    <div className="w-full h-full overflow-y-scroll">

                        <div className="w-full flex flex-col overflow-x-hidden">

                            {cartItems.map((data, index) => {
                                return (
                                    <CartItem
                                        bookName={data.title}
                                        bookPrice={data.price}
                                        bookImg={data.image}
                                        quantity={data.quantity}
                                        handleQuantity={(e) => handleQuantity(e, index)}
                                        deleteCartItem={(e) => deleteCartItem(e, index)}
                                        // bookSubtotal={bookSubtotal}
                                    ></CartItem>
                                )
                            })}

                        </div>

                    </div>

                    <div className="w-full
                    md:text-3xl font-light">
                        <p className="">Subtotal</p>
                        <p>${roundNumber(total)}</p>
                    </div>

                </div>

                <div className="w-full h-13/100 border-t-2 absolute bottom-0 flex items-center justify-center">
                    
                    <div className="w-60 bg-secondary-1 text-center p-1 cursor-pointer">
                        <h1 className="text-primary">Checkout</h1>
                    </div>

                </div>
                </> : <h1 className=" h-full grid place-content-center
                md:text-2xl">Cart is Empty</h1>}
            </div>
            
        </div>
    )
}