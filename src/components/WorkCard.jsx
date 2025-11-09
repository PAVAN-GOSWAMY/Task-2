import React from "react";
import card1 from "../assets/Port-1.png";

const PortfolioHeader = () => {
  return (
    <div className="text-[#FFFFFF] flex flex-col items-center sm:items-start justify-center p-4 sm:p-6 max-w-7xl mx-auto sm:mx-0">
      <img
        src={card1}
        alt="Projects"
        className="w-[85%] sm:w-[90%] md:w-[95%] lg:w-full h-auto mb-6 transition-transform duration-300 hover:scale-105"
      />
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide px-2 sm:px-4">
        DESIGN <span className="font-bold">PORTFOLIO</span>
      </h1>
      <div className="flex gap-4 sm:gap-6 mt-2 text-sm sm:text-base md:text-lg tracking-wider text-[#FFFFFF] px-2 sm:px-4">
        <span>HTML</span>
        <span>CSS</span>
        <span>JAVASCRIPT</span>
      </div>
    </div>
  );
};

export default PortfolioHeader;

