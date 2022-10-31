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
  } from "react-icons/si";
  
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
      default:
        return "";
    }
  };