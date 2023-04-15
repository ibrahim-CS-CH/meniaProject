import React from "react";
import { Link } from "react-router-dom";

const DignosDoc = () => {
  return (
    <div className="user-home">
      <div id="nav-holder">
        <div id="flex-nav">
          <a href="#" className="logo">
            <img src="logo.png" alt="Logo" />
          </a>
          <nav>
            <i className="ri-menu-3-line"></i>
            <ul>
              <li>
                <Link to={"/homeDoctor"} className="active">
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/dignosDoctor"}>Diagnoise</Link>
              </li>
              <li>
                <Link to={"/profileDoctor"}>Profile</Link>
              </li>
            </ul>
            <h3>Hello, Aliaa</h3>
            <div className="log-out">
              {/*  */}
              <Link className="logout" to={"/"}>
                <input type="submit" value="Logout" className="logout" />
              </Link>
            </div>
          </nav>
        </div>
      </div>
      <div className="diagnosis-user">
        <div className="l-side">
          <img src="p0.png" alt="" />
          <input type="submit" value="Upload Photo" id="u" />
          <input type="submit" value="Diagnosis" id="d" />
          <p>
            The Result : <span> Normal</span>
          </p>
        </div>
        <div className="r-side">
          <h1>You are not injured :</h1>
          <p>
            1-Wash your hands frequently
            <br /> 2-Avoid crowded places and close contact with anyone that has
            affected by disease
            <br /> 3-Avoid touching roofs
          </p>
        </div>
      </div>
    </div>
  );
};

export default DignosDoc;
