import React from 'react'
import { Link } from 'react-router-dom'
const Cases = () => {
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
            <div className="cases-grid">
                <div className="l-s">
                    <div className="info-all">
                        <div className="line-1">
                            <span className="blue">Name :</span><span className="black">Aliaa</span>
                        </div>
                        <div className="line-2">
                            <span className="blue">Age :</span><span className="black">21</span>
                        </div>
                        <div className="line-3">
                            <span className="blue">Content :</span><span className="black" id="con-info">Lorem ipsum dolor sit
                                ame
                                nemo quam enim, aliquid consequuntur accusamus quis minima, neque esse velit amet
                                dignissimos.</span>
                        </div>
                        <div className="line-4">
                            <span className="blue">Diagnosis :</span><span className="black">Normal</span>
                        </div>
                    </div>
                    <div className="info-all">
                        <div className="line-1">
                            <span className="blue">Name :</span><span className="black">Aliaa</span>
                        </div>
                        <div className="line-2">
                            <span className="blue">Age :</span><span className="black">21</span>
                        </div>
                        <div className="line-3">
                            <span className="blue">Content :</span><span className="black" id="con-info">Lorem ipsum dolor sit
                                ame
                                nemo quam enim, aliquid consequuntur accusamus quis minima, neque esse velit amet
                                dignissimos.</span>
                        </div>
                        <div className="line-4">
                            <span className="blue">Diagnosis :</span><span className="black">Normal</span>

                        </div>
                    </div>
                </div>
                <div className="r-s">
                    <div className="info-all">
                        <div className="line-1">
                            <span className="blue">Name :</span><span className="black">Aliaa</span>
                        </div>
                        <div className="line-2">
                            <span className="blue">Age :</span><span className="black">21</span>

                        </div>
                        <div className="line-3">
                            <span className="blue">Content :</span><span className="black" id="con-info">Lorem ipsum dolor sit
                                ame
                                nemo quam enim, aliquid consequuntur accusamus quis minima, neque esse velit amet
                                dignissimos.</span>
                        </div>
                        <div className="line-4">
                            <span className="blue">Diagnosis :</span><span className="black">Normal</span>
                        </div>
                    </div>
                </div>
            </div>
            <div id="b-n">
                <div id="bef">Before</div>
                <div id="nums">Page 1 from 10</div>
                <div id="next">Next</div>
              </div>
        
        </div>
    </div>
  )
}

export default Cases