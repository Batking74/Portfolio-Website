import '../JavaScript/project.js';

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