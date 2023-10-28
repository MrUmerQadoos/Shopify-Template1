"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Content from "../assets/Content";

const heroContent = [
  {
    heading: "New Collection",
    text: "Shop your Outfit style",
    buttonText: "Shop now",
    imageUrl: "/Slider1.png",
  },
  {
    heading: "Every Day<br>Fashion",
    text: "Chose the best. Choose us",
    buttonText: "Shop now",
    imageUrl: "/Slider2.png",
  },
  {
    heading: "The Perfect<br>Match",
    text: "Be Stylish, be our customer",
    buttonText: "Shop now",
    imageUrl: "/Slider3.png",
  },
];

const HeroSection: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    beforeChange: (current, next) => setActiveSlide(next),
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const nextSlide = (activeSlide + 1) % heroContent.length;
      setActiveSlide(nextSlide);
    }, 5000); // Change slide every 5 seconds

    return () => {
      clearInterval(timer); // Cleanup the timer when the component unmounts
    };
  }, [activeSlide]);

  return (
    <div className="relative h-screen w-screen bg-[#f5f5f5]">
      <div className="absolute bottom-0 left-0 pb-5 sm:pb-20 sm:pl-20 md:pl-10 lg:pl-10">
        <Content
          heading={heroContent[activeSlide].heading}
          text={heroContent[activeSlide].text}
          buttonText={heroContent[activeSlide].buttonText}
        />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Image
          src={heroContent[activeSlide].imageUrl}
          width={500}
          height={500}
          alt={heroContent[activeSlide].imageUrl}
          objectFit="contain"
        />
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 flex flex-col justify-between items-center space-y-5 right-4">
        {heroContent.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full bg-black mx-2 sm:mx-8 cursor-pointer ${
              index === activeSlide
                ? "bg-transparent border-black border-2 w-4 h-4"
                : ""
            }`}
            onClick={() => setActiveSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
