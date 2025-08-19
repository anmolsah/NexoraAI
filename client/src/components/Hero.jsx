
import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="px-4 sm:px-20 xl:px-32 relative inline-flex flex-col w-full justify-center items-center bg-[url(/background.jpg)] bg-cover bg-no-repeat min-h-screen text-center">
      <div className="mb-6 max-w-3xl">
        <h1 className="text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-semibold leading-[1.2]">
          Create amazing content with
        </h1>

        {/* Logo below the heading */}
        <div className="mt-6">
          <img
            src={assets.logo2}
            alt="logo"
            className="w-52 sm:w-64 md:w-72 lg:w-80 2xl:w-[22rem] mx-auto"
          />
        </div>

        <p className="mt-6 text-base sm:text-lg md:text-xl">
          Transform your content creation with our suite of premium AI tools.
          Write articles, generate images, and enhance workflow.
        </p>
      </div>
    </div>
  );
};

export default Hero;

// import React from "react";
// import { assets } from "../assets/assets";

// const Hero = () => {
//   return (
//     <div className="px-4 sm:px-20 xl:px-32 relative inline-flex flex-col w-full justify-center bg-[url(/background.jpg)] bg-cover bg-no-repeat min-h-screen">
//       <div className="text-center mb-6">
//         <h1 className="text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-semibold mx-auto leading-[1.2]">
//           Create amazing content with{" "}
//           <br />
//           <img
//             src={assets.logo2}
//             alt="logo"
//             className="w-44 sm:w-52 cursor-pointer text-center"
//           />
//         </h1>
//         <p>
//           Transform your content creation with our suite of preium AI tools.
//           Write articles, generate images, and enhance workflow.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Hero;
