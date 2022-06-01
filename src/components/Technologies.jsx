import SectionHeader from "./SectionHeader";
import Hero from "./Hero";
import LeetcodeProgress from "./LeetcodeProgress";

const Technologies = () => {
  return (
    <SectionHeader text="technologies" id="technology">
      <LeetcodeProgress />
      <Hero />
    </SectionHeader>
  );
};

export default Technologies;
