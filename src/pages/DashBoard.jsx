import React from 'react'
import dashboard from '../style/dashboard.css'
import { Link } from 'react-router-dom'
const DashBoard = () => {
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
            <p className="analytics">Analytics</p>
            <div className="wrapper">
                <div className="card">
                    <h3>Total Cusomers</h3>
                    <div className="sub-card">
                        <p>1500</p>
                        <i className="fa-solid fa-arrows-rotate"></i>
                    </div>
                </div>
                <div className="card">
                    <h3>Total Doctors</h3>
                    <div className="sub-card">
                        <p>1000</p>
                        <i className="fa-solid fa-arrows-rotate"></i>
                    </div>
                </div>
                <div className="card">
                    <h3>Positive diagnosis</h3>
                    <div className="sub-card">
                        <p>500</p>
                        <i className="fa-solid fa-arrows-rotate"></i>
                    </div>
                </div>
                <div className="card">
                    <h3>Negative Diagnosis</h3>
                    <div className="sub-card">
                        <p>500</p>
                        <i className="fa-solid fa-arrows-rotate"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashBoard