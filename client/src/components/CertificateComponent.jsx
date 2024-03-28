// Importing Module
import Certificates from "./UI/Certificates";
export default function CertificateComponent() {
    return (
        <section className="project" id="certificate-section">
            <h2 className="heading">
                Continuous Learning Certificate<span className="highlight highlight-Toggle">s</span>
            </h2>
            <p className="sub-heading">Keeping up to date with the leastest, and greatest tech!</p>
            <div className="seperator"></div>
            <div className="certificate-container">
                <Certificates props={[
                    {
                        Link: '/images/credentials/University_of_Minessota_certificate_2024-03-26.pdf',
                        Image: '/images/credentials/University_of_Minessota_certificate_2024-03-26.webp',
                        AltText: 'Nazirs Coding Bootcamp Certificate',
                        Tags: '#University of Minnesota Coding Bootcamp',
                        Description: "Bootcamp: Learned the MERN Stack, ORM'S, MVC Design Architecture, GraphQL, and so much more!"
                    },
                    {
                        Link: 'https://www.credly.com/badges/734b8a3b-52c8-440f-aa26-06cde1fde032',
                        Image: '/images/credentials/Naz_UM_Badge.webp',
                        AltText: 'Nazirs University of Minnesota Bootcamp Badge',
                        Tags: '#University of Minnesota Coding Bootcamp',
                        Description: 'University of Minnesota Bootcamp Badge for my Achievements!'
                    },
                    {
                        Link: 'https://courses.edx.org/certificates/b29eb7a5f59b4bc1b109ad6ecab511ca',
                        Image: '/images/credentials/Nazirs_edX_Prompt_Engineering_Certificate.webp',
                        AltText: 'Nazirs edX Prompt Engineering Certificate',
                        Tags: '#Edx',
                        Description: 'Prompt Engineering: Learned about AI, Machine Learning, Transformer Models, Deep Learning, Prompt Engineering Techniques such as Zero-Shot-Prompting, First-Shot-Prompting, Condition-Shot-Prompting, and much more!'
                    }
                ]} />
            </div>
        </section >
    );
}