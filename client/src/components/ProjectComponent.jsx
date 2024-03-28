// Importing Modules/Packages
import FilterProjectButtons from "./UI/FilterProjectButtons";
import Projects from "./UI/Projects";
import { useState } from "react";
const path = '/images/projects';

// Filter Tags/Buttons
const tags = [
    '#HTML',
    '#CSS',
    '#JavaScript',
    '#Node.js',
    '#SQL',
    '#Jquery',
    '#Bootstrap',
    '#Java',
    '#XML',
    '#Groovy',
    '#Sequelize',
    '#Self Teaching',
    '#Bootcamp',
    '#Python',
    '#Tech Repairs and Upgrades',
    '#WebPack',
    '#IndexDB',
    '#GraphQL',
    '#PWA',
    '#React',
    '#MERN Stack',
    '#MongoDB'
];

const [
    html,
    css,
    js,
    node,
    sql,
    jQuery,
    bootstrap,
    java,
    xml,
    groovy,
    sequelize,
    selfTeach,
    bootcamp,
    py,
    techEnhancement,
    webpack,
    indexDB,
    graphql,
    pwa,
    react,
    mern,
    mongodb
] = tags;

export default function ProjectComponent() {
    const [DisplayedProjects, showNewProjects] = useState('All');
    let filterBtns = [{ Name: 'All' }];
    for(let i = 2; i < tags.length; i++) {
        const technology = tags[i].replace('#', '');
        filterBtns.push({ Name: technology});
    }

    return (
        <section className="project" id="project-section">
            <h2 className="heading">Project<span className="highlight highlight-Toggle">s</span></h2>
            <p className="sub-heading">
                Dive into the projects that shaped my journey, where innovation meets realization!
            </p>
            <div className="seperator"></div>
            <div className="filters">
                <FilterProjectButtons showNewProjects={showNewProjects} filters={filterBtns} />
            </div>
            <div className="project-container">
                <Projects DisplayedProjects={DisplayedProjects} projects={[
                    {
                        Name: 'Palmer Studios',
                        HashTags: `${html} ${css} ${js} ${node} ${sql} ${selfTeach}`,
                        Image: `${path}/Palmer_Studios_Project.webp`,
                        url: 'https://palmer-studios-f1975e2e82dd.herokuapp.com/'
                    },
                    {
                        Name: 'Budget Calculator',
                        HashTags: `${html} ${css} ${js} ${node} ${sql} ${selfTeach}`,
                        Image: `${path}/Budget_Calculator_Project.webp`,
                        url: 'https://budgeting-calculator-878dd6a27579.herokuapp.com/'
                    },
                    {
                        Name: 'Talking Computer',
                        HashTags: `${html} ${css} ${js} ${selfTeach}`,
                        Image: `${path}/Talking_Computer_Project.webp`,
                        url: 'https://batking74.github.io/Talking_Computer_Project/'
                    },
                    {
                        Name: 'Digital Art Portfolio',
                        HashTags: `${html} ${css} ${selfTeach}`,
                        Image: `${path}/Art_Portfolio_Project.webp`,
                        url: 'https://batking74.github.io/Digital_Art_Portfolio_Project--First-ever-project-/'
                    },
                    {
                        Name: 'Password Generator',
                        HashTags: `${html} ${css} ${js} ${bootcamp}`,
                        Image: `${path}/Password Generator.webp`,
                        url: 'https://batking74.github.io/Password-Generator/'
                    },
                    {
                        Name: 'Meal Discovery',
                        HashTags: `${html} ${css} ${js} ${jQuery} ${bootstrap} ${bootcamp}`,
                        Image: `${path}/Meal_Discovery_Project.webp`,
                        url: 'https://mrwait-music.github.io/super-group-project/'
                    },
                    {
                        Name: 'Project-Tracker',
                        HashTags: `${html} ${css} ${js} ${jQuery} ${bootstrap} ${bootcamp}`,
                        Image: `${path}/Project-Tracker-Project.webp`,
                        url: 'https://batking74.github.io/Project-Tracker/'
                    },
                    {
                        Name: 'Work Day Scheduler',
                        HashTags: `${html} ${css} ${js} ${jQuery} ${bootstrap} ${bootcamp}`,
                        Image: `${path}/Work_day_calendar.webp`,
                        url: 'https://batking74.github.io/Work-Day-Calendar/'
                    },
                    {
                        Name: 'Landing Page Project 1',
                        HashTags: `${html} ${css} ${selfTeach}`,
                        Image: `${path}/Landing_Page_Project_1.webp`,
                        url: 'https://batking74.github.io/Landing-Page-Project/'
                    },
                    {
                        Name: 'Login Page Project',
                        HashTags: `${html} ${css} ${selfTeach}`,
                        Image: `${path}/Login_Project.webp`,
                        url: 'https://batking74.github.io/Login_Page_Project/'
                    },
                    {
                        Name: 'Horiseon Project',
                        HashTags: `${html} ${css} ${bootcamp}`,
                        Image: `${path}/Horiseon_Project.webp`,
                        url: 'https://batking74.github.io/Horiseon-Project/'
                    },
                    {
                        Name: 'Digital Calculator Project',
                        HashTags: `${html} ${css} ${js} ${selfTeach}`,
                        Image: `${path}/Calculator_project.webp`,
                        url: 'https://batking74.github.io/Digital_Calculator_Project/'
                    },
                    {
                        Name: 'Weather Dashboard',
                        HashTags: `${html} ${css} ${js} ${bootcamp}`,
                        Image: `${path}/Weather-Dashboard.webp`,
                        url: 'https://batking74.github.io/Weather-Dashboard/'
                    },
                    {
                        Name: 'Find Repo Issues',
                        HashTags: `${html} ${css} ${js} ${bootcamp}`,
                        Image: `${path}/Find-Repo-Issues-Project.webp`,
                        url: 'https://batking74.github.io/Find-Repo-Issues/'
                    },
                    {
                        Name: 'Store Design',
                        HashTags: `${html} ${css} ${bootcamp}`,
                        Image: `${path}/Store-Design-Project.webp`,
                        url: 'https://batking74.github.io/Store-Design/'
                    },
                    {
                        Name: 'Blog Design',
                        HashTags: `${html} ${css} ${bootcamp}`,
                        Image: `${path}/Blog-Design-Project.webp`,
                        url: 'https://batking74.github.io/Blog-Design/'
                    },
                    {
                        Name: 'Portfolio Project',
                        HashTags: `${html} ${css} ${bootcamp}`,
                        Image: `${path}/Naz_Portfolio_Project_Screenshot.webp`,
                        url: 'https://batking74.github.io/Portfolio-Project/'
                    },
                    {
                        Name: 'MedShareNetwork',
                        HashTags: `${html} ${css} ${js} ${node} ${sql} ${sequelize} ${bootcamp}`,
                        Image: `${path}/MedShareNetwork.webp`,
                        url: 'https://medsharenetwork-3691a9c0e268.herokuapp.com/'
                    },
                    {
                        Name: 'AI Integration chatGPT',
                        HashTags: `${js} ${node} ${selfTeach}`,
                        Image: `${path}/AI-Applications-and-Prompt-Engineering -11_29_2023.png`,
                        url: 'https://www.youtube.com/watch?v=zXzFo15bS5Q'
                    },
                    {
                        Name: 'Notes App',
                        HashTags: `${html} ${css} ${js} ${node} ${bootcamp}`,
                        Image: `${path}/Nazirs-Note-Taker-Project.webp`,
                        url: 'https://nazirs-notes-c5bd0256a734.herokuapp.com/'
                    },
                    {
                        Name: 'Tech Blog',
                        HashTags: `${html} ${css} ${js} ${node} ${sequelize} ${bootcamp}`,
                        Image: `${path}/Tech Blog - 2_16_2024.webp`,
                        url: 'https://naz-tech-blog-b1b13db75bbc.herokuapp.com/Home'
                    },
                    {
                        Name: 'PWA Text Editor',
                        HashTags: `${html} ${css} ${js} ${node} ${webpack} ${pwa} ${indexDB} ${bootcamp}`,
                        Image: `${path}/J.A.T.E - 2_16_2024.webp`,
                        url: 'https://pwa-texteditor-fqe6.onrender.com/'
                    },
                    {
                        Name: 'Portfolio Project',
                        HashTags: `${html} ${css} ${js} ${react} ${bootcamp}`,
                        Image: `${path}/Naz Portfolio - 2_22_2024.webp`,
                        url: 'https://bootcampportfolio.netlify.app/'
                    },
                    {
                        Name: 'AI & Neural Network Practice',
                        HashTags: `${py} ${selfTeach}`,
                        Image: `${path}/Placeholder.webp`,
                        url: 'https://www.youtube.com/watch?v=zYSN61cPPzE'
                    },
                    {
                        Name: 'Employee Tracker',
                        HashTags: `${node} ${sql} ${js} ${bootcamp}`,
                        Image: `${path}/Employee-Tracker - 12_14_2023.webp`,
                        url: 'https://www.youtube.com/watch?v=4ukkirWouOk'
                    },
                    {
                        Name: 'OpenChat',
                        HashTags: `${node} ${mern} ${mongodb} ${graphql} ${react} ${bootcamp}`,
                        Image: `${path}/OpenChat_Project.webp`,
                        url: 'https://openchat-0ptg.onrender.com/'
                    },
                    {
                        Name: 'Computer Repairs',
                        HashTags: `${techEnhancement} ${selfTeach}`,
                        Image: `${path}/Placeholder.webp`,
                        url: 'https://www.youtube.com/playlist?list=PL8SUnm_PCDCtN80TtylCqd3nB1_PgR_Qf'
                    },
                    {
                        Name: 'iPhone Repairs',
                        HashTags: `${techEnhancement} ${selfTeach}`,
                        Image: `${path}/Placeholder.webp`,
                        url: 'https://www.youtube.com/playlist?list=PL8SUnm_PCDCvIINRmyDb6kS9K7IC79TrN'
                    },
                    {
                        Name: 'Tech Upgrades',
                        HashTags: `${techEnhancement} ${selfTeach}`,
                        Image: `${path}/Placeholder.webp`,
                        url: 'https://www.youtube.com/playlist?list=PL8SUnm_PCDCud_oaYtkBkBf0rJi6TViiS'
                    },
                    {
                        Name: 'Console/Controller Repairs',
                        HashTags: `${techEnhancement} ${selfTeach}`,
                        Image: `${path}/Placeholder.webp`,
                        url: 'https://www.youtube.com/playlist?list=PL8SUnm_PCDCt4IdY3Y2Kjl-F6wOHa_R1K'
                    },
                    {
                        Name: 'Asymptotic Analysis',
                        HashTags: `${selfTeach}`,
                        Image: `${path}/Placeholder.webp`,
                        url: 'https://www.youtube.com/playlist?list=PL8SUnm_PCDCtEVJPFnKED0wqaYC81W02i'
                    },
                    {
                        Name: 'Android Login App with Google Sign In',
                        HashTags: `${java} ${xml} ${groovy} ${selfTeach}`,
                        Image: `${path}/Android_Login_Page.webp`,
                        url: ''
                    }
                ]} />
            </div>
        </section>
    );
}