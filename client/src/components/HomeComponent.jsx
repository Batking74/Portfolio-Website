// Importing Modules/Packages
import { useEffect, useState } from "react";

export default function HomeComponent() {
    const [time, setTime] = useState(300);

    // Toggle Background
    const toggleBackgroundColor = () => {
        const footer = document.querySelector('#footerBackgroundColorToggle');
        const uniqueText = document.querySelectorAll(".highlight-Toggle");
        const [body] = document.getElementsByTagName('body');
        const nav = document.querySelector('.navbar');
        body.classList.toggle('changeBackgroundColor');
        nav.classList.toggle('changeNavColorByToggle');
        footer.classList.toggle('footerBackgroundColorToggle');
        for (let { classList } of uniqueText) classList.toggle('changeTextColor');
    }

    // Countdown Timer
    useEffect(() => {
        const timer = setInterval(() => {
            if (time != 0) setTime(prev => prev - 1);
            else {
                clearInterval(timer);
                // Do Something when timer is done
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [time]);


    return (
        <section className="home">
            <div className="home-content">
                <h1 className="home-heading"><span className="highlight highlight-Toggle">Hi, </span>I am Nazir</h1>
                <p className="profession">Web Developer</p>
                <p className="info">
                    Devoted Web Developer on a mission to transform new ideas into digital experiences!
                    <strong id="Countdown-Text"> You have <span id="countdown">{time}</span> seconds left!</strong>
                </p>
                <button
                    onClick={toggleBackgroundColor}
                    id="background-Toggle"
                    className="btn">Background</button>

                {/* Resume Button */}
                <button
                    onClick={() => {
                        window.open('/images/credentials/Nazir_Knuckles_Portfolio_Resume.pdf', '_blank');
                    }}
                    id="resumeBtn">Resume</button>
            </div>
            <span>
                <img
                    onClick={() => {
                        document.querySelector('.home-img-caption').classList.add('imgCap1-style');
                        document.querySelector('.home-img-caption').textContent = 'Me 14 years old (Freshmen Year)'
                    }}
                    src="/images/people/14_year_old_naz.webp"
                    loading="lazy"
                    className="image"
                    alt="Nazir Knuckles at age 14 with high-top fade." />
                <p className='home-img-caption'></p>
            </span>
        </section>
    );
}