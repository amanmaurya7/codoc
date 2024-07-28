import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  file02,
  homeSmile,
  plusSquare,
  searchMd,
} from "../public/index";

const yourlogo = ""; // Replace with the actual value of yourlogo

export const navigation = [];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];
export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const benefits = [
   {
    id: "0",
    title: "Real-time Collaboration",
    text: "Experience seamless and instantaneous document editing with multiple users. Changes are reflected in real-time, ensuring everyone stays on the same page.",
    backgroundUrl: "/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "User Roles",
    text: "Efficiently manage permissions with diverse user roles, including creator, editor, and viewer. Control who can make changes, suggest edits, or simply view the document",
    backgroundUrl: "/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Notifications",
    text: "Stay informed with instant notifications. CoDoc alerts you to updates and changes, ensuring you never miss a crucial edit.",
    backgroundUrl: "/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  }
];
