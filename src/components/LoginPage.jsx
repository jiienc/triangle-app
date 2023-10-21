import "../styles/Login.css";
import pict from "../assets/gramophone.png"
import logo from"../assets/logo.png"

export default function LoginPage() {
    return (
        <div className="login">
            <div className="login-child" />
            <div className="triangle-lets-you-container">
                <p className="triangle-lets-you">Triangle lets you explore</p>
                <p className="triangle-lets-you">the sound of your soul</p>
            </div>
            <img className="login-inner" alt="" src={pict} />

            <div className="login-item" />
            <img className="sort-down-parent" alt="" src={logo} />
            <div className="login1">Login</div>

            <div className="rectangle-div" />
            <div className="first-name">First Name</div>
            <div className="login-child1" />
            <div className="email">Email</div>

            <div className="forgot-password">Forgot password?</div>

            <div className="login-child2" />
            <div className="create-account">Create Account</div>

            <div className="dont-have-an-container">
                <span>Don’t have an account? </span>
                <b>Register</b>
            </div>
        </div>
    );
};
