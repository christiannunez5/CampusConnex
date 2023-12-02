import { LuShoppingCart } from "react-icons/lu";
import { IoPersonSharp } from "react-icons/io5";
import { NavRight } from "./NavRight";
import { NavRightItem } from "./NavRightItem";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";

export const Navbar = ({cartNumber}) => {

    const handleCart = () => {
        const cartContainer = document.querySelector("#view-cart-container");
        const viewCart = document.querySelector("#view-cart")
        cartContainer.classList.toggle("cart-container-extended");
        viewCart.classList.toggle("slide-left")
    }

    
    return (
        <div id="navbar-container" className="relative w-11/12 bg-primary flex justify-between py-4 items-center m-auto
        md:py-8 sm:w-95 md:w-11/12">
            
            <div id="nav-left" className="">
                <div id="title-section" className="text-sm flex border-2 border-secondary-1 tracking-wide
                sm:text-base ">
                    
                    <div className="bg-secondary-1 text-primary font-extrabold px-3 py-1 font-primary
                      sm:font-bold sm:px-4 xl:px-10" >
                        <h1>CAMPUS</h1>
                    </div>

                    <div className=" text-secondary-1 cursor-pointer hover:bg-secondary-1
                     hover:text-primary font-light flex items-center justify-center px-3 py-1
                     sm:px-4 xl:px-10
                     ">
                        <h1>Connex</h1>
                    </div>

                </div>
            </div>

            <NavRight>

                <NavRightItem name="Bookstore"></NavRightItem>
                <NavRightItem name="about"></NavRightItem>
                <NavRightItem name="contact"></NavRightItem>
                <NavRightItem name="login">
                    <div className="bg-secondary-1 w-6 h-6 flex items-center justify-center rounded-full">
                        <IoPersonSharp className="text-primary"></IoPersonSharp>
                    </div>
                </NavRightItem>

                
                <li className="flex items-center justify-center cursor-pointer relative pr-3 hover:brightness-150 text-secondary-1" onClick={handleCart}>

                    <p className="absolute right-0 bottom-0 translate-y-2">{cartNumber}</p>

                    <LuShoppingCart className="text-2xl
                    md:text-3xl"></LuShoppingCart>
                </li>

                <IoMenu className="text-secondary-1 cursor-pointer hover:brightness-150 text-2xl md:hidden"></IoMenu>
            </NavRight>
           

        </div>
    )
}