// Importing Module
import { setActive } from "./utils/utils";


export default function Navigation() {

    // Toggle Navbar
    const toggleNavBar = ({ classList }) => {
        const linkContainer = document.querySelector('.links-container');
        linkContainer.classList.toggle('show');
        classList.toggle('active');
    }

    // Nav Links
    const links = [
        { LinkName: 'Home', Href: '#' },
        { LinkName: 'About', Href: '#about-section' },
        { LinkName: 'Skills', Href: '#skill-section' },
        { LinkName: 'Projects', Href: '#project-section' },
        { LinkName: 'Testimonials', Href: '#Testimonials-Section' },
        { LinkName: 'Certificates', Href: '#certificate-section' },
        { LinkName: 'Contact', Href: '#contact-section' }
    ];

    return (
        <>
            {/* Start of Navigation */}
            <nav className="navbar">
                <span className="brand-container">
                    <h1 className="brand">Batking</h1>
                    <img src="/images/others/logo.svg" className="App-logo" alt="React logo" />
                </span>
                <div
                    onClick={({ target }) => toggleNavBar(target)}
                    className="toggle-btn">
                    <span></span>
                    <span></span>
                </div>
                <ul className="links-container">
                    {links.map(({ LinkName, Href }, i) => {
                        let classes = 'link';
                        if (Href === '#') classes += ' active';
                        return (
                            <li
                                key={i + 1}
                                onClick={({ target }) => {
                                    setActive(target.parentElement.parentElement, target.classList)
                                }}
                                className="links-item">
                                <a href={Href} className={classes}>{LinkName}</a>
                            </li>
                        );
                    })}
                </ul>
                <div id="validationError" className="validationError"></div>
            </nav>
        </>
    );
}