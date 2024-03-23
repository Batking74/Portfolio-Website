export default function ContactComponent() {
    return (
        <section className="contact" id="contact-section">
            <form id="form" action="./HTML/thankYou.html">
                <h2 className="heading">Contact<span className="highlight highlight-Toggle"> me</span></h2>
                <p className="sub-heading">
                    I'm genuinely excited to provide support and empower visions. Feel free to contact me, and we'll navigate this journey together!
                </p>
                <div className="seperator"></div>
                <div className="contact-form">
                    <div className="name">
                        <input type="text" id="first-name" className="first-name" placeholder="First name" />
                        <div id="validationError" className="validationError"></div>
                        <input type="text" id="last-name" className="last-name" placeholder="Last name" />
                    </div>
                    <input type="email" placeholder="Email" id="email" className="email" />
                    <textarea
                        maxLength="5000"
                        id="message"
                        className="message"
                        placeholder="Message..."
                        cols="30"
                        rows="10" />
                    <button type="submit" id="contact-btn" className="btn">Contact</button>
                </div>
            </form>
        </section>
    );
}