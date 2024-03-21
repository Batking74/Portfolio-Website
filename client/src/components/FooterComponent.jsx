// Importing Modules/Packages
import React from "react";

export default function FooterComponent() {
    return (
        <footer id="footerBackgroundColorToggle" className="footer">
            <div>
                <a href="https://www.instagram.com/mr_blacknificent/">
                    <img loading="lazy" src="./IMG/Black_Instagram_Icon.webp" alt="Instagram Icon" />
                </a>
                <a href="https://www.youtube.com/channel/UCZ0xj4NiBVNSTVIu2B7ufqg">
                    <img loading="lazy" src="./IMG/YouTube-Icon.webp" alt="YouTube Icon" />
                </a>
                <a href="https://www.linkedin.com/in/nazir-knuckles-736970234/">
                    <img loading="lazy" src="./IMG/Linked.webp" alt="LinkedIn Icon" />
                </a>
                <a href="https://github.com/Batking74">
                    <img loading="lazy" src="./IMG/GitHub.webp" alt="GitHub Icon" />
                </a>
            </div>
        </footer>
    );
}