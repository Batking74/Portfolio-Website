export default function AboutComponent() {

    // Speechsynthesis Button
    const readAloud = () => {
        const { textContent } = document.getElementById('ReadTextAI');
        const btn = document.getElementById('play-button');
        if (btn.dataset.toggle === 'off') {
            btn.dataset.toggle = 'on';

            // Allows Speechsynthesis to speak
            const utterance = new SpeechSynthesisUtterance(textContent);
            utterance.rate = 1;
            speechSynthesis.speak(utterance);
            btn.innerHTML = `<svg style="width: 20px; height: 20px" viewBox="0 0 24 24"><path fill="currentColor" d="M14,19H18V5H14M6,19H10V5H6V19Z" /></svg>`;
        }
        else {
            btn.dataset.toggle = 'off';
            speechSynthesis.cancel();
            btn.innerHTML = 'Read Aloud';
        }
    }

    return (
        <section className="about" id="about-section">
            <h2 className="heading">about <span className="highlight highlight-Toggle">me</span></h2>
            <p className="sub-heading">
                Learn about Naz&apos;s journey, where strength and devotion intertwine to shape the person
                he is today!
            </p>
            <div className="seperator"></div>
            <div className="about-me-container">
                <div className="left-col">
                    <img
                        onClick={() => {
                            document.querySelector('.about-img-caption').textContent = 'Me 17 years old (Senior Year)'
                        }}
                        loading="lazy"
                        src="/images/people/Nazir_Senior_Year.webp"
                        srcSet="/images/people/Nazir_Senior_Year.webp 1x"
                        width="calc(100% - 900px)"
                        height="400px"
                        className="about-image"
                        alt="Image of Nazir at age 17" />
                    <p className='about-img-caption'></p>
                </div>
                <div className="right-col">
                    <p id="ReadTextAI" className="about-paragraph">
                        I initiated my journey as a Self-Taught developer at age 15 after a grief-stricken experience, navigating the expansive landscape of programming with unwavering curiosity and determination. Through meticulous exploration, I honed my Web Development skills, progressing with each line of code. My devotion for coding took root long before my formal learning at the University of Minnesota&apos;s Full-Stack Coding Bootcamp, evolving during my free time and establishing a foundation for my technical prowess. This unique blend of self-directed learning and structured education distinguishes me from the crowd as I continue to embrace my Self-Taught roots. It encompasses adaptability, resourcefulness, and dedication to being the best that I can be. Within the structured confines of the bootcamp, I seamlessly integrate the spirit of a Self-Taught developer, making every project a testament to my versatile problem-solving abilities. My commitment to continuous improvement and autonomous learning ensures that I not only grasp the intricacies of Web Development, but also bring a fresh perspective to each endeavor. In the dynamic world of technology, I am not just a coder; I am an innovative problem-solver who thrives on challenges. My unique journey, marked by a blend of self-discovery, formal education, and experiences, positions me to contribute creatively to the ever-evolving landscape of Web Development. Whether it&apos;s crafting elegant code, developing intuitive user interfaces, or collaborating on complex projects, I bring a distinctive set of skills and perspectives that set me apart in the realm of Web Development and Tech Repairing.
                    </p>
                    <button
                        onClick={readAloud}
                        id="play-button"
                        data-toggle="off"
                        className="btn">Read Aloud</button>
                </div>
            </div>
        </section>
    );
}