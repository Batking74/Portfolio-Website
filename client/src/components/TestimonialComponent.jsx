// Importing Modules/Packages
import React from "react";


export default function TestimonialComponent() {
    return (
        <section className="project" id="Testimonials-Section">
            <h2 className="heading">Testimonial<span className="highlight highlight-Toggle">s</span></h2>
            <p className="sub-heading">
                Explore the voices of satisfied clients and collaborators as they share their satisfaction with my work ethic, performance, and work!
            </p>
            <div className="seperator"></div>
            <div className="filters">
                <button className="testimonial-filter-btn active" id="all-testimonials">All</button>
                <button className="testimonial-filter-btn" id="Collaborator">Collaborators</button>
                <button className="testimonial-filter-btn" id="Client">Clients</button>
            </div>
            <div className="testimonial-container">
                <div className="swiper">
                    <ul className="swiper-wrapper testimonials-append-container"></ul>
                    <div className="swiper-pagination"></div>

                    {/* Navigation Buttons */}
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>
            </div>
        </section>
    );
}