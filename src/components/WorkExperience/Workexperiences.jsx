import { workexperiences } from "../../static/constants";
import SectionHeader from "../SectionHeader";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Workexperiences.css";

const Workexperiences = () => {

  const [run, setRun] = useState(true);
  const [selectedTab, setSelectedTab] = useState(workexperiences[0]);

  //set selectedTab to current +1 every 2 seconds with max of workexperiences.length
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setSelectedTab(workexperiences[(selectedTab.id + 1) % workexperiences.length]);
  //   } , 3000);
  //   return () => clearInterval(interval);
  // } , [selectedTab]);
  


  

  

  return (
    <SectionHeader text="Work" id="workExperience">
      <div className="work-card">
        <nav className="work-nav">
          <ul>
            {workexperiences.map((item) => (
              <li
                key={item.id}
                className={item.id === selectedTab.id ? "selected" : ""}
                onMouseOver={() => setSelectedTab(item)}
              >
                {item.tabName}
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
              <div className="work-responsibility">
                {selectedTab.responsibility}
              </div>
              

              

            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </SectionHeader>
  );
};

export default Workexperiences;
