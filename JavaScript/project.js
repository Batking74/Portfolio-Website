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

// Creating Dynamic Project Card
const projectContainer = document.querySelector('.project-container');
class myProjects {
    constructor(name, tags, image, link) {
        // New Instances
        this.name = name;
        this.tags = tags;
        this.image = image;
        this.link = link;
    }
}

const placeHolder = ['Coming Soon', '', './IMG/Lion2.JPG', '#']
const tags = ['#HTML', '#CSS', '#JS', '#Node.js', '#SQL', '#Jquery', '#Bootstrap'];
const [html, css, js, node, sql, jQuery, bootstrap] = tags

// Project Titles
const title = new Queue();
title.enqueue('Palmer Studios');
title.enqueue('Budget Calculator');
title.enqueue('Talking Computer');
title.enqueue('Digital Art Portfolio');
title.enqueue('Password Generator');
title.enqueue('Meal Discovery');
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

// Project Hashtags
const hashTags = new Queue();
hashTags.enqueue(`${html} ${css} ${js} ${node} ${sql}`);
hashTags.enqueue(`${html} ${css} ${js} ${node} ${sql}`);
hashTags.enqueue(`${html} ${css} ${js}`);
hashTags.enqueue(`${html} ${css}`);
hashTags.enqueue(`${html} ${css} ${js}`);
hashTags.enqueue(`${html} ${css} ${js} ${jQuery} ${bootstrap}`);
hashTags.enqueue(`${html} ${css} ${js} ${jQuery} ${bootstrap}`);
hashTags.enqueue(`${html} ${css} ${js} ${jQuery} ${bootstrap}`);
hashTags.enqueue(`${html} ${css}`);
hashTags.enqueue(`${html} ${css}`);
hashTags.enqueue(`${html} ${css}`);
hashTags.enqueue(`${html} ${css} ${js}`);
hashTags.enqueue(`${html} ${css} ${js}`);
hashTags.enqueue(`${html} ${css} ${js}`);
hashTags.enqueue(`${html} ${css}`);
hashTags.enqueue(`${html} ${css}`);

// Project Images
const image = new Queue();
image.enqueue('./IMG/Palmer_Studios_Project.webp');
image.enqueue('./IMG/Budget_Calculator_Project.webp');
image.enqueue('./IMG/Talking_Computer_Project.webp');
image.enqueue('./IMG/Art_Portfolio_Project.webp');
image.enqueue('./IMG/Password Generator.webp');
image.enqueue('./IMG/Meal_Discovery_Project.webp');
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

// Project URL
const url = new Queue();
url.enqueue('https://batking74.github.io/Kekes_Model_Website/');
url.enqueue('https://batking74.github.io/Budget-Calculator/');
url.enqueue('https://batking74.github.io/Talking_Computer_Project/');
url.enqueue('https://batking74.github.io/Digital_Art_Portfolio_Project--First-ever-project-/');
url.enqueue('https://batking74.github.io/Password-Generator/');
url.enqueue('https://mrwait-music.github.io/super-group-project/');
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
projectsComingSoon(0);

const productList = new Queue();

// Instantiation
for(let i = 0; i < title.size(); i++) {
    const object = new myProjects(title.getIndex(i), hashTags.getIndex(i), image.getIndex(i), url.getIndex(i));
    productList.enqueue(object);
}

productList.list.forEach(project => displayProjects(project));

// Filter Projects
const filter = document.querySelectorAll('.filter-btn');
filter.forEach(btn => {

    // If any of the buttons are clicked filter the projects based on the skill
    btn.addEventListener('click', (e) => {
        if(e.target.classList[1] != 'active') {
            projectContainer.innerHTML = '';
            for(let i = 0; i < productList.size(); i++) {
                const project = productList.getIndex(i);
                if(project.tags.includes(`#${e.target.id}`)) {
                    displayProjects(project);
                }
                else if(e.target.id === 'all') {
                    displayProjects(project);
                }
            }
            filter.forEach(ele => ele.classList.remove('active'));
            btn.classList.add('active');
        }
    })
})

// Displays Products on Web Page
function displayProjects(project) {
    projectContainer.innerHTML += `
        <a href="${project.link}" class="project-card" data-tags="#all, ${project.tags}">
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
