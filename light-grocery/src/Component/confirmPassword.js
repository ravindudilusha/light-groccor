import React from "react";
import Headers from "../Component/Headers";
import Subheader from "../Component/Subheader";
import Footer from "../Component/Footer";
import { Link } from "react-router-dom";
import "../styles/Auth.css";

function ConfirmPassword() {
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
              <p className="section_title">Reset Password</p>
              <p style={{ fontSize: "12px", color: "#6c757d", textAlign: "center" }}>
                Enter your new password and confirm it below.
              </p>

              {/* Password Inputs */}
              <form>
                <div className="mt-3 mb-4">
                  <label className="form-label">New Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter new password"
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm new password"
                  />
                </div>

<Link to="/Auth">
                <button
                  type="submit"
                  className="btn w-100 mb-3"
                  style={{
                    backgroundColor: "#FD7E14",
                    color: "#fff",
                    fontWeight: "600",
                  }}
                >
                  Reset Password
                </button>
                </Link>
              </form>

              {/* Sign In Link */}
              <p className="text-center" style={{ fontSize: "0.9rem" }}>
                Remember your password?{" "}
                <a href="/login-register" style={{ color: "#FD7E14" }}>
                  Sign In
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

export default ConfirmPassword;
