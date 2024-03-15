// Importing Modules
import '../JavaScript/skills.js';
import '../JavaScript/project.js';
import '../JavaScript/testimonial.js';

//  Targeting HTML Elements
const footer = document.querySelector('#footerBackgroundColorToggle');
const backgroundBtn = document.querySelector('#background-Toggle');
const uniqueText = document.querySelectorAll(".highlight-Toggle");
const linkContainer = document.querySelector('.links-container');
const formError = document.getElementById('validationError');
const aboutPElement = document.getElementById('ReadTextAI');
const playButton = document.getElementById('play-button');
const contactBtn = document.getElementById('contact-btn');
const toggleBtn = document.querySelector('.toggle-btn');
const firstName = document.getElementById('first-name');
const countdown = document.querySelector("#countdown");
const resumeBtn = document.getElementById('resumeBtn');
const lastName = document.getElementById('last-name');
const navigation = document.querySelector('.navbar');
const timer = window.setInterval(countItDown, 1000);
const links = document.querySelectorAll('.link');
const msg = document.getElementById('message');
const email = document.getElementById('email');
const form = document.getElementById('form');
const userInfo = [firstName, lastName, email, msg];

initSwiper();


// Countdown
function countItDown() {
    const currentTime = parseFloat(countdown.textContent);
    if (currentTime > 0) {
        countdown.textContent = currentTime - 1;   
    }
    else {
        window.clearInterval(timer);
    }
};


// Toggle Navbar
toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    linkContainer.classList.toggle('show');
})


// Navigation Link Toggle
links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(ele => ele.classList.remove('active'));
        link.classList.add('active');
    })
})


// Toggles
backgroundBtn.addEventListener('click', () => {
    document.body.classList.toggle('changeBackgroundColor');
    navigation.classList.toggle('changeNavColorByToggle');
    footer.classList.toggle('footerBackgroundColorToggle');
    footer.children[1].style.color = '#fff';
    for(let element of uniqueText) element.classList.toggle('changeTextColor');
})


// Resume Button
resumeBtn.addEventListener('click', () => {
    window.open('./Assets/Nazir_Knuckles_Portfolio_Resume.pdf', '_blank');
})


// Speechsynthesis Button
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


// Allows Speechsynthesis to speak
const playText = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1;
    speechSynthesis.speak(utterance);
}


// Contact Form Submit Button
form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateUserInput();
})


// Initializes Testimonial Swiper
function initSwiper() {
    new Swiper('.swiper', {
        autoHeight: true,
        // Enable continuous loop for the slides
        loop: true,
        // Configuring bottom navigation dots for slide tracking
        pagination: {
            el: '.swiper-pagination',
        },
        // If the user clicks any of these buttons it will swipe over
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
}


// Validating user input that was submitted
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