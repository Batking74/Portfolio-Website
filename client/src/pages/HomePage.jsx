// Importing Modules/Packages
import TestimonialComponent from "../components/TestimonialComponent";
import CertificateComponent from "../components/CertificateComponent";
import ContactComponent from "../components/ContactComponent";
import ProjectComponent from "../components/ProjectComponent";
import FooterComponent from "../components/FooterComponent";
import AboutComponent from "../components/AboutComponent";
import HomeComponent from "../components/HomeComponent";
import Navigation from "../components/Navigation";
import React from "react";

export default function HomePage() {

    return (
        <>
            <Navigation />
            {/* Start of Main Content */}
            <main>
                {/* Start of Home Section */}
                <HomeComponent />

                {/* Start of About Section */}
                <AboutComponent />

                {/* Start of Skill Section */}
                <section className="project" id="skill-section">
                    <h2 className="heading">
                        Tech <span className="highlight highlight-Toggle">Arsenal</span>
                    </h2>
                    <p className="sub-heading">
                        Fueled by curiosity and nurtured by exploration, I conquer new horizons in the ever-evolving tech
                        landscape!
                    </p>
                    <div className="seperator"></div>

                    {/* Appending Elements Dynamically using JS */}
                    <div className="skill-container"></div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <h2 className="heading">Self Teaching <span className="highlight-Toggle">Aspirations</span></h2>
                    <div className="seperator"></div>

                    {/* Appending Elements Dynamically using JS */}
                    <div className="skill-container"></div>
                </section>

                {/* Start of Coding Projects Section */}
                <ProjectComponent />

                {/* Start of Testimonials Section */}
                <TestimonialComponent />

                {/* Start of Certificate Section */}
                <CertificateComponent />


                {/* Contact form */}
                <ContactComponent />
            </main>

            {/* Footer */}
            <FooterComponent />
        </>
    );
}

