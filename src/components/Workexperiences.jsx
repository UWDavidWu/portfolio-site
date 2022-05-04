import { workexperiences } from "../static/constants";
import SectionHeader from "./SectionHeader";
import Workexperience from "./Workexperience";

const Workexperiences = () => {
  return (
    <section id="workExperience">
      <SectionHeader text={"Work"} />
      <div className="workexp">
        {workexperiences.map((work, index) => (
          <Workexperience work={work} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Workexperiences;
