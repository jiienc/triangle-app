import instagram from "../assets/instagram.png"
import facebook from "../assets/facebook.png"
import twitter from "../assets/twitter.png"
import youtube from "../assets/youtube.png"
import email from "../assets/email.png"

export default function Footer() {
    return (
        <div>
            <div className="rectangle-div" />
            <img className="instagram-icon" alt="" src={instagram} />
            <img className="facebook-f-icon" alt="" src={facebook} />
            <img className="twitter-icon" alt="" src={twitter} />
            <img className="youtube-icon" alt="" src={youtube} />
            <img className="gmail-logo-icon" alt="" src={email} />
            <div className="terms-of-service">Terms of Service</div>
            <div className="triangle-user-aggrement">Triangle User Aggrement</div>
            <div className="privacy-policy">Privacy Policy</div>
            <div className="triangle">&copy; 2023 Triangle</div>
        </div>
    );
}
