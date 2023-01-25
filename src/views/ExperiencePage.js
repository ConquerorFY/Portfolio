import BusinessCardComponent from "../components/BusinessCardComponent";
import PageHeaderComponent from "../components/PageHeaderComponent";
import YearSliderComponent from "../components/YearSliderComponent";
import experience from "../images/experience-2.png";
import "../styles/ExperiencePage.css";
import hilti from "../images/hilti.png";

function ExperiencePage() {
    const experience1 = {
        img: hilti,
        position: "Intern",
        company: "Hilti Asia IT Services Sdn. Bhd.",
        address: "8, Jalan Bukit Indah 3/21, 68000 Ampang",
        startDate: "October 2022",
        endDate: "January 2023",
        responsibilities: [
            "An aspiring software engineer that has a strong passion in this field",
            "An aspiring software engineer that has a strong passion in this field",
            "An aspiring software engineer that has a strong passion in this field"
        ],
        projects: [
            "An aspiring software engineer that has a strong passion in this field",
            "An aspiring software engineer that has a strong passion in this field",
            "An aspiring software engineer that has a strong passion in this field"
        ]
    };
    return (
        <div className="experience-page-container">
            <PageHeaderComponent img={experience} title="Experience" />
            <YearSliderComponent />
            <BusinessCardComponent experience={experience1} />
        </div>
    )
}

export default ExperiencePage;