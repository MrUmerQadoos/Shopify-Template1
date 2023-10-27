"use client";

import React, { useState } from "react";

import { FaSearch, FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import DropDownPages from "../dropdown/DropDownPages";
import DropDownProduct from "../dropdown/DropDownProduct";
import DropDownShop from "../dropdown/DropDownShop";
import Tooltip from "../toolTip";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    // <nav className=" relative bg-white right-0 left-0 top-0 mx-auto w-full h-16 text-base flex items-center justify-between ">
    <nav className="bg-white py-3 lg:px-14 px-4    border-b border-gray-300 flex items-center justify-between">
      {/* <div className="container  w-full  flex items-center justify-between right-0 left-0  bg-slate-400"> */}
      {/* Responsive Toggle Menu */}
      <div className="lg:hidden  ">
        <button
          onClick={() => setMenuOpen(!isMenuOpen)}
          className="text-black text-2xl"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>
      {/* <div className="lg:flex hidden md:hidden sm:hidden items-start pl-6 md:pl-16 ">
       */}
      <div className=" lg:flex hidden md:hidden sm:hidden items-center">
        <ul className="">
          <li className="lg:inline-block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="  font-medium text-[16px] ">
                    Home
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink>Link</NavigationMenuLink>
                    <NavigationMenuLink>Link 2</NavigationMenuLink>
                    <NavigationMenuLink>Link 3</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </li>
          <li className="lg:inline-block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="  font-medium text-[16px]  ">
                    Shop
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="right-0 left-0">
                    <DropDownShop />
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </li>
          <li className="lg:inline-block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-medium text-[16px] ">
                    Product
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="right-0 left-0">
                    <DropDownProduct />
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </li>
          <li className="lg:inline-block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="  font-medium text-[16px] ">
                    Pages
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <DropDownPages />
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </li>
          <li className="lg:inline-block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="  font-medium text-[16px] ">
                    FoxKit
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink>Link</NavigationMenuLink>
                    <NavigationMenuLink>Link 2</NavigationMenuLink>
                    <NavigationMenuLink>Link 3</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </li>
        </ul>
      </div>

      {/* Logo in Center */}
      <div className="text-center lg:pr-28">
        <p className="text-lg font-semibold">LOGO</p>
      </div>

      {/* Icons */}
      {/* <div className="flex items-center space-x-4  pr-[60px]"> */}
      <div className="flex items-center lg:space-x-4 space-x-1  lg:mr-8 md:mr-6 mr-4">
        {/* <TooltipItem position="bottom" tooltipsText="ToolTip Text" >
          <FaSearch className="text-gray-900 text-lg w-[20px] h-[20px]  " />
        </TooltipItem> */}

        <Tooltip message="Search">
          <FaSearch className="text-gray-900 text-lg w-[20px] h-[20px]  " />
        </Tooltip>

        <Tooltip message="User">
          <FaUser className="text-gray-900 text-lg w-[20px] h-[20px] hidden lg:flex" />
        </Tooltip>

        <Tooltip message="Heart">
          <FaHeart className="text-gray-900 text-lg w-[20px] h-[20px] hidden lg:flex  " />
        </Tooltip>
        <Tooltip message="Cart">
          <FaShoppingCart className="text-gray-900 text-lg w-[20px] h-[20px]" />
        </Tooltip>

        {/* <FaSearch className="text-gray-900 text-lg w-[20px] h-[20px]  " /> */}
        {/* <FaUser className="text-gray-900 text-lg w-[20px] h-[20px] hidden lg:flex" /> */}
        {/* <FaHeart className="text-gray-900 text-lg w-[20px] h-[20px] hidden lg:flex  " /> */}
        {/* <FaShoppingCart className="text-gray-900 text-lg w-[20px] h-[20px]" /> */}
      </div>
      {/* </div> */}

      {/* Responsive Menu Overlay */}
      {isMenuOpen && (
        <div
          className={`-z-10 ${
            isMenuOpen ? "block" : "hidden"
          } lg:hidden fixed top-0 left-0 w-full h-screen bg-black bg-opacity-30`}
        >
          <div className="bg-white md:w-1/2 w-11/12 p-6 h-screen mt-12">
            {/* Responsive Menu Items with Arrow Icons */}
            <ul className="space-y-2">
              <li className="flex justify-between">
                <a href="#">Home</a>
                <span className="arrow-icon">&#9654;</span>
              </li>
              <li className="flex justify-between">
                <a href="#">Shop</a>
                <span className="arrow-icon">&#9654;</span>
              </li>
              <li className="flex justify-between">
                <a href="#">Products</a>
                <span className="arrow-icon">&#9654;</span>
              </li>
              <li className="flex justify-between">
                <a href="#">Pages</a>
                <span className="arrow-icon">&#9654;</span>
              </li>
              <li className="flex justify-between">
                <a href="#">FoxKit</a>
                <span className="arrow-icon">&#9654;</span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
