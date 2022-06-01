import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";

import {
  DiPython,
  DiCss3,
  DiHtml5,
  DiJavascript,
  DiReact,
  DiNodejs,
  DiMongodb,
} from "react-icons/di";

import { SiExpress } from "react-icons/si";

import { FiHome, FiUser, FiBriefcase, FiAward, FiFile } from "react-icons/fi";

export const workexperiences = [
  {
    company: "UofT Asset Mgmt Corp.",
    title: "Portfolio Analytics Intern",
    responsibility: (
      <div>
        Automated the Index Selection and Rebalancing process using Python and
        VBA <br />
        <br />
        Obtained the latest Market datasets from Factset, Bloomberg, implemented
        in internal projects <br />
        <br />
        Researched different types of Indices, identified and validated if
        criteria are feasible
      </div>
    ),
    duration: "2021  May - Aug",
    id: 1,
    img: require("../../src/static/img/logo/UTAM_logo.png"),
  },
  {
    company: "Solactive Americas Inc.",
    title: "Index Analyst",
    responsibility: (
      <div>
        Automated the Index Selection and Rebalancing process using Python and
        VBA <br />
        <br />
        Obtained the latest Market datasets from Factset, Bloomberg, implemented
        in internal projects <br />
        <br />
        Researched different types of Indices, identified and validated if
        criteria are feasible
      </div>
    ),
    duration: "2020  Sep - Dec",
    id: 2,
    img: require("../../src/static/img/logo/Solactive_logo.png"),
  },
  {
    company: "University of Toronto",
    title: "Data Analyst",
    responsibility: (
      <div>
        Data Analytics: data cleaning, extraction, analysis and visualization{" "}
        <br />
        <br />
        Maintained the complex faculty database in SPSS, provided Ad hoc support
        to the data team <br />
        <br />
        Retrieved data from reports and created Tableau dashboards, visualized
        faculty datasets
      </div>
    ),
    duration: "2019  Sep - Dec",
    id: 3,
    img: require("../../src/static/img/logo/Utoronto_logo.png"),
  },
  {
    company: "Unity Health Toronto",
    title: "Junior project Accountant",
    responsibility: (
      <div>
        Designed payroll reports for government funding and automated the
        process using VBA <br />
        <br />
        Prepared forecast-actuals reports and performed expense analysis,
        facilitated the reconstruction <br />
        <br />
        Consolidated chart of accounts from three hospitals, assisted in the
        business integration process
      </div>
    ),
    duration: "2019  Jan - Apr",
    id: 4,
    img: require("../../src/static/img/logo/UHT_logo.png"),
  },
];

export const projects = [
  {
    name: "Top Headlines",
    description:
      "Fetch 3rd party API news data and display it in a responsive web application",
    img: require("./img/projects/project1.png"),
    tech: "React MaterialUI Express Axios Heroku",
    github: "https://github.com/UWDavidWu/news-api-frontend",
    link: "https://news-api-frontend.herokuapp.com/",
  },
  {
    name: "Sorting Algos Visualizer",
    description:
      "Using Python (Pygame) to visualize different sorting algorithms",
    img: require("./img/projects/project2.png"),
    tech: "Python",
    github: "https://github.com/UWDavidWu/Sorting-Algorithm-Visualizer",
    link: "https://uwdavidwu.com/",
  },
  {
    name: "Leetcode Blog",
    description: "A blog for leetcode problems",
    img: require("./img/projects/project3.png"),
    tech: "React Tailwindcss MongoDB Express",
    github: "https://github.com/UWDavidWu/news-api-frontend",
    link: "https://uwdavidwu.com/",
  },
  {
    name: "UWDavidWu.com",
    description: "Personal Portfolio Website with rich animation and interaction",
    img: require("./img/projects/project4.png"),
    tech: "React FramerMotion Vercel",
    github: "https://https://github.com/UWDavidWu/react.js_portfolio",
    link: "https://uwdavidwu.com/",
  },
];

export const heroIcons = [
  {
    icon: [DiPython],
    name: "Python",
    level: 3,
  },
  {
    icon: [DiCss3],
    name: "Css",
    level: 2,
  },
  {
    icon: [DiHtml5],
    name: "Html",
    level: 3,
  },
  {
    icon: [DiJavascript],
    name: "JS",
    level: 3,
  },
  {
    icon: [DiReact],
    name: "React",
    level: 2,
  },

  {
    icon: [DiNodejs],
    name: "Node",
    level: 3,
  },
  {
    icon: [SiExpress],
    name: "Express",
    level: 2,
  },
  {
    icon: [DiMongodb],
    name: "MongoDB",
    level: 2,
  },
];

export const social_links = [
  {
    icon: [AiFillGithub],
    href: "https://github.com/UWDavidWu",
  },
  {
    icon: [AiFillLinkedin],
    href: "https://www.linkedin.com/in/uwdavid/",
  },
  {
    icon: [AiFillMail],
    href: "mailto:wu.dinghang@outlook.com",
  },
];

export const navbar_content = [
  {
    href: "#header",
    icon: <FiHome />,
  },
  {
    href: "#projects",
    icon: <FiFile />,
  },
  {
    href: "#workExperience",
    icon: <FiBriefcase />,
  },

  {
    href: "#contact",
    icon: <FiUser />,
  },
  {
    href: "#technology",
    icon: <FiAward />,
  },
];

export const selfIntro =
  "I'm still constructing this part so please check back later Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur illo nam a ipsa rem? Ratione, quod possimus vel non modi velit distinctio aut ut enim deserunt tempora consequatur odio cupiditate!";


