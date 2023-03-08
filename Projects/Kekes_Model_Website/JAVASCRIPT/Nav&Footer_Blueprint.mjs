export const companyInfo = new Array(10);
companyInfo[0] = "410-895-4859";
companyInfo[1] = "Keke@gmail.com";
companyInfo[2] = "7625 Belair Rd,<br>Nottingham, MD 21236";

export let navbar = document.querySelector('#navbar');
export const footer = document.getElementsByTagName('footer');
export const urlPath = '/Projects/Kekes_Model_Website/';
export const date = new Date();

// Arrays
export const navLinks = new Array(10);
navLinks[0] = `${urlPath}HTML/index.html`;
navLinks[1] = `${urlPath}HTML/About.html`;
navLinks[2] = `${urlPath}HTML/FAQ.html`;
navLinks[3] = `${urlPath}HTML/Contact.html`;
navLinks[4] = `${urlPath}HTML/Store/Page 1/Store_1.html`;
navLinks[5] = `${urlPath}HTML/Login.html`;
navLinks[6] = "https://www.facebook.com/kekepalmer";
navLinks[7] = "https://www.instagram.com/keke";
navLinks[8] = "https://twitter.com/KekePalmer";
navLinks[9] = "https://www.youtube.com/channel/UCG7azEZJY5PCsjcUCOdvOPw";

export const icons = new Array(20);
icons[0] = `${urlPath}IMG/Social Media Icons & Logos/Palmer_Logo.PNG`;
icons[1] = `${urlPath}IMG/Social Media Icons & Logos/Store_Navigation_Right_Arrow.png`;
icons[2] = `${urlPath}IMG/Social Media Icons & Logos/Palmer_Logo.PNG`;
icons[3] = `${urlPath}IMG/Social Media Icons & Logos/FaceBook_Icon.png`;
icons[4] = `${urlPath}IMG/Social Media Icons & Logos/Instagram_Icon.png`;
icons[5] = `${urlPath}IMG/Social Media Icons & Logos/Twitter_Icon.png`;
icons[6] = `${urlPath}IMG/Social Media Icons & Logos/YouTube_Icon.png`;
icons[7] = `${urlPath}IMG/Social Media Icons & Logos/Black_Phone_Icon.png`;
icons[8] = `${urlPath}IMG/Social Media Icons & Logos/Black_Mail_Icon.png`;
icons[9] = `${urlPath}IMG/Social Media Icons & Logos/Black_Location_Icon.png`;
icons[10] = `${urlPath}IMG/Social Media Icons & Logos/YouTube_Icon.png`;
icons[11] = `${urlPath}IMG/Social Media Icons & Logos/YouTube_Icon.png`;
icons[12] = `${urlPath}IMG/Social Media Icons & Logos/Black_FaceBook_Icon.png`;
icons[13] = `${urlPath}IMG/Social Media Icons & Logos/Black_Instagram_Icon.png`;
icons[14] = `${urlPath}IMG/Social Media Icons & Logos/Black_Twitter_Icon.png`;
icons[15] = `${urlPath}IMG/Social Media Icons & Logos/Black_YouTube_Icon.png`;

export const attribute = new Array(10);
attribute[0] = "StoreAnimateGroup1";
attribute[1] = "StoreAnimateGroup2";
attribute[2] = "nav";
attribute[3] = "socialMedia-icons";


// Dynamic Navigation Bar
navbar.innerHTML = `
<a href="${navLinks[6]}">
<img src="${icons[0]}" alt="Palmer Studios logo.">
</a>
<a class="${attribute[0]} ${attribute[2]}" href="${navLinks[0]}">Home</a>
<a class="${attribute[0]} ${attribute[2]}" href="${navLinks[1]}">About</a>
<a class="${attribute[0]} ${attribute[2]}" href="${navLinks[2]}">FAQ</a>
<a class="${attribute[1]} ${attribute[2]}" href="${navLinks[3]}">Contact</a>
<a class="${attribute[1]} ${attribute[2]}" href="${navLinks[4]}">Store</a>
<a class="${attribute[1]} ${attribute[2]}" href="${navLinks[5]}">
<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-person-circle login-logo" viewBox="0 0 16 16">
<path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
<path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg>Log in
</a>`

// Dynamic Footer
footer[0].innerHTML = `
<!-- Start of footer -->
<div class="position-footer-container">
<div class="position-logos">
<img width="120" height="140" src="${icons[2]}" alt="Palmer Studios logo.">
<div class="socialMedia-icons-Container">
<a href="${navLinks[6]}">
<img class="${attribute[3]}" src="${icons[3]}" alt="FaceBook Logo">
</a>
<a href="${navLinks[7]}">
<img class="${attribute[3]}" src="${icons[4]}" alt="Instagram Icon">
</a>
<a href="${navLinks[8]}">
<img class="${attribute[3]}" src="${icons[5]}" alt="Twitter Icon">
</a>
<a href="${navLinks[9]}">
<img class="${attribute[3]}" src="${icons[6]}" alt="YouTube Icon">
</a>
</div>
</div>
<div class="footer-column-a-1">
<a href="${navLinks[6]}">Support</a>
<a href="${navLinks[3]}">Contact Us</a>
<a href="${navLinks[2]}">FAQ</a>
<a href="${navLinks[6]}">Downloads</a>
<a href="${navLinks[6]}">Locate A Dealer</a>
<a href="${navLinks[4]}">Store</a>
<a href="${navLinks[6]}">Modeling Registration</a>
    </div>
    <div class="footer-column-a-2">
    <a id="Company-Name" href="${navLinks[6]}"></a>
    <a href="${navLinks[1]}">About <span id="Company-Name"></span></a>
    <a href="${navLinks[6]}">Palmer Designs</a>
    <a href="${navLinks[6]}">Careers</a>
    <a href="${navLinks[6]}">Newsroom</a>
    <a href="${navLinks[6]}">Palmer Access</a>
    </div>
    <form id="footerForm" class="last-footer-col">
    <p id="footerLabel">Stay up to date on the latest modeling show</p>
    <br>
    <input id="footerInput" placeholder="Enter your e-mail address" type="email">
    <br>
    <p id="footerSubmissionResponse"></p>
    <button type="submit" id="footerbtn">Sign Up</button>
    </form>
    </div>
    <div class="copyright">
    <br>
    <hr>
    <br>
    <p class="copyright">&copy; copyright 2022 Nazir Knuckles Inc | ${date.getFullYear()} | <span id="Company-Name"></span></p>
    </div>`
    
    export let companyName = document.querySelectorAll('#Company-Name');
    export const footerForm = document.getElementById('footerForm');
    export const footerLabel = document.getElementById('footerLabel');
    export const footerInput = document.getElementById('footerInput');
    export const footerBtn = document.getElementById('footerbtn');
    export const footerResponse = document.getElementById('footerSubmissionResponse');
    
    function validate() {
        if(footerInput.value == '') {
            alert("You must fill out!");
        }
        else {
            footerLabel.remove();
            footerInput.remove();
            footerBtn.remove();
            console.log('Thank You, you will recieve emails on new content!')
            footerResponse.innerHTML = `<span class="Footer-Response-Icon"><svg viewBox="0 0 24 24"><path fill="green" d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg></span>Thank You, you will recieve emails on new content!`
        }
    }
    
    export function setCompanyName(name) {
        companyName.forEach(element => {
            element.innerHTML = name;
        })
    }

    // Linking HTML and CSS files
    export function linkCSS(cssFile) {
        const head = document.getElementsByTagName('head');
        const styleLink1 = document.createElement('link');
        const styleLink2 = document.createElement('link');
        styleLink1.setAttribute('rel', 'stylesheet');
        styleLink2.setAttribute('rel', 'stylesheet');
        styleLink1.setAttribute('href', `${urlPath}${cssFile}`);
        styleLink2.setAttribute('href', `${urlPath}/CSS/Nav&Footer.css`);
        head[0].append(styleLink1, styleLink2);
    }

footerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    validate();
})

// Dynamic Indexes
// export const i2 = {
//     compInfo: 0,
//     navLin: 1,
//     icons: 2,
//     attrb: 3,
//     nav: 4,
//     footer: 5,
//     date: 10,
//     path: 12
// }

setCompanyName("Palmer Studios");