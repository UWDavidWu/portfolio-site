import {
    AiFillGithub,
    AiFillLinkedin,
    AiFillThunderbolt,
    AiFillApi,
  } from "react-icons/ai";
import {DiPython, DiCss3, DiHtml5, DiJavascript1,DiReact} from "react-icons/di"
import  {SiMaterialui, SiFramer, SiBootstrap, SiJavascript} from "react-icons/si"

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
        name: "NEWS API",
        description: "Search Breaking News across the web",
        icons:[AiFillApi,SiMaterialui,SiFramer],
        img:"https://images.unsplash.com/photo-1576153192396-180ecef2a715?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    },
    {
        name: "PyMunk",
        description: "Search Breaking News across the web",
        icons:[DiPython,AiFillLinkedin,AiFillThunderbolt],
        img:"https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    },
    {
        name: "Example",
        description: "Search Breaking News across the web",
        icons:[AiFillGithub,SiBootstrap,AiFillThunderbolt],
        img:"https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
    },
    {
        name: "Example",
        description: "Search Breaking News across the web",
        icons:[AiFillGithub,AiFillLinkedin,AiFillThunderbolt],
        img:"https://images.unsplash.com/photo-1558655146-d09347e92766?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80",
    },
]


        
export const heroIcons = [
    {
        icon: [DiPython],
        name: "Python",

    },
    {
        icon: [DiCss3],
        name: "Css",

    },
    {
        icon: [DiHtml5],
        name: "Html",

    },
    {
        icon: [DiReact],
        name: "React",

    },
    {
        icon: [SiFramer],
        name: "Framer Motion",

    },
    {
        icon: [DiJavascript1],
        name: "Javascript",

    },
    {
        icon: [AiFillApi],
        name: "API",

    },
]


const selfIntro = "I'm a recent graduate from the University of Waterloo"