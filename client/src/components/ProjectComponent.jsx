// Importing Modules/Packages
import React from "react";

export default function ProjectComponent() {
    return (
        <section className="project" id="project-section">
            <h2 className="heading">Project<span className="highlight highlight-Toggle">s</span></h2>
            <p className="sub-heading">
                Dive into the projects that shaped my journey, where innovation meets realization!
            </p>
            <div className="seperator"></div>
            <div className="filters">
                <button className="project-filter-btn active" id="all-projects">all</button>
                <button className="project-filter-btn" id="JS">JavaScript</button>
                <button className="project-filter-btn" id="Bootstrap">Bootstrap</button>
                <button className="project-filter-btn" id="Java">Java</button>
                <button className="project-filter-btn" id="React">React</button>
                <button className="project-filter-btn" id="Python">Python</button>
                <button className="project-filter-btn" id="SQL">SQL</button>
                <button className="project-filter-btn" id="Node.js">Node.js</button>
                <button className="project-filter-btn" id="MongoDB">MongoDB</button>
                <button className="project-filter-btn" id="Self-Teaching">Self Teaching</button>
                <button className="project-filter-btn" id="Bootcamp">Bootcamp</button>
                <button className="project-filter-btn" id="Tech Enhancement">Tech Repairs and Upgrades</button>
                <button className="project-filter-btn" id="PWA">PWA</button>
                <button className="project-filter-btn" id="WebPack">WebPack</button>
                <button className="project-filter-btn" id="GraphQL">GraphQL</button>
                <button className="project-filter-btn" id="IndexDB">IndexDB</button>
                <button className="project-filter-btn" id="MERN Stack">MERN Stack</button>
            </div>
            <div className="project-container"></div>
        </section>
    );
}