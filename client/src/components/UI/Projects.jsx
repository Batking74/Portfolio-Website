export default function Projects({ projects, DisplayedProjects }) {

    return projects.map(({ Name, HashTags, Image, url }, i) => {
        if (DisplayedProjects === 'All' || HashTags.includes(`#${DisplayedProjects}`)) {
            return (
                <div key={i + 1}>
                    <a href={url} className="project-card" data-tags={`#All ${HashTags}`}>
                        <img loading="lazy" src={Image} alt={Name} />
                        <div className="content">
                            <h1 className="project-name">{Name}</h1>
                            <span className="tags">{HashTags}</span>
                        </div>
                    </a>
                </div>
            );
        }
    });
}