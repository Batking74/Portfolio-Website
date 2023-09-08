import * as tools from './extratools.jsx';
import logo from './logo.svg';
import React from 'react';
import './App.css';

const docTitle = document.getElementsByTagName('title')[0];
const length = 10;
const name = new Array(length);
name[0] = 'Digital Art Portfolio';
name[1] = 'Basic Login';
name[2] = 'Basic Home Page';
name[3] = 'Digital Calculator';
name[4] = 'Talking Computer';
name[5] = 'Palmer Studios';
name[6] = 'Budget Calculator';
name[7] = 'Coming Soon!';

const tag = new Array(length);
tag[0] = '#HTML #CSS';
tag[1] = '#HTML #CSS';
tag[2] = '#HTML #CSS';
tag[3] = '#HTML #CSS #Javascript';
tag[4] = '#HTML #CSS #Javascript';
tag[5] = '#HTML #CSS #Javascript #Node.js #SQL';
tag[6] = '#HTML #CSS #Javascript #Node.js #SQL';
tag[7] = '#Java';

const image = new Array(length);
image[0] = [require('./IMG/Freshmen_Naz.png')];
image[1] = [require('./IMG/Nazir_Senior_Year.png')];
image[2] = [require('./IMG/Art_Portfolio_Project.png')];
image[3] = [require('./IMG/Basic_Login_Project.png')];
image[4] = [require('./IMG/Landing_Page_Project.png')];
image[5] = [require('./IMG/Calculator_Project.png')];
image[6] = [require('./IMG/Talking_Computer_Project.png')];
image[7] = [require('./IMG/Palmer_Studios_Logo.png')];
image[8] = [require('./IMG/Budget_Calculator_Project.png')];
image[9] = [require('./IMG/Lion2.JPG')];

const link = new Array(length);
link[0] = 'http://127.0.0.1:5555/Projects/Digital_Art_Portfolio_Project/HTML/index.html';
link[1] = 'http://127.0.0.1:5555/Projects/Login_Page_Project/HTML/index.html';
link[2] = 'http://127.0.0.1:5555/Projects/Static_Landing_Page_2/HTML/index.html';
link[3] = 'http://127.0.0.1:5555/Projects/Digital_Calculator_Project/HTML/markUp.html';
link[4] = 'http://127.0.0.1:5555/Projects/AI_Talking_Computer_Project/HTML/index.html';
link[5] = "http://127.0.0.1:5555/Projects/Kekes_Model_Website/HTML/index.html";
link[6] = 'https://nazirsbudgetcalculator.netlify.app/';
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
className[16] = 'heading test';



export default class App extends React.Component {
  constructor(name, tags, image, link) {
    super();
    this.name = name;
    this.tags = tags;
    this.image = image;
    this.projectLink = link;
  }
  getName() { return this.name; }
  getTags() { return this.tags; }
  getImage() { return this.image; }
  getLink() { return this.projectLink; }
  render() {
    const project = tools.instantiateProjects(name, tag, image, link, docTitle);

    // Rendering HTML
    return (
      <span>
        { /* Navigation */ }
        <nav className="navbar">
          <h1 className="brand">Batking</h1>
          <img src={logo} className="App-logo" alt="React logo" />
          <div onClick={tools.toggleNavBar} className="toggle-btn">
            <span></span>
            <span></span>
          </div>
          <ul className="links-container">
            <li onClick={tools.toggleLink} className={className[0]}>
              <a href="#home" className='link active'>Home</a>
            </li>
            <li onClick={tools.toggleLink} className={className[0]}>
              <a href="#about-section" className={className[1]}>About</a>
            </li>
            <li onClick={tools.toggleLink} className={className[0]}>
              <a href="#project-section" className={className[1]}>Project</a>
            </li>
            <li onClick={tools.toggleLink} className={className[0]}>
              <a href="#contact-section" className={className[1]}>Contact</a>
            </li>
          </ul>
          <div id="validationError" className="validationError"></div> {/*Check!*/}
        </nav>




        {/* Home Section */}
        <section id="home" className="home">
          <div className="hero-content">
            <h1 className="hero-heading">
              <span id={className[2]} className={className[9]}>Hi, </span>I am Nazir
            </h1>
            <p className="profession">Web Developer</p>
            <p className="info">
              Web Development is my passion. I love Thinking outside the box to solve complex problems.
              <strong id="Countdown-Text">
                You have <span onLoad={tools.startCountDown} className="countdown">300</span> seconds left!
              </strong>
            </p>
            <button onClick={tools.toggleBackground} className={className[3]}>Background</button>
            <button className="music-btn playMusic">Music</button>
          </div>
          <div className="home-img-container">
            <img src={image[0]} className="home-image" onClick={()=>tools.setCaption(0)} alt={tools.alt[0]} />
            <p className='imgCap1' id="img-caption">{tools.alt[0]}</p>
          </div>
        </section>




        {/* About Section */}
        <section className="about" id="about-section">
          <h2 className={className[4]}>
            about <span id={className[2]} className={className[9]}>me</span>
          </h2>
          <p className={className[12]}>Lorem ipsum dolor sit amet consectetur.</p>
          <div className={className[5]}></div>
          <div className="about-me-container">
            <div className="left-col">
              <img onClick={()=>tools.setCaption(1)} src={image[1]} className="about-image" alt={tools.alt[1]}/>
              <p className='imgCap2' id='img-caption'></p>
            </div>
            <div className="right-col">
              <p id="ReadTextAI" className="about-paragraph">Hello, I am Naz a k a Mr. Knuckles. I am not finnished my portfolio project, but when I do finnish I'll actually put something about me in this section. This portfolio project is actually almost done, unlike the "Keekee's Modeling Studio" project. All I have to do for this project is figure out how to program a few things, validate the form at the very bottom of this page, and make the users input send to my email (which is hard because for some reason my code wont run when I try to program user data to send to my email). Anyways, here is some Lorem Gibberish to keep you entertained. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum ipsum autem quibusdam illo aliquid quia earum voluptates eum aliquam perspiciatis? Id tempora mollitia doloribus magnam vitae corporis USA Poddle, molestiae quae quam, praesentium exercitationem quidem at sapiente eius odit? Aliquam velit dolor aut totam exercitationem.</p>
              <button onClick={tools.readAboutSection} id="play-button" className={className[3]}>Read Aloud</button>
            </div>
          </div>
          
          {/* Skills Section */}
          <h2 id={className[2]} className={className[4]}>Languages, frameworks, and tools</h2>
          <div className={className[5]}></div>
          <div id="skill-container" className={className[8]}>
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
            <div className={className[6]} style={{backgroundColor: "--bg: #ffa200"}}>
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

          {/* What I want to Learn */}
          <h2 id={className[2]} className={className[16]}>What I want to Learn</h2>
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
          <button onClick={tools.filterProjects} className="filter-btn active" id="all">all</button>
          <button onClick={tools.filterProjects} className={className[11]} id="JavaScript">JavaScript</button>
          <button onClick={tools.filterProjects} className={className[11]} id="Bootstrap">Bootstrap</button>
          <button onClick={tools.filterProjects} className={className[11]} id="Java">Java</button>
          <button onClick={tools.filterProjects} className={className[11]} id="React">React</button>
          <button onClick={tools.filterProjects} className={className[11]} id="Python">Python</button>
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
        <form onSubmit={tools.validateUserInput} id="form" action="/HTML/thankYou.html">
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
      <footer id="footerBackgroundColorToggle" className="footer">
        <div className="footer-container">
          <p>made with love by Nazir Knuckles </p>
          <img src={logo} className="App-logo2" alt="React logo" />
        </div>
      </footer>
    </span>
    ) // End of return statement
  } // End of render
}