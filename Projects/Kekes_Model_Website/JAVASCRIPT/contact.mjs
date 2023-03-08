import { companyInfo, navLinks, icons, attribute, navbar, footer, footerForm, footerInput, footerLabel, footerResponse, footerBtn, date, urlPath, linkCSS } from "./Nav&Footer_Blueprint.mjs";
linkCSS('CSS/Contact.css');

// Targeting Elements
const formContactInfo = document.querySelector('.info-container');
const form = document.querySelector('#form');
const inputElement = document.querySelectorAll('#userInput');
const errorElement = document.querySelectorAll('#errorMsg');
const errorMsg = new Array(5);

errorMsg[0] = 'First name is required!';
errorMsg[1] = 'Last name is required!';
errorMsg[2] = 'Email is required!';
errorMsg[3] = 'Phone number is required!';
errorMsg[4] = 'Message is required';

formContactInfo.innerHTML = `
<h1>Contact<br>Information</h1>
<p>Fill out the form then click<br>send</p>
<div class="info-group-1">
    <img width="27" height="27" src="${icons[7]}" alt="Phone Icon">
    <p>${companyInfo[0]}</p>
</div>
<div class="info-group-2">
    <img width="22" height="22" src="${icons[8]}" alt="Mail Icon">
    <p>${companyInfo[1]}</p>
</div>
<div class="info-group-3">
    <img width="28" height="28" src="${icons[9]}" alt="Location Icon">
    <p>${companyInfo[2]}</p>
</div>
<div class="info-group-4">
    <a href="${navLinks[6]}">
        <img class="${attribute[3]}" src="${icons[12]}" alt="FaceBook Logo">
    </a>
    <a href="${navLinks[7]}">
        <img class="${attribute[3]}" src="${icons[13]}" alt="Instagram Icon">
    </a>
    <a href="${navLinks[8]}">
        <img class="${attribute[3]}" src="${icons[14]}" alt="Twitter Icon">
    </a>
    <a href="${navLinks[9]}">
        <img class="${attribute[3]}" src="${icons[15]}" alt="YouTube Icon">
    </a>
</div>
`

function validate() {
    new Promise((resolve, reject) => {
        for(let i = 0; i < inputElement.length; i++) {
            if(inputElement[i].value == '') {
                reject("All Feilds Must be Filled out!");
                errorElement[i].innerHTML = errorMsg[i];
                setTimeout(() => errorElement[i].innerHTML = '', 5000);
            }
        }
        resolve('Form Completed Submitting...');
    })
    .then(getData => {
        console.log(getData);
        const userSubmission = [{
            Date: Date(),
            Email: inputElement[1].value,
            First_name: inputElement[0].value,
            Last_name: inputElement[2].value,
            Phone_Number: inputElement[3].value,
            User_Message: inputElement[4].value
        }];
        console.log(userSubmission[0]);
        localStorage.setItem('New Contact Message', JSON.stringify(userSubmission));
    })
    .then(() => {
        form.reset();
        // location.replace('/HTML/Contact_Submission.html');
    })
    .catch(reject => {
        // alert(reject);
    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validate();
})

footer[0].remove();