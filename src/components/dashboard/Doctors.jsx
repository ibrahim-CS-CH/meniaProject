import React from "react";
// import dashboard from "../../style/dashboard.css";
import { Link } from "react-router-dom";

const Doctors = () => {
  return (
    <div className="page">
      <div className="sidebar">
        <ul>
          <li>
            <a href="#" className="logo">
              <img src="./imgs/logo.png" alt="Logo" />
              <span className="logo-info">MPXV</span>
            </a>
          </li>
          <li>
            <Link to={"/dashboard"}>
              <i className="ri-home-5-line"></i>
              <span className="sidebar-item">OverView</span>
            </Link>
          </li>
          <li>
            <Link to={"/admin"}>
              <i className="ri-admin-line"></i>
              <span className="sidebar-item">Admins</span>
            </Link>
          </li>
          <li>
            <Link to={"/doctors"}>
              <i className="ri-nurse-line"></i>
              <span className="sidebar-item">Doctors</span>
            </Link>
          </li>
          <li>
            <Link to={"/users"}>
              <i className="ri-user-line"></i>
              <span className="sidebar-item">Users</span>
            </Link>
          </li>
          <li>
            <Link to={"/newadmin"}>
              <i className="ri-user-add-line"></i>
              <span className="sidebar-item">Add Admin</span>
            </Link>
          </li>
          <li>
            <Link to={"/cases"}>
              <i className="ri-archive-line"></i>
              <span className="sidebar-item">Cases</span>
            </Link>
          </li>
          <li>
            <a href="#">
              <i className="ri-settings-4-line"></i>
              <span className="sidebar-item">Account Setting</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="content">
        <div className="head">
          <div className="l-h">
            <h2>Welcome back, Aliaa</h2>
            <div className="search-label">
              <i className="ri-search-line"></i>
              <input type="text" placeholder="Search.." />
            </div>
          </div>
          <div className="m-h"></div>
          <div className="r-h">
            <i className="ri-message-3-line mes"></i>
            <i className="ri-notification-4-line not"></i>
            <span className="r-h-info">Hello, Aliaa</span>
            <div className="log-out">
              <input type="submit" value="Logout" />
            </div>
          </div>
        </div>
        <div className="low-opa-words">
          Here's what's happening with your store today.
        </div>
        <table className="doc-table">
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Address</td>
              <td>Phone</td>
              <td>Age</td>
              <td>Email</td>
              <td>Certificate</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Marwa Gamal</td>
              <td>Beni-suif</td>
              <td>0110101011</td>
              <td>21</td>
              <td>marwagamal@gmail.com</td>
              <td>
                <i className="fa-sharp fa-solid fa-file-pdf"></i>
              </td>
            </tr>
            <tr className="gr-color">
              <td>2</td>
              <td>Ahmed Gamal</td>
              <td>Beni-suif</td>
              <td>0129282919</td>
              <td>22</td>
              <td>ahmedgamal@gmail.com</td>
              <td>
                <i className="fa-sharp fa-solid fa-file-pdf"></i>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>sara ahmed</td>
              <td>Beni-suif</td>
              <td>0123443210</td>
              <td>29</td>
              <td>MarwaGamal@gmail.com</td>
              <td>
                <i className="fa-sharp fa-solid fa-file-pdf"></i>
              </td>
            </tr>
            <tr className="gr-color">
              <td>4</td>
              <td>Mohamed hussein</td>
              <td>Beni-suif</td>
              <td>0110101011</td>
              <td>23</td>
              <td>hussein@gmail.com</td>
              <td>
                <i className="fa-sharp fa-solid fa-file-pdf"></i>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>Aliaa</td>
              <td>Beni-suif</td>
              <td>0123748675</td>
              <td>21</td>
              <td>aliaa@gmail.com</td>
              <td>
                <i className="fa-sharp fa-solid fa-file-pdf"></i>
              </td>
            </tr>
            <tr className="gr-color">
              <td>6</td>
              <td>Asmaa Gamal</td>
              <td>Beni-suif</td>
              <td>0213456431</td>
              <td>24</td>
              <td>AsmaaGamal@gmail.com</td>
              <td>
                <i className="fa-sharp fa-solid fa-file-pdf"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Doctors;
