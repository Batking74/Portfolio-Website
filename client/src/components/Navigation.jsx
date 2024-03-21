// Importing Modules/Packages
import React from "react";

export default function Navigation() {
    return (
        <>
            {/* Start of Navigation */}
            <nav className="navbar">
                <h1 className="brand">Batking</h1>
                <div className="toggle-btn">
                    <span></span>
                    <span></span>
                </div>
                <ul className="links-container">
                    <li className="links-item"><a href="#" className="link active">Home</a></li>
                    <li className="links-item"><a href="#about-section" className="link">About</a></li>
                    <li className="links-item"><a href="#skill-section" className="link">Skills</a></li>
                    <li className="links-item"><a href="#project-section" className="link">Projects</a></li>
                    <li className="links-item"><a href="#Testimonials-Section" className="link">Testimonials</a></li>
                    <li className="links-item"><a href="#certificate-section" className="link">Certificates</a></li>
                    <li className="links-item"><a href="#contact-section" className="link">Contact</a></li>
                </ul>
                <div id="validationError" className="validationError"></div>
            </nav>
        </>
    );
}