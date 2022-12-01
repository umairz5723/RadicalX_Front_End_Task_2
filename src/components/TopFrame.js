import React from "react";
import "./styles/topframe.css";
import { TfiArrowLeft, TfiArrowRight } from "react-icons/tfi";


function TopFrame() {
    return <div id="top-frame">
    <div className="top-left"><TfiArrowLeft/>Back</div>
    <div className="top-mid">Add New Internship </div>
    <div className="top-right"> <div className="top-right-button">Continue to Next Step <TfiArrowRight/> </div></div>

    </div>
}

export default TopFrame;