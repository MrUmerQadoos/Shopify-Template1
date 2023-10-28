import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";

const MixandMatch: React.FC = () => {
  return (
    <div className="text-center bg-white py-24">
      <h1 className="text-3xl font-bold mb-4">Mix and Match</h1>
      <div className="flex flex-wrap justify-center pt-8 pb-12 ">
        {/* Box 1 */}
        <div className="p-4 text-center relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <div className="w-full h-[226px] bg-[#efefef]">
            <Image
              src="/your-image-url1.jpg"
              alt="Image 1"
              width={400}
              height={226}
              layout="responsive"
            />
          </div>
          <div className="mt-2 flex flex-col items-start">
            <p className="text-lg">OFFICE</p>
            <p>Time for a new start? We’re hiring.</p>
          </div>
        </div>

        {/* Box 2 */}
        <div className="p-4  text-center relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <div className="w-full h-[226px] bg-[#efefef]">
            <Image
              src="/your-image-url2.jpg"
              alt="Image 2"
              width={400}
              height={226}
              layout="responsive"
            />
          </div>
          <div className="mt-2 flex flex-col items-start">
            <p className="text-lg">OFFICE</p>
            <p>Time for a new start? We’re hiring.</p>
          </div>
        </div>

        {/* Box 3 */}
        <div className="p-4 text-center relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <div className="w-full h-[226px] bg-[#efefef]">
            <Image
              src="/your-image-url3.jpg"
              alt="Image 3"
              width={400}
              height={226}
              layout="responsive"
            />
          </div>
          <div className="mt-2 flex flex-col items-start">
            <p className="text-lg">OFFICE</p>
            <p>Time for a new start? We’re hiring.</p>
          </div>
        </div>
      </div>
      <Button
        variant={"outline"}
        size={"lg"}
        className=" py-4 px-4 border-b border-2 border-black"
      >
        MorePost
      </Button>
    </div>
  );
};

export default MixandMatch;
