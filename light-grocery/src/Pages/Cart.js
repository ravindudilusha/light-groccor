import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Headers from "../Component/Headers";
import Subheader from "../Component/Subheader";
import Footer from "../Component/Footer";
import Product01 from "../Assets/Product_cheese.svg";
import { RiDeleteBinLine } from "react-icons/ri";

import "../styles/ProductPage.css";
import "../styles/Cart.css";

function Cart() {
  const navigate = useNavigate(); // Initialize navigate

  // Sample cart items
  const [cartItems, setCartItems] = useState([
    { id: 1, title: "Aged Gouda Cheese 200g", price: 1500, quantity: 1, imageUrl: Product01 },
    { id: 2, title: "Cheddar Cheese 250g", price: 1200, quantity: 2, imageUrl: Product01 },
  ]);

  const handleQuantityChange = (id, delta) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const handleRemoveItem = id => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const subTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subTotal * 0.08;
  const total = subTotal + tax;

  const handleCheckout = () => {
    navigate("/checkout"); // Navigate to checkout page
  };

  return (
    <div>
      <Subheader />

      <div className="container py-5">
        <p className="mb-5 routepath_title">Home / Cart</p>
        <div className="row">
          {/* LEFT COLUMN - Cart Items */}
          <div className="col-md-7 mb-4">
            <div className="Cart_text_container">
              <p className="cart-text">Your Cart</p>
              <p className="cart_count_text">{cartItems.length} items in a cart</p>
            </div>
            <hr />
            {cartItems.map(item => (
              <div
                key={item.id}
                className="d-flex align-items-center justify-content-between mb-3 p-2"
              >
                {/* Product Image */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                  className="me-3"
                />

                {/* Product Info */}
                <div className="flex-grow-1">
                  <p className="mb-1 fw-bold">{item.title}</p>
                  <p className="mb-2">Rs.{item.price.toFixed(2)}</p>

                  {/* Quantity Controls */}
                  <div className="d-flex align-items-center gap-2">
                    <button
                      className="btn btn-outline-dark btn-sm"
                      onClick={() => handleQuantityChange(item.id, -1)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="btn btn-outline-dark btn-sm"
                      onClick={() => handleQuantityChange(item.id, 1)}
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Delete Button */}
                <button
                  className="btn ms-3 text-danger"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  <RiDeleteBinLine size={24} />
                </button>
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN - Summary */}
          <div className="col-md-5">
            <div className="p-3" style={{ backgroundColor: "#f8f9fa", borderRadius: "10px" }}>
              <h5>Order Summary</h5>
              <hr />
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal</span>
                <span>Rs.{subTotal.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Tax (8%)</span>
                <span>Rs.{tax.toFixed(2)}</span>
              </div>
              <div className="total-text d-flex justify-content-between mb-3">
                <span>Total</span>
                <span>Rs.{total.toFixed(2)}</span>
              </div>

              {/* Buttons */}
              <div className="d-flex flex-column gap-2">
                <button
                  className="btn w-100"
                  style={{ backgroundColor: "#FD7E14", color: "#fff", fontWeight: "600" }}
                  onClick={handleCheckout} // Navigate to checkout
                >
                  Checkout
                </button>
                <button
                  className="btn w-100 border"
                  style={{
                    borderColor: "#FD7E14",
                    color: "#FD7E14",
                    backgroundColor: "#fff",
                    fontWeight: "600",
                  }}
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Cart;
