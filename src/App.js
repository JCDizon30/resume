import './App.css';


export default function App() {
  return (
    <div className="App">
      <div className="Resume">
        <div className="Header">
          <Header />
        </div>
        <div className="Content">
          <div className="Contact">
            <Contact />
            <Education />
            <Skills />
          </div>
          <div className="Experience">
            <Experience />
          </div>
        </div>
      </div>
    </div>
  );
}

// HEADER START
function Header() {
  return (
    <div className="header">
      <div className="dp">
        <img src="profile-pic.jpg"></img>
      </div>
      <div className="about-me">
        <p className="name">JOHN CARLO DIZON</p>
        <p className="role">UI/UX DESIGNER | SOFTWARE ENGINEER | VIDEO EDITOR</p>
        <p className="profile-title">PROFILE</p>
        <p className="profile-detail">Hello, I'm John Carlo Dizon Software Engineer and and Video Editor, currently looking for Connections in Web Development and Software Engineering Industry for more knowledge and Experience. Offering my services in Web Designing and Video Editing, to help your business improve your websites and videos. </p>
      </div>     
    </div>
  )
}
// HEADER END

// CONTACT START
function Contact() {
  return (
        <div>
          <p className="title">CONTACT</p>
          <div className="contact-info">
            <a href="mailto:dizon6171@gmail.com"><ion-icon name="mail-outline"></ion-icon>dizon6171@gmail.com</a>
            <a href=""><ion-icon name="call-outline"></ion-icon>+63 921 5791 924</a>
            <a href="https://tinyurl.com/4tadkst8" target="_blank"><ion-icon name="location-outline" ></ion-icon>Mexico, Pampanga</a>
            <a href="https://www.linkedin.com/in/john-carlo-dizon-80a03b294/" target="_blank"><ion-icon name="logo-linkedin"></ion-icon>John Carlo Dizon</a>
            <a href="https://github.com/JCDizon30" target="_blank"><ion-icon name="logo-github"></ion-icon>JCDizon30</a>
          </div>
        </div>    
  )
}
// CONTACT END

// EDUCATION START
function Education () {
  return (
    <div className="education">
    <p className="title">EDUCATION</p>
    <div className="p-educ">
      <p>Bachelor of Science</p>
      <p>Information Technology</p>
      <p>University of the Assumption</p>
      <p>San Fernando, Pampanga</p>
      <p>2022-2026</p>
    </div>    
  </div>
  )
}
// EDUCATION END

// SKILL START
function Skills () {
  return (
    <div className="skills">
    <p className="title">SKILLS</p>
      <div className="skill-logo"><ion-icon name="logo-html5"></ion-icon>HTML</div>
      <div className="skill-logo"><ion-icon name="logo-css3"></ion-icon>CSS</div>
      <div className="skill-logo"> <ion-icon name="logo-javascript"></ion-icon>JAVASCRIPT</div>
      <div className="skill-logo"><ion-icon name="logo-react"></ion-icon>REACTJS</div>
      <div className="skill-logo"><ion-icon name="logo-python"></ion-icon>PYTHON</div>
      <div className="skill-logo"><ion-icon name="code-slash-outline"></ion-icon>JAVA</div>
      <div className="skill-logo"><ion-icon name="server"></ion-icon>MYSQL</div>
      <div className="skill-logo"><ion-icon name="git-branch"></ion-icon>GIT</div>
      <div className="skill-logo"> <ion-icon name="logo-figma"></ion-icon>FIGMA</div>
  </div>
  )
}
// SKILL END

// EXPERIENCE START
function Experience () {
  return (
    <div className="experience">
      <p className="title">WORK EXPERIENCE</p>

      <div className="exp-one">
        <p className="year">UI/UX DESIGN</p>
        <p className="date">Sample Design</p>
        <ul>
          <li>
            <a href="https://tinyurl.com/468yn92b" target="blank">
              Developed a sample university school page using Figma
            </a>
          </li>

          <li>
            <a href="https://tinyurl.com/3d65nndm" target="blank">
              Designing a Sample Micronutrients Website Using Figma
            </a>
          </li>

          <li>
            <a href="https://tinyurl.com/mr3u49a3" target="blank">
            Cloning the Instagram Homepage Using Figma for Better Understanding of UI Techniques
            </a>
          </li>
      </ul>
      </div>

      <div className="exp-two">
        <p className="year">SOFTWARE ENGINEER</p>
        <p className="date">Dizon Group Trading</p>
        <ul>
          <li>Developed full-stack web applications using Reactjs, and Nextjs, improving site performance and user experience by 30%.</li>
          <li>Developing a responsive and dynamic web applications using HTML, CSS, JavaScript, Reactjs, and Nextjs, enhancing user experience and mobile optimization by 25%.</li>
          <li>Designed and optimized SQL and NoSQL databases, ensuring efficient data storage and retrieval, reducing query time by 25%</li>
      </ul>
      </div>

      <div className="exp-three">
        <p className="year">VIDEO EDITING</p>
        <p className="date">Since 2026</p>
        <ul>
          <li>Becoming the video editor of our family business (Dizon Group Trading) with almost 10 years of experience.</li>
          <li>editing advertisment video for other company <br></br> inside or outside of the Philippines </li>
      </ul>
      </div>
    </div>
  )
}
// EXPERIENCE END

