import React from 'react'
import { Link } from 'react-router-dom'

const Verified = () => {
  return (
    <div className="page">
    <div className="sidebar">
      <ul>
        <li>
          <a href="#" className="logo">
            <img src="logo.png" alt="Logo" />
            <span className="logo-info">MPXV</span>
          </a>
        </li>
        <li>
          <Link to={"/profileDoctor"}>
            <i className="ri-settings-4-line"></i>
            <span className="sidebar-item">Account Setting</span>
          </Link>
        </li>
        <li>
          <Link to={"/feedDoctor"}>
            <i className="ri-settings-4-line"></i>
            <span className="sidebar-item">FeedBack </span>
          </Link>
        </li>
        <li>
          <Link to={"/verified"}>
            <i className="ri-settings-4-line"></i>
            <span className="sidebar-item">verified ? </span>
          </Link>
        </li>
      </ul>
    </div>

    <div className="content">
      <div className="head">
        <div className="left-h"></div>
        <div className="mid-h">
          <ul>
            <li>
              <Link to={"/homeDoctor"}>Home</Link>
            </li>
            <li>
              <Link to={"/dignosDoctor"}>Diagnosis</Link>
            </li>
            <li>
              <Link to={"/profileDoctor"}>Profile</Link>
            </li>
          </ul>
        </div>
        <div className="r-h">
          <span className="r-h-info">Hello, Aliaa</span>
          <Link className="log-out" to={"/"}>
            <input type="submit" value="Logout" />
          </Link>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src="/p7.png" alt="" />
      </div>
      <div style={{ textAlign: "center" }}>verified or not</div>
      
    </div>
  </div>
  )
}

export default Verified