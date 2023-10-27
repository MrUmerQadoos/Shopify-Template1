import React from "react";
import Link from "next/link";


const DropDownProduct = () => {
  return (
    <div className="fixed left-0 right-0 w-screen h-[80%] max-h-[490px] p-4 text-gray-500">
      <div className="flex py-5 px-8">
        {/* Section 1 */}
        <div className="flex-shrink-0 px-4 pr-20">
          <div className="font-medium text-black pl-4 py-2">Product pages</div>
          <ul className="space-y-1">
            <li className="hover:bg-gray-200 hover:text-black py-2 pl-4">
              <Link href="/Grid1column">Grid 1 column</Link>
            </li>
            <li className="hover:bg-gray-200 hover:text-black py-2 pl-4">
              <Link href="/Grid2columns">Grid 2 columns</Link>
            </li>
            <li className="hover:bg-gray-200 hover:text-black py-2 pl-4">
              <Link href="/GridMix">Grid mix</Link>
            </li>
            <li className="hover:bg-gray-200 hover:text-black py-2 pl-4">
              <Link href="/Slider1column">Slider 1 column</Link>
            </li>
            <li className="hover:bg-gray-200 hover:text-black py-2 pl-4">
              <Link href="/Slider2columns">Slider 2 columns</Link>
            </li>
            <li className="hover:bg-gray-200 hover:text-black py-2 pl-4">
              <Link href="/SliderVertical">Slider vertical</Link>
            </li>
            <li className="hover:bg-gray-200 hover:text-black py-2 pl-4">
              <Link href="/SliderFullWidth">Slider full-width</Link>
            </li>
            <li className="hover:bg-gray-200 hover:text-black py-2 pl-4">
              <Link href="/GiftCard">Gift card</Link>
            </li>
          </ul>
        </div>
        {/* Vertical Line Separator */}
        <div className="border-r border-gray-400 h-[390px]"></div>
        {/* Section 2 */}
        <div className="flex-shrink-0 px-4">
          <div className="font-medium text-black py-2 pl-4">Product pages</div>
          <ul className="space-y-1">
            <li className="hover:bg-gray-200 hover:text-black py-2 pl-4">
              <Link href="/ProductColorSwatch">Product color swatch</Link>
            </li>
            <li className="hover:bg-gray-200 hover:text-black py-2 pl-4">
              <Link href="/ProductImageSwatch">Product image swatch</Link>
            </li>
            <li className=" hover:bg-gray-200 hover:text-black py-2 pl-4">
              <Link href="/ProductDropdownSwatch">Product dropdown swatch</Link>
            </li>
            <li className="hover:bg-gray-200 hover:text-black py-2 pl-4">
              <Link href="/LightboxImage">Lightbox image</Link>
            </li>
            <li className="hover:bg-gray-200 hover:text-black py-2 pl-4">
              <Link href="/ProductVideo">Product video</Link>
            </li>
            
            <li className="hover:bg-gray-200 hover:text-black py-2 pl-4">
              <Link href="/Product3DARModels">Product 3D, AR models</Link>
            </li>
            <li className="hover:bg-gray-200 hover:text-black py-2 pl-4">
              <Link href="/CustomField">Custom field</Link>
            </li>
            <li className="hover:bg-gray-200 hover:text-black py-2 pl-4">
              <Link href="/CustomContent">Custom content</Link>
            </li>
          </ul>
        </div>
        {/* Vertical Line Separator */}
        <div className="border-r border-gray-400 h-[390px]"></div>
        {/* Section 3 */}
        <div className="flex-shrink-0 px-4">
          <div className="font-medium text-black py-2 pl-4">Product pages</div>
          <ul className="space-y-1">
            <li className="hover:bg-gray-200 hover:text-black py-2 pl-4">
              <Link href="/ShortDescription">Short description</Link>
            </li>
            <li className="hover:bg-gray-200 hover:text-black py-2 pl-4">
              <Link href="/RealTimeVisitors">Real-time visitors</Link>
            </li>
            <li className="hover:bg-gray-200 hover:text-black py-2 pl-4">
              <Link href="/DynamicCheckoutButton">Dynamic checkout button</Link>
            </li>
            <li className="hover:bg-gray-200 hover:text-black py-2 pl-4">
              <Link href="/TrustBadge">Trust badge</Link>
            </li>
            <li className="hover:bg-gray-200 hover:text-black py-2 pl-4">
              <Link href="/DeliveryInformation">Delivery information</Link>
            </li>
            <li className="hover:bg-gray-200 hover:text-black py-2 pl-4">
              <Link href="/CollapsibleTabsInformation">
                Collapsible tabs information
              </Link>
            </li>
            <li className="hover:bg-gray-200 hover:text-black py-2 pl-4">
              <Link href="/ProductTabsInformation">
                Product tabs information
              </Link>
            </li>
            <li className="hover:bg-gray-200 hover:text-black py-2 pl-4">
              <Link href="/StickyAddToCart">Sticky add to cart</Link>
            </li>
          </ul>
        </div>
        {/* Vertical Line Separator */}
        <div className="border-r border-gray-400 h-[390px]"></div>
        {/* Section 4 */}
        <div className="flex-shrink-0 px-4">
          <div className="font-medium text-black py-2 pl-4">Product pages</div>
          <ul className="space-y-1">
            <li className="hover:bg-gray-200 hover:text-black py-2 pl-4">
              <Link href="/ProductsRecentlyViewed">
                Products recently viewed
              </Link>
            </li>
            <li className="hover:bg-gray-200 hover:text-black py-2 pl-4">
              <Link href="/ProductRecommendations">
                Product recommendations
              </Link>
            </li>
            <li className="hover:bg-gray-200 hover:text-black py-2 pl-4">
              <Link href="/ProductComplementary">Product complementary</Link>
            </li>
            <li className="hover:bg-gray-200 hover:text-black py-2 pl-4">
              <Link href="/SingleProductLayout1">Single product layout 1</Link>
            </li>
            <li className="hover:bg-gray-200 hover:text-black py-2 pl-4">
              <Link href="/SingleProductLayout2">Single product layout 2</Link>
            </li>
            <li className="hover:bg-gray-200 hover:text-black py-2 pl-4">
              <Link href="/SingleProductLayout3">Single product layout 3</Link>
            </li>
            <li className="hover:bg-gray-200 hover:text-black py-2 pl-4">
              <Link href="/SingleProductLayout4">Single product layout 4</Link>
            </li>
            <li className="hover:bg-gray-200 hover:text-black py-2 pl-4">
              <Link href="/SingleProductLayout5">Single product layout 5</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DropDownProduct;
