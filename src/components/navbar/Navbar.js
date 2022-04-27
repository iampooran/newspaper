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
            <Link className="navbarAnchorLink" to="/us">
                <li className="navbarLink">U.S.</li>
            </Link>
            <Link className="navbarAnchorLink" to="/politics">
                <li className="navbarLink">Politics</li>
            </Link>
            <Link className="navbarAnchorLink" to="/automobiles">
                <li className="navbarLink">Automobiles</li>
            </Link>
            <Link className="navbarAnchorLink" to="/arts">
                <li className="navbarLink">Arts</li>
            </Link>
            <Link className="navbarAnchorLink" to="/obituaries">
                <li className="navbarLink">Obituaries</li>
            </Link>
            <Link className="navbarAnchorLink" to="/food">
                <li className="navbarLink">Food</li>
            </Link>
            <Link className="navbarAnchorLink" to="/opinion">
                <li className="navbarLink">Opinion</li>
            </Link>
            <Link className="navbarAnchorLink" to="/movies">
                <li className="navbarLink">Movies</li>
            </Link>
            <Link className="navbarAnchorLink" to="/sundayreview">
                <li className="navbarLink">Sunday Review</li>
            </Link>
            <Link className="navbarAnchorLink" to="/sports">
                <li className="navbarLink">Sports</li>
            </Link>
            <Link className="navbarAnchorLink" to="/theater">
                <li className="navbarLink">Theater</li>
            </Link>
            <Link className="navbarAnchorLink" to="/t-magazine">
                <li className="navbarLink">T Magazine</li>
            </Link>
            <Link className="navbarAnchorLink" to="/upshot">
                <li className="navbarLink">Upshot</li>
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
