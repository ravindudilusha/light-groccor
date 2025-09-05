import React from "react";
import Newsletter from "../Assets/Newsletter.svg";
import "../styles/Footer.css";
import logo from "../Assets/logo.svg";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#F8FAFC" }}>
      {/* Newsletter Subscription Section */}
      <div className="newsletter-section py-4">
        <div
  className="container d-flex flex-column align-items-center text-center newsletter-container"
  style={{
    backgroundImage: `url(${Newsletter})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "250px",
    borderRadius: "20px",
    padding: "20px",
  }}
>
  {/* Heading */}
  <p className="text-white mt-3 Newsletter-text">
    Subscribe to Our
    <br />
    Newsletter
  </p>

  {/* Input Fields + Button */}
  <div className="newsletter-form d-flex flex-wrap justify-content-center align-items-center gap-2 mt-3 w-100">
    <input
      type="text"
      placeholder="First Name"
      className="form-control custom-input"
      style={{ maxWidth: "200px" }}
    />
    <input
      type="email"
      placeholder="Email Address"
      className="form-control custom-input"
      style={{ maxWidth: "300px" }}
    />
    <button className="btn custom-btn" style={{ height: "38px" }}>
      Subscribe
    </button>
  </div>
</div>

      </div>

      {/* Main Footer Content */}
      <div className="footer-content py-5" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-start flex-wrap">
            {/* Left Side: Logo + Description */}
            <div className="footer-left d-flex flex-column justify-content-between" style={{ maxWidth: "350px", minHeight: "160px" }}>
  <div>
    <img
      src={logo}
      alt="Company Logo"
      style={{ width: "70px", marginBottom: "15px" }}
    />
    <p className="logo-description">
      Great products. Great value. Right at your doorstep.
    </p>
  </div>

  {/* Social Media Icons */}
  <div className="social-icons d-flex gap-3 mt-3" style={{color:""}}>
    <a href="#" className="social-circle"><FaFacebookF /></a>
    <a href="#" className="social-circle"><FaInstagram /></a>
    <a href="#" className="social-circle"><FaTwitter /></a>
    <a href="#" className="social-circle"><FaLinkedinIn /></a>
  </div>
</div>

            {/* Right Side: Shops + Legal */}
            <div
              className="footer-right d-flex justify-content-end"
              style={{ gap: "80px" }}
            >
              {/* Shops Column */}
              <div className="footer-links">
                <p className="footer-title">Shops</p>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">All Products</a>
                  </li>
                  <li>
                    <a href="#">New Arrivals</a>
                  </li>
                  <li>
                    <a href="#">Best Sellers</a>
                  </li>
                  <li>
                    <a href="#">Categories</a>
                  </li>
                </ul>
              </div>

              {/* Legal Column */}
              <div className="footer-links">
                <p className="footer-title">Legal</p>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Divider + Copyright */}
          <hr className="my-4" />
          <div className="text-center text-muted small">
            © {new Date().getFullYear()} LightGrocer. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
