// Countdown
  // Step 1. What element do we want to animate?
  const countdown = document.querySelector("#countdown");
  // Step 2. What function will change it each time?
  const countItDown = () => {
    const currentTime = parseFloat(countdown.textContent);
    if (currentTime > 0) {
       countdown.textContent = currentTime - 1;   
    } else {
        window.clearInterval(timer);
    }
    
  };
  // Step 3: Call that on an interval
  var timer = window.setInterval(countItDown, 1000);

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
const navigation = document.querySelector('.navbar')
const footer = document.querySelector('#footerBackgroundColorToggle')
const uniqueText = document.querySelectorAll("#highlight-Toggle");
backgroundBtn.addEventListener('click', () => {
    document.body.classList.toggle('changeBackgroundColor');
    navigation.classList.toggle('changeNavColorByToggle');
    footer.classList.toggle('footerBackgroundColorToggle');
    uniqueText.classList.toggle('highlight-Toggle');
})

// Play Music
const playMusic = document.querySelector('.playMusic');
playMusic.addEventListener('click', () => {
    playMusic.innerHTML = `<svg style="width: 20px; height: 20px" viewBox="0 0 24 24"><path fill="currentColor" d="M14,19H18V5H14M6,19H10V5H6V19Z" /></svg>`;
})

// Speechsynthesis
const playButton = document.getElementById('play-button');
const textInput = document.getElementById('ReadTextAI');
playButton.addEventListener('click', () => {
    playText(textInput.textContent);
    playButton.innerHTML = `<svg style="width: 20px; height: 20px" viewBox="0 0 24 24"><path fill="currentColor" d="M14,19H18V5H14M6,19H10V5H6V19Z" /></svg>`;
    playButton.addEventListener('click', () => {
        speechSynthesis.cancel();
        playButton.innerHTML = `Read Aloud`;
        playButton.reset();
    })
})
const playText = (text) => {
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.rate = 1;
    speechSynthesis.speak(utterance)
    }

// Filter Projects
const filter = document.querySelectorAll('.filter-btn');
filter.forEach(btn => {
    btn.addEventListener('click', () => {
        filter.forEach(ele => ele.classList.remove('active'));
        btn.classList.add('active');
    })
})

// Creating Dynamic Project Card
const projectContainer = document.querySelector('.project-container');
class myProjects {
    constructor(name, tags, image) {
        // New Instances
        this.name = name;
        this.tags = tags;
        this.image = image;
    }
}
// Instantiation
item1 = new myProjects('Project one', '#Javascript', '/IMG/Lion2.JPG');
item2 = new myProjects('Project one', '#Bootstrap', '/IMG/Lion2.JPG');
item3 = new myProjects('Project one', '#Java', '/IMG/Lion2.JPG');
item4 = new myProjects('Project one', '#React', '/IMG/Lion2.JPG');
item5 = new myProjects('Project one', '#Python', '/IMG/Lion2.JPG');
item6 = new myProjects('Project one', '#Javascript', '/IMG/Lion2.JPG');
item7 = new myProjects('Project one', '#Javascript', '/IMG/Lion2.JPG');
item8 = new myProjects('Project one', '#Javascript', '/IMG/Lion2.JPG');
myProjectsArray = [item1, item2, item3, item4, item5, item6, item7, item8];
myProjectsArray.forEach(project => {
    projectContainer.innerHTML += `
            <div class="project-card data-tags="#all, ${project.tags}">
                <img src="${project.image}" alt="">
                <div class="content">
                    <h1 class="project-name">${project.name}</h1>
                    <span class="tags">${project.tags}</span>
                </div>
            </div>
    `;
})

// Contact Form
const form = document.getElementById('form');
const contactBtn = document.getElementById('contact-btn');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const msg = document.getElementById('message');
const formError = document.getElementById('validationError');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    e.validateNames();
    }
)

validateNames() = new Promise((resolve, reject) => {
    if(firstName.value === '' || firstName.value === null || lastName.value === '' || lastName.value === null || email.value === '' || email.value === null || msg.value === '' || msg.value === null || formError.value === '' || formError.value === null) {
        reject('All feilds are required!')
    } else {
        resolve('Processing...')
    }
}).then(() => {
    setTimeout(console.log('Complete!'), 2000);
    window.location.href = 'http://127.0.0.1:5555/HTML/thankYou.html?';
}).catch((message) => {
    console.log(message);
})

console.log(validateNames);