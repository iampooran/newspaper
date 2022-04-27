import React from 'react'
import "./footer.css"
import { Link } from "react-router-dom";
import copyright from "./copyright.png"
export default function Footer() {
  return (
    <div className='container'>
        <div className='footer'>
            <ul className="navbarList">
            <Link className="navbarAnchorLink setColor" to="/">
                <li className="navbarLink">Home</li>
            </Link>
            <Link className="navbarAnchorLink setColor" to="/us">
                <li className="navbarLink">U.S.</li>
            </Link>
            <Link className="navbarAnchorLink setColor" to="/politics">
                <li className="navbarLink">Politics</li>
            </Link>
            <Link className="navbarAnchorLink setColor" to="/automobiles">
                <li className="navbarLink">Automobiles</li>
            </Link>
            <Link className="navbarAnchorLink setColor" to="/arts">
                <li className="navbarLink">Arts</li>
            </Link>
            <Link className="navbarAnchorLink setColor" to="/obituaries">
                <li className="navbarLink">Obituaries</li>
            </Link>
            <Link className="navbarAnchorLink setColor" to="/food">
                <li className="navbarLink">Food</li>
            </Link>
            <Link className="navbarAnchorLink setColor" to="/opinion">
                <li className="navbarLink">Opinion</li>
            </Link>
            <Link className="navbarAnchorLink setColor" to="/movies">
                <li className="navbarLink">Movies</li>
            </Link>
            <Link className="navbarAnchorLink setColor" to="/sundayreview">
                <li className="navbarLink">Sunday Review</li>
            </Link>
            <Link className="navbarAnchorLink setColor" to="/sports">
                <li className="navbarLink">Sports</li>
            </Link>
            <Link className="navbarAnchorLink setColor" to="/theater">
                <li className="navbarLink">Theater</li>
            </Link>
            <Link className="navbarAnchorLink setColor" to="/t-magazine">
                <li className="navbarLink">T Magazine</li>
            </Link>
            <Link className="navbarAnchorLink setColor" to="/upshot">
                <li className="navbarLink">Upshot</li>
            </Link>
            <Link className="navbarAnchorLink setColor" to="/books">
                <li className="navbarLink">Books</li>
            </Link>
            </ul>
            <span className='copyright'><a href="https://developer.nytimes.com."><img src={copyright} alt="" /></a></span>
            
        </div>
    </div>
  )
}

    