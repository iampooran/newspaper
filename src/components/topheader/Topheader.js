import React from 'react'
import "./topheader.css"
import logo from "./newspaperLogo.png"
import { useState } from 'react'

export default function Topheader() {
    const current = new Date();
    const [currentDateTime] = useState(`${current.toLocaleString()}`);
    

  return (
    <div className='container topheader'>
        <div className="topLeft">
        {/* <h1>{date}</h1> */}
        <span className='date'>{currentDateTime}</span><br />
        <span className='demoHead'>Today's News</span>
        </div>
        <div className="topCenter">
            <img className='logo' src={logo} alt="" />
        </div>
        <div className="topRight">
            topRight
        </div>
    </div>
  )
}
