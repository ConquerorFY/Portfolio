import "../styles/SchoolComponent.css";

function SchoolComponent(props) {
    const descriptions = [];
    let i = 1;
    for (let desc of props.education.descriptions) {
        descriptions.push(<li key={i}>{desc}</li>);
        i++;
    }
    return (
        <div className="school-component-container">
            <img src={props.education.image} alt="school-image" />
            <div className="separator"></div>
            <div className="school-content">
                <span className="academic-title">{props.education.title}</span>
                <span className="school">{props.education.school}</span>
                <span className="academic-date">{`${props.education.startDate} - ${props.education.endDate}`}</span>
                <ul className="academic-descriptions">
                    { descriptions }
                </ul>
            </div>
        </div>
    )
}

export default SchoolComponent;