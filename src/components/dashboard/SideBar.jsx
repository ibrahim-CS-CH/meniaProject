import React from 'react'
import dashboard from '../../style/dashboard.css'
const SideBar = () => {
  return (
    <div className='page'>
        <div className="sidebar">
                <ul>
                    <li><a href="#" className="logo">
                            <img src="./imgs/logo.png" alt="Logo"/>
                            <span className="logo-info">MPXV</span>
                        </a></li>
                    <li><a href="#">
                            <i className="ri-home-5-line"></i>
                            <span className="sidebar-item">OverView</span>
                        </a></li>
                    <li><a href="#">
                            <i className="ri-admin-line"></i>
                            <span className="sidebar-item">Admins</span>
                        </a></li>
                    <li><a href="#">
                            <i className="ri-nurse-line"></i>
                            <span className="sidebar-item">Doctors</span>
                        </a></li>
                    <li><a href="#">
                            <i className="ri-user-line"></i>
                            <span className="sidebar-item">Users</span>
                        </a></li>
                    <li><a href="#">
                            <i className="ri-user-add-line"></i>
                            <span className="sidebar-item">Add Admin</span>
                        </a></li>
                    <li><a href="#">
                            <i className="ri-archive-line"></i>
                            <span className="sidebar-item">Cases</span>
                        </a></li>
                    <li><a href="#">
                            <i className="ri-settings-4-line"></i>
                            <span className="sidebar-item">Account Setting
                            </span>
                        </a></li>
                </ul>
        </div>
    </div>
  )
}

export default SideBar