import { FaChevronRight } from "react-icons/fa";

export const ViewCart = () => {
    
    const handleCart = () => {
        const cartContainer = document.querySelector("#view-cart-container");
        const viewCart = document.querySelector("#view-cart")
        viewCart.classList.toggle("slide-left")
        cartContainer.classList.toggle("cart-container-extended");
    }


    return (
        <div id="view-cart-container" className="fixed w-screen font-secondary flex justify-end z-50 h-0">

            <div id="view-cart" className="border border-black h-screen bg-white translate-x-full">

                <div className="w-full h-16 bg-secondary-1 text-primary flex items-center relative justify-center">
                    <FaChevronRight className="absolute left-7 text-base cursor-pointer" onClick={handleCart}/>
                    <h1 className="text-lg font-secondary font-light">Cart</h1>
                </div>

                <div className="b" id="cart-center">
                   <p>hello</p>
                   <p>hello</p>
                </div>

                <div className="w-full h-20 border-t-2 absolute bottom-0 flex items-center justify-center">
                    
                    <div className="w-60 bg-secondary-1 text-center p-1 cursor-pointer">
                        <h1 className="text-primary">View Cart</h1>
                    </div>

                </div>

            </div>
        </div>
    )
}