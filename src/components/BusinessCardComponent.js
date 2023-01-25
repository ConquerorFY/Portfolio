import "../styles/BusinessCardComponent.css";

function BusinessCardComponent(props) {
    const responsibilities = props.experience.responsibilities.map((currentVal, index) => {
        return <li key={index}>{currentVal}</li>
    });
    const projects = props.experience.projects.map((currentVal, index) => {
        return <li key={index}>{currentVal}</li>
    });
    return (
        <div className="business-card-container">
            <div className="work-content-container">
                <div className="work-responsibility-container">
                    <p className="work-header">Work Responsibilities</p>
                    <ul>
                        {responsibilities}
                    </ul>
                </div>
                <div className="work-project-container">
                    <p className="work-header">Work Projects</p>
                    <ul>
                        {projects}
                    </ul>
                </div>
            </div>

            <div className="work-position-container">
                <div>
                    <img src={props.experience.img} alt="company-logo" />
                    <p className="work-position">{props.experience.position}</p>
                    <p className="company-name">{props.experience.company}</p>
                    <p className="company-address">{props.experience.address}</p>
                    <p className="work-duration">{`${props.experience.startDate} - ${props.experience.endDate}`}</p>
                </div>
            </div>
        </div>
    )
}

export default BusinessCardComponent;