import React from 'react'
import dashboard from '../../style/dashboard.css'
import { Link } from 'react-router-dom'
const NewAdmin = () => {
  return (
    <div className="page">
        <div className="sidebar">
        <ul>
                <li><a href="#" className="logo">
                        <img src="./imgs/logo.png" alt="Logo"/>
                        <span className="logo-info">MPXV</span>
                    </a></li>
                <li><Link to={'/dashboard'}>
                        <i className="ri-home-5-line"></i>
                        <span className="sidebar-item">OverView</span>
                    </Link></li>
                <li><Link to={'/admin'}>
                        <i className="ri-admin-line"></i>
                        <span className="sidebar-item">Admins</span>
                    </Link></li>
                <li><Link to={'/doctors'}>
                        <i className="ri-nurse-line"></i>
                        <span className="sidebar-item">Doctors</span>
                    </Link></li>
                <li><Link to={'/users'}>
                        <i className="ri-user-line"></i>
                        <span className="sidebar-item">Users</span>
                    </Link></li>
                <li><Link to={'/newadmin'}>
                        <i className="ri-user-add-line"></i>
                        <span className="sidebar-item">Add Admin</span>
                    </Link></li>
                <li><Link to={'/cases'}>
                        <i className="ri-archive-line"></i>
                        <span className="sidebar-item">Cases</span>
                    </Link></li>
                <li><a href="#">
                        <i className="ri-settings-4-line"></i>
                        <span className="sidebar-item">Account Setting
                        </span>
                    </a></li>
            </ul>
        </div>
        <div className="content">
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
            <h1 id="new-admin">Add new admin</h1>
            <div className="add-admin-grid">
                <div className="left-side">
                    <label for="id" className="id-l">ID</label>
                    <div className="input-1">
                        <i className="ri-user-line"></i>
                        <input type="text" className="id" placeholder="ID"/>
                    </div>
                    <label for="" className="first-l">First Name</label>
                    <div className="input-2">
                        <i className="ri-user-line"></i>
                        <input type="text" className="first" placeholder="First Name"/>
                    </div>
                    <label for="" className="email-l">Email Address</label>
                    <div className="input-3">
                        <i className="ri-mail-line"></i>
                        <input type="email" className="email" placeholder="Email Address"/>
                    </div>
                </div>
                <div className="right-side">
                    <div></div>
                    <label for="" className="last-l">Last Name</label>
                    <div className="input-4">
                        <i className="ri-user-line"></i>
                        <input type="text" className="last" placeholder="Last Name"/>
                    </div>
                    <label for="" className="address-l">Email Address</label>
                    <div className="input-5">
                        <i className="ri-smartphone-line"></i>
                        <input type="text" className="address" placeholder="Address"/>
                    </div>
                </div>
            </div>
            <div className="create-acc">
                <input type="submit" value="Create Account"/>
            </div>
        </div>
    </div>
  )
}

export default NewAdmin