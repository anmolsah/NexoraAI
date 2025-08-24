import logo from "./logo.png";
import logo2 from "./logo2.svg";
import group from "./group.png";
import start_svg from "./star.svg";
import star_dull from "./star_dull_icon.svg";
import ai_gen_img_1 from "./ai_gen_img_1.png";
import ai_gen_img_2 from "./ai_gen_img_2.png";
import ai_gen_img_3 from "./ai_gen_img_3.png";
import {
  SquarePen,
  Type,
  Image,
  Eraser,
  Scissors,
  FileText,
} from "lucide-react";

export const assets = {
  logo,
  logo2,
  group,
  start_svg,
  star_dull,
};

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

export const dummyCreationData = [
  {
    id: 12,
    user_id: "user_2yMX02PRbyMtQK6PebpjnxvRNIA",
    prompt:
      "Generate 5 catchy blog titles for a Travel blog focusing on budget travel tips.",
    content:
      "Here are some creative title options for a budget travel blog:\n\n**Catchy & Relatable:**\n- Wander More, Spend Less\n- Globe-Trotting on a Shoestring\n- The Frugal Explorer: Budget Travel Hacks\n\n**Playful & Creative:**\n- Jet Lag, Not Debt\n- Adventure Without the Price Tag",
    type: "blog-title",
    publish: false,
    likes: [],
    created_at: "2025-07-15T10:09:50.492Z",
    updated_at: "2025-07-15T10:09:50.492Z",
  },
  {
    id: 11,
    user_id: "user_2yMX02PRbyMtQK6PebpjnxvRNIA",
    prompt:
      "Generate blog titles for a Food blog about healthy recipes and nutrition.",
    content:
      "Here are some blog title ideas for a healthy food blog:\n\n**Direct & Informative:**\n- Everyday Healthy Recipes\n- Nutritious Bites: Simple Meals for Better Living\n\n**Creative & Fun:**\n- Eat Well, Feel Great\n- Flavor Meets Fitness\n- Green Plates & Good Vibes",
    type: "blog-title",
    publish: false,
    likes: [],
    created_at: "2025-07-15T09:08:10.450Z",
    updated_at: "2025-07-15T09:08:10.450Z",
  },
  {
    id: 10,
    user_id: "user_2yMX02PRbyMtQK6PebpjnxvRNIA",
    prompt:
      "Write a short article about How AI is Changing Digital Marketing (500–700 words).",
    content:
      "## How AI is Transforming Digital Marketing\n\nArtificial Intelligence (AI) has quickly become one of the most powerful forces shaping digital marketing. From personalized recommendations to automated ad targeting, AI is enabling businesses to connect with customers more effectively than ever.\n\n**1. Smarter Personalization**\nAI analyzes user behavior and purchase history to deliver highly tailored content and product recommendations. This level of personalization was once impossible at scale.\n\n**2. Automated Ad Campaigns**\nPlatforms like Google Ads and Facebook now leverage AI to automatically adjust bidding, targeting, and placement — maximizing ROI while reducing manual effort.\n\n**3. Chatbots & Customer Support**\nAI-powered chatbots can now resolve customer queries instantly, handle sales inquiries, and even recommend products, improving engagement 24/7.\n\n**4. Predictive Analytics**\nMarketers use AI tools to forecast customer behavior, spot trends, and identify high-value leads. This ensures campaigns are more data-driven and effective.\n\n**Conclusion**\nAI isn’t replacing marketers — it’s empowering them. By automating repetitive tasks and delivering actionable insights, AI frees up creative teams to focus on strategy, storytelling, and building stronger customer relationships.",
    type: "article",
    publish: false,
    likes: [],
    created_at: "2025-07-15T09:07:51.312Z",
    updated_at: "2025-07-15T09:07:51.312Z",
  },
];

export const dummyPublishedCreationData = [
  {
    id: 1,
    user_id: "user_2yMX02PRbyMtQK6PebpjnxvRNIA",
    prompt:
      "Generate an image of a futuristic city skyline at night glowing with neon lights in Cyberpunk style.",
    content: ai_gen_img_1,
    type: "image",
    publish: true,
    likes: [
      "user_2yMX02PRbyMtQK6PebpjnxvRNIA",
      "user_2yaW5EHzeDfQbXdAJWYFnZo2bje",
    ],
    created_at: "2025-06-19T09:02:25.035Z",
    updated_at: "2025-06-19T09:58:37.552Z",
  },
  {
    id: 2,
    user_id: "user_2yMX02PRbyMtQK6PebpjnxvRNIA",
    prompt:
      "Generate an image of a magical forest with glowing mushrooms and fairy lights in Ghibli style.",
    content: ai_gen_img_2,
    type: "image",
    publish: true,
    likes: [
      "user_2yMX02PRbyMtQK6PebpjnxvRNIA",
      "user_2yaW5EHzeDfQbXdAJWYFnZo2bje",
    ],
    created_at: "2025-06-19T08:16:54.614Z",
    updated_at: "2025-06-19T09:58:40.072Z",
  },
  {
    id: 3,
    user_id: "user_2yaW5EHzeDfQbXdAJWYFnZo2bje",
    prompt:
      "Generate an image of a warrior standing on a cliff with a sword, sunset background in Fantasy style.",
    content: ai_gen_img_3,
    type: "image",
    publish: true,
    likes: ["user_2yaW5EHzeDfQbXdAJWYFnZo2bje"],
    created_at: "2025-06-23T11:29:23.351Z",
    updated_at: "2025-06-23T11:29:44.434Z",
  },
];
