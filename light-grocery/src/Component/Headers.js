import React from "react";
import { FaSearch, FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from "../Assets/logo.svg";
import "../styles/Header.css";

function Headers({ user, onSignOut }) {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/User"); // Navigate to user profile
  };

  const handleAuthNavigate = () => {
    navigate("/Auth"); // Navigate to login/register page
  };

  return (
    <nav className="navbar navbar-light py-2 border-bottom">
      <div className="container d-flex flex-column flex-lg-row justify-content-between align-items-start align-items-lg-center">
        
        {/* First Row: Logo + Cart + Auth/User */}
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

          {/* Right: Cart + Sign In / Sign Up or User */}
          <div className="d-flex align-items-center">
            <div className="position-relative d-flex align-items-center me-4">
              <FaShoppingCart className="fs-5" />
              <span className="cart-badge">3</span>
            </div>

            {user ? (
              <>
                <FaUserCircle
                  className="fs-3 text-dark me-2"
                  style={{ cursor: "pointer" }}
                  onClick={handleProfileClick}
                />
                <button className="btn btn-outline-secondary btn-sm" onClick={onSignOut}>
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-sm me-2"
                  style={{
                    border: "1px solid #6c757d",
                    color: "#343a40",
                    backgroundColor: "#fff",
                  }}
                  onClick={handleAuthNavigate}
                >
                  Sign In
                </button>
                <button
                  type="button"
                  className="btn btn-sm"
                  style={{ backgroundColor: "#FD7E14", color: "#fff", border: "none" }}
                  onClick={handleAuthNavigate}
                >
                  Sign Up
                </button>
              </>
            )}
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
