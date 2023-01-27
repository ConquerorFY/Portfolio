import "../styles/ProfilePage.css";
import profileImage from "../images/profile-image.png";
import malaysianImage from "../images/malaysian.png";

function ProfilePage() {
    return (
        <div className="profile-page-container">
            <div className="profile-top-container">
                <img src={profileImage} alt="profile-img" />
            </div>

            <div className="profile-bottom-container">
                <div className="gender-nationality">
                    <i className="gender bi bi-gender-male"></i>
                    <img className="malaysian" src={malaysianImage} alt="malaysian"></img>
                </div>
                <div className="name-container">
                    <div className="honorifics-container">
                        <i className="speaker bi bi-megaphone-fill"></i>
                        <span className="honorifics">Mr.</span>
                    </div>
                    <span className="name">Ryan Lim Fang Yung</span>
                </div>
                <div className="personal-statement-container">
                    <i className="biography bi bi-file-person-fill"></i>
                    <p className="personal-statement">
                        An aspiring software engineer that has a strong passion
                        in this field and has created many side projects in
                        programming and software development apps.
                    </p>
                </div>
                <div className="about-me-container">
                    <p className="title">About Me</p>
                    <div className="content">
                        <img src={profileImage} alt="profile-img" />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque congue lacus eu vestibulum semper.
                            Curabitur rhoncus dolor at lectus maximus, id lobortis augue lacinia. Vestibulum faucibus est a risus
                            ultricies, quis consequat justo aliquet. Integer eu porttitor nulla. Quisque sodales urna sed finibus
                            pulvinar. In sit amet ornare turpis, ut elementum lectus. Maecenas ut risus quis tortor pulvinar sodales
                            sit amet id leo. Duis imperdiet turpis placerat arcu sodales imperdiet. Vestibulum sed dignissim urna,
                            nec posuere libero. Suspendisse tempor lacus et metus luctus porta. Quisque placerat tempor metus a
                            ultricies. Nulla diam leo, lobortis vitae quam id, bibendum ullamcorper tellus. Proin ut purus dapibus,
                            venenatis nisi eget, fringilla libero.
                        </p>
                        <p>
                            Vestibulum nec rutrum magna. Maecenas arcu metus, tempor interdum vulputate ut, posuere a est. Sed aliquam
                            felis ut justo iaculis accumsan. Aenean sed sem sapien. Maecenas venenatis tempor dolor, vel rutrum massa
                            semper id. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                            Nullam ac varius magna. In leo mi, malesuada quis leo in, pellentesque pharetra sem.
                        </p>
                        <p>
                            Ut consectetur sem non orci porttitor malesuada. Donec dui velit, venenatis vel purus eu, maximus interdum
                            turpis. Sed at diam vel nisi consequat placerat. Fusce vitae bibendum felis. Suspendisse in nisi sem.
                            Phasellus nibh risus, lacinia in dui at, malesuada accumsan velit. Suspendisse potenti.
                        </p>
                    </div>
                </div>
                <div className="resume-business-card-container">
                    <div className="resume-button">Get Resume</div>
                    <div className="business-card-button">Get Business Card</div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;