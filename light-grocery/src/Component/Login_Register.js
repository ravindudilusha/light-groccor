import React, { useState } from "react";
import Headers from "../Component/Headers";
import Subheader from "../Component/Subheader";
import Footer from "../Component/Footer";
import { useNavigate } from "react-router-dom";

function Login_Register({ setUser }) {
  const [activeTab, setActiveTab] = useState("signin");

  const navigate = useNavigate();

 const handleSignIn = (e) => {
  e.preventDefault();
  // Simulate login
  setUser({ name: "John Doe" }); // Lift this state up to App.js or a context
  navigate("/User");
};

  return (
    <div>
      <Subheader />

      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-5">
            {/* Shadow Container */}
            <div
              className="p-4 rounded"
              style={{
                backgroundColor: "#fff",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              }}
            >
              {/* Tab Selection */}
              <div className="d-flex border-bottom mb-4">
                <button
                  className="flex-grow-1 py-2 text-center"
                  onClick={() => setActiveTab("signin")}
                  style={{
                    border: "none",
                    borderBottom:
                      activeTab === "signin"
                        ? "3px solid #FD7E14"
                        : "3px solid transparent",
                    fontWeight: "600",
                    color: "#343a40",
                    backgroundColor: "transparent",
                    outline: "none",
                  }}
                   onClick={handleSignIn}
                >
                  Sign In
                </button>
                <button
                  className="flex-grow-1 py-2 text-center"
                  onClick={() => setActiveTab("signup")}
                  style={{
                    border: "none",
                    borderBottom:
                      activeTab === "signup"
                        ? "3px solid #FD7E14"
                        : "3px solid transparent",
                    fontWeight: "600",
                    color: "#343a40",
                    backgroundColor: "transparent",
                    outline: "none",
                  }}
                >
                  Sign Up
                </button>
              </div>

              {/* Forms */}
              {activeTab === "signin" ? (
  <form onSubmit={handleSignIn}>
    <div className="mb-4">
      <label className="form-label">Email</label>
      <input
        type="email"
        className="form-control"
        placeholder="Enter your email"
      />
    </div>
    <div className="mb-4">
      <label className="form-label">Password</label>
      <input
        type="password"
        className="form-control"
        placeholder="Enter your password"
      />
      <div className="text-end mt-1">
        <a href="/ForgotPassword" style={{ fontSize: "0.875rem", color: "#FD7E14" }}>
          Forgot Password?
        </a>
      </div>
    </div>
    <button
      type="submit"
      className="btn w-100"
      style={{
        backgroundColor: "#FD7E14",
        color: "#fff",
        fontWeight: "600",
      }}
    >
      Sign In
    </button>
  </form>
) : (
  // Sign Up form stays the same
  <form>
    <div className="mb-3">
      <label className="form-label">Full Name</label>
      <input
        type="text"
        className="form-control"
        placeholder="Enter your full name"
      />
    </div>
    <div className="mb-3">
      <label className="form-label">Email</label>
      <input
        type="email"
        className="form-control"
        placeholder="Enter your email"
      />
    </div>
    <div className="mb-3">
      <label className="form-label">Password</label>
      <input
        type="password"
        className="form-control"
        placeholder="Enter your password"
      />
    </div>
    <div className="mb-3">
      <label className="form-label">Confirm Password</label>
      <input
        type="password"
        className="form-control"
        placeholder="Confirm your password"
      />
    </div>
    <button
      type="submit"
      className="btn w-100"
      style={{
        backgroundColor: "#FD7E14",
        color: "#fff",
        fontWeight: "600",
      }}
    >
      Sign Up
    </button>
  </form>
)}
            </div>
          </div>
        </div>
      </div>

    
    </div>
  );
}

export default Login_Register;
