import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

import {
  DiPython,
  DiCss3,
  DiHtml5,
  DiJavascript,
  DiReact,
  DiNodejs,
  DiMongodb,

} from "react-icons/di";

import { SiExpress, SiKubernetes } from "react-icons/si";

import {FaAws} from "react-icons/fa";

import { FiHome, FiUser, FiBriefcase, FiAward, FiFile, } from "react-icons/fi";

export const workexperiences = [
  {
    company: "UofT Asset Mgmt Corp.",
    tabName: "UTAM",
    title: "Risk and Research Analyst",
    responsibility: (
      <div>
        Developed a web service with Flask and MySQL to support CRUD operations
        to risk portfolios through REST APIs, implemented client-side and
        server-side parameter validations to eliminate potential errors by 40%{" "}
        <br />
        <br />
        Automated the risk monitoring workflow by executing SQL stored
        procedures with dynamic parameters using Python, replaced manual
        operations and reduced time spent by 60% <br />
      </div>
    ),
    duration: "2021  May - Aug",
    id: 0,
    img: require("../../src/static/img/logo/UTAM_logo.png"),
    recommendation: {
      avatar: require("../../src/static/img/logo/UTAM_logo.png"),
      name: "George Taylor",
      title: "Director, Faculty Budget and Finance",
      content:
        "Dinghang was wonderful to work with. He has exceptional coding skills and was a willing listener and learner. He consistently demonstrated a strong work ethic and a dedication to completing his projects in a timely and reliable fashion. Dinghang is self-motivated, methodical and very capable. He is not only a reliable and forward thinking Data Analyst but an outstanding team player with a positive attitude towards work, Dinghang would be a strong asset to any organization.",
    },
  },
  {
    company: "Solactive Americas Inc.",
    tabName: "Solactive",
    title: "Index Analyst",
    responsibility: (
      <div>
        Consolidated Market data from Bloomberg, Factset, and Reuters using Excel VBA and Python, automated monthly calculations for 15+ investment portfolios which increased efficiency by 50% <br />
        <br />
        Documented 3+ data processing pipelines with technical details, improved the clarity of communication materials  <br />
        <br />
      </div>
    ),
    duration: "2020  Sep - Dec",
    id: 1,
    img: require("../../src/static/img/logo/Solactive_logo.png"),
  },
  {
    company: "University of Toronto",
    tabName: "UofT",
    title: "Data Analyst",
    responsibility: (
      <div>
        Implemented a Hash map data structure using Python and Tkinter as GUI which links account numbers with account names, reduced the lookup time complexity to O(1) which is 70% faster than previous versions
        <br />
        <br />
        Processed data using Pandas and built interactive, real-time visualizations using Tableau and Matplotlib, prepared executive-level presentations to articulate key statistics and results from mathematical analysis <br />
        <br />
      </div>
    ),
    duration: "2019  Sep - Dec",
    id: 2,
    img: require("../../src/static/img/logo/Utoronto_logo.png"),
  },
  // {
  //   company: "Unity Health Toronto",
  //   title: "Junior project Accountant",
  //   responsibility: (
  //     <div>
  //       Designed payroll reports for government funding  <br />
  //       <br />
  //       Prepared forecast-actuals reports and performed expense analysis
  //       <br />
  //       <br />
  //       Consolidated chart of accounts from three hospitals, assisted in the
  //       business integration process
  //     </div>
  //   ),
  //   duration: "2019  Jan - Apr",
  //   id: 3,
  //   img: require("../../src/static/img/logo/UHT_logo.png"),
  // },
];

export const projects = [
  {
    name: "Headlines Now",
    description: "MERN stack web application with various categories and allow user to search and save favorite news",
    img: require("./img/projects/project1.png"),
    tech: "MongoDB Express React Nodejs",
    github: "https://github.com/UWDavidWu/news-react-fullstack",
    link: "https://headlines.uwdavidwu.com",
  },
  {
    name: "Go News Backend",
    description:
      "Consolidate global News from REST API with Kubernetes cluster on AWS EKS ",
    img: require("./img/projects/project2.png"),
    tech: "Go PostgreSQL Kubernetes Docker AWS",
    github: "https://github.com/UWDavidWu/news-go-backend",
    link: "",
  },
  {
    name: "Headlines NLP",
    description: "Sentiment Analysis on headlines, provided trendy topics for News readers",
    img: require("./img/projects/project3.png"),
    tech: "Python",
    github: "https://github.com/UWDavidWu/news-python-nlp",
    link: "",
  },
  {
    name: "uwdavidwu.com",
    description:
      "Mobile-first, cross-platform, responsive portfolio site ",
    img: require("./img/projects/project4.png"),
    tech: "React FramerMotion Vercel",
    github: "https://github.com/UWDavidWu/portfolio-site",
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
    icon: [SiKubernetes],
    name: "Kubernetes",
    level: 2,
  },
  {
    icon: [DiHtml5],
    name: "Html/CSS",
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
  {
    icon: [FaAws],
    name: "AWS",
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
    href: "mailto:uwdavidwu@outlook.com",
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
  "love to build things, love to learn new things, love to solve problems. I am a full-stack developer with a passion for data science and machine learning. I am also a graduate student at the UniveI am looking for a full-time position as a Data Scientist or Software Engineer.";
