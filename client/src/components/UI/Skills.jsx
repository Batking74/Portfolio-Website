export default function Skills({ props }) {
    const [skills, idenifier] = props;

    const displaySkills = (Skill, BackgroundColor, skillFontSize, i) => {
        if (skillFontSize) {
            // Tech Arsenal
            return (
                <div key={i + 1} className="skill-card" style={{ '--bg': BackgroundColor }}>
                    <p className="skill" style={{ fontSize: skillFontSize }}>{Skill}</p>
                </div>
            );
        }
        else {
            // Self Teaching Aspirations
            return (
                <div key={i + 1} className="skill-card" style={{ '--bg': BackgroundColor }}>
                    <p className="skill">{Skill}</p>
                </div>
            );
        }
    }
    return skills.map(({ Skill, BackgroundColor, SkillSize, isInTechArsenal }, i) => {
        if (idenifier && isInTechArsenal) return displaySkills(Skill, BackgroundColor, SkillSize, i);
        else if (!idenifier && !isInTechArsenal) return displaySkills(Skill, BackgroundColor, SkillSize, i);
    })
}