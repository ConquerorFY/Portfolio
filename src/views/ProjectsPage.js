import "../styles/ProjectsPage.css";
import projects from "../images/projects-2.png";
import PageHeaderComponent from "../components/PageHeaderComponent";
import ProjectCardComponent from "../components/ProjectCardComponent";
import hilti from "../images/hilti.png";

function ProjectsPage() {
    const project1 = {
        img: hilti,
        title: "Sales Order Test Automation",
        startDate: "October 2022",
        endDate: "January 2023",
        description: [
            "An automated testing framework developed for the Sales Order Management System in Hilti",
            "To improve the testing process by automating the entire process instead of testing manually"
        ],
        technology: [
            "Java Spring Boot Framework",
            "Cucumber Framework"
        ]
    }
    return (
        <div className="projects-page-container">
            <PageHeaderComponent img={projects} title="Projects" />
            <div className="projects-content-container">
                <ProjectCardComponent project={project1} />
                <ProjectCardComponent project={project1} />
                <ProjectCardComponent project={project1} />
                <ProjectCardComponent project={project1} />
                <ProjectCardComponent project={project1} />
                <ProjectCardComponent project={project1} />
            </div>
        </div>
    )
}

export default ProjectsPage;