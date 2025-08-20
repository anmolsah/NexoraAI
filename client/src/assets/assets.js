import logo from "./logo.png";
import logo2 from "./logo2.svg"
import group from "./group.png";
import start_svg from "./star.svg";
import star_dull from "./star_dull_icon.svg";
import { SquarePen, Type, Image, Eraser, Scissors, FileText } from "lucide-react";



export const assets = {
    logo,
    logo2,
    group,
    start_svg,
    star_dull
    
}


export const AiToolsData = [
    {
        title: "AI Article Writer",
        description:
            "Generate high-quality, engaging articles on any topic with our AI writing technology.",
        Icon: SquarePen,
        bg: { from: "#3588F2", to: "#0BB0D7" },
        path: "/ai/write-article",
    },
    {
        title: "Blog Title Generator",
        description:
            "Create catchy, SEO-friendly blog titles that grab attention and boost clicks.",
        Icon: Type,
        bg: { from: "#F59E0B", to: "#F97316" },
        path: "/ai/blog-titles",
    },
    {
        title: "AI Image Generation",
        description:
            "Turn your imagination into reality by generating stunning AI-powered images.",
        Icon: Image,
        bg: { from: "#10B981", to: "#059669" },
        path: "/ai/generate-images",
    },
    {
        title: "Background Removal",
        description:
            "Instantly remove backgrounds from your photos with precision AI tools.",
        Icon: Eraser,
        bg: { from: "#EC4899", to: "#DB2777" },
        path: "/ai/remove-background",
    },
    {
        title: "Object Removal",
        description:
            "Easily erase unwanted objects from your images while keeping them natural.",
        Icon: Scissors,
        bg: { from: "#6366F1", to: "#4338CA" },
        path: "/ai/remove-object",
    },
    {
        title: "Resume Reviewer",
        description:
            "Get AI-powered feedback on your resume to improve clarity, structure, and impact.",
        Icon: FileText,
        bg: { from: "#14B8A6", to: "#0D9488" },
        path: "/ai/review-resume",
    },
];
