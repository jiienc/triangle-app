import "../styles/Setting.css";
import logo from "../assets/logo.png"
import home from "../assets/home.png"
import album from "../assets/album.png"
import library from "../assets/musiclibrary.png"
import playlist from "../assets/playlist.png"
import artist from "../assets/artist.png"
import profile from "../assets/profile.png"
import instagram from "../assets/instagram.png"
import facebook from "../assets/facebook.png"
import twitter from "../assets/twitter.png"
import youtube from "../assets/youtube.png"
import email from "../assets/email.png"
import React from "react";

export default function SettingPage() {
    return (
        <div className="setting">
            <img className="sort-down-parent" alt="" src={logo} />

            <img className="ellipse-icon" alt="" src={profile} />

            <div className="setting-inner" />
            <div className="menu">Menu</div>
            <div className="line-div" />
            <div className="home">Home</div>
            <img className="medium-icons" alt="" src={home} />
            <div className="my-library">My Library</div>
            <img className="music-library-icon1" alt="" src={library} />

            <div className="rectangle-div" />
            <div className="browse">Browse</div>
            <div className="line-div-2" />
            <div className="artists">Artists</div>
            <img className="musician-male-icon" alt="" src={artist} />
            <div className="albums">Albums</div>
            <img className="music-library-icon" alt="" src={album} />
            <div className="playlists">Playlists</div>
            <img className="playlist-icon" alt="" src={playlist} />

            <div className="setting-child1" />
            <div className="no-playlist-now">No Playlist Now</div>
            <div className="create-your-own">Create your own playlist</div>
            <div className="setting-child3" />
            <div className="new-playlist">New Playlist</div>


            <div className="setting-child2" />
            <img className="instagram-icon" alt="" src={instagram} />
            <img className="facebook-f-icon" alt="" src={facebook} />
            <img className="twitter-icon" alt="" src={twitter} />
            <img className="youtube-icon" alt="" src={youtube} />
            <img className="gmail-logo-icon" alt="" src={email} />
            <div className="terms-of-service">Terms of Service</div>
            <div className="triangle-user-aggrement">Triangle User Aggrement</div>
            <div className="privacy-policy">Privacy Policy</div>
            <div className="triangle">&copy; 2023 Triangle</div>

            <div className="you-can-free-container">
                <p className="you-can-free">You can free up storage by clearing your cache.</p>
                <p className="you-can-free">Your downloads won’t be removed</p>
            </div>

            <div className="settings">Settings</div>

            <div className="language">Language</div>
            <div className="setting-child" />
            <div className="english">English</div>

            <div className="email">Email</div>
            <div className="jokwid123gmailcom">jokwid123@gmail.com</div>

            <div className="clear-cache">Clear cache</div>
            <div className="you-can-free-container">
                <p className="you-can-free">You can free up storage by clearing your cache.</p>
                <p className="you-can-free">Your downloads won’t be removed</p>
            </div>

            <div className="setting-item" />
            <div className="logout">Logout</div>
        </div>
    );
};
