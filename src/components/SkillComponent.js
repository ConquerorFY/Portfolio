import "../styles/SkillComponent.css";
import React from "react";

function SkillComponent(props) {
    const [showDetails, setShowDetails] = React.useState(false);
    const [isHideAnimation, setIsHideAnimation] = React.useState(false);
    const skillsDetails = props.skill.details.map((detail, index) => {
        let skillRating = [];
        for (let r = 0; r < detail.rating; r++) {
            skillRating.push(<i className="bi bi-star-fill" key={`fill-star-${r + 1}`}></i>);
        }
        for (let r = 0; r < 5 - detail.rating; r++) {
            skillRating.push(<i className="bi bi-star" key={`unfill-star-${r + 1}`}></i>);
        }
        return (
            <div className="skill-rating-container" key={index}>
                <div className="skill-left-container">
                    <img src={detail.img} alt="skill-left" />
                    <p className="skill-name">{detail.name}</p>
                </div>
                <div className="skill-right-container">
                    {skillRating}
                </div>
            </div>
        )
    });
    const skillDetailsContainer = <div className={`skill-details-container ${showDetails && !isHideAnimation ? 'fly-down' : showDetails && isHideAnimation ? 'fly-up' : ''}`}>
        {skillsDetails}
    </div>;

    function showSkillDetails() {
        setIsHideAnimation(false);
        setShowDetails(true);
    }

    function hideSkillDetails() {
        setTimeout(() => {
            setShowDetails(false);
        }, 1000);
        setIsHideAnimation(true);
    }

    return (
        <div className="skill-component-container">
            {
                showDetails
                    ? <span className="dropdown bi bi-chevron-double-up" onClick={hideSkillDetails}></span>
                    : <span className="dropdown bi bi-chevron-double-down" onClick={showSkillDetails}></span>
            }
            <div className="skill-content-container">
                <div className="skill-title-container">
                    <img src={props.skill.img} alt="skill-title" />
                    <p className="skill-title">{props.skill.title}</p>
                </div>
                {showDetails ? skillDetailsContainer : ""}
            </div>
        </div>
    )
}

export default SkillComponent;