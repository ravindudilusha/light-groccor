import React from 'react';
import "../styles/Categories.css";
import Product01 from "../Assets/Product_cheese.svg"; // example product image
import { Plus } from "lucide-react"; // plus icon

const bestSellers = [
  { id: 1, title: "Aged Gouda Cheese 200g", price: "Rs.1500.00", imageUrl: Product01 },
  { id: 2, title: "Cheddar Cheese 250g", price: "Rs.1200.00", imageUrl: Product01 },
  { id: 3, title: "Mozzarella Cheese 300g", price: "Rs.1800.00", imageUrl: Product01 },
  { id: 4, title: "Parmesan Cheese 150g", price: "Rs.2000.00", imageUrl: Product01 },
];

function BestSellers() {
  return (
    <div className="container my-5">
      {/* Header row */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5 className="mb-0 section-title">Best Sellers</h5>
        <a href="#" className="btn btn-link text-decoration-none" style={{color:"black"}}>See All</a>
      </div>

      {/* Product cards */}
      <div className="d-flex flex-wrap gap-4">
        {bestSellers.map(product => (
          <div
            key={product.id}
            className="card border-0"
            style={{ width: "200px", border: "none", boxShadow: "none" }}
          >
            <div className="position-relative">
              <img
                src={product.imageUrl}
                alt={product.title}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover", borderRadius: "12px" }}
              />
              {/* Plus button */}
              <button
                className="btn position-absolute d-flex justify-content-center align-items-center"
                style={{
                  bottom: "10px",
                  right: "10px",
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  backgroundColor: "orange",
                  border: "none",
                }}
              >
                <Plus size={20} color="white" />
              </button>
            </div>

            <div className="card-body p-2">
              <h6 className="card-title mb-1">{product.title}</h6>
              <p className="Cardprice-title text-muted mb-0">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestSellers;
