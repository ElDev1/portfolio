import {
    SiCss3,
    SiNodeDotJs,
    SiMongodb,
    SiReact,
    SiStyledcomponents,
    SiNextDotJs,
    SiSass,
    SiJavascript,
    SiHtml5,
    SiRedux,
    SiMaterialui,
    SiReactrouter,
    SiTailwindcss,
    SiFirebase,
    SiBootstrap
  } from 'react-icons/si'
  import { FaWpforms } from 'react-icons/fa' 

  export const projectIcon = (technology) => {
    console.log(technology.toLowerCase())
    switch (technology.toLowerCase()) {
      case "mongodb":
        return <SiMongodb size={20} />;
      case "css":
        return <SiCss3 size={20} />;
      case "express":
        return <SiNodeDotJs size={20} />;
      case "nodejs":
        return <SiNodeDotJs size={20} />;
      case "react":
        return <SiReact size={20} />;
      case "nextjs":
        return <SiNextDotJs size={20} />;
      case "styled components":
        return <SiStyledcomponents size={20} />;
      case "vanilla js":
        return <SiJavascript size={20} />;
      case "html":
        return <SiHtml5 size={20} />;
      case "scss":
        return <SiSass size={20} />;
      case "redux":
        return <SiRedux size={20} />;
      case "material ui":
        return <SiMaterialui size={20} />;
      case "react router":
        return <SiReactrouter size={20} />;
      case "formik":
        return <FaWpforms size={20} />;
      case "tailwind":
        return <SiTailwindcss size={20} />;
      case "firebase":
        return <SiFirebase size={20} />;
      case "bootstrap":
        return <SiFirebase size={20} />;
      default:
        return "";
    }
  };