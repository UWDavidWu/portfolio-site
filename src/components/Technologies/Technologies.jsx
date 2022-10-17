import SectionHeader from "../SectionHeader";
import TechIcon from "../TechIcon";
import { heroIcons } from "../../static/constants";
import "./Technologies.css";

const Technologies = () => {
  return (
    <SectionHeader text="technologies" id="technology">
      <div className="hero">
      {heroIcons.map(($, index) => (
        <TechIcon key={index} Icon={$.icon[0]} Name={$.name} Level={$.level} />
      ))}
    </div>
    </SectionHeader>
  );
};

export default Technologies;
