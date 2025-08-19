import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="px-4 sm:px-20 xl:px-32 relative inline-flex flex-col w-full justify-center bg-[url(/background.jpg)] bg-cover bg-no-repeat min-h-screen">
      <div className="text-center mb-6">
        <h1 className="text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-semibold mx-auto leading-[1.2]">
          Create amazing content with{" "}
          <br />
          <span className="text-[#173054]">AI Tools</span>
        </h1>
        <p className="mt-4 max-w-xs sm:max-w-lg 2xl:max-w-xl m-auto max-sm:text-xs text-gary-700">
          Transform your content creation with our suite of preium AI tools.
          Write articles, generate images, and enhance workflow.
        </p>
      </div>
    </div>
  );
};

export default Hero;
