import React from "react";
import "../styles/Categories.css";
import Product01 from "../Assets/Best Seller 01.svg";
import Product02 from "../Assets/Best Seller 02.svg";
import Product03 from "../Assets/Best Seller 03.svg";
import Product04 from "../Assets/Best Seller 04.svg";
import Product05 from "../Assets/Best Seller 05.svg";
import { useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";

const bestSellers = [
  { id: 1, title: "Cooked Ham 100g", price: "Rs.1500.00", imageUrl: Product01 },
  { id: 2, title: "Pesto Genovese 190g", price: "Rs.1200.00", imageUrl: Product02 },
  { id: 3, title: "Italian Sun Dried Tomato 200g", price: "Rs.1800.00", imageUrl: Product03 },
  { id: 4, title: "Black Beans 400g", price: "Rs.2000.00", imageUrl: Product04 },
  { id: 5, title: "Spaghettini 200g", price: "Rs.1600.00", imageUrl: Product05 },
];

function BestSellers() {
    const navigate = useNavigate();
  

  const handleSeeAllClick = () => {
    navigate("/view");
  };
  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <p className="mb-0 section-title">Best Sellers</p>
         <button
          onClick={handleSeeAllClick}
          className="btn btn-link p-0 text-decoration-none text-dark seeAll-text"
          style={{ cursor: "pointer" }}
        >
          See All
        </button>
      </div>

      <div className="d-flex flex-wrap gap-3 justify-content-between justify-content-center-mobile">
        {bestSellers.map(product => (
          <div key={product.id} className="card border-0 product-card">
            <div className="position-relative">
              <img src={product.imageUrl} alt={product.title} className="card-img-top" />

              {/* Circular Add to Cart Button Bottom Right */}
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
                  boxShadow: "0 2px 6px rgba(0,0,0,0.2)"
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
