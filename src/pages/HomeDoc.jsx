import React from "react";
import { Link } from "react-router-dom";

const HomeDoc = () => {
  return (
    <div className="user-home">
      <div id="nav-holder">
        <div id="flex-nav">
          <a href="#" className="logo">
            <img src="/logo.png" alt="Logo" />
          </a>
          <nav>
            <i className="ri-menu-3-line"></i>
            <ul>
              <li>
                <Link to={"/homeDoctor"}>Home</Link>
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
              <Link to={"/"}>
                <input type="submit" value="Logout" className="logout" />
              </Link>
            </div>
          </nav>
        </div>
      </div>
      <div className="doctor-home">
        <div className="lt-s">
          <img src="/p7.png" alt="" />
        </div>
        <div className="rt-s">
          <p id="first pargraph">
            Precautions to avoid getting sick <br /> Reduce your risk of
            catching monkeypox from other people by limiting close contact{" "}
            <br /> with people who have affected monkeypox. <br /> Clean your
            hands frequently with soap and water or an alcohol. <br />
            <br /> Frequently clean and disinfect commonly touched surfaces in
            the environments that could have been contaminated with the virus
            from someone who is infectious. <br />
            <br />
          </p>
          <p id="second-paragraph">
            Egypt’s ministry of health announced, Monday recording first
            positive infection of Monkeypox virus for an Egyption citizen.
            Patient was isolated in the hospital according to the ministry.
          </p>
          {/* <div className="rm">
                <input type="submit" value="Read More" id="rm"/>
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default HomeDoc;
