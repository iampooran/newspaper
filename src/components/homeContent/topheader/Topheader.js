import React from 'react'
import "./topheader.css"
import logo from "./newspaperLogo.png"
import { useState } from 'react'
import { Link } from "react-router-dom";

export default function Topheader() {
    const current = new Date();
    const [currentDateTime] = useState(`${current.toGMTString()}`);
    

  return (
    <div className='container topheader'>
        <div className="topLeft">
        {/* <h1>{date}</h1> */}
        <span className='date'>{currentDateTime}</span><br />
        <span className='demoHead'>Today's News</span>
        </div>
        <div className="topCenter">
          <Link to="/">
            <img className='logo' src={logo} alt="" />
            </Link>
        </div>
        <div className="topRight">
            topRight
        </div>
    </div>
  )
}
