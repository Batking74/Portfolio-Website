import { navStoreBlueprint, linkCSS, i2 } from "./Nav&Footer_Blueprint.mjs";
linkCSS('CSS/index.css');

// Targeting Elements
const animate = document.querySelectorAll(`.${navStoreBlueprint[i2.attrb][0]}`);
const animate2 = document.querySelectorAll(`.${navStoreBlueprint[i2.attrb][1]}`);
const imageContainer = document.querySelector('.Model-Gallery-Container');
const openMenu = document.querySelector('#menu-open');
const sideNavigation = document.querySelector('.nav-container');

// Changes Load Animations
for(let index = 0; index < animate.length; index++) {
    animate[index].classList.replace(`${navStoreBlueprint[i2.attrb][0]}`, "HomeAnimateGroup1");
    animate2[index].classList.replace(`${navStoreBlueprint[i2.attrb][1]}`, "HomeAnimateGroup2");
}

// Toggle Hamburger menu
openMenu.addEventListener('click', (e) => {
    sideNavigation.classList.toggle('active');
});

// Creating Dynamic Project Card
class myProjects {
    constructor(name, tags, image) {
        this.name = name;
        this.tags = tags;
        this.image = image;
    }
}
const name = ['Ariel', 'USA Paddle', 'Blessing Bengeh', 'Keke'];
const tag = ['#Ariiaaann', '#Sierra Leone', '#PalmerSudios'];
const image = new Array(4);
image[0] = `${navStoreBlueprint[i2.path]}/IMG/Models/Female/Model_3.jpg`;
image[1] = `${navStoreBlueprint[i2.path]}/IMG/Tiki.jpg`;
image[2] = `${navStoreBlueprint[i2.path]}/IMG/Models/Female/Model_4.jpg`;
image[3] = `${navStoreBlueprint[i2.path]}/IMG/Keke/Photo_3.jpg`;

// Creating Models
const item1 = new myProjects(name[0], tag[0], image[0]);
const item2 = new myProjects(name[1], tag[1], image[1])
const item3 = new myProjects(name[2], tag[2], image[2]);
const item4 = new myProjects(name[3], tag[3], image[3]);
const myProjectsArray = [item1, item2, item3, item4];

// Displaying Models
myProjectsArray.forEach(project => {
    imageContainer.innerHTML += `
        <div class="Gallery-Image data-tags="#all, ${project.tags}">
            <img src="${project.image}" alt="">
            <div class="content">
                <h1 class="image-name">${project.name}</h1>
                <span class="tags">${project.tags}</span>
            </div>
        </div>
    `
})

document.addEventListener('DOMContentLoaded', () => {
    console.log(Date());
})

console.log(navStoreBlueprint);