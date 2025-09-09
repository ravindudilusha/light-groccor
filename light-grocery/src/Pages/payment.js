import React from "react";
import Headers from "../Component/Headers";
import Subheader from "../Component/Subheader";
import Footer from "../Component/Footer";
import Product01 from "../Assets/Product_cheese.svg";
import SuccessImg from "../Assets/correct.svg"; // replace with your image path

function Payment() {
  const orderNumber = "ORD123456";
  const cartItems = [
    { id: 1, title: "Aged Gouda Cheese 200g", price: 1500, quantity: 1, imageUrl: Product01 },
    { id: 2, title: "Cheddar Cheese 250g", price: 1200, quantity: 2, imageUrl: Product01 },
  ];

  const subTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subTotal * 0.08;
  const total = subTotal + tax;

  return (
    <div>

      <Subheader />

      <div className="container py-5">
        {/* Success Message Row */}
        <div className="d-flex align-items-center mb-4">
          <img src={SuccessImg} alt="Success" style={{ width: "60px", height: "60px", marginRight: "15px" }} />
          <div>
            <h4 className="mb-1">We Received Your Order!</h4>
            <p className="mb-0 text-muted">Order Number: <span style={{ color: "#FD7E14" }}>{orderNumber}</span></p>
          </div>
        </div>

        {/* Order Summary */}
        <div className="row">
          <div className="col-md-8">
            <div className="p-3" >
                <p className="order_details">Order Details</p>
              {cartItems.map((item) => (
                <div key={item.id} className="d-flex align-items-center justify-content-between mb-3">
                  <div className="d-flex align-items-center">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      style={{ width: "60px", height: "60px", objectFit: "cover" ,borderRadius:"10px"}}
                      className="me-2"
                    />
                    <div className="text-start">
                      <p className="mb-1 product_order_title" style={{ fontSize: "14px" }}>{item.title}</p>
                      <p className="mb-0 text-muted" style={{ fontSize: "13px" }}>Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <span>Rs.{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}

              {/* <hr />
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
              </div> */}

              {/* <button className="btn w-100" style={{ backgroundColor: "#FD7E14", color: "#fff", fontWeight: "600" }}>
                Continue Shopping
              </button> */}
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}

export default Payment;
