export default function CertificateComponent() {
    return (
        <section className="project" id="certificate-section">
            <h2 className="heading">
                Continuous Learning Certificate<span className="highlight highlight-Toggle">s</span>
            </h2>
            <p className="sub-heading">Keeping up to date with the leastest, and greatest tech!</p>
            <div className="seperator"></div>
            <div className="certificate-container">

                {/* Prompt Engineering Certificate */}
                <a
                    href="https://courses.edx.org/certificates/b29eb7a5f59b4bc1b109ad6ecab511ca" className="project-card">
                    <img
                        loading="lazy"
                        src="/images/credentials/Nazirs_edX_Prompt_Engineering_Certificate.webp"
                        alt="Nazirs edX Prompt Engineering Certificate" />
                    <div className="content">
                        <p className="certificate-description">
                            Prompt Engineering: Learned about AI, Machine Learning, Transformer Models, Deep Learning, Prompt Engineering Techniques such as Zero-Shot-Prompting, First-Shot-Prompting, Condition-Shot-Prompting, and so on.
                        </p>
                        <span className="tags">#EdX</span>
                    </div>
                </a>
            </div>
        </section >
    );
}