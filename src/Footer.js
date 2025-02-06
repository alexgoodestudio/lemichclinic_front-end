import React from "react";
import "./style.css"

function Footer() {
    return (
        <div className="bg-slate-400 text-gray-100 px-5 pt-3 pb-1 flex flex-col items-center text-center">
            <p>If you are in imminent risk of harm, please call <span className="italic">911</span> or go to your nearest hospital.</p>
        </div>
    );
}

export default Footer;
