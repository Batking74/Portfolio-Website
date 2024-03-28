export default function Certificates({ props }) {
    return props.map(({ Image, Link, Description, AltText, Tags }, i) => {
        return (
            <a href={Link} key={i + 1} className="project-card">
                <img
                    loading="lazy"
                    src={Image}
                    alt={AltText} />
                <div className="content">
                    <p className="certificate-description">
                        {Description}
                    </p>
                    <span className="tags">{Tags}</span>
                </div>
            </a>
        );
    });
}