import { useEffect, useState } from "react";

const TechIcon = ({ Icon, Name, period }) => {
  const classNameAlternate = ["hero-icon", "hero-icon active"];
  const [classnameIndex, setclassnameIndex] = useState(0);

  //change classnameIndex to 1 after period
  useEffect(() => {
    const interval = setInterval(() => {
      classnameIndex === 0 ? setclassnameIndex(1) : setclassnameIndex(0);

    }, period);

    return () => clearInterval(interval);
  }, [classnameIndex]);




  return (
    <div
      className={classNameAlternate[classnameIndex]}
      style={{ position: "relative" }}
    >
      <div className="hero-icon-sub">
        <Icon size="3rem" />
      </div>
      <div className="hero-icon-main">
        <Icon size="3rem" />
      </div>
      <div className="hero-icon-name">{Name}</div>
    </div>
  );
};

export default TechIcon;
