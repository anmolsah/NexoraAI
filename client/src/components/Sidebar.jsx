import { Protect, useClerk, useUser } from "@clerk/clerk-react";
import {
  Eraser,
  FileText,
  Hash,
  Home,
  Image,
  LogOut,
  Scissors,
  SquarePen,
  User,
} from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/ai", label: "Dashboard", Icon: Home },
  { to: "/ai/write-article", label: "Write Article", Icon: SquarePen },
  { to: "/ai/blog-titles", label: "Blog Titles", Icon: Hash },
  { path: "/ai/generate-images", label: "Generate Images", Icon: Image },
  { path: "/ai/remove-background", label: "Remove Background", Icon: Eraser },
  { path: "/ai/remove-object", label: "Remove Objects", Icon: Scissors },
  { path: "/ai/review-resume", label: "Review Resume", Icon: FileText },
  { path: "/ai/community", label: "Community", Icon: User },
];

const Sidebar = ({ sidebar, setSidebar }) => {
  const { user } = useUser();
  const { signOut, openUserProfile } = useClerk();
  return (
    <div
      className={`w-60 bg-white border-r border-gray-200 flex flex-col justify-between items-center max-sm:absolute top-14 bottom-0 ${
        sidebar ? "translate-x-0" : `max-sm:-translate-x-full`
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="my-7 w-full">
        <img
          src={user.imageUrl}
          className="w-13 rounded-full mx-auto"
          alt="user_avatar"
        />
        <h1 className="mt-1 text-center">{user.fullName}</h1>
        <div className="px-6 mt-5 text-sm text-gary-600 font-medium">
          {/* {navItems.map((to, label, Icon) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/ai"}
              onClick={() => setSidebar(false)}
              className={({ isActive }) =>
                `px-3.5 py-2.5 flex items-center gap-3 rounded ${
                  isActive
                    ? "bg-gradient-to-right from-[#3C81F6] TO-[#9234EA] text-white"
                    : ""
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon className={`w-4 h-4 ${isActive ? "text-white" : ""}`} />
                  {label}
                </>
              )}
            </NavLink>
          ))} */}
          {navItems.map(({ to, path, label, Icon }, index) => (
            <NavLink
              key={index}
              to={to || path}
              end={to === "/ai"}
              onClick={() => setSidebar(false)}
              className={({ isActive }) =>
                `px-3.5 py-2.5 flex items-center gap-3 rounded ${
                  isActive
                    ? "bg-gradient-to-r from-[#3C81F6] to-[#9234EA] text-white"
                    : ""
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon className={`w-4 h-4 ${isActive ? "text-white" : ""}`} />
                  {label}
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="w-full border-t border-gray-200 p-4 px-7 flex items-center justify-between">
        <div
          className="flex gap-2 items-center cursor-pointer"
          onClick={openUserProfile}
        >
          <img src={user.imageUrl} className="w-8 rounded-full" alt="" />
          <div>
            <h1 className="text-sm font-medium">{user.fullName}</h1>
            <p className="text-sm text-gray-500">
              <Protect plan="pro" fallback="Free">
                Pro
              </Protect>{" "}
              Plan
            </p>
          </div>
        </div>
        <LogOut
          onClick={signOut}
          className="w-5 text-gray-400 hover:text-gray-700 transition cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Sidebar;
