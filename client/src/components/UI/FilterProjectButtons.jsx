// Importing Module
import { setActive } from "../utils/utils";

export default function FilterProjectButtons({ filters, showNewProjects }) {
    const filter = ({ id, parentElement, classList }) => {
        // Displaying Projects that only contains the id/Tag
        showNewProjects(id);
        setActive(parentElement.parentElement, classList);
    }

    return filters.map(({ Name }, i) => {
        let classes = 'project-filter-btn';
        if (Name === 'All') classes += ' active';
        return (
            <span key={i + 1}>
                <button
                    onClick={({ target }) => filter(target)}
                    className={classes}
                    id={Name}>
                    {Name}
                </button>
            </span>
        );
    });
}