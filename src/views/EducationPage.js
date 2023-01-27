import "../styles/EducationPage.css";
import education from "../images/education-2.png";
import chkl from "../images/chkl.png";
import apu from "../images/apu.png";
import SchoolComponent from "../components/SchoolComponent";
import YearSliderComponent from "../components/YearSliderComponent";
import PageHeaderComponent from "../components/PageHeaderComponent";

function EducationPage() {
    const secondaryInfo = {
        id: 1,
        image: chkl,
        title: "Secondary Education",
        school: "Chong Hwa Independant High School",
        startDate: "January 2014",
        endDate: "December 2018",
        descriptions: [
            "Achieved 10As result in SPM 2018",
            "Was the Secretary for the Robotics Society from 2016 - 2018",
            "Participated in several Robotics Competitions and won awards"
        ]
    };
    const diplomaInfo = {
        id: 2,
        image: apu,
        title: "Diploma in Information Technology Specialized in Software Engineering",
        school: "Asia Pacific University",
        startDate: "May 2019",
        endDate: "Auguest 2021",
        descriptions: [
            "Achieved CGPA of 3.93",
            "Was an active member of the APU Forensics Security Society",
            "Was an active member of the APU Muay Thai Club",
            "Participated in various website design competitions and won awards"
        ]
    };
    const degreeInfo = {
        id: 3,
        image: apu,
        title: "Bachelor Hons in Computer Science",
        school: "Asia Pacific University",
        startDate: "November 2021",
        endDate: "",
        descriptions: [
            "Achieved GPA of 3.93 for Year 2 Studies (Currently)",
            "Current event management committee member of the APU IEEE Society",
            "Current active member of the APU Blockchain and Development Club",
            "Participated in various hackathons and won awards"
        ]
    };

    return (
        <div className="education-page-container">
            <PageHeaderComponent img={education} title="Education" />
            <YearSliderComponent />
            <div className="education-content-container">
                <SchoolComponent education={secondaryInfo} key={secondaryInfo.id} />
                <SchoolComponent education={diplomaInfo} key={diplomaInfo.id} />
                <SchoolComponent education={degreeInfo} key={degreeInfo.id} />
            </div>
        </div>
    )
}

export default EducationPage;