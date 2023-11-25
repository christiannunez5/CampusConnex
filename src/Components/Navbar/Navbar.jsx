import { LuShoppingCart } from "react-icons/lu";
import { IoPersonSharp } from "react-icons/io5";
import { NavRight } from "./NavRight";
import { NavRightItem } from "./NavRightItem";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";

export const Navbar = () => {
    const [cart, setCart] = useState(0);
    return (
        <div id="navbar-container" className="w-full bg-primary flex justify-between p-4 items-center">
            
            <div id="nav-left" className="">
                <div id="title-section" className="flex border-4 border-secondary-1 -tracking-wider">
                    
                    <div className="bg-secondary-1 px-2 text-primary font-normal text-base sm:text-lg" >
                        <h1>FLAMINGO.</h1>
                    </div>

                    <div className=" text-secondary-1 cursor-pointer hover:bg-secondary-1
                     hover:text-primary font-light text-sm flex items-center justify-center px-2">
                        <h1>PUBLISHERS</h1>
                    </div>

                </div>
            </div>

            <NavRight>

                <NavRightItem name="Bookstore"></NavRightItem>
                <NavRightItem name="about"></NavRightItem>
                <NavRightItem name="contact"></NavRightItem>
                <NavRightItem name="login">
                    <IoPersonSharp></IoPersonSharp>
                </NavRightItem>

                
                <li className="flex items-center justify-center cursor-pointer relative pr-3 hover:brightness-150 text-secondary-1">
                    <p className="absolute right-0 top-0">{cart}</p>
                    <LuShoppingCart></LuShoppingCart>
                </li>

                <IoMenu className="text-secondary-1 cursor-pointer hover:brightness-150 sm:hidden"></IoMenu>
            </NavRight>
           

        </div>
    )
}