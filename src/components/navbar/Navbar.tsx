"use client";

import React, { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <nav className=" relative bg-white right-0 left-0 top-0 mx-auto w-full h-16 text-base flex items-center justify-between ">
      {/* <div className="container  w-full  flex items-center justify-between right-0 left-0  bg-slate-400"> */}
      {/* Responsive Toggle Menu */}
      <div className="lg:hidden pl-6 ">
        <button
          onClick={() => setMenuOpen(!isMenuOpen)}
          className="text-black text-2xl"
        >
          {isMenuOpen ? "✕" : "☰"} {/* Display X when the menu is open */}
        </button>
      </div>
      <div className="lg:flex hidden md:hidden sm:hidden items-start pl-6 md:pl-16 ">
        <ul className=" gap-x-1">
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
                  <NavigationMenuTrigger className="  font-medium text-[16px] ">
                    Product
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
                  <NavigationMenuTrigger className="  font-medium text-[16px] ">
                    Pages
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
      {/* Menu List at the Start (Hidden on SM and MD) */}

      {/* Logo in Center */}
      <div className="text-black text-2xl mr-14 flex items-center">
        <p>Your Brand</p>
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-4  pr-[60px]">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <FaSearch className="text-gray-900 text-lg w-[20px] h-[20px]  " />
            </TooltipTrigger>
            <TooltipContent>
              <p>Search</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <FaUser className="text-gray-900 text-lg w-[20px] h-[20px] hidden lg:flex" />
            </TooltipTrigger>
            <TooltipContent>
              <p>User</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <FaHeart className="text-gray-900 text-lg w-[20px] h-[20px] hidden lg:flex  " />
            </TooltipTrigger>
            <TooltipContent>
              <p>Heart</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <FaShoppingCart className="text-gray-900 text-lg w-[20px] h-[20px]" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Cart</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
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
          <div className="bg-white w-1/2  p-6 h-screen mt-12">
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
