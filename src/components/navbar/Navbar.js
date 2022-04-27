import "./navbar.css"
import React from 'react'
import Topheader from "../topheader/Topheader"

export default function Navbar() {
  return (
    <>
    <Topheader/>
    <div className="container navbar">
    
        <ul className="navbarList">
            
            <a className="navbarAnchorLink" href="/">
                <li className="navbarLink">World</li>
            </a>
            <a className="navbarAnchorLink" href="/">
                <li className="navbarLink">U.S.</li>
            </a>
            <a className="navbarAnchorLink" href="/">
                <li className="navbarLink">Politics</li>
            </a>
            <a className="navbarAnchorLink" href="/">
                <li className="navbarLink">N.Y.</li>
            </a>
            <a className="navbarAnchorLink" href="/">
                <li className="navbarLink">Business</li>
            </a>
            <a className="navbarAnchorLink" href="/">
                <li className="navbarLink">Opinion</li>
            </a>
            <a className="navbarAnchorLink" href="/">
                <li className="navbarLink">Tech</li>
            </a>
            <a className="navbarAnchorLink" href="/">
                <li className="navbarLink">Science</li>
            </a>
            <a className="navbarAnchorLink" href="/">
                <li className="navbarLink">Helath</li>
            </a>
            <a className="navbarAnchorLink" href="/">
                <li className="navbarLink">Sports</li>
            </a>
            <a className="navbarAnchorLink" href="/">
                <li className="navbarLink">Arts</li>
            </a>
            <a className="navbarAnchorLink" href="/">
                <li className="navbarLink">Books</li>
            </a>
            <a className="navbarAnchorLink" href="/">
                <li className="navbarLink">Style</li>
            </a>
            <a className="navbarAnchorLink" href="/">
                <li className="navbarLink">Food</li>
            </a>
            <a className="navbarAnchorLink" href="/">
                <li className="navbarLink">Travel</li>
            </a>
            <a className="navbarAnchorLink" href="/">
                <li className="navbarLink">Magazine</li>
            </a>
            <a className="navbarAnchorLink" href="/">
                <li className="navbarLink">T Magazine</li>
            </a>
        </ul>
    </div>
    <div className="container navbar"></div>
    
    </>
  )
}
