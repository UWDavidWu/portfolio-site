import TechIcon from "./TechIcon";
import { heroIcons } from "../static/constants";

const Hero = () => {
  return (
    <div className="hero">
      {heroIcons.map(($, index) => (
        <TechIcon key={index} Icon={$.icon[0]} Name={$.name} Level={$.level} />
      ))}
    </div>
  );
};

export default Hero;
