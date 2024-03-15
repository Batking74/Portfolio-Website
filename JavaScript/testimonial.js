// Targeting HTML Elements
const testimonialsContainer = document.querySelector('.testimonials-append-container');
const filter = document.querySelectorAll('.testimonial-filter-btn');
const steakholders = ['Collaborator', 'Client'];
const testimonialsList = new Array(1);


// Creating Testimonial Class
class Testimonial {
    constructor(firstName, lastName, message, image, steakholderTag) {
        this.steakholderTag = steakholderTag;
        this.firstName = firstName;
        this.lastName = lastName;
        this.message = message;
        this.image = image;
    }
}


// Creating Client Testimonial Class
class ClientTestimonial extends Testimonial {
    constructor(firstName, lastName, message, image, steakholderTag, serviceProvided) {
        super(firstName, lastName, message, image, steakholderTag);
        this.serviceProvided = serviceProvided;
    }
}


// Creating Collaborator Testimonial Class
class CollaboratorTestimonial extends Testimonial {
    constructor(firstName, lastName, message, image, steakholderTag, profession) {
        super(firstName, lastName, message, image, steakholderTag);
        this.profession = profession;
    }
}

const testimonial1 = new CollaboratorTestimonial('Team Lead', 'Zach', 'Nazir has grown as a Team Member since the time I’ve been a manager at Target Corporation. He has excelled at tasks that have been presented to him. His ingenuity to help others at work has shown, and has been taken noticed by other leaders at Target.', './IMG/Target_Team_Lead_Zach.webp', steakholders[0], 'Team Leader at Target Corporation (Manager)');

testimonialsList[0] = testimonial1;


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
    if(testimonial.steakholderTag.includes(e.target.id)) {
        displayTestimonials(testimonial);
    }
    else if(e.target.id === 'all-testimonials') {
        displayTestimonials(testimonial);
    }
}


// Displays Products on Web Page
function displayTestimonials(testimonial) {
    let partnerDescription;
    if(testimonial.image === null) testimonial.image = './IMG/Lion2.webp';
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
