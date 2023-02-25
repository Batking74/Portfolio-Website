import logo from './logo.svg';
import React from 'react';
import './App.css';
const docTitle = document.getElementsByTagName('title')[0];

const length = 10;
const name = new Array(length);
name[0] = 'Digital Art Portfolio';
name[1] = 'Static Login';
name[2] = 'Static Home Page';
name[3] = 'Digital Calculator';
name[4] = 'Talking Computer';
name[5] = 'Palmer Studios';
name[6] = 'Coming Soon!';
name[7] = 'Coming Soon!';

const tag = new Array(length);
tag[0] = '#HTML #CSS';
tag[1] = '#HTML #CSS';
tag[2] = '#HTML #CSS';
tag[3] = '#HTML #CSS #Javascript';
tag[4] = '#HTML #CSS #Javascript';
tag[5] = '#Javascript #ES6 Modules #Node.js';
tag[6] = '#Bootstrap #React';
tag[7] = '#Java';

const image = new Array(length);
image[0] = [require('./IMG/Freshmen_Naz.png')];
image[1] = [require('./IMG/Nazir_Senior_Year.png')];
image[2] = [require('./IMG/Art Portfolio.png')];
image[3] = [require('./IMG/Login.png')];
image[4] = [require('./IMG/Landing Page.png')];
image[5] = [require('./IMG/Calculator.png')];
image[6] = [require('./IMG/Talking Computer.png')];
image[7] = [require('./IMG/Palmer Studios.png')];
image[8] = [require('./IMG/Lion2.JPG')];
image[9] = [require('./IMG/Lion2.JPG')];

const link = new Array(length);
link[0] = 'http://127.0.0.1:5555/Projects/Digital_Art_Portfolio_Project/HTML/index.html';
link[1] = 'http://127.0.0.1:5555/Projects/Login_Page_Project/HTML/index.html';
link[2] = 'http://127.0.0.1:5555/Projects/Static_Landing_Page_2/HTML/index.html';
link[3] = 'http://127.0.0.1:5555/Projects/Digital_Calculator_Project/HTML/markUp.html';
link[4] = 'http://127.0.0.1:5555/Projects/AI_Talking_Computer_Project/HTML/index.html';
link[5] = "http://127.0.0.1:5555/Projects/Kekes_Model_Website/HTML/index.html";
link[6] = '#';
link[7] = '#';

const className =  new Array(30);
className[0] = 'links-item';
className[1] = 'link';
className[2] = 'highlight-Toggle';
className[3] = 'btn';
className[4] = 'heading';
className[5] = 'seperator';
className[6] = 'skill-card';
className[7] = 'skill';
className[8] = 'skill-container';
className[9] = 'highlight';
className[10] = 'active';
className[11] = 'filter-btn';
className[12] = 'sub-heading';
className[13] = 'User-Input';
className[14] = 'Project-Link';
className[15] = '_blank';

export default class App extends React.Component {
  constructor(name, tags, image, link) {
    super();
    this.name = name;
    this.tags = tags;
    this.image = image;
    this.projectLink = link;
  }
  getName() {
    return this.name;
  }
  getTags() {
    return this.tags;
  }
  getImage() {
    return this.image;
  }
  getLink() {
    return this.projectLink;
  }
  
  render() {
    docTitle.textContent = `Nazir's Portfolio`;
    console.log(this.props.age)
    const item0 = new App(name[0], tag[0], image[2], link[0]);
    const item1 = new App(name[1], tag[1], image[3], link[1]);
    const item2 = new App(name[2], tag[2], image[4], link[2]);
    const item3 = new App(name[3], tag[3], image[5], link[3]);
    const item4 = new App(name[4], tag[4], image[6], link[4]);
    const item5 = new App(name[5], tag[5], image[7], link[5]);
    const item6 = new App(name[6], tag[6], image[8], link[6]);
    const item7 = new App(name[7], tag[7], image[9], link[7]);
    const project = [item0, item1, item2, item3, item4, item5, item6, item7];



    // function getProjects(e) {
    //   const projectContainer = document.querySelector('.project-container');

    //   myProjectsArray.forEach(project => {
    //     projectContainer.innerHTML += `
    //     <a href="${project.projectLink}">
    //     <div class="project-card data-tags="#all, ${project.tags}">
    //           <img src="${project.image}" alt="">
    //           <div class="content">
    //             <h1 class="project-name">${project.name}</h1>
    //             <span class="tags">${project.tags}</span>
    //           </div>
    //           </div>
    //           </a>
    //       `;
    //   })
    //   console.log("Loaded up!")
    // }
    
    // Contact Form Validation
    function validateUserInput(e) {
      e.preventDefault()
      const userInput = document.querySelectorAll('#User-Input');
      new Promise((resolve, reject) => {
        for(let i = 0; i < userInput.length; i++) {
          if(userInput[i].value == '') {
            userInput[i].style.background = "red";
            userInput[i].style.color = "#000";
            reject('All feilds must be filled out!');
          }
          else {
            resolve('Processing...')
          }
        }
      })
      .then(() => {
        setTimeout(console.log('Complete!'), 2000);
        window.location.href = 'http://127.0.0.1:5555/HTML/thankYou.html?';
      })
      .catch((message) => {
        // alert(message);
      })
    }

    // Toggle Responsive Navbar
    function toggleNavBar() {
      const toggleBtn = document.querySelector('.toggle-btn');
      const linkContainer = document.querySelector('.links-container');
      toggleBtn.classList.toggle('active');
      linkContainer.classList.toggle('show');
    }

    // Navigation Link Toggle
    function toggleLink() {
      const links = document.querySelectorAll('.link');
      links.forEach(link => {
        link.addEventListener('click', () => {
          links.forEach(ele => ele.classList.remove('active'));
          link.classList.add('active');
        })
      })
    }
    
    // Speechsynthesis
    function speakAI() {
      const playButton = document.getElementById('play-button');
      const aboutText = document.getElementById('ReadTextAI');
      playButton.addEventListener('click', (e) => {
        playText(aboutText.textContent);
        playButton.innerHTML = `<svg style="width: 20px; height: 20px" viewBox="0 0 24 24"><path fill="currentColor" d="M14,19H18V5H14M6,19H10V5H6V19Z" /></svg>`;
        playButton.addEventListener('click', () => {
          speechSynthesis.cancel();
          playButton.innerHTML = `Read Aloud`;
          playButton.reset();
        })
      })
      
      const playText = (text) => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 1;
        speechSynthesis.speak(utterance);
      }
    }
    
    // Filter Projects
    function filterProjects() {
      const filter = document.querySelectorAll('.filter-btn');
      filter.forEach(btn => {
        btn.addEventListener('click', () => {
          filter.forEach(ele => ele.classList.remove('active'));
          btn.classList.add('active');
        })
      })
    }

    // Rendering HTML
    return (
      <span>
      {/* Navigation */}
      <nav className="navbar">
        <h1 className="brand">Batking</h1>
        <div onClick={toggleNavBar} className="toggle-btn">
          <span></span>
          <span></span>
        </div>
        <ul className="links-container">
          <li onClick={toggleLink} className={className[0]}><a href="#" className="link active">Home</a></li>
          <li onClick={toggleLink} className={className[0]}><a href="#about-section" className={className[1]}>About</a></li>
          <li onClick={toggleLink} className={className[0]}><a href="#project-section" className={className[1]}>Project</a></li>
          <li onClick={toggleLink} className={className[0]}><a href="#contact-section" className={className[1]}>Contact</a></li>
        </ul>
        <div id="validationError" className="validationError"></div> {/*Check!*/}
      </nav>




      {/* Home Section */}
      <section className="home">
        <div className="hero-content">
          <h1 className="hero-heading"><span id={className[2]} className={className[9]}>Hi, </span>I am Nazir</h1>
          <p className="profession">Web Developer</p>
          <p className="info">Web Development is my passion. I love Thinking outside the box to solve complex problems. <strong id="Countdown-Text">You have <span id="countdown">500</span> seconds left!</strong></p>
          <button id="background-Toggle" className={className[3]}>Background</button>
          <button className="music-btn playMusic">Music</button>
        </div>
        <img src={image[0]} className="image" alt="Nazir Knuckles at age 14 with high-top fade." />
      </section>




      {/* About Section */}
      <section className="about" id="about-section">
        <h2 className={className[4]}>about <span id={className[2]} className={className[9]}>me</span></h2>
        <p className={className[12]}>Lorem ipsum dolor sit amet consectetur.</p>
        <div className={className[5]}></div>
        <div className="about-me-container">
          <div className="left-col">
            <img src={image[1]} className="about-image" alt="Naz at age 17 (Senior Year)"/>
          </div>
          <div className="right-col">
            <p id="ReadTextAI" className="about-paragraph">Hello, I am Naz a k a Mr. Knuckles. I am not finnished my portfolio project, but when I do finnish I'll actually put something about me in this section. This portfolio project is actually almost done, unlike the "Keekee's Modeling Studio" project. All I have to do for this project is figure out how to program a few things, validate the form at the very bottom of this page, and make the users input send to my email (which is hard because for some reason my code wont run when I try to program user data to send to my email). Anyways, here is some Lorem Gibberish to keep you entertained. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum ipsum autem quibusdam illo aliquid quia earum voluptates eum aliquam perspiciatis? Id tempora mollitia doloribus magnam vitae corporis USA Poddle, molestiae quae quam, praesentium exercitationem quidem at sapiente eius odit? Aliquam velit dolor aut totam exercitationem.</p>
            <button onClick={speakAI} id="play-button" className={className[3]}>Read Aloud</button>
          </div>
        </div>

        {/* Skills Section */}
        <h2 id={className[2]} className={className[4]}>Languages, frameworks, and tools I know</h2>
        <div className={className[5]}></div>
        <div className={className[8]}>
          <div className={className[6]} style={{background: "--bg: #ffa600ac"}}>
            <p className={className[7]}>HTML</p>
          </div>
          <div className={className[6]} style={{background: "--bg: #0000ffb3"}}>
            <p className={className[7]}>CSS</p>
          </div>
          <div className={className[6]} style={{background: "--bg: #5cd606b3"}}>
            <p className={className[7]}>Media Queries</p>
          </div>
          <div className={className[6]} style={{background: `--bg: #ffff00b7`}}>
            <p className={className[7]}>JavaScript</p>
          </div>
          <div className={className[6]} style={{background: "--bg: #6200b890"}}>
            <p className={className[7]}>Bootstrap</p>
          </div>
          <div className={className[6]} style={{background: "--bg: #a52a2a"}}>
            <p className={className[7]}>Version Control</p>
          </div>
          <div className={className[6]} style={{background: "--bg: #000000"}}>
            <p className={className[7]}>GitHub Software</p>
          </div>
          <div className={className[6]} style={{background: "--bg: black"}}>
            <p className={className[7]}>Terminal</p>
          </div>
          <div className={className[6]} style={{background: "--bg: #ffa200"}}>
            <p className={className[7]}>Java</p>
          </div>
          <div className={className[6]} style={{background: "--bg: #d4ff00"}}>
            <p className={className[7]}>XML</p>
          </div>
          <div className={className[6]} style={{background: "--bg: #12c0ff"}}>
            <p className={className[7]}>Computer Repair</p>
          </div>
          <div className={className[6]} style={{background: "--bg: #06ff06"}}>
            <p className={className[7]}>Binary</p>
          </div>
          <div className={className[6]} style={{background: "--bg: #9b4429"}}>
            <p className={className[7]}>Hexadecimal</p>
          </div>
          <div className={className[6]} style={{background: "--bg: #c50b0b"}}>
            <p className={className[7]}>Npm</p>
          </div>
          <div className={className[6]} style={{background: "--bg: #13e4d3"}}>
            <p className={className[7]}>Node.js</p>
          </div>
          <div className={className[6]} style={{background: "--bg: #0c35bd"}}>
            <p className={className[7]}>React</p>
          </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

      {/* What I want to Learn */}
      <h2 id={className[2]} className={className[4]}>What I want to Learn</h2>
      <div className={className[5]}></div>
      <div className={className[8]}>
        <div className={className[6]} style={{background: "--bg: #01016a"}}>
          <p className={className[7]}>Python</p>
        </div>
        <div className={className[6]} style={{background: "--bg: #14a4a4"}}>
          <p className={className[7]}>PHP</p>
        </div>
        <div className={className[6]} style={{background: "--bg: #3f37ce"}}>
          <p className={className[7]}>Swift</p>
        </div>
        <div className={className[6]} style={{background: "--bg: #30c507"}}>
          <p className={className[7]}>SQL</p>
        </div>
      </div>
    </section>

    {/* Projects Section */}
    <section className="project" id="project-section">
      <h2 className={className[4]}>Project<span id={className[2]} className={className[9]}>s</span></h2>
      <p className={className[12]}>Lorem ipsum dolor sit amet consectetur.</p>
      <div className={className[5]}></div>
      <div className="filters">
        <button className="filter-btn active" id="all">all</button>
        <button onClick={filterProjects} className={className[11]} id="JavaScript">JavaScript</button>
        <button onClick={filterProjects} className={className[11]} id="Bootstrap">Bootstrap</button>
        <button onClick={filterProjects} className={className[11]} id="Java">Java</button>
        <button onClick={filterProjects} className={className[11]} id="React">React</button>
        <button onClick={filterProjects} className={className[11]} id="Python">Python</button>
      </div>

      <div className="project-container">
        <a target={className[15]} className={className[14]} href={project[0].getLink()}>
        <div className="project-card" data-tags="#all, {project.tags}">
          <img src={project[0].getImage()} alt=""/>
          <div className="content">
            <h1 className="project-name">{project[0].getName()}</h1>
            <span className="tags">{project[0].getTags()}</span>
          </div>
        </div>
      </a>
        <a target={className[15]} className={className[14]} href={project[1].getLink()}>
        <div className="project-card" data-tags="#all, {project.tags}">
          <img src={project[1].getImage()} alt=""/>
          <div className="content">
            <h1 className="project-name">{project[1].getName()}</h1>
            <span className="tags">{project[1].getTags()}</span>
          </div>
        </div>
      </a>
        <a target={className[15]} className={className[14]} href={project[2].getLink()}>
        <div className="project-card" data-tags="#all, {project.tags}">
          <img src={project[2].getImage()} alt=""/>
          <div className="content">
            <h1 className="project-name">{project[2].getName()}</h1>
            <span className="tags">{project[2].getTags()}</span>
          </div>
        </div>
      </a>
        <a target={className[15]} className={className[14]} href={project[3].getLink()}>
        <div className="project-card" data-tags="#all, {project.tags}">
          <img src={project[3].getImage()} alt=""/>
          <div className="content">
            <h1 className="project-name">{project[3].getName()}</h1>
            <span className="tags">{project[3].getTags()}</span>
          </div>
        </div>
      </a>
        <a target={className[15]} className={className[14]} href={project[4].getLink()}>
        <div className="project-card" data-tags="#all, {project.tags}">
          <img src={project[4].getImage()} alt=""/>
          <div className="content">
            <h1 className="project-name">{project[4].getName()}</h1>
            <span className="tags">{project[4].getTags()}</span>
          </div>
        </div>
      </a>
        <a target={className[15]} className={className[14]} href={project[5].getLink()}>
        <div className="project-card" data-tags="#all, {project.tags}">
          <img src={project[5].getImage()} alt=""/>
          <div className="content">
            <h1 className="project-name">{project[5].getName()}</h1>
            <span className="tags">{project[5].getTags()}</span>
          </div>
        </div>
      </a>
        <a target={className[15]} className={className[14]} href={project[6].getLink()}>
        <div className="project-card" data-tags="#all, {project.tags}">
          <img src={project[6].getImage()} alt=""/>
          <div className="content">
            <h1 className="project-name">{project[6].getName()}</h1>
            <span className="tags">{project[6].getTags()}</span>
          </div>
        </div>
      </a>
        <a target={className[15]} className={className[14]} href={project[7].getLink()}>
        <div className="project-card" data-tags="#all, {project.tags}">
          <img src={project[7].getImage()} alt=""/>
          <div className="content">
            <h1 className="project-name">{project[7].getName()}</h1>
            <span className="tags">{project[7].getTags()}</span>
          </div>
        </div>
      </a>
      </div>
      </section>

      {/* Contact form */}
      <section className="contact" id="contact-section">
        <form onSubmit={validateUserInput} id="form" action="/HTML/thankYou.html">
          <h2 className={className[4]}>Contact<span id={className[2]} className={className[9]}> me</span></h2>
          <p className={className[12]}>Lorem ipsum dolor sit amet consectetur.</p>
          <div className={className[5]}></div>
          <div className="contact-form">
            <div className="name">
              <input type="text" id={className[13]} className="first-name" placeholder="First name" />
              <input type="text" id={className[13]} className="last-name" placeholder="Last name" />
            </div>
            <input type="email" id={className[13]} placeholder="Email" className="email" />
            <textarea maxLength={5000} id={className[13]} className="message" placeholder="Message..." cols="30" rows="10"></textarea>
            <button type="submit" id="contact-btn" className={className[3]}>Contact</button>
          </div>
        </form>
      </section>
    <footer id="footerBackgroundColorToggle" className="footer">made with love by Nazir Knuckles</footer>
    <script src="/portfolio/src/home.js"></script>
  </span>
    ) // End of return statement
  } // End of render
}