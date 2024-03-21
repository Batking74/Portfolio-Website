// Importing Modules/Packages
import React from "react";

export default function AboutComponent() {
    return (
        <section className="about" id="about-section">
            <h2 className="heading">about <span className="highlight highlight-Toggle">me</span></h2>
            <p className="sub-heading">
                Learn about Naz's journey, where strength and devotion intertwine to shape the person
                he is today!
            </p>
            <div className="seperator"></div>
            <div className="about-me-container">
                <div className="left-col">
                    <img
                        loading="lazy"
                        src="./IMG/Nazir_Senior_Year.webp"
                        srcSet="./IMG/Nazir_Senior_Year.webp 1x"
                        width="calc(100% - 900px)"
                        height="400px"
                        className="about-image"
                        alt="Image of Nazir at age 17" />
                </div>
                <div className="right-col">
                    <p id="ReadTextAI" className="about-paragraph">
                        I initiated my journey as a Self-Taught developer at age 15 after a grief-stricken experience, navigating the expansive landscape of programming with unwavering curiosity and determination. Through meticulous exploration, I honed my Web Development skills, progressing with each line of code. My devotion for coding took root long before my formal learning at the University of Minnesota's Full-Stack Coding Bootcamp, evolving during my free time and establishing a foundation for my technical prowess. This unique blend of self-directed learning and structured education distinguishes me from the crowd as I continue to embrace my Self-Taught roots. It encompasses adaptability, resourcefulness, and dedication to being the best that I can be. Within the structured confines of the bootcamp, I seamlessly integrate the spirit of a Self-Taught developer, making every project a testament to my versatile problem-solving abilities. My commitment to continuous improvement and autonomous learning ensures that I not only grasp the intricacies of Web Development, but also bring a fresh perspective to each endeavor. In the dynamic world of technology, I am not just a coder; I am an innovative problem-solver who thrives on challenges. My unique journey, marked by a blend of self-discovery, formal education, and experiences, positions me to contribute creatively to the ever-evolving landscape of Web Development. Whether it's crafting elegant code, developing intuitive user interfaces, or collaborating on complex projects, I bring a distinctive set of skills and perspectives that set me apart in the realm of Web Development and Tech Repairing.
                    </p>
                    <button id="play-button" data-toggle="off" className="btn">Read Aloud</button>
                </div>
            </div>
        </section>
    )
}