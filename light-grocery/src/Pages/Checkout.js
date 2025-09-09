import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // import useNavigate
import Headers from "../Component/Headers";
import Subheader from "../Component/Subheader";
import Footer from "../Component/Footer";
import Product01 from "../Assets/Product_cheese.svg";
import { FaMoneyBillWave, FaCreditCard } from "react-icons/fa";
import "../styles/ProductPage.css";
import "../styles/Cart.css";
import "../styles/Checkout.css";

function Checkout() {
  const navigate = useNavigate(); // initialize navigate

  const [cartItems] = useState([
    { id: 1, title: "Aged Gouda Cheese 200g", price: 1500, quantity: 1, imageUrl: Product01 },
    { id: 2, title: "Cheddar Cheese 250g", price: 1200, quantity: 2, imageUrl: Product01 },
  ]);

  const [billingInfo, setBillingInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardDetails, setCardDetails] = useState({ number: "", expiry: "", cvv: "" });
  const [additionalNotes, setAdditionalNotes] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBillingInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleCardInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = () => {
    navigate("/Payment"); // navigate to Payment page
  };

  const subTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subTotal * 0.08;
  const total = subTotal + tax;

  return (
    <div>
      <Subheader />

      <div className="container py-5">
        <p className="mb-5 routepath_title">Home / Checkout</p>
        <div className="row">
          {/* LEFT COLUMN */}
          <div className="col-md-7 mb-4">
            <p className="checkout_title">Billing Information</p>
            <form>
              {/* Basic Billing Fields */}
              <div className="row">
                <div className="col-6 mb-3">
                  <label className="form-label">First Name</label>
                  <input type="text" className="form-control" name="fullName" value={billingInfo.fullName} onChange={handleInputChange} />
                </div>
                <div className="col-6 mb-3">
                  <label className="form-label">Last Name</label>
                  <input type="text" className="form-control" name="fullName" value={billingInfo.fullName} onChange={handleInputChange} />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Address</label>
                <textarea className="form-control" name="address" rows="2" value={billingInfo.address} onChange={handleInputChange}></textarea>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" name="email" value={billingInfo.email} onChange={handleInputChange} />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Phone</label>
                  <input type="text" className="form-control" name="phone" value={billingInfo.phone} onChange={handleInputChange} />
                </div>
              </div>

              {/* Payment Selection */}
              <p className="mt-4 checkout_title">Payment Method</p>

              <div className="row">
                {/* Credit/Debit Card */}
                <div className="col-6">
                  <div
                    className={`payment-option d-flex flex-column align-items-center p-3 border rounded ${paymentMethod === "card" ? "selected" : ""}`}
                    onClick={() => setPaymentMethod("card")}
                  >
                    <FaCreditCard size={40} style={{ color: "green" }} className="mb-2" />
                    <span className="fw-semibold">Credit / Debit Card</span>
                  </div>
                </div>

                {/* Cash on Delivery */}
                <div className="col-6">
                  <div
                    className={`payment-option d-flex flex-column align-items-center p-3 border rounded ${paymentMethod === "cash" ? "selected" : ""}`}
                    onClick={() => setPaymentMethod("cash")}
                  >
                    <FaMoneyBillWave size={40} style={{ color: "green" }} className="mb-2" />
                    <span className="fw-semibold">Cash on Delivery</span>
                  </div>
                </div>
              </div>

              {/* Conditional Card Details */}
              {paymentMethod === "card" && (
                <div className="mt-3">
                  <div className="mb-3">
                    <label className="form-label">Card Number</label>
                    <input type="text" className="form-control" name="number" value={cardDetails.number} onChange={handleCardInputChange} />
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label className="form-label">Expiry</label>
                      <input type="text" className="form-control" name="expiry" placeholder="MM/YY" value={cardDetails.expiry} onChange={handleCardInputChange} />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">CVV</label>
                      <input type="text" className="form-control" name="cvv" value={cardDetails.cvv} onChange={handleCardInputChange} />
                    </div>
                  </div>
                </div>
              )}

              {/* Additional Notes */}
              <p className="mt-4 checkout_title">Additional Notes</p>
              <textarea className="form-control" rows="3" placeholder="Enter any special instructions..." value={additionalNotes} onChange={(e) => setAdditionalNotes(e.target.value)}></textarea>
            </form>
          </div>

          {/* RIGHT COLUMN */}
          <div className="col-md-5">
            <div className="p-3" style={{ backgroundColor: "#f8f9fa", borderRadius: "10px" }}>
              <p className="summary_title">Order Summary</p>

              {cartItems.map((item) => (
                <div key={item.id} className="d-flex align-items-center justify-content-between mb-3">
                  <div className="d-flex align-items-center">
                    <img src={item.imageUrl} alt={item.title} style={{ width: "60px", height: "60px", objectFit: "cover" }} className="me-2" />
                    <div>
                      <p className="mb-1 product_order_title" style={{ fontSize: "14px" }}>{item.title}</p>
                      <p className="mb-0" style={{ fontSize: "13px" }}>Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <span>Rs.{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}

              <hr />
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal</span>
                <span>Rs.{subTotal.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Tax (8%)</span>
                <span>Rs.{tax.toFixed(2)}</span>
              </div>
              <div className="total-text d-flex justify-content-between mb-3 fw-bold">
                <span>Total</span>
                <span>Rs.{total.toFixed(2)}</span>
              </div>

              <button
                className="btn w-100"
                style={{ backgroundColor: "#FD7E14", color: "#fff", fontWeight: "600" }}
                onClick={handlePlaceOrder} // navigate to /Payment
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Checkout;
