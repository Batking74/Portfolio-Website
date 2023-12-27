// Targeting HTML Elements
const testimonialsContainer = document.querySelector('.testimonials-append-container');
const filter = document.querySelectorAll('.testimonial-filter-btn');
const steakholders = ['Collaborator', 'Client'];
const services = ['WebDev', 'TechRepairing'];
const testimonialsList = new Array(2);


// Creating Testimonial Class
class Testimonial {
    constructor(firstName, lastName, message, image, serviceTag, steakholderTag) {
        this.steakholderTag = steakholderTag;
        this.serviceTag = serviceTag;
        this.firstName = firstName;
        this.lastName = lastName;
        this.message = message;
        this.image = image;
    }
}


// Creating Client Testimonial Class
class ClientTestimonial extends Testimonial {
    constructor(firstName, lastName, message, image, serviceTag, steakholderTag, serviceProvided) {
        super(firstName, lastName, message, image, serviceTag, steakholderTag);
        this.serviceProvided = serviceProvided;
    }
}


// Creating Collaborator Testimonial Class
class CollaboratorTestimonial extends Testimonial {
    constructor(firstName, lastName, message, image, serviceTag, steakholderTag, profession) {
        super(firstName, lastName, message, image, serviceTag, steakholderTag);
        this.profession = profession;
    }
}


const testimonial = new ClientTestimonial('Naz', 'Knucks', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.100 words Max', null, services[1], steakholders[1], 'Fixed my computer');

const testimonial2 = new CollaboratorTestimonial('Bat', 'King', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.100 words Max', null, services[0], steakholders[0], 'Full Stack Web Developer');

testimonialsList[0] = testimonial;
testimonialsList[1] = testimonial2;


// Displaying All Testimonials
testimonialsList.forEach(testimonial => displayTestimonials(testimonial));


// Adding EventListeners to all buttons
filter.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if(e.target.classList[1] != 'active') {
            testimonialsContainer.innerHTML = '';
            for(let i = 0; i < testimonialsList.length; i++) filterProjects(i, e);
            filter.forEach(ele => ele.classList.remove('active'));
            btn.classList.add('active');
        }
    })
})


// Filters out projects based on the skill #
function filterProjects(i, e) {
    const testimonial = testimonialsList[i];
    if(testimonial.serviceTag.includes(e.target.id)) {
        displayTestimonials(testimonial);
    }
    else if(testimonial.steakholderTag.includes(e.target.id)) {
        displayTestimonials(testimonial);
    }
    else if(e.target.id === 'all-testimonials') {
        displayTestimonials(testimonial);
    }
}


// Displays Products on Web Page
function displayTestimonials(testimonial) {
    let partnerDescription;
    if(testimonial.image === null) testimonial.image = '../IMG/Lion2.webp';
    if(testimonial.steakholderTag === 'Client') {
        partnerDescription = `${testimonial.steakholderTag}: ${testimonial.serviceProvided}`;
    }
    else {
        partnerDescription = `${testimonial.steakholderTag}: ${testimonial.profession}`;
    }
    testimonialsContainer.innerHTML += getTestimonial(testimonial, partnerDescription);
}


// Returns New Testimonial
function getTestimonial(testimonial, partnerDescription) {
    return `
    <li class="swiper-slide">
        <div class="wrapper">
            <div class="img-container">
                <img src="${testimonial.image}" alt="${testimonial.firstName} ${testimonial.lastName}">
            </div>
            <div class="message-container">
                <p>${testimonial.message}</p>
                <div class="PartnerDescription-Container">
                    <h4>${testimonial.firstName} ${testimonial.lastName}</h4>
                    <p>${partnerDescription}</p>
                </div>
            </div>
        </div>
    </li>`;
}