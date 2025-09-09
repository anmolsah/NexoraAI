import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 py-8 w-full bg-white text-gray-600">
      <div className="flex flex-col items-center text-center gap-6 border-b border-gray-200 pb-8">
        <div>
          <img
            src={assets.logo2}
            alt="logo"
            className="h-16 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <p className="max-w-lg text-sm">
          Experience the power of AI. NexoraAI provides a suite of tools to
          transform your content creation process.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/anmolsah"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 transition-transform duration-300 transform hover:scale-125"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/anmol-sah-551083238/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-600 transition-transform duration-300 transform hover:scale-125"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
      <p className="pt-6 text-center text-sm pb-4">
        Copyright {new Date().getFullYear()} © NexoraAI. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
