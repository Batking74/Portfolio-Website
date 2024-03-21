// Importing Modules/Packages
import React from "react";

export default function HomeComponent() {
    return (
        <section className="home">
            <div className="home-content">
                <h1 className="home-heading"><span className="highlight highlight-Toggle">Hi, </span>I am Nazir</h1>
                <p className="profession">Web Developer</p>
                <p className="info">
                    Devoted Web Developer on a mission to transform new ideas into digital experiences!
                    <strong id="Countdown-Text">You have <span id="countdown">300</span> seconds left!</strong>
                </p>
                <button id="background-Toggle" className="btn">Background</button>

                {/* Working on this feature! */}
                <button id="resumeBtn">Resume</button>
            </div>
            <img
                src="./IMG/14_year_old_naz.webp"
                loading="lazy"
                className="image"
                alt="Nazir Knuckles at age 14 with high-top fade." />
        </section>
    );
}