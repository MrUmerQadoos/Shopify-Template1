import React from "react";
import { Button } from "@/components/ui/button";

interface ContentProps {
  heading: string;
  text: string;
  buttonText: string;
}

const Content: React.FC<ContentProps> = ({ heading, text, buttonText }) => {
  return (
    <div className="p-4 flex flex-col gap-y-7 text-left">
      <h1
        className="text-black leading-8 text-3xl md:text-4xl lg:text-5xl font-bold"
        style={{ whiteSpace: "pre-line" }}
      >
        {heading.replace(/<br>/g, "\n")}
      </h1>
      <div>
        <p className="text-gray-500 font-light leading-tight text-[14px] md:text-xl lg:text-2xl">
          {text}
        </p>
      </div>
      <div>
        <Button className="px-8 py-6 ">{buttonText}</Button>
      </div>
    </div>
  );
};

export default Content;
