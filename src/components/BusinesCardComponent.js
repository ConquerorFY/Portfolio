import "../styles/BusinessCardComponent.css";
import hilti from "../images/hilti.png";

function BusinessCardComponent(props) {
    return (
        <div className="business-card-container">
            <div className="work-content-container">
                <div className="work-responsibility-container">
                    <p className="work-header">Work Responsibilities</p>
                    <ul>
                        <li>
                            An aspiring software engineer that has a strong passion
                            in this field
                        </li>
                        <li>
                            An aspiring software engineer that has a strong passion
                            in this field
                        </li>
                        <li>
                            An aspiring software engineer that has a strong passion
                            in this field
                        </li>
                    </ul>
                </div>
                <div className="work-project-container">
                    <p className="work-header">Work Projects</p>
                    <ul>
                        <li>
                            An aspiring software engineer that has a strong passion
                            in this field
                        </li>
                        <li>
                            An aspiring software engineer that has a strong passion
                            in this field
                        </li>
                        <li>
                            An aspiring software engineer that has a strong passion
                            in this field
                        </li>
                    </ul>
                </div>
            </div>

            <div className="work-position-container">
                <div>
                    <img src={hilti} alt="company-logo" />
                    <p className="work-position">Intern</p>
                    <p className="company-name">Hilti Asia IT Services Sdn. Bhd.</p>
                    <p className="company-address">8, Jalan Bukit Indah 3/21, 68000 Ampang</p>
                    <p className="work-duration">October 2022 - January 2023</p>
                </div>
            </div>
        </div>
    )
}

export default BusinessCardComponent;