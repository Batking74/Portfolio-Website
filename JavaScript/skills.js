const skillContainers = document.querySelectorAll('.skill-container');



const skills = [
    {
        Skill: 'HTML',
        BackgroundColor: '#ffa600ac',
        SkillSize: null,
        isInTechArsenal: true
    },
    {
        Skill: 'CSS',
        BackgroundColor: '#0000ffb3',
        SkillSize: null,
        isInTechArsenal: true
    },
    {
        Skill: 'JavaScript',
        BackgroundColor: '#ffff00b7',
        SkillSize: null,
        isInTechArsenal: true
    },
    {
        Skill: 'Big O Notation',
        BackgroundColor: '#d41f1fb7',
        SkillSize: 20,
        isInTechArsenal: true
    },
    {
        Skill: 'Sigma Notation',
        BackgroundColor: '#ffff00b7',
        SkillSize: 20,
        isInTechArsenal: true
    },
    {
        Skill: 'Recursive Tree Method',
        BackgroundColor: '#185801b7',
        SkillSize: 17,
        isInTechArsenal: true
    },
    {
        Skill: 'Asymptotic Analysis',
        BackgroundColor: '#618454b7',
        SkillSize: 20,
        isInTechArsenal: true
    },
    {
        Skill: 'React',
        BackgroundColor: '#0c35bd',
        SkillSize: null,
        isInTechArsenal: true
    },
    {
        Skill: 'Binary',
        BackgroundColor: '#3bbd0c',
        SkillSize: 20,
        isInTechArsenal: true
    },
    {
        Skill: 'Hexadecimal',
        BackgroundColor: '#ce2b2b',
        SkillSize: 20,
        isInTechArsenal: true
    },
    {
        Skill: "REST API's",
        BackgroundColor: '#59bd0c',
        SkillSize: 20,
        isInTechArsenal: true
    },
    {
        Skill: 'Node.js',
        BackgroundColor: '#13e4d3',
        SkillSize: null,
        isInTechArsenal: true
    },
    {
        Skill: 'Express',
        BackgroundColor: '#7813e4',
        SkillSize: null,
        isInTechArsenal: true
    },
    {
        Skill: 'Bootstrap',
        BackgroundColor: '#6200b890',
        SkillSize: null,
        isInTechArsenal: true
    },
    {
        Skill: 'Jquery',
        BackgroundColor: '#b8960090',
        SkillSize: null,
        isInTechArsenal: true
    },
    {
        Skill: 'Java',
        BackgroundColor: '#ffa200',
        SkillSize: null,
        isInTechArsenal: true
    },
    {
        Skill: 'SQL',
        BackgroundColor: '#30c507',
        SkillSize: null,
        isInTechArsenal: true
    },
    {
        Skill: 'Prompt Generation',
        BackgroundColor: '#0770c5',
        SkillSize: 20,
        isInTechArsenal: true
    },
    {
        Skill: 'Git',
        BackgroundColor: '#d89518',
        SkillSize: null,
        isInTechArsenal: true
    },
    {
        Skill: 'GraphQL',
        BackgroundColor: '#cb18d8',
        SkillSize: null,
        isInTechArsenal: true
    },
    {
        Skill: 'MERN Stack',
        BackgroundColor: '#d8ce18',
        SkillSize: 20,
        isInTechArsenal: true
    },
    {
        Skill: 'MVC Design Architecture',
        BackgroundColor: '#0399a4',
        SkillSize: 17,
        isInTechArsenal: true
    },
    {
        Skill: 'Version Control',
        BackgroundColor: '#a52a2a',
        SkillSize: 20,
        isInTechArsenal: true
    },
    {
        Skill: 'Sequelize',
        BackgroundColor: '#d86666',
        SkillSize: null,
        isInTechArsenal: true
    },
    {
        Skill: 'Mongoose',
        BackgroundColor: '#d86666',
        SkillSize: 20,
        isInTechArsenal: true
    },
    {
        Skill: 'Computer Repair',
        BackgroundColor: '#12c0ff',
        SkillSize: 20,
        isInTechArsenal: true
    },
    {
        Skill: 'iPhone Repair',
        BackgroundColor: '#9fb3b7b3',
        SkillSize: 20,
        isInTechArsenal: true
    },
    {
        Skill: 'Cyber Security (Pen Testing)',
        BackgroundColor: '#3f37ce',
        SkillSize: 15,
        isInTechArsenal: false
    },
    {
        Skill: 'Swift',
        BackgroundColor: '#3f37ce',
        SkillSize: null,
        isInTechArsenal: false
    },
    {
        Skill: 'Sass',
        BackgroundColor: '#ec0eb8',
        SkillSize: null,
        isInTechArsenal: false
    },
    {
        Skill: 'iOS Development',
        BackgroundColor: '#736fc4',
        SkillSize: 20,
        isInTechArsenal: false
    },
    {
        Skill: 'llEleven Labs API',
        BackgroundColor: '#7d37ce',
        SkillSize: 20,
        isInTechArsenal: false
    },
    {
        Skill: 'Php',
        BackgroundColor: '#3799ce',
        SkillSize: null,
        isInTechArsenal: false
    },
    {
        Skill: 'More SEO Techniques',
        BackgroundColor: '#37ce3a',
        SkillSize: 17,
        isInTechArsenal: false
    },
    {
        Skill: 'Wordpress',
        BackgroundColor: '#d8e032',
        SkillSize: null,
        isInTechArsenal: false
    },
    {
        Skill: 'Soldering',
        BackgroundColor: '#00e200',
        SkillSize: null,
        isInTechArsenal: false
    },
    {
        Skill: 'Python',
        BackgroundColor: '#0071e2',
        SkillSize: null,
        isInTechArsenal: false
    },
    {
        Skill: 'More Android Development',
        BackgroundColor: '#daa820',
        SkillSize: 14,
        isInTechArsenal: false
    },
    {
        Skill: 'Project Management',
        BackgroundColor: '#3f37ce',
        SkillSize: 17,
        isInTechArsenal: false
    },
    {
        Skill: 'More Device Repairs',
        BackgroundColor: '#37ce94',
        SkillSize: 17,
        isInTechArsenal: false
    },
    {
        Skill: 'More Computer Science',
        BackgroundColor: '#7c7b94',
        SkillSize: 16,
        isInTechArsenal: false
    },
];


for(let { Skill, BackgroundColor, SkillSize, isInTechArsenal } of skills) {
    appendSkillsToHTML(Skill, BackgroundColor, isInTechArsenal, SkillSize);
}

function appendSkillsToHTML(skill, backgroundColor, isInTechArsenal, skillFontSize) {
    if(isInTechArsenal) {
        displaySkillsAt(0, skill, backgroundColor, skillFontSize);
    }
    else {
        displaySkillsAt(1, skill, backgroundColor, skillFontSize);
    }
}

function displaySkillsAt(index, skill, backgroundColor, skillFontSize) {
    if (skillFontSize) {
        skillContainers[index].innerHTML += `
        <div class="skill-card" style="--bg: ${backgroundColor};">
            <p class="skill" style="font-size: ${skillFontSize}px;">${skill}</p>
        </div>
        `
    }
    else {
        skillContainers[index].innerHTML += `
        <div class="skill-card" style="--bg: ${backgroundColor};">
            <p class="skill">${skill}</p>
        </div>
        `
    }
}