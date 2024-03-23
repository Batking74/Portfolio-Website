export default function Projects({ projects, DisplayedProjects }) {

    return projects.map(({ Name, HashTags, Image, url }, i) => {
        if (DisplayedProjects === 'all-projects' || HashTags.includes(`#${DisplayedProjects}`)) {
            return (
                <div key={i + 1}>
                    <a href={url} className="project-card" data-tags={`#all-projects ${HashTags}`}>
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