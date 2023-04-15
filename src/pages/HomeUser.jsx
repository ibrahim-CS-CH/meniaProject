import React from 'react'
import { Link } from 'react-router-dom'

const HomeUser = () => {
  return (
    <div className="user-home">
        <div id="nav-holder">
            <div id="flex-nav">
                <a href="#" className="logo">
                    <img src="./logo.png" alt="Logo"/>
                </a>
                <nav>
                    <i className="ri-menu-3-line"></i>
                    <ul>
                        <li><Link to={'/home'} className="active" href="#">Home</Link></li>
                        <li><Link to={'/diagnos'}>Diagnoise</Link></li>
                        <li><Link to={'/profile'}>Profile</Link></li>
                    </ul>
                    <h3>Hello, Aliaa</h3>
                    <div className="log-out">
                        <Link className="logout" to={'/'}><input type="submit" value="Logout" className="logout"/></Link>
                        
                    </div>
                </nav>
            </div>
        </div>
        
        <div className="user-content">
            <img src="p0.png" alt=""/>
            <div className="user-info">
                Monkeypox is an illness caused by the monkeypox virus. It can also spread from humans to other humans
                through close contact with someone who has a monkeypox rash. Close contact can mean being face-to-face .
            </div>
            <div className="rm">
                <input type="submit" value="Read More" id="rm"/>
            </div>
        </div>
    </div>
  )
}

export default HomeUser