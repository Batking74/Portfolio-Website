export default function FilterProjectButtons({ filters, showNewProjects }) {
    const filter = ({ id, parentElement, classList }) => {

        // Displaying Projects that only contains the id/Tag
        showNewProjects(id);

        // Grabbing each elements classList to see which one was active, and removing the active class
        // Fix Time Complexity
        for (let { children } of parentElement.parentElement.children) {
            for (let { classList } of children) {
                if (classList[1] === 'active') classList.remove('active');
            }
        }

        // Adding the active class to the btn the user clicked on to filter
        classList.add('active');
    }

    return filters.map(({ Name, id }, i) => {
        let classes = 'project-filter-btn';
        if (Name === 'All') classes += ' active';
        return (
            <span key={i + 1}>
                <button
                    onClick={({ target }) => filter(target)}
                    className={classes}
                    id={id}>
                    {Name}
                </button>
            </span>
        );
    });
}