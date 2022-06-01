import { useEffect, useState } from "react";
import { SiLeetcode } from "react-icons/si";
import ProgressBar from "./ProgressBar";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

const LeetcodeProgress = () => {
  const [easy, setEasy] = useState(0);
  const [medium, setMedium] = useState(0);
  const [hard, setHard] = useState(0);

  useEffect(() => {
    fetch("https://leetcode-stats-api.herokuapp.com/davidwu2020")
      .then((res) => res.json())
      .then((data) => {
        setEasy(data.easySolved);
        setMedium(data.mediumSolved);
        setHard(data.hardSolved);
      });
  }, []);

  ChartJS.register(ArcElement, Tooltip);
  const data = {
    labels: ["Easy", "Medium", "Hard"],
    datasets: [
      {
        data: [easy, medium, hard],
        backgroundColor: [
          "rgba(0, 184, 163, 0.6)",
          "rgba(247, 186, 31, 0.6)",
          "rgba(255, 99, 132, 0.6)",
        ],
        borderColor: [
          "rgba(0, 184, 163, 1)",
          "rgba(247, 186, 31, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 2,
      },
    ],
  };
  const color = {
    green: "rgba(0, 184, 163)",
    yellow: "rgba(247, 186, 31)",
    red: "rgba(255, 99, 132)",
  };
  return (
    <div
      className="progress"
      style={{
        display: "flex",
        marginBottom: 70,
        flexDirection: "column",
        gap: 40,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "2rem",
          marginLeft: 50,
          marginBottom: 20,
        }}
      >
        <SiLeetcode size="4rem" />
        <span style={{ fontSize: "25px" }}>Leetcode Progress</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "2rem",
        }}
      >
        <div style={{ width: "30%" }}>
          <Doughnut data={data} />
        </div>
        <div style={{ flex: 1 }}>
          <ProgressBar
            bgcolor={color["green"]}
            description={"Easy"}
            current={easy}
            aim={60}
          />
          <ProgressBar
            bgcolor={color["yellow"]}
            description={"Medium"}
            current={medium}
            aim={120}
          />
          <ProgressBar
            bgcolor={color["red"]}
            description={"Hard"}
            current={hard}
            aim={20}
          />
        </div>
      </div>
    </div>
  );
};

export default LeetcodeProgress;
