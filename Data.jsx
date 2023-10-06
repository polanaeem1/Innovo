import { FiPenTool } from "react-icons/fi";
import { FaLaptopCode } from "react-icons/fa";
import { BsBarChartLine } from "react-icons/bs";
import { MdOutlineScience } from "react-icons/md";


import logo1 from "./src/assets/logo1.png";
import logo2 from "./src/assets/logo2.png";
import logo3 from "./src/assets/logo3.png";
import logo4 from "./src/assets/NASA_logo.svg.png";
import logo5 from "./src/assets/logo5.png";
import logo6 from "./src/assets/logo6.png";

export const navLinks = [
  {
    id: 1,
    href: "home",
    link: "Home",
  },
  {
    id: 2,
    href: "about",
    link: "About",
  },
  {
    id: 4,
    href: "teacher",
    link: "Researchers",
  },
  {
    id: 5,
    href: "contact",
    link: "Contact",
  },
];

export const categories = [
  {
    id: 1,
    icon: <FiPenTool />,
    category: "Design",
  },
  {
    id: 2,
    icon: <FaLaptopCode />,
    category: "Development",
  },
  {
    id: 3,
    icon: <BsBarChartLine />,
    category: "Business",
  },
  {
    id: 4,
    icon: <MdOutlineScience />,
    category: "Science",
  },
];


export const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

export const accordions = [
  {
    id: 1,
    title: "What is Innovo?",
  },
  {
    id: 2,
    title: "What can I learn from Innovo?",
  },
  {
    id: 3,
    title: "Can I teach on Innovo?",
  },
  {
    id: 4,
    title: "What is included in my Innovo membership?",
  },
];
