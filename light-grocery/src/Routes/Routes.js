import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "../Pages/Home";
import ProductPage from "../Pages/ProductPage";
import Cart from "../Pages/Cart";
import Checkout from "../Pages/Checkout";
import Payment from "../Pages/payment";
import Login_Register from "../Component/Login_Register";
import ForgotPassword from "../Component/ForgotPassword";
import ConfirmPassword from "../Component/confirmPassword";
import UserProfile from "../Pages/UserProfile";
import Headers from "../Component/Headers";
import Footer from "../Component/Footer";
import ViewAll from "../Pages/viewAll";

export default function AppRoutes() {
  const [user, setUser] = useState(null);

  return (
    <>
      {/* Header visible on all pages */}
      <HeaderWithNavigation user={user} setUser={setUser} />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Productpage" element={<ProductPage />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/Payment" element={<Payment />} />
        <Route
          path="/Auth"
          element={<Login_Register setUser={setUser} />}
        />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/ConfirmPassword" element={<ConfirmPassword />} />
        <Route path="/User" element={<UserProfile />} />
        <Route path="/View" element={<ViewAll/>}/>
      </Routes>

      {/* Footer visible on all pages */}
      <Footer />
    </>
  );
}

// Wrapper to provide navigate to the header
function HeaderWithNavigation({ user, setUser }) {
  const navigate = useNavigate();

  const handleSignOut = () => {
    setUser(null); // Clear user state
    navigate("/"); // Redirect to Home
  };

  return <Headers user={user} onSignOut={handleSignOut} />;
}
