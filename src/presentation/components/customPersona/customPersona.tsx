import { Personalization } from "@croct/plug-react";
import "./style.css";



const CustomPersona: React.FC = () => {
  const personas = {
    default: {
      img: "https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=640&h=640&dpr=1",
      detail: "Default image",
    },
    growthHacker: {
      img: "https://images.pexels.com/photos/1852389/pexels-photo-1852389.jpeg?auto=compress&cs=tinysrgb&w=640&h=640&dpr=1",
      detail: "Growth Hacker",
    },
    developer: {
      img: "https://images.pexels.com/photos/3201630/pexels-photo-3201630.jpeg?auto=compress&cs=tinysrgb&w=640&h=640&dpr=1",
      detail: "Developer image",
    },
    market: {
      img: "https://img3.goodfon.com/wallpaper/nbig/a/2a/biznes-marketing-perspektiva.jpg",
      detail: "Market image",
    },
  };
  const makePersonaDetails = (img: string, alt: string) => {
    return <img src={img} alt={alt} />;
  };

  const handleMakePersona = (persona: string) => {
    if (persona === "developer") {
      return makePersonaDetails(
        personas.developer.img,
        personas.developer.detail
      );
    }
    if (persona === "growth-hacker") {
      return makePersonaDetails(
        personas.growthHacker.img,
        personas.growthHacker.detail
      );
    }
    if (persona === "marketer") {
      return makePersonaDetails(personas.market.img, personas.market.detail);
    }
    return makePersonaDetails(personas.default.img, personas.default.detail);
  };

  return (
    <div className="img">
      <Personalization expression="user's persona">
        {(persona: string) => handleMakePersona(persona)}
      </Personalization>
    </div>
  );
};

export default CustomPersona;
