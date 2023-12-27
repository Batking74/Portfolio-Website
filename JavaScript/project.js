// Targeting HTML Elements
const projectContainer = document.querySelector('.project-container');
const filter = document.querySelectorAll('.project-filter-btn');


// Queue Data Structure
class Queue {
    constructor() {
        this.list = [];
    }

    // O(1)
    enqueue(data) {
        this.list.push(data);
    }
    
    // O(1)
    dequeue() {
        if(this.isEmpty()) return 'Queue is Empty!';
        return this.list.shift();
    }
    
    // O(1)
    peek() {
        if(this.isEmpty()) return 'Queue is Empty!';
        return this.list[0];
    }
    
    // O(1)
    isEmpty() {
        if(this.list.length == 0) return true;
        return false;
    }
    
    // O(1)
    size() {
        return this.list.length;
    }
    
    // O(1)
    print() {
        console.log(this.list);
    }
    
    // O(1)
    getIndex(i) {
        return this.list[i]
    }
}


// Creating Project Class
class Project {
    constructor(name, tags, image, link) {
        // New Instances
        this.name = name;
        this.tags = tags;
        this.image = image;
        this.link = link;
    }
}


const placeHolder = ['Coming Soon', '', './IMG/Lion2.JPG', '#'];


// Filter Tags
const tags = [
    '#HTML',
    '#CSS',
    '#JS',
    '#Node.js',
    '#SQL',
    '#Jquery',
    '#Bootstrap',
    '#Java',
    '#XML',
    '#Groovy',
    '#Sequelize',
    '#Express',
    '#Self-Teaching',
    '#Bootcamp'];
const [html, css, js, node, sql, jQuery, bootstrap, java, xml, groovy, sequelize, express, selfTeach, bootcamp] = tags;


// Project Titles
const title = new Queue();
title.enqueue('Palmer Studios');
title.enqueue('Budget Calculator');
title.enqueue('Talking Computer');
title.enqueue('Digital Art Portfolio');
title.enqueue('Password Generator');
// title.enqueue('Meal Discovery');
title.enqueue('Project-Tracker');
title.enqueue('Work Day Scheduler');
title.enqueue('Landing Page Project 1');
title.enqueue('Login Page Project');
title.enqueue('Horiseon Project');
title.enqueue('Digital Calculator Project');
title.enqueue('Weather Dashboard');
title.enqueue('Find Repo Issues');
title.enqueue('Store Design');
title.enqueue('Blog Design');
title.enqueue('Portfolio Project');
title.enqueue('MedShareNetwork');
title.enqueue('Coming Soon');
title.enqueue('Coming Soon');
title.enqueue('Coming Soon');
title.enqueue('Android Login App with Google Sign In');


// Project Hashtags
const hashTags = new Queue();
hashTags.enqueue(`${html} ${css} ${js} ${node} ${sql} ${selfTeach}`);
hashTags.enqueue(`${html} ${css} ${js} ${node} ${sql} ${selfTeach}`);
hashTags.enqueue(`${html} ${css} ${js} ${selfTeach}`);
hashTags.enqueue(`${html} ${css} ${selfTeach}`);
hashTags.enqueue(`${html} ${css} ${js} ${bootcamp}`);
// hashTags.enqueue(`${html} ${css} ${js} ${jQuery} ${bootstrap}`);
hashTags.enqueue(`${html} ${css} ${js} ${jQuery} ${bootstrap} ${bootcamp}`);
hashTags.enqueue(`${html} ${css} ${js} ${jQuery} ${bootstrap} ${bootcamp}`);
hashTags.enqueue(`${html} ${css} ${selfTeach}`);
hashTags.enqueue(`${html} ${css} ${selfTeach}`);
hashTags.enqueue(`${html} ${css} ${bootcamp}`);
hashTags.enqueue(`${html} ${css} ${js} ${selfTeach}`);
hashTags.enqueue(`${html} ${css} ${js} ${bootcamp}`);
hashTags.enqueue(`${html} ${css} ${js} ${bootcamp}`);
hashTags.enqueue(`${html} ${css} ${bootcamp}`);
hashTags.enqueue(`${html} ${css} ${bootcamp}`);
hashTags.enqueue(`${html} ${css} ${bootcamp}`);
hashTags.enqueue(`${html} ${css} ${js} ${node} ${sql} ${sequelize} ${express} ${bootcamp}`);
hashTags.enqueue(``);
hashTags.enqueue(``);
hashTags.enqueue(``);
hashTags.enqueue(`${java} ${xml} ${groovy} ${selfTeach}`);


// Project Images
const image = new Queue();
image.enqueue('./IMG/Palmer_Studios_Project.webp');
image.enqueue('./IMG/Budget_Calculator_Project.webp');
image.enqueue('./IMG/Talking_Computer_Project.webp');
image.enqueue('./IMG/Art_Portfolio_Project.webp');
image.enqueue('./IMG/Password Generator.webp');
// image.enqueue('./IMG/Meal_Discovery_Project.webp');
image.enqueue('./IMG/Project-Tracker-Project.webp');
image.enqueue('./IMG/Work_day_calendar.webp');
image.enqueue('./IMG/Landing_Page_Project_1.webp');
image.enqueue('./IMG/Login_Project.webp');
image.enqueue('./IMG/Horiseon_Project.webp');
image.enqueue('./IMG/Calculator_project.webp');
image.enqueue('./IMG/Weather-Dashboard.webp');
image.enqueue('./IMG/Find-Repo-Issues-Project.webp');
image.enqueue('./IMG/Store-Design-Project.webp');
image.enqueue('./IMG/Blog-Design-Project.webp');
image.enqueue('./IMG/Naz_Portfolio_Project_Screenshot.webp');
image.enqueue('./IMG/MedShareNetwork.webp');
image.enqueue('./IMG/Placeholder.webp');
image.enqueue('./IMG/Placeholder.webp');
image.enqueue('./IMG/Placeholder.webp');
image.enqueue('./IMG/Android_Login_Page.webp');


// Project URL's
const url = new Queue();
url.enqueue('https://palmer-studios-f1975e2e82dd.herokuapp.com/');
url.enqueue('https://budgeting-calculator-878dd6a27579.herokuapp.com/');
url.enqueue('https://batking74.github.io/Talking_Computer_Project/');
url.enqueue('https://batking74.github.io/Digital_Art_Portfolio_Project--First-ever-project-/');
url.enqueue('https://batking74.github.io/Password-Generator/');
// url.enqueue('https://mrwait-music.github.io/super-group-project/');
url.enqueue('https://batking74.github.io/Project-Tracker/');
url.enqueue('https://batking74.github.io/Work-Day-Calendar/');
url.enqueue('https://batking74.github.io/Landing-Page-Project/');
url.enqueue('https://batking74.github.io/Login_Page_Project/');
url.enqueue('https://batking74.github.io/Horiseon-Project/');
url.enqueue('https://batking74.github.io/Digital_Calculator_Project/');
url.enqueue('https://batking74.github.io/Weather-Dashboard/');
url.enqueue('https://batking74.github.io/Find-Repo-Issues/');
url.enqueue('https://batking74.github.io/Store-Design/');
url.enqueue('https://batking74.github.io/Blog-Design/');
url.enqueue('https://batking74.github.io/Portfolio-Project/');
url.enqueue('https://medsharenetwork-3691a9c0e268.herokuapp.com/');
url.enqueue('');
url.enqueue('');
url.enqueue('');
url.enqueue('');
projectsComingSoon(0);

const productList = new Queue();

// Instantiation of all Projects
for(let i = 0; i < title.size(); i++) {
    const object = new Project(title.getIndex(i), hashTags.getIndex(i), image.getIndex(i), url.getIndex(i));
    productList.enqueue(object);
}


// Displaying Each Project to the UI
productList.list.forEach(project => displayProjects(project));


// Adding EventListeners to all buttons
filter.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if(e.target.classList[1] != 'active') {
            projectContainer.innerHTML = '';
            for(let i = 0; i < productList.size(); i++) filterProjects(i, e);
            filter.forEach(ele => ele.classList.remove('active'));
            btn.classList.add('active');
        }
    })
})


// Filters out projects based on the skill #
function filterProjects(i, e) {
    const project = productList.getIndex(i);
    if(project.tags.includes(`#${e.target.id}`)) displayProjects(project);
    else if(e.target.id === 'all-projects') displayProjects(project);
}


// Displays Products on Web Page
function displayProjects(project) {
    projectContainer.innerHTML += `
        <a href="${project.link}" class="project-card" data-tags="#all-projects, ${project.tags}">
            <img loading="lazy" src="${project.image}" alt="${project.name}">
            <div class="content">
                <h1 class="project-name">${project.name}</h1>
                <span class="tags">${project.tags}</span>
            </div>
        </a>
    `;
}


// Displays the Number of Projects I got comming soon
function projectsComingSoon(num) {
    for(let i = 0; i < num; i++) {
        title.enqueue(placeHolder[0]);
        hashTags.enqueue(placeHolder[1]);
        image.enqueue(placeHolder[2]);
        url.enqueue(placeHolder[3]);
    }
}