import React from "react";
import "../styles/Categories.css";
import Product01 from "../Assets/Product_cheese.svg";
import Product02 from "../Assets/Product02.svg";
import ProductJuice from "../Assets/Product_juice.svg";
import Product_chocolate from "../Assets/Product_chocolate.svg";
import Chili from "../Assets/Chili.svg";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const products = [
  { id: 1, title: "Aged Gouda Cheese 200g", price: "Rs.1500.00", imageUrl: Product01 },
  { id: 2, title: "Spaghettini 200g", price: "Rs.1200.00", imageUrl: Product02 },
  { id: 3, title: "Orange Juice 100ml", price: "Rs.1800.00", imageUrl: ProductJuice },
  { id: 4, title: "Red Chili 200g", price: "Rs.2000.00", imageUrl: Chili },
  { id: 5, title: "Colombian Ground Coffee 200g", price: "Rs.1600.00", imageUrl: Product_chocolate },
];

function NewArrival() {
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate("/Productpage");
  };

  const handleSeeAllClick = () => {
    navigate("/view");
  };

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <p className="mb-0 section-title">New Arrivals</p>
        <button
          onClick={handleSeeAllClick}
          className="btn btn-link p-0 text-decoration-none text-dark seeAll-text"
          style={{ cursor: "pointer" }}
        >
          See All
        </button>
      </div>

      <div className="d-flex flex-wrap gap-3 justify-content-between justify-content-center-mobile">
        {products.map((product) => (
          <div
            key={product.id}
            className="card border-0 product-card"
            style={{ cursor: "pointer" }}
            onClick={() => handleProductClick(product.id)}
          >
            <div className="position-relative">
              <img src={product.imageUrl} alt={product.title} className="card-img-top" />

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
                onClick={(e) => {
                  e.stopPropagation();
                  console.log("Add to cart clicked for", product.title);
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

export default NewArrival;
