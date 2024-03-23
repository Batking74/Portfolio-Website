export default function Navigation() {

    const toggleLink = ({ parentElement, classList }) => {
        // Grabbing each nav links children
        for (let { children } of parentElement.parentElement.children) {

            // Grabbing each classList from 'a' links to see which one was active, and removing the active class
            // Fix Time Complexity
            for (let { classList } of children) {
                if (classList[1] === 'active') classList.remove('active');
            }
        }

        // Adding the active class to the link the user clicked on to filter
        classList.add('active');
    }


    // Toggle Navbar
    const toggleNavBar = ({ classList }) => {
        const linkContainer = document.querySelector('.links-container');
        linkContainer.classList.toggle('show');
        classList.toggle('active');
    }

    return (
        <>
            {/* Start of Navigation */}
            <nav className="navbar">
                <h1 className="brand">Batking</h1>
                <div
                    onClick={({ target }) => toggleNavBar(target)}
                    className="toggle-btn">
                    <span></span>
                    <span></span>
                </div>
                <ul className="links-container">
                    <li onClick={({ target }) => toggleLink(target)} className="links-item"><a href="#" className="link active">Home</a></li>
                    <li onClick={({ target }) => toggleLink(target)} className="links-item"><a href="#about-section" className="link">About</a></li>
                    <li onClick={({ target }) => toggleLink(target)} className="links-item"><a href="#skill-section" className="link">Skills</a></li>
                    <li onClick={({ target }) => toggleLink(target)} className="links-item"><a href="#project-section" className="link">Projects</a></li>
                    <li onClick={({ target }) => toggleLink(target)} className="links-item"><a href="#Testimonials-Section" className="link">Testimonials</a></li>
                    <li onClick={({ target }) => toggleLink(target)} className="links-item"><a href="#certificate-section" className="link">Certificates</a></li>
                    <li onClick={({ target }) => toggleLink(target)} className="links-item"><a href="#contact-section" className="link">Contact</a></li>
                </ul>
                <div id="validationError" className="validationError"></div>
            </nav>
        </>
    );
}