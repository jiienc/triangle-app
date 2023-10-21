import React from "react";
import "../styles/App.css";
import Menu from "./Menu.jsx";
import Browse from "./Browse.jsx";
import Playlist from "./Playlist.jsx";
import Footer from "./Footer.jsx";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import Section1 from "./Section1.jsx";
import Section2 from "./Section2.jsx";
import Section3 from "./Section3.jsx";
import Header from "./Header.jsx";

export default function App() {
    return (
        <div className="dashboard-before-login">
            <Header />
            <Login />
            <Signup />
            <Menu />
            <Browse />
            <Playlist />
            <Footer />
            <Section1 />
            <Section2 />
            <Section3 />
        </div>
    );
}