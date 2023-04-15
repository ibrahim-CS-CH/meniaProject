import React, { useState } from "react";
import { Link } from "react-router-dom";
const Profile = () => {
  const [inputs, setInputs] = useState([]);
  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((e) => ({ ...e, [name]: value }));
  };
  const handleSave = () => {
    //do some request to save out new data
    console.log("ni");
  };
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
            <Link to={"/profile"}>
              <i className="ri-settings-4-line"></i>
              <span className="sidebar-item">Account Setting</span>
            </Link>
          </li>
          <li>
            <Link to={"/fedUser"}>
              <i className="ri-settings-4-line"></i>
              <span className="sidebar-item">FeedBack </span>
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
                <Link to={"/home"}>Home</Link>
              </li>
              <li>
                <Link to={"/diagnos"}>Diagnosis</Link>
              </li>
              <li>
                <Link to={"/profile"}>Profile</Link>
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
        <div className="profile-img">
          <img src="/p7.png" alt="" />
        </div>
        <div className="doc-settings-grid">
          <div className="left-s">
            <label htmlFor="" className="first-l">
              First Name
            </label>
            <div className="input-2">
              <i className="ri-user-line"></i>
              <input
                type="text"
                className="first"
                name="firstName"
                onChange={handleInputs}
                placeholder="First Name"
              />
            </div>

            <label htmlFor="" className="email-l">
              Email Address
            </label>
            <div className="input-3">
              <i className="ri-mail-line"></i>
              <input
                type="email"
                className="email"
                name="email"
                placeholder="Email Address"
                onChange={handleInputs}
              />
            </div>

            <label htmlFor="" className="address-l">
              Address
            </label>
            <div className="input-5">
              <i className="ri-smartphone-line"></i>
              <input
                type="text"
                className="address"
                name="address"
                placeholder="Address"
                onChange={handleInputs}
              />
            </div>
            {/* <!-- <label for="" className="password-l">Password</label>
                    <div className="input-5">
                        <i className="ri-lock-line"></i>
                        <input type="password" className="password" placeholder="Password"/>
                        <i className="ri-eye-off-line eye-off"></i>
                    </div> --> */}
          </div>

          <div className="right-s">
            <div></div>
            <label htmlFor="" className="last-r">
              Last Name
            </label>
            <div className="input-4">
              <i className="ri-user-line"></i>
              <input
                type="text"
                className="last"
                name="lastName"
                onChange={handleInputs}
                placeholder="Last Name"
              />
            </div>
            <label htmlFor="id" className="age-r">
              Age
            </label>
            <div className="input-1">
              <i className="ri-user-line"></i>
              <input
                type="text"
                className="age"
                name="age"
                onChange={handleInputs}
                placeholder="Age"
              />
            </div>
            <label htmlFor="id" className="age-r"></label>
            <div className="input-1"></div>
            {/* <!-- <label for="c-pass" className="c-pass-r">Confirm Password</label>
                    <div className="input-1">
                        <i className="ri-lock-line"></i>
                        <input type="password" className="c-pass" placeholder="Confirm Password">
                        <i className="ri-eye-off-line eye-off"></i>
                    </div> --> */}
          </div>
        </div>
        <div className="u-save">
          <input type="submit" value="Save" onClick={handleSave} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
