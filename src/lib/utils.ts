import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
declare type UserType = "creator" | "editor" | "viewer";
declare type User = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  color: string;
  userType?: UserType;
};
export const dateConverter = (timestamp: string): string => {
  const timestampNum = Math.round(new Date(timestamp).getTime() / 1000);
  const date: Date = new Date(timestampNum * 1000);
  const now: Date = new Date();

  const diff: number = now.getTime() - date.getTime();
  const diffInSeconds: number = diff / 1000;
  const diffInMinutes: number = diffInSeconds / 60;
  const diffInHours: number = diffInMinutes / 60;
  const diffInDays: number = diffInHours / 24;

  switch (true) {
    case diffInDays > 7:
      return `${Math.floor(diffInDays / 7)} weeks ago`;
    case diffInDays >= 1 && diffInDays <= 7:
      return `${Math.floor(diffInDays)} days ago`;
    case diffInHours >= 1:
      return `${Math.floor(diffInHours)} hours ago`;
    case diffInMinutes >= 1:
      return `${Math.floor(diffInMinutes)} minutes ago`;
    default:
      return "Just now";
  }
};

export const parseStringify = (value: any) => JSON.parse(JSON.stringify(value));

export const getAccessType = (userType: UserType) => {
  switch (userType) {
    case "creator":
      return ["room:write"];
    case "editor":
      return ["room:write"];
    case "viewer":
      return ["room:read", "room:presence:write"];
    default:
      return ["room:read", "room:presence:write"];
  }
};

export function getRandomColor() {
  const avoidColors = ["#000000", "#FFFFFF", "#8B4513"]; // Black, White, Brown in hex format

  let randomColor;
  do {
    // Generate random RGB values
    const r = Math.floor(Math.random() * 256); // Random number between 0-255
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    // Convert RGB to hex format
    randomColor = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
  } while (avoidColors.includes(randomColor));

  return randomColor;
}

export const brightColors = [
  "#2E8B57", // Darker Neon Green
  "#FF6EB4", // Darker Neon Pink
  "#00CDCD", // Darker Cyan
  "#FF00FF", // Darker Neon Magenta
  "#FF007F", // Darker Bright Pink
  "#FFD700", // Darker Neon Yellow
  "#00CED1", // Darker Neon Mint Green
  "#FF1493", // Darker Neon Red
  "#00CED1", // Darker Bright Aqua
  "#FF7F50", // Darker Neon Coral
  "#9ACD32", // Darker Neon Lime
  "#FFA500", // Darker Neon Orange
  "#32CD32", // Darker Neon Chartreuse
  "#ADFF2F", // Darker Neon Yellow Green
  "#DB7093", // Darker Neon Fuchsia
  "#00FF7F", // Darker Spring Green
  "#FFD700", // Darker Electric Lime
  "#FF007F", // Darker Bright Magenta
  "#FF6347", // Darker Neon Vermilion
];

export function getUserColor(userId: string) {
  let sum = 0;
  for (let i = 0; i < userId.length; i++) {
    sum += userId.charCodeAt(i);
  }

  const colorIndex = sum % brightColors.length;
  return brightColors[colorIndex];
}
import { url } from "inspector";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#work" },
  
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Continous Learning",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Mocky-interview",
    des: "Get judge by AI...",
    img: "/ss2.png",
    
    link: "https://mocky-interview.vercel.app/",
  },
  {
    id: 2,
    title: "Notsy-App",
    des: "Share Notes with friends... {on Cloud}",
    img: "/ss3.png",

    link: "https://nosty-app.vercel.app/",
  },
  {
    id: 3,
    title: "Delicious-Sprinkle",
    des: "Not just a bakery website...",
    img: "/ss4.png",

    link: "https://delicious-sprinkle.vercel.app/",
  },
  
];



export const workExperience = [
  {
    id: 1,
    title: "Full stack developer Intern",
    desc: "Intern at kifayti health as a full stack developer",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },

];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/Neeljain65/",
  },
  {
    id: 2,
    img: "/twit.svg",
    url: "https://x.com/neeliya_"
  },
  {
    id: 3,
    img: "/link.svg",
    url:"https://www.linkedin.com/in/neel-jain-202029260/"
  },
];
