import React from 'react'
import home from "../assets/home.png"
import musiclibrary from "../assets/musiclibrary.png"

export default function Menu() {
    return (
        <div>
            <div className="dashboard-before-login-child" />
            <div className="line-div" />
            <div className="menu">Menu</div>
            <div className="home">Home</div>
            <img className="medium-icons" alt="" src={home} />
            <div className="my-library">My Library</div>
            <img className="music-library-icon1" alt="" src={musiclibrary} />
        </div>
    );
}