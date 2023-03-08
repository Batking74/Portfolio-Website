import { navStoreBlueprint, linkCSS, i2 } from "../Nav&Footer_Blueprint.mjs";
import LinkedList from "../LinkedList.mjs";
linkCSS('CSS/Store.css');

// Dynamic HTML Page
export const main = document.getElementsByTagName('main');
const ads = `${navStoreBlueprint[i2.path]}/IMG/Ads/Sale_ad_1.jpg`;

main[0].innerHTML = `
    <header>
        <h1 id="Store-Title"></h1>
    </header>
    <aside style="text-align: center;">
        <img src="${ads}" alt="Sale ad" style="margin-top: 50px;">
    </aside>
    
    <section class="Product-Main-Container">
        <div class="title">
            <div>
                <h1>Products | <span id="Store-Title"></span></h1>
            </div>
            <div>
                <select name="Filter" id="Filter">
                    <option value="sort by">Sort by</option>
                    <option value="Best Selling">Best Selling</option>
                    <option value="Alphabetically, A-Z">Alphabetically, A-Z</option>
                    <option value="Alphabetically, Z-A">Alphabetically, Z-A</option>
                    <option value="Price, low to high">Price, low to high</option>
                    <option value="Price, high to low">Price, high to low</option>
                </select>
                <span class="counter"><span id="Products-Count"></span> Products</span>
            </div>
            <div><hr></div>
        </div>
    </section>
    
    <!-- Store Navigation -->
    <div id="nav-2"></div>`

// Targeting Elements & Creating Arrays
export const body = document.getElementsByTagName('body');
export const header = document.getElementsByTagName('header');
export const ad = document.getElementsByTagName('aside');
export const productCount = document.querySelector('#Products-Count');
export const productMainContainer = document.querySelector('.Product-Main-Container');
export const storeNavigation = document.querySelector('#nav-2');
export const sideNavigation = document.querySelector('.nav-container');
export const openMenu = document.querySelector('#menu-open');
export let pageName = document.querySelectorAll('#Page-Name');
export let storeTitle = document.querySelectorAll('#Store-Title');
export let pageLink = [];
export let price = [];
export let productLink = [];
export let description = [];
export let img = [];
export const myProductArray = [];
export const rating = new Array(5);

rating[0] = '&#8902';
rating[1] = '&#8902 &#8902';
rating[2] = '&#8902 &#8902 &#8902';
rating[3] = '&#8902 &#8902 &#8902 &#8902';
rating[4] = '&#8902 &#8902 &#8902 &#8902 &#8902';

// Store Page Links
pageLink[0] = `${navStoreBlueprint[i2.path]}/HTML/Store/Page 1/Store_1.html`;
pageLink[1] = `${navStoreBlueprint[i2.path]}/HTML/Store/Page 2/Store_2.html`;
pageLink[2] = `${navStoreBlueprint[i2.path]}/HTML/Store/Page 3/Store_3.html`;

// Dynamic Elements
setStoreName("Palmer Store");
setDocName("Palmer Studios Store");

// Creating Dynamic Project Card/Classes
export default class Product {
    constructor(image, description, price, rating, link) {
        this.image = image;
        this.imageAlt = description;
        this.description = description;
        this.price = price;
        this.rating = rating;
        this.link = link;
    }

    getImage() {
        return this.image;
    }

    getAlt() {
        return this.imageAlt;
    }

    getDescription() {
        return this.description;
    }
    getPrice() {
        return this.price;
    }
    getLink() {
        return this.link;
    }
}

// Creating Store
export function setProducts(array) {
    let temp = [];
    myProductArray.push(temp);
    for(let i = 0; i < array.length; i++) {
        const objects = new Product(img[i], description[i], price[i], rating[4], productLink[i]);
        const percent = new Array(0);
        temp.push(objects);

        // Displaying Each Products Attributes
        productMainContainer.innerHTML += `
            <div class="Product-Container">
                <a href="${productLink[i]}">
                <img src="${img[i]}" alt="${description[i]}">
                <div class="Product-Card">
                    <span class="Price-Container">
                        <p class="Product-Price">$${getDiscount()}</p>
                        <p class="Product-Old-Price">$${price[i]}</p>
                    </span>
                    <p class="Product-description">${description[i]}</p>
                    <br>
                    <p class="Percent-Off">${percent[0]}</p>
                    <p class="Product-Rating">${rating[4]}</p>
                    <span>
                        <a class="AddToList" href="">Add to List</a>
                    </span>
                </div>
            </a>
        </div>`

        // Non Discounted Products Condition
        const oldPrice = document.querySelectorAll(".Product-Old-Price");
        const prcnt = document.querySelectorAll('.Percent-Off');
        if(getDiscount() === price[i]) {
            oldPrice[i].innerHTML = "";
            prcnt[i].innerHTML = "";
        }
        
        // Getting Discounts
        function getDiscount() {
            if(price[i] <= 20 && price[i] > 10) {
                let discount = 30 / 100;
                let total = price[i] - (price[i] * discount);
                percent.push("30% OFF!");
                return parseFloat(total).toFixed(2);
            }
            else if(price[i] >= 100) {
                let discount = 50 / 100;
                let total = price[i] - (price[i] * discount);
                percent.push("50% OFF!");
                return parseFloat(total).toFixed(2);
            }
            else {
                return price[i];
            }
        }
    }
}


// Creating Functions
export function setStoreName(storeName) {
    storeTitle.forEach(element => {
        element.innerHTML = storeName;
    })
}

export function setDocName(docName) {
    pageName.forEach(element => {
        element.innerHTML = docName;
    })
}

export function setNumProducts(num) {
    const productCount = document.querySelector('#Products-Count');
    productCount.innerHTML = `${num}`;
}

export function validateNav(index) {
    const nextPage = document.querySelector('#Next-Page');
    const backButton = document.querySelector('#Previous-Page');
    if(index === 0) {
        nextPage.addEventListener('click', () => {
            location.replace(`${pageLink[1]}`);
        })
    }

    if(index === 1) {
        nextPage.addEventListener('click', () => {
            location.replace(`${pageLink[2]}`);
        })
    
        backButton.addEventListener('click', () => {
            location.replace(`${pageLink[0]}`);
        })
    }

    if(index === 2) {
        backButton.addEventListener('click', () => {
            location.replace(`${pageLink[1]}`);
        })
    }
}

export function getNavigator(index) {
    const attribute = new Array(4);
    attribute[0] = `${navStoreBlueprint[i2.path]}/IMG/Social Media Icons & Logos/Store_Navigation_Right_Arrow.png`;
    attribute[1] = `${navStoreBlueprint[i2.path]}/IMG/Social Media Icons & Logos/Store_Navigation_Left_Arrow.png`;
    attribute[2] = "Next-Page";
    attribute[3] = "Previous-Page";
    const nav = new Array(3);
    nav[0] = `
    <h2>Page 1 of 3</h2>
    <img id="${attribute[2]}" src="${attribute[0]}" alt="Next Page">`;

    nav[1] = `
    <img id="${attribute[3]}" src="${attribute[1]}" alt="Back">
    <h2>Page 2 of 3</h2>
    <img id="${attribute[2]}" src="${attribute[0]}" alt="Next Page">`;

    nav[2] = `
    <img id="${attribute[3]}" src="${attribute[1]}" alt="Back">
    <h2>Page 3 of 3</h2>`;
    return nav[index];
}

openMenu.addEventListener('click', () => {
    navStoreBlueprint[i2.nav].classList.toggle('active');
});