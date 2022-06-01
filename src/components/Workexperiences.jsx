import { workexperiences } from "../static/constants";
import SectionHeader from "./SectionHeader";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Workexperiences = () => {
  const [selectedTab, setSelectedTab] = useState(workexperiences[0]);

  return (
    <SectionHeader text="Work" id="workExperience">
      <div className="work-card">
        <nav className="work-nav">
          <ul>
            {workexperiences.map((item) => (
              <li
                key={item.id}
                className={item.id === selectedTab.id ? "selected" : ""}
                onClick={() => setSelectedTab(item)}
              >
                {`${item.duration}`}
                {item.id === selectedTab.id ? (
                  <motion.div className="underline" layoutId="underline" />
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
        <main className="work-content">
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={selectedTab ? selectedTab.id : "empty"}
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.15 }}
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "2rem",
                }}
              >
                <img
                  src={selectedTab.img}
                  alt={selectedTab.company}
                  style={{ width: "96px", height: "96px" }}
                />
                <div style={{ flex: "1 1 0px" }}>
                  <span className="work-company">{selectedTab.company}</span>{" "}
                  <br />
                  {selectedTab.title}
                </div>
              </div>
              {selectedTab.responsibility}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </SectionHeader>
  );
};

export default Workexperiences;
