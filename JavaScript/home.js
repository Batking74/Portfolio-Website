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

// Countdown
const countdown = document.querySelector("#countdown");
const countItDown = () => {
    const currentTime = parseFloat(countdown.textContent);
    if (currentTime > 0) {
        countdown.textContent = currentTime - 1;   
    } else {
        window.clearInterval(timer);
        location.replace('https://www.instagram.com/mr_blacknificent/')
    }
};

const timer = window.setInterval(countItDown, 1000);

// Toggle Navbar
const toggleBtn = document.querySelector('.toggle-btn');
const linkContainer = document.querySelector('.links-container');
toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    linkContainer.classList.toggle('show');
})

// Navigation Link Toggle
const links = document.querySelectorAll('.link');
links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(ele => ele.classList.remove('active'));
        link.classList.add('active');
    })
})

// Toggles
const backgroundBtn = document.querySelector('#background-Toggle');
const navigation = document.querySelector('.navbar');
const footer = document.querySelector('#footerBackgroundColorToggle');
const uniqueText = document.querySelectorAll("#highlight-Toggle");
backgroundBtn.addEventListener('click', () => {
    document.body.classList.toggle('changeBackgroundColor');
    navigation.classList.toggle('changeNavColorByToggle');
    footer.classList.toggle('footerBackgroundColorToggle');
    uniqueText.classList.toggle('highlight-Toggle');
})

// Working on this feature
// Play Music
// const playMusic = document.querySelector('.playMusic');
// playMusic.addEventListener('click', () => {
//     playMusic.innerHTML = `<svg style="width: 20px; height: 20px" viewBox="0 0 24 24"><path fill="currentColor" d="M14,19H18V5H14M6,19H10V5H6V19Z" /></svg>`;
// })

// Speechsynthesis
const playButton = document.getElementById('play-button');
const aboutPElement = document.getElementById('ReadTextAI');
let toggler = 0;
playButton.addEventListener('click', () => {
    if(playButton.dataset.toggle === 'off') {
        playButton.dataset.toggle = 'on';
        playText(aboutPElement.textContent);
        playButton.innerHTML = `<svg style="width: 20px; height: 20px" viewBox="0 0 24 24"><path fill="currentColor" d="M14,19H18V5H14M6,19H10V5H6V19Z" /></svg>`;
    }
    else {
        playButton.dataset.toggle ='off';
        speechSynthesis.cancel();
        playButton.innerHTML = `Read Aloud`;
    }
});


const playText = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1;
    speechSynthesis.speak(utterance);
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

// Project Titles
const title = new Queue();
title.enqueue('Palmer Studios');
title.enqueue('Budget Calculator');
title.enqueue('Talking Computer');
title.enqueue('Digital Art Portfolio');
title.enqueue('Password Generator');
title.enqueue('Meal Discovery');

// Project Hashtags
const hashTags = new Queue();
hashTags.enqueue(tags[2]);
hashTags.enqueue(`${tags[0]} ${tags[1]} ${tags[2]} ${tags[3]} ${tags[4]}`);
hashTags.enqueue(`${tags[0]} ${tags[1]} ${tags[2]}`);
hashTags.enqueue(`${tags[0]} ${tags[1]}`);
hashTags.enqueue(`${tags[0]} ${tags[1]} ${tags[2]}`);
hashTags.enqueue(`${tags[0]} ${tags[1]} ${tags[2]} ${tags[5]} ${tags[6]}`);

// Project Images
const image = new Queue();
image.enqueue('./IMG/Palmer_Studios_Project.png');
image.enqueue('./IMG/Budget_Calculator_Project.png');
image.enqueue('./IMG/Talking_Computer_Project.png');
image.enqueue('./IMG/Art_Portfolio_Project.png');
image.enqueue('./IMG/Password Generator.png');
image.enqueue('./IMG/Meal_Discovery_Project.png');

// Project URL
const url = new Queue();
url.enqueue('https://batking74.github.io/Kekes_Model_Website/');
url.enqueue('https://batking74.github.io/Budget-Calculator/');
url.enqueue('https://batking74.github.io/Talking_Computer_Project/');
url.enqueue('https://batking74.github.io/Digital_Art_Portfolio_Project--First-ever-project-/');
url.enqueue('https://batking74.github.io/Password-Generator/');
url.enqueue('https://mrwait-music.github.io/super-group-project/');
url.enqueue(placeHolder[3]);
url.enqueue(placeHolder[3]);
projectsComingSoon(2);

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
            <img src="${project.image}" alt="">
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

// Contact Form
const form = document.getElementById('form');
const contactBtn = document.getElementById('contact-btn');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const msg = document.getElementById('message');
const formError = document.getElementById('validationError');
const userInfo = [firstName, lastName, email, msg];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateUserInput();
    }
)

// Validates user input
function validateUserInput() {
    new Promise((resolve, reject) => {
        if(userInfo[0, 1, 2, 3].value == '') {
            reject('All feilds must be filled out!');
        }
        else if(userInfo[0, 1, 2].value == '') {
            reject('All feilds must be filled out!');
        }
        else {
            resolve('Processing...')
        }
    }).then(() => {
        setTimeout(console.log('Complete!'), 2000);
        window.location.href = './HTML/thankYou.html';
    }).catch((message) => {
        alert(message);
    })
}