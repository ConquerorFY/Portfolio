import "../styles/FooterComponent.css";
import phone from "../images/phone.png";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import whatsapp from "../images/whatsapp.png";
import mail from "../images/mail.png";

function FooterComponent() {
    return (
        <div className="footer-component-container">
            <p className="footer-title">Come & Get In Touch!</p>
            <div className="footer-contact-methods">
                <img src={phone} alt="phone" />
                <img src={linkedin} alt="linkedin" />
                <img src={github} alt="github" />
                <img src={whatsapp} alt="whatsapp" />
                <img src={mail} alt="email" />
            </div>
            <p className="footer-copyright">&#169; All Rights Reserved By Ryan Lim Fang Yung</p>
        </div>
    )
}

export default FooterComponent;