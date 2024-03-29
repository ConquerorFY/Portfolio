import "../styles/NavbarComponent.css";
import aboutMe from "../images/about-me.png";
import education from "../images/education.png";
import experience from "../images/experience.png";
import skills from "../images/skills.png";
import projects from "../images/projects.png";
import lightMode from "../images/light-mode.png";
import darkMode from "../images/dark-mode.png";
import { Link } from "react-router-dom";

function NavbarComponent() {
    return (
        <div className="navbar-component-container">
            <div className="navbar-selection-container">
                <div className="navbar-selection">
                    <Link to="/profile" className="link">
                        <img src={aboutMe} alt="about-me" />
                        <span>About Me</span>
                    </Link>
                </div>
                <div className="navbar-selection">
                    <Link to="/education" className="link">
                        <img src={education} alt="education" />
                        <span>Education</span>
                    </Link>
                </div>
                <div className="navbar-selection">
                    <Link to="/experience" className="link">
                        <img src={experience} alt="experience" />
                        <span>Experience</span>
                    </Link>
                </div>
                <div className="navbar-selection">
                    <Link to="/skills" className="link">
                        <img src={skills} alt="skills" />
                        <span>Skills</span>
                    </Link>
                </div>
                <div className="navbar-selection">
                    <Link to="/projects" className="link">
                        <img src={projects} alt="projects" />
                        <span>Projects</span>
                    </Link>
                </div>
            </div>
            <div className="light-dark-mode-container">
                <img src={lightMode} alt="light-mode" className="light-mode" title="Light Mode" />
                {/* <!-- Rounded switch --> */}
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                </label>
                <img src={darkMode} alt="dark-mode" className="dark-mode" title="Dark Mode" />
            </div>
        </div>
    )
}

export default NavbarComponent;