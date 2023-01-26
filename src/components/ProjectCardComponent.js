import "../styles/ProjectCardComponent.css";

function ProjectCardComponent(props) {
    // use map() instead of forEach() to follow the immutability principle
    const descriptions = props.project.description.map((currentVal, index) => {
        return <li key={index}>{currentVal}</li>
    })
    const technology = props.project.technology.map((currentVal, index) => {
        return <li key={index}>{currentVal}</li>
    })

    return (
        <div className="project-component-container">
            <img src={props.project.img} alt="company-logo" />
            <p className="project-title">{props.project.title}</p>
            <p className="project-duration">{`${props.project.startDate} - ${props.project.endDate}`}</p>

            <div className="project-description">
                <p>Description</p>
                <ul>
                    {descriptions}
                </ul>
            </div>

            <div className="project-technology">
                <p>Technology</p>
                <ul>
                    {technology}
                </ul>
            </div>

            <div className="more-details-btn">More Details</div>
        </div>
    )
}

export default ProjectCardComponent;