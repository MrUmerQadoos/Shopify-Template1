"use client";

import React from "react";
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
import { FaFacebook, FaInstagram } from "react-icons/fa";

const NavTopBar = () => {
  return (
    <div className="px-12 py-1 lg:flex hidden md:hidden sm:hidden  bg-white 14 border-b border-gray-300  items-center justify-between text-sm">
      <div className="  flex items-center">
        <div className="flex items-center space-x-2 ml-4">
          <FaFacebook className="text-blue-700 text-lg" />
          <span>300k Followers</span>
        </div>
        <div className="flex items-center space-x-2 ml-4">
          <FaInstagram className="text-purple-700 text-lg" />
          <span>100k Followers</span>
        </div>
      </div>

      <div className="text-center">
        <p className=" leading-5">
          Open Doors To A World Of Fashion |
          <span className="underline"> Discover More</span>
        </p>
      </div>

      <div className="flex items-center">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>English</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
                <NavigationMenuLink>Link 2</NavigationMenuLink>
                <NavigationMenuLink>Link 3</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>USD</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
                <NavigationMenuLink>Link 2</NavigationMenuLink>
                <NavigationMenuLink>Link 3</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default NavTopBar;
