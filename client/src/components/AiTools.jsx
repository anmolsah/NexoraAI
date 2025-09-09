import React from "react";
import { AiToolsData } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

const AiTools = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  return (
    <div className="px-4 sm:px-20 xl:px-32 my-24">
      <div className="text-center">
        <h2 className="text-slate-800 text-[42px] font-semibold">
          Amazing AI Tools
        </h2>
        <p className="text-gray-500 max-w-lg mx-auto">
          From generating articles to creating images and editing media, our AI
          toolkit gives you everything you need to transform ideas into reality.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {AiToolsData.map((tool, index) => (
          <div
            className="p-8 rounded-lg bg-white shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
            key={index}
            onClick={() => user && navigate(tool.path)}
            style={{
              "--glow-from": tool.bg.from,
              "--glow-to": tool.bg.to,
            }}
          >
            <div
              className="w-16 h-16 p-4 text-white rounded-xl transition-all duration-300 group-hover:shadow-[0_0_30px] group-hover:shadow-[var(--glow-from)]"
              style={{
                background: `linear-gradient(to bottom, ${tool.bg.from}, ${tool.bg.to})`,
              }}
            >
              <tool.Icon className="w-full h-full" />
            </div>
            <h3 className="mt-6 mb-3 text-xl font-semibold text-slate-800">
              {tool.title}
            </h3>
            <p className="text-gray-500 text-sm max-w-[95%]">
              {tool.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AiTools;
