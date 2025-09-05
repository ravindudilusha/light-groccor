import React, { useState } from "react";
import Headers from "../Component/Headers";
import Subheader from "../Component/Subheader";
import Footer from "../Component/Footer";
import Product01 from "../Assets/Product_cheese.svg";
import Product02 from "../Assets/Product02.svg";
import { FaCheckCircle, FaStar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import "../styles/ProductPage.css";
import LikeProduct from "../Component/LikeProduct";

function ProductPage() {
  const product = {
    name: "Orange Juice",
    price: "$120.00",
    rating: 4.5,
    sizes: ["100ml", "200ml"],
    images: [Product01, Product02, Product01],
  };

  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("description");
  const [reviews, setReviews] = useState([
    { name: "John Doe", content: "Great product!", rating: 5 },
  ]);

  const [reviewInput, setReviewInput] = useState("");
  const [reviewRating, setReviewRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("⚠️ Please select a size before adding to cart.");
      return;
    }
    setShowModal(true);
  };

  const handleAddReview = () => {
    if (!reviewInput.trim() || reviewRating === 0) return;
    setReviews([
      ...reviews,
      { name: "Anonymous", content: reviewInput, rating: reviewRating },
    ]);
    setReviewInput("");
    setReviewRating(0);
  };

  return (
    <div>
      <Headers />
      <Subheader />

      {/* Product Section */}
      <div className="container py-5">
        <p className="mb-5 routepath_title">Home / Fresh Juice / Orange Juice 100ml</p>
        <div className="row">
          <div className="col-md-6 d-flex">
            <div className="d-flex flex-column me-3">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className={`img-thumbnail mb-2 ${
                    selectedImage === img ? "border border-dark" : ""
                  }`}
                  style={{ width: "80px", height: "80px", cursor: "pointer" }}
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>
            <img
              src={selectedImage}
              alt="Product Main"
              className="img-fluid border rounded"
              style={{ maxHeight: "400px", width: "100%", objectFit: "cover" }}
            />
          </div>

          <div className="col-md-6">
            <p className="mb-3 product-title">{product.name}</p>
            <div className="mb-3">
              <span className="text-warning">⭐ {product.rating}</span>
              <span className="ms-2 text-muted">(120 reviews)</span>
            </div>
            <p className="mb-4 product-price">{product.price}</p>

            {/* Sizes */}
            <div className="mb-4">
              <p className="mb-2">Select Size:</p>
              <div className="d-flex gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={`btn ${
                      selectedSize === size ? "text-white" : "btn-outline-dark"
                    }`}
                    style={
                      selectedSize === size
                        ? {
                            backgroundColor: "#FD7E14",
                            borderColor: "#FD7E14a",
                          }
                        : {}
                    }
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-4">
              <p className="mb-2">Quantity:</p>
              <div className="d-flex align-items-center">
                <button
                  className="btn btn-outline-dark"
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                >
                  -
                </button>
                <span className="mx-3">{quantity}</span>
                <button
                  className="btn btn-outline-dark"
                  onClick={() => setQuantity((prev) => prev + 1)}
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              className="btn w-50 py-2"
              style={{
                backgroundColor: "#FD7E14",
                color: "#fff",
                border: "none",
              }}
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="container py-3">
        <ul className="nav-tabs-simple">
          <li>
            <button
              className={activeTab === "description" ? "tab-active" : ""}
              onClick={() => setActiveTab("description")}
            >
              Description
            </button>
          </li>
          <li>
            <button
              className={activeTab === "reviews" ? "tab-active" : ""}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews{" "}
              <span className="badge bg-secondary">{reviews.length}</span>
            </button>
          </li>
          <li>
            <button
              className={activeTab === "support" ? "tab-active" : ""}
              onClick={() => setActiveTab("support")}
            >
              Support
            </button>
          </li>
        </ul>

        <div className="tab-content-simple mt-3">
          {activeTab === "description" && (
            <p>
              This is a fresh and natural orange juice, perfect for your
              breakfast.
            </p>
          )}

          {activeTab === "reviews" && (
            <div>
              {reviews.map((rev, idx) => (
                <div key={idx} className="mb-2 border-bottom pb-2">
                  <strong>{rev.name}</strong>{" "}
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      color={i < rev.rating ? "#FD7E14" : "#ccc"}
                    />
                  ))}
                  <p>{rev.content}</p>
                </div>
              ))}

              {/* Add Review */}
              <div className="mt-3">
                <div className="d-flex align-items-center gap-2 mb-2">
                  {/* Star Input */}
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      size={24}
                      style={{ cursor: "pointer" }}
                      color={
                        i < (hoverRating || reviewRating) ? "#FD7E14" : "#ccc"
                      }
                      onMouseEnter={() => setHoverRating(i + 1)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={() => setReviewRating(i + 1)}
                    />
                  ))}
                </div>

                <textarea
                  className="form-control mb-2"
                  placeholder="Write your review..."
                  value={reviewInput}
                  onChange={(e) => setReviewInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleAddReview()}
                />

                <button
                  className="btn d-flex align-items-center gap-2"
                  style={{
                    backgroundColor: "#FFA726", // light orange fill
                    color: "#fff", // white text
                    fontWeight: "600", // bold text
                    border: "none",
                    padding: "0.5rem 1rem",
                  }}
                  onClick={handleAddReview}
                >
                  Submit <FaArrowRight />
                </button>
              </div>
            </div>
          )}

          {activeTab === "support" && (
            <p>Contact our support team at support@example.com</p>
          )}
        </div>
      </div>

      {/* Add to Cart Modal */}
      {showModal && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div
            className="modal-dialog modal-dialog-centered"
            style={{ maxWidth: "400px" }}
          >
            <div className="modal-content">
              <div className="modal-header">
                <p className="modal-title d-flex align-items-center gap-2">
                  <FaCheckCircle className="text-success" /> Added to Cart
                </p>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="d-flex align-items-start">
                  <img
                    src={selectedImage}
                    alt={product.name}
                    className="img-thumbnail me-3"
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "cover",
                    }}
                  />
                  <div>
                    <p className="product-name-title mb-1">{product.name}</p>
                    <p className="Size_quanitiy_title mb-1">
                      Size: {selectedSize}
                    </p>
                    <p className="Size_quanitiy_title mb-0">Qty: {quantity}</p>
                  </div>
                </div>
              </div>
              <div className="modal-footer d-flex flex-column gap-2">
                <button
                  className="btn w-100"
                  onClick={() => setShowModal(false)}
                  style={{ backgroundColor: "#FD7E14", color: "#fff" }}
                >
                  Continue Shopping
                </button>
                <button
                  className="btn w-100"
                  style={{
                    border: "1px solid #6c757d",
                    color: "#343a40",
                    backgroundColor: "#fff",
                  }}
                >
                  Go to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <LikeProduct/>
      <Footer />
    </div>
  );
}

export default ProductPage;
