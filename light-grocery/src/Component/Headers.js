import React from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa"; // icons
import logo from "../Assets/logo.svg";
import "../styles/Header.css";
function Headers() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand fw-bold d-flex align-items-center" href="/">
          <img
            src={logo}
            alt="Light Grocery Logo"
            width="60"
            height="60"
            className="me-2"
          />
        </a>

        {/* Search bar */}
        <div className="position-relative mx-auto w-50">
          <input
            className="form-control pe-5 search-input"
            type="search"
            placeholder="Search groceries..."
            aria-label="Search"
          />
          <FaSearch className="position-absolute top-50 end-0 translate-middle-y me-3 text-muted" />
        </div>

        {/* Right side buttons */}
        <div className="d-flex align-items-center">
          <div className="position-relative d-flex align-items-center me-4">
            <FaShoppingCart className="fs-5" />
            <span className="cart-badge">3</span>
            <span className="ms-3">Cart</span>
          </div>

          <button
            type="button"
            className="btn signin-btn me-3"
            style={{
              border: "1px solid #6c757d",
              color: " #343a40",
              backgroundcolor: " #fff",
              padding: " 0.375rem 0.75rem",
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
              padding: "0.375rem 0.75rem",
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Headers;
