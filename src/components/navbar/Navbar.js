import "./navbar.css"
import React from 'react'
import Topheader from "../homeContent/topheader/Topheader"
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
    <Topheader/>
    <div className="container navbar">
    
        <ul className="navbarList">
            
            <Link className="navbarAnchorLink" to="/">
                <li className="navbarLink">Home</li>
            </Link>
            <Link className="navbarAnchorLink" to="/world">
                <li className="navbarLink">World</li>
            </Link>
            <Link className="navbarAnchorLink" to="/us">
                <li className="navbarLink">U.S.</li>
            </Link>
            <Link className="navbarAnchorLink" to="/politics">
                <li className="navbarLink">Politics</li>
            </Link>
            <Link className="navbarAnchorLink" to="/automobiles">
                <li className="navbarLink">Automobiles</li>
            </Link>
            <Link className="navbarAnchorLink" to="/business">
                <li className="navbarLink">Business</li>
            </Link>
            <Link className="navbarAnchorLink" to="/fashion">
                <li className="navbarLink">Fashion</li>
            </Link>
            <Link className="navbarAnchorLink" to="/food">
                <li className="navbarLink">Food</li>
            </Link>
            <Link className="navbarAnchorLink" to="/insider">
                <li className="navbarLink">Insider</li>
            </Link>
            <Link className="navbarAnchorLink" to="/movies">
                <li className="navbarLink">Movies</li>
            </Link>
            <Link className="navbarAnchorLink" to="/science">
                <li className="navbarLink">Science</li>
            </Link>
            <Link className="navbarAnchorLink" to="/sports">
                <li className="navbarLink">Sports</li>
            </Link>
            <Link className="navbarAnchorLink" to="/technology">
                <li className="navbarLink">Technology</li>
            </Link>
            <Link className="navbarAnchorLink" to="/travel">
                <li className="navbarLink">Travel</li>
            </Link>
            <Link className="navbarAnchorLink" to="/health">
                <li className="navbarLink">Health</li>
            </Link>
            <Link className="navbarAnchorLink" to="/books">
                <li className="navbarLink">Books</li>
            </Link>
        </ul>
    </div>
    <div className="container navbar"></div>
    
    </>
  )
}
