import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="px-4 sm:px-20 xl:px-32 relative inline-flex flex-col w-full justify-center bg-[url(/background.jpg)] bg-cover bg-no-repeat min-h-screen">
      <div className="text-center mb-6">
        <h1 className="text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-semibold mx-auto leading-[1.2]">
          Create amazing content with <br />
          <span className="text-[#173054]">AI Tools</span>
        </h1>
        <p className="mt-4 max-w-xs sm:max-w-lg 2xl:max-w-xl m-auto max-sm:text-xs text-gray-700">
          Transform your content creation with our suite of preium AI tools.
          Write articles, generate images, and enhance workflow.
        </p>
      </div>

      <div
        onClick={() => navigate("/ai")}
        className="flex flex-wrap justify-center gap-4 text-sm max-sm:text-xs"
      >
        <button className="bg-[#173054] text-white px-10 py-3 rounded-lg hover:scale-102 active:scale-95 transition cursor-pointer">
          Start Creating now
        </button>
        <button className="bg-white px-10 py-3 rounded-lg border border-gray-400 hover:scale-102 active:scale-95 transition cursor-pointer">
          Watch Demo
        </button>
      </div>
      <div className="flex items-center gap-4 mt-8 mx-auto text-gray-700">
        <img src={assets.group} className="h-8" /> Trusted by 20k+ people
      </div>
    </div>
  );
};

export default Hero;
