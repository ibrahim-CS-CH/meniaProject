import React from 'react'
import dashboard from '../../style/dashboard.css'
const NavBar = () => {
  return (
    <div className='page'>
        <div className='content'>
            <div className="head">
                    <div className="l-h">
                        <h2>Welcome back, Aliaa</h2>
                        <div className="search-label">
                            <i className="ri-search-line"></i>
                            <input type="text" placeholder="Search.."/>
                        </div>
                    </div>
                    <div className="m-h"></div>
                    <div className="r-h">
                        <i className="ri-message-3-line mes"></i>
                        <i className="ri-notification-4-line not"></i>
                        <span className="r-h-info">Hello, Aliaa</span>
                        <div className="log-out">
                            <input type="submit" value="Logout"/>
                        </div>
                    </div>
            </div>
            <div className="low-opa-words">
                Here's what's happening with your store today.
            </div>
        </div>
    </div>
  )
}

export default NavBar