import React, { useState } from "react";
import "../styles/Categories.css";
import Product01 from "../Assets/Product_cheese.svg";
import { Plus } from "lucide-react";

const products = [
  { id: 1, title: "Aged Gouda Cheese 200g", price: 1500, imageUrl: Product01 },
  { id: 2, title: "Cheddar Cheese 250g", price: 1200, imageUrl: Product01 },
  { id: 3, title: "Mozzarella Cheese 300g", price: 1800, imageUrl: Product01 },
  { id: 4, title: "Parmesan Cheese 150g", price: 2000, imageUrl: Product01 },
  { id: 5, title: "Brie Cheese 200g", price: 1600, imageUrl: Product01 },
];

function ViewAll() {
  const [sortType, setSortType] = useState("default");

  const handleSortChange = (e) => {
    setSortType(e.target.value);
  };

  // Sort products
  const sortedProducts = [...products].sort((a, b) => {
    if (sortType === "price-low-high") return a.price - b.price;
    if (sortType === "price-high-low") return b.price - a.price;
    if (sortType === "alphabetical") return a.title.localeCompare(b.title);
    return 0;
  });

  return (
    <div className="container my-5">
        <p className="mb-5 routepath_title">Home / All Products</p>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <p className="mb-0 section-title">All Products</p>
      </div>

      {/* Sorting */}
      <div className="mb-3 d-flex justify-content-end">
        <select
          value={sortType}
          onChange={handleSortChange}
          className="form-select w-auto"
        >
          <option value="default">Sort By</option>
          <option value="price-low-high">Price: Low to High</option>
          <option value="price-high-low">Price: High to Low</option>
          <option value="alphabetical">Alphabetical</option>
        </select>
      </div>

      {/* Products Grid */}
      <div className="d-flex flex-wrap gap-3 justify-content-between justify-content-center-mobile">
        {sortedProducts.map((product) => (
          <div
            key={product.id}
            className="card border-0 product-card"
            style={{ cursor: "pointer" }}
          >
            <div className="position-relative">
              <img
                src={product.imageUrl}
                alt={product.title}
                className="card-img-top"
              />

              <button
                className="position-absolute d-flex justify-content-center align-items-center"
                style={{
                  bottom: "10px",
                  right: "10px",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "#FD7E14",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                }}
                onClick={() => console.log("Add to cart clicked for", product.title)}
              >
                <Plus size={20} color="white" />
              </button>
            </div>
            <div className="card-body p-2">
              <h6 className="card-title mb-1">{product.title}</h6>
              <p className="Cardprice-title text-muted mb-0">
                Rs.{product.price}.00
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewAll;
