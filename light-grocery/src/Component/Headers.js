import React from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import logo from "../Assets/logo.svg";
import "../styles/Header.css";

function Headers() {
  return (
    <nav className="navbar navbar-light  py-2">
      <div className="container d-flex flex-column flex-lg-row justify-content-between align-items-start align-items-lg-center">
        {/* First Row */}
        <div className="d-flex w-100 justify-content-between align-items-center mb-2 mb-lg-0">
          {/* Logo */}
          <a className="navbar-brand d-flex align-items-center" href="/">
            <img src={logo} alt="Light Grocery Logo" width="60" height="60" />
          </a>

          {/* Search bar (desktop only) */}
          <div className="w-50 d-none d-lg-block">
            <div className="position-relative">
              <input
                className="form-control pe-5"
                type="search"
                placeholder="Search groceries..."
                aria-label="Search"
              />
              <FaSearch className="position-absolute top-50 end-0 translate-middle-y me-3 text-muted" />
            </div>
          </div>

          {/* Right: Cart + Sign In / Sign Up */}
          <div className="d-flex align-items-center">
            <div className="position-relative d-flex align-items-center me-4">
              <FaShoppingCart className="fs-5" />
              <span className="cart-badge">3</span>
            </div>

            <button
              type="button"
              className="btn signin-btn me-2"
              style={{
                border: "1px solid #6c757d",
                color: "#343a40",
                backgroundColor: "#fff",
              }}
            >
              Sign In
            </button>
            <button
              type="button"
              className="btn signup-btn"
              style={{
                backgroundColor: "#FD7E14",
                color: "#fff",
                border: "none",
              }}
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* Second Row: Search bar (mobile only) */}
        <div className="w-100 mt-2 d-block d-lg-none">
          <div className="position-relative">
            <input
              className="form-control pe-5"
              type="search"
              placeholder="Search groceries..."
              aria-label="Search"
            />
            <FaSearch className="position-absolute top-50 end-0 translate-middle-y me-3 text-muted" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Headers;
