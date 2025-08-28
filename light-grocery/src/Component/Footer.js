import React from "react";
import Newsletter from "../Assets/Newsletter.svg";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#F8FAFC" }}>
      {/* Newsletter Subscription Section */}
      <div className="newsletter-section py-4">
        <div
          className="container"
          style={{
            backgroundImage: `url(${Newsletter})`,
            backgroundSize: "cover",
            height:"300px",
            borderRadius: "12px",
            padding: "20px",
          }}
        >
          <p className="text-white mb-3 text-center">Subscribe to Our Newsletter</p>
          <div className="d-flex flex-wrap gap-2">
            <input
              type="text"
              placeholder="First Name"
              className="form-control"
              style={{ maxWidth: "200px" }}
            />
            <input
              type="email"
              placeholder="Email Address"
              className="form-control"
              style={{ maxWidth: "300px" }}
            />
            <button className="btn btn-warning">Subscribe</button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-content py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h6>About Us</h6>
              <p>Some description about your company or brand.</p>
            </div>
            <div className="col-md-4">
              <h6>Quick Links</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Products</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h6>Contact</h6>
              <p>Email: info@example.com</p>
              <p>Phone: +94 123 4567</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
