import React from "react";
import Headers from "../Component/Headers";
import Subheader from "../Component/Subheader";
import Footer from "../Component/Footer";
import { Link } from "react-router-dom";
import "../styles/Auth.css";

function ForgotPassword() {
  return (
    <div>
      <Headers />
      <Subheader />

      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            {/* Shadow Container */}
            <div
              className="p-4 rounded"
              style={{
                backgroundColor: "#fff",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              }}
            >
              {/* Title */}
              <p className="section_title">Forgot Password</p>
              <p style={{ fontSize: "12px", color: "#6c757d",textAlign:"center" }}>
                Enter the email address or mobile phone number associated with
                your Lite Grocer account.
              </p>

              {/* Email Input & Send Code */}
              <form>
                <div className="mb-4">
                  <label className="form-label">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>

<Link to="/ConfirmPassword">
                <button
                  type="submit"
                  className="btn w-100 mb-3"
                  style={{
                    backgroundColor: "#FD7E14",
                    color: "#fff",
                    fontWeight: "600",
                  }}
                >
                  Send Code
                </button>
                </Link>
              </form>

              {/* Sign Up Link */}
              <p className="text-center" style={{ fontSize: "0.9rem" }}>
                Don't have an account?{" "}
                <a href="/login-register" style={{ color: "#FD7E14" }}>
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ForgotPassword;
