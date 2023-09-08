import App from "./App";

export const alt = new Array(2);
alt[0] = "Me 14 years old (Freshmen Year)";
alt[1] = "Me 17 years old (Senior Year)";

// Contact Form Validation
export function validateUserInput(e) {
    e.preventDefault()
    const userInput = document.querySelectorAll('#User-Input');
    new Promise((resolve, reject) => {
    for(let i = 0; i < userInput.length; i++) {
        if(userInput[i].value === '') {
        userInput[i].style.background = "red"
        setTimeout(() => { userInput[i].style.background = "#000" }, 5000);
        reject('All feilds must be filled out!');
        }
        else { resolve('Processing...') }
    }
    })
    .then(() => {
    setTimeout(console.log('Complete!'), 2000);
    window.location.replace('youtube.com');
    })
    .catch((message) => {
    // alert(message);
    })
}


// Toggle Responsive Navbar
export function toggleNavBar() {
    const toggleBtn = document.querySelector('.toggle-btn');
    const linkContainer = document.querySelector('.links-container');
    toggleBtn.classList.toggle('active');
    linkContainer.classList.toggle('show');
}

// Navigation Link Toggle
export function toggleLink(e) {
    const links = document.querySelectorAll('.link');
    links.forEach(ele => ele.classList.remove('active'));
    e.target.classList.add('active');
}

// Speechsynthesis
export function readAboutSection() {
    const playButton = document.getElementById('play-button');
    const aboutText = document.getElementById('ReadTextAI');
    playText(aboutText.textContent);
    playButton.innerHTML = `<svg style="width: 20px; height: 20px" viewBox="0 0 24 24"><path fill="currentColor" d="M14,19H18V5H14M6,19H10V5H6V19Z" /></svg>`;
    playButton.addEventListener('click', () => {
        speechSynthesis.cancel();
        playButton.innerHTML = `Read Aloud`;
        playButton.reset();
    })
}

export function playText(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1;
    speechSynthesis.speak(utterance);
}

export const startCountDown = () => {
    console.log('hi')
    // Countdown
    // Step 1. What element do we want to animate?
    // const countdown = document.querySelector(".countdown");
    // console.log(e)
    // Step 2. What function will change it each time?
    // const currentTime = parseFloat(countdown.textContent);
    // if (currentTime > 0) {
    // countdown.textContent = currentTime - 1;
    // }
}

// Filter Projects
export function filterProjects(e) {
    const filter = document.querySelectorAll('.filter-btn');
    filter.forEach(ele => ele.classList.remove('active'));
    e.target.classList.add('active');
}

export function instantiateProjects(name, tag, image, link, doc) {
    doc.textContent = `Nazir's Portfolio`;
    let projects = [];
    for(let i = 1; i < 9; i++) {
      const item = new App(name[i], tag[i], image[i+2], link[i]);
      projects.push(item);
    }
    return projects;
}

export function setCaption(i) {
    const p = document.querySelectorAll('#img-caption');
    if(i === 0) p[0].classList.add('imgCap1-style');
    else p[1].innerHTML = alt[1];
}

// // Toggles
export function toggleBackground() {
    const navigation = document.querySelector('.navbar')
    const footer = document.querySelector('#footerBackgroundColorToggle')
    const uniqueText = document.querySelectorAll("#highlight-Toggle");
    document.body.classList.toggle('changeBackgroundColor');
    navigation.classList.toggle('changeNavColorByToggle');
    footer.classList.toggle('footerBackgroundColorToggle');
    uniqueText.classList.toggle('highlight-Toggle');
}


// Play Music
// const playMusic = document.querySelector('.playMusic');
// playMusic.addEventListener('click', () => {
//     playMusic.innerHTML = `<svg style="width: 20px; height: 20px" viewBox="0 0 24 24"><path fill="currentColor" d="M14,19H18V5H14M6,19H10V5H6V19Z" /></svg>`;
// })