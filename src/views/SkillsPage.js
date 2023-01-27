import PageHeaderComponent from "../components/PageHeaderComponent";
import "../styles/SkillsPage.css";
import skills from "../images/skills-2.png";
import SkillComponent from "../components/SkillComponent";
import frontend from "../images/frontend-web-dev.png";
import html from "../images/html.png";
import css from "../images/css.png";
import angular from "../images/angular.png";

function SkillsPage() {
    const skill1 = {
        img: frontend,
        title: "Frontend Web Development",
        details: [
            {
                img: html,
                name: "HTML",
                rating: 4
            },
            {
                img: css,
                name: "CSS",
                rating: 4
            },
            {
                img: angular,
                name: "Angular",
                rating: 3
            }
        ]
    };
    return (
        <div className="skills-page-container">
            <PageHeaderComponent img={skills} title="Skills" />
            <div className="skills-container">
                <SkillComponent skill={skill1} />
                <SkillComponent skill={skill1} />
                <SkillComponent skill={skill1} />
                <SkillComponent skill={skill1} />
            </div>
            <div className="languages-container">
                <p className="languages-label">Languages</p>
                <div className="languages-content">
                    <i className="bi bi-translate"></i>
                    <p className="languages-title">English, Chinese, Malay</p>
                    <div className="bottom-arc-pattern"></div>
                </div>
            </div>
            <div className="qualities-hobbies-container">
                <div className="qualities-container">
                    <p className="qualities-label">Qualities</p>
                    <div className="qualities-content">
                        <div className="quality-content">
                            <i className="bi bi-hand-thumbs-up-fill"></i>
                            <p className="quality-title">Hard-Working</p>
                        </div>
                        <div className="quality-content">
                            <i className="bi bi-hand-thumbs-up-fill"></i>
                            <p className="quality-title">Responsible</p>
                        </div>
                        <div className="quality-content">
                            <i className="bi bi-hand-thumbs-up-fill"></i>
                            <p className="quality-title">Determined</p>
                        </div>
                        <div className="left-arc-pattern"></div>
                    </div>
                </div>
                <div className="hobbies-container">
                    <p className="hobbies-label">Hobbies</p>
                    <div className="hobbies-content">
                        <p className="hobbies-title"><i className="bi bi-heart-fill"></i> Coding</p>
                        <p className="hobbies-title"><i className="bi bi-heart-fill"></i> Jogging</p>
                        <p className="hobbies-title"><i className="bi bi-heart-fill"></i> Reading</p>
                        <p className="hobbies-title"><i className="bi bi-heart-fill"></i> Gaming</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillsPage;