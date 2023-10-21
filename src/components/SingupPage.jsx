import React from "react";
import "../styles/Signup.css";
import logo from "../assets/logo.png"
import pict from "../assets/gramophone.png"

export default function SignupPage() {
    return (
        <div className="sign-up">
            <div className="sign-up-child" />
            <div className="triangle-lets-you-container">
                <p className="triangle-lets-you">Triangle lets you explore</p>
                <p className="triangle-lets-you">the sound of your soul</p>
            </div>
            <img className="sign-up-inner" alt="" src={pict} />

            <div className="sign-up-item" />
            <img className="sort-down-parent" alt="" src={logo} />
            <div className="create-account">Create Account</div>

            <div className="rectangle-div" />
            <div className="first-name">First Name</div>
            <div className="sign-up-child2" />
            <div className="last-name">Last Name</div>
            <div className="sign-up-child4" />
            <div className="email">Email</div>
            <div className="sign-up-child7" />
            <div className="password">Password</div>
            <div className="sign-up-child5" />
            <div className="create-account1">Create Account</div>

            <div className="already-have-an-container">
                <span>Already have an account? </span>
                <b>Login</b>
            </div>

            <div className="line-div" />
            <div className="or">OR</div>
            <div className="sign-up-child6" />

            <div className="sign-up-child1" />
            <div className="sign-up-with">Sign up with Google</div>

            <div className="sign-up-child3" />
            <div className="sign-up-with1">Sign up with Facebook</div>
        </div>
    );
};
