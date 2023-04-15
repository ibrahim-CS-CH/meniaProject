import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <header>
        <div className="container">
            <Link to={'/'} className="logo">
                <img src="logo.png" alt="Logo"/>
            </Link>
            <nav>
                <i className="ri-menu-3-line"></i>
                <ul>
                    <li><a className="active" href='#home'>Home</a></li>
                    <li><a href="#aboutus">About Us</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contactUs">Contact Us</a></li>
                </ul>
                <div className="btn">
                    <Link className="btn1" to={'login'}>Login</Link>
                    <Link className="btn2" to={'register'}>Register</Link>
                </div>
            </nav>
        </div>
    </header>
  )
}

export default Navbar