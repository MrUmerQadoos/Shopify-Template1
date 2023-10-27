import React from "react";
import Link from "next/link";

const DropDownShop = () => {
  return (
    <div className="fixed left-0 right-0 w-screen h-[80%] max-h-[490px] p-4 text-gray-500">
      <div className="flex py-5 px-8">
        {/* Section 1 */}
        <div className="flex-shrink-0 px-4 pr-20">
          <div className="font-medium text-black pl-4 py-2">Shop pages</div>
          <ul className="space-y-1">
            <li className="hover:bg-gray-200 hover:text-black py-2 pl-4">
              <Link href="/ShopPages/FilterLeftSidebar">
                Filter left sidebar
              </Link>
            </li>
            <li className="hover:bg-gray-200 hover:text-black py-2 pl-4">
              <Link href="/ShopPages/FilterRightSidebar">
                Filter right sidebar
              </Link>
            </li>
            <li className="hover:bg-gray-200 hover:text-black py-2 pl-4">
              <Link href="/ShopPages/CanvasSidebar">Canvas sidebar</Link>
            </li>
            <li className="hover:bg-gray-200 hover:text-black py-2 pl-4">
              <Link href="/ShopPages/HiddenSidebar">Hidden sidebar</Link>
            </li>
            <li className="hover:bg-gray-200 hover:text-black py-2 pl-4">
              <Link href="/ShopPages/FilterOS2">Filter OS 2.0</Link>
            </li>
          </ul>
        </div>
        {/* Vertical Line Separator */}
        <div className="border-r border-gray-400 h-[260px]"></div>
        {/* Section 2 */}
        <div className="flex-shrink-0 px-4 pr-20 ">
          <div className="font-medium text-black py-2 pl-4">Shop pages</div>
          <ul className="space-y-1">
            <li className="hover:bg-gray-200 hover:text-black py-2 pl-4">
              <Link href="/ShopPages/Grid2Columns">Grid 2 columns</Link>
            </li>
            <li className=" hover:bg-gray-200 hover:text-black py-2 pl-4">
              <Link href="/ShopPages/Grid3Columns">Grid 3 columns</Link>
            </li>
            <li className=" hover:bg-gray-200 hover:text-black py-2 pl-4">
              <Link href="/ShopPages/Grid4Columns">Grid 4 columns</Link>
            </li>
            <li className=" hover:bg-gray-200 hover:text-black py-2 pl-4">
              <Link href="/ShopPages/Grid5Columns">Grid 5 columns</Link>
            </li>
            <li className=" hover:bg-gray-200 hover:text-black py-2 pl-4">
              <Link href="/ShopPages/ListView">List view</Link>
            </li>
          </ul>
        </div>
        {/* Vertical Line Separator */}
        <div className="border-r border-gray-400 h-[260px]"></div>
        {/* Section 3 */}
        <div className="flex-shrink-0 px-4 pr-20">
          <div className="font-medium text-black py-2 pl-4">Shop pages</div>
          <ul className="space-y-1">
            <li className=" hover:bg-gray-200 hover:text-black py-2 pl-4">
              <Link href="/ShopPages/PaginationPage">Pagination page</Link>
            </li>
            <li className=" hover:bg-gray-200 hover:text-black py-2 pl-4">
              <Link href="/ShopPages/LoadMoreButton">Load more button</Link>
            </li>
            <li className=" hover:bg-gray-200 hover:text-black py-2 pl-4">
              <Link href="/ShopPages/InfiniteScrolling">
                Infinite scrolling
              </Link>
            </li>
            <li className=" hover:bg-gray-200 hover:text-black py-2 pl-4">
              <Link href="/ShopPages/AdvancedFilters">Advanced filters</Link>
            </li>
            <li className=" hover:bg-gray-200 hover:text-black py-2 pl-4">
              <Link href="/ShopPages/FullWidthLayout">Full-width layout</Link>
            </li>
          </ul>
        </div>
        {/* Vertical Line Separator */}
        <div className="border-r border-gray-400 h-[260px]"></div>
        {/* Section 4 */}
        <div className="flex-shrink-0 px-4 pr-20">
          <div className="font-medium text-black py-2 pl-4">Shop pages</div>
          <ul className="space-y-1">
            <li className=" hover:bg-gray-200 hover:text-black py-2 pl-4">
              <Link href="/ShopPages/CollectionsList">Collections list</Link>
            </li>
            <li className=" hover:bg-gray-200 hover:text-black py-2 pl-4">
              <Link href="/ShopPages/CustomContent">Custom content</Link>
            </li>
            <li className=" hover:bg-gray-200 hover:text-black py-2 pl-4">
              <Link href="/ShopPages/CustomHeaderBanner">
                Custom header banner
              </Link>
            </li>
            <li className=" hover:bg-gray-200 hover:text-black py-2 pl-4">
              <Link href="/ShopPages/CookiesLawInfo">Cookies law info</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DropDownShop;
