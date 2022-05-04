import {
    AiFillGithub,
    AiFillLinkedin,
    AiFillThunderbolt,
    AiFillApi,
  } from "react-icons/ai";
import {DiPython, DiCss3, DiHtml5, DiJavascript1,DiReact} from "react-icons/di"
import  {SiMaterialui, SiFramer, SiBootstrap, SiJavascript} from "react-icons/si"

import { MdWork } from "react-icons/md"
import { AiFillHome, AiFillFile} from 'react-icons/ai';
import {RiContactsFill} from 'react-icons/ri'



export const workexperiences = [
    {
        company: "UofT Asset Mgmt Corp.",
        title: "Portfolio Analytics Intern",
        responsibility: "Built a web applicantion which facilitates the process of creating, rebalancing, and updating portfolios",
        duration:"May 2021 - Aug 2021",
        year:"2021",
        icons:[AiFillApi,AiFillLinkedin,AiFillThunderbolt],
        img:require('../../src/static/img/logo/UTAM_logo.png'),
    },
    {
        company: "Solactive Americas Inc.",
        title: "Index Analyst",
        responsibility: "Sql script and api support",
        duration:"Sep 2020 - Dec 2020",
        year:"2020",
        icons:[AiFillGithub,AiFillLinkedin,AiFillThunderbolt],
        img:require('../../src/static/img/logo/Solactive_logo.png'),
    },
    {
        company: "University of Toronto",
        title: "Data Analyst",
        responsibility: "Built an account search application with Python which reduced the processing time by 2 mins on each transaction",
        duration:"Sep 2019 - Dec 2019",
        year:"2019",
        icons:[AiFillGithub,AiFillLinkedin,AiFillThunderbolt],
        img:require('../../src/static/img/logo/Utoronto_logo.png'),
    },
    {
        company: "Unity Health Toronto",
        title: "Junior project Accountant",
        responsibility: "Automated the monthly payroll report using Excel Vba, saved 40 hours monthly",
        duration:"Jan 2019 - Apr 2019",
        year:"2019",
        icons:[AiFillGithub,AiFillLinkedin,AiFillThunderbolt],
        img:require('../../src/static/img/logo/UHT_logo.png'),
    },
]


export const projects = [
    {
        name: "Top Headlines",
        description: "Fetch 3rd party API news data and display it in a responsive web application",
        icons:[AiFillApi,SiMaterialui,SiFramer],
        img:require('../../src/static/img/projects/project1.png'),
        github:"https://github.com/UWDavidWu/news-api-frontend",
        link:"https://news-api-frontend.herokuapp.com/",
    },
    {
        name: "Sorting Algorithms Visualizer",
        description: "Using Python (Pygame) to visualize different sorting algorithms",
        icons:[DiPython,AiFillLinkedin,AiFillThunderbolt],
        img:require('../../src/static/img/projects/project2.png'),
        github:"https://github.com/UWDavidWu/Sorting-Algorithm-Visualizer",
        link:"https://news-api-frontend.herokuapp.com/",
    },
    {
        name: "Example",
        description: "Search Breaking News across the web",
        icons:[AiFillGithub,SiBootstrap,AiFillThunderbolt],
        img:require('../../src/static/img/projects/project1.png'),
        github:"https://github.com/UWDavidWu/news-api-frontend",
        link:"https://news-api-frontend.herokuapp.com/",
    },
    {
        name: "Example",
        description: "Search Breaking News across the web",
        icons:[AiFillGithub,AiFillLinkedin,AiFillThunderbolt],
        img:require('../../src/static/img/projects/project1.png'),
        github:"https://github.com/UWDavidWu/news-api-frontend",
        link:"https://news-api-frontend.herokuapp.com/",
    },
]


        
export const heroIcons = [
    {
        icon: [DiPython],
        name: "Python",
        period: 3000,

    },
    {
        icon: [DiCss3],
        name: "Css",
        period: 3000,

    },
    {
        icon: [DiHtml5],
        name: "Html",
        period: 4000,

    },
    {
        icon: [DiReact],
        name: "React",
        period: 4000,


    },
    {
        icon: [SiFramer],
        name: "Framer Motion",
        period: 5000,

    },
    {
        icon: [DiJavascript1],
        name: "Javascript",
        period: 5000,

    },
    {
        icon: [AiFillApi],
        name: "API",
        period: 3000,

    },
]

export const navbar_content = [
    {
      href: "#header",
      icon: <AiFillHome />,
    },
    {
      href: "#projects",
      icon: <AiFillFile />,
    },
    {
      href: "#workExperience",
      icon:<MdWork />,
    },
    {
      href: "#technologies",
      icon: <DiCss3 />,
    },
    {
      href: "#contact",
      icon: <RiContactsFill />,
    },

  ]
const selfIntro = "I'm a recent graduate from the University of Waterloo"