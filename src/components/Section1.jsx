import React from "react";
import topalbum from "../assets/tophits.png"

export default function Section1() {
    return (
        <div>
            <div className="triangle-top-charts">Triangle Top Charts</div>
            <div className="show-all">Show All</div>
            <img className="rectangle-icon" alt="" src={topalbum} />
            <div className="todays-top-hits">Today’s Top Hits</div>
            <img className="dashboard-before-login-child6" alt="" src={topalbum} />
            <div className="rapcaviar">RapCaviar</div>
            <img className="dashboard-before-login-child7" alt="" src={topalbum} />
            <div className="all-out-2010s">All Out 2010s</div>
            <img className="dashboard-before-login-child8" alt="" src={topalbum} />
            <div className="rock-classics">Rock Classics</div>
            <img className="dashboard-before-login-child9" alt="" src={topalbum} />
            <div className="chill-hits">Chill Hits</div>
        </div>
    );
}