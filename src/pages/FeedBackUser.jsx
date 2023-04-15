import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
const FeedBackUser = () => {
  const [rate, setRate] = useState(null);
  const [hover, setHover] = useState(null);
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
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src="/p7.png" alt="" />
        </div>
        <div style={{ textAlign: "center" }}>date</div>
        <div style={{ textAlign: "center" }}>
          {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            return (
              <label key={i}>
                <input
                  type="radio"
                  name="rating"
                  id="radio-hidden"
                  value={ratingValue}
                  onClick={() => setRate(ratingValue)}
                />
                <FaStar
                  className="star"
                  size={40}
                  color={ratingValue <= (hover || rate) ? "#ffc107" : "#e4e5e9"}
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(null)}
                />
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeedBackUser;
