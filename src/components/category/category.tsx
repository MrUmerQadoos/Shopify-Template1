"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

const categories = [
  { name: "Jackets", stock: 11 },
  { name: "Glasses", stock: 5 },
  { name: "Tops", stock: 10 },
  { name: "New arrivals", stock: 12 },
  { name: "Jackets", stock: 11 },
  { name: "Glasses", stock: 5 },
  { name: "Tops", stock: 10 },
  { name: "New arrivals", stock: 12 },
];

const Categories: React.FC = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: "0", // Remove centerPadding
    arrows: false,
    focusOnSelect: true,
  };

  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-16 py-8 bg-white">
      <Slider {...settings}>
        {categories.map((category, index) => (
          <div
            key={index}
            className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/4 px-2" // Add responsive width and padding
          >
            <div className="mx-3 cursor-pointer py-2 bg-[#f5f8f5] transition-transform hover:scale-105">
              <div className="mx-auto w-250 h-250">
                <Image
                  src="/Slider1.png"
                  alt={category.name}
                  width={250}
                  height={250}
                  className="object-center"
                />
              </div>
            </div>
            <div className="mt-2 px-2">
              {category.name} {category.stock}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Categories;
