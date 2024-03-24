// Importing Modules
import TestimonialComponent from "../components/TestimonialComponent";
import CertificateComponent from "../components/CertificateComponent";
import ContactComponent from "../components/ContactComponent";
import ProjectComponent from "../components/ProjectComponent";
import SkillsComponent from "../components/SkillsComponent";
import FooterComponent from "../components/FooterComponent";
import AboutComponent from "../components/AboutComponent";
import HomeComponent from "../components/HomeComponent";
import Navigation from "../components/Navigation";

// Importing Stylesheets
import '../assets//output/styles.css';

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
                <SkillsComponent />

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