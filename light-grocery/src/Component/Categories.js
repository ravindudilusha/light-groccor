import React from "react";
import freshjuice from "../Assets/FreshJuice.svg";
import Spices from "../Assets/Spices.svg";
import Cheese from "../Assets/Cheese.svg";
import Chocolate from "../Assets/Chocolate.svg"
import "../styles/Categories.css";

// Example data – you can replace with real data later
const categories = [
  { id: 1, title: "Fresh Juice", imageUrl: freshjuice },
  { id: 2, title: "Spices & Herbs", imageUrl: Spices },
  { id: 3, title: "Cheese", imageUrl: Cheese },
  { id: 4, title: "Chocolate", imageUrl: Chocolate },
  { id: 5, title: "Dry Products", imageUrl: freshjuice },
];

function Categories() {
  return (
    <div className="container my-4">
      {/* Header row */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <p className="mb-2 section-title">Explore Popular Categories</p>
        <a href="#" className="text-decoration-none text-dark seeAll-text">
          See All
        </a>
      </div>

      {/* Cards row */}
      <div className="d-flex flex-wrap gap-3 justify-content-between justify-content-center-mobile">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="card text-white product-card"
          >
            <img
              src={cat.imageUrl}
              className="card-img"
              alt={cat.title}
            />
            <div className="card-img-overlay d-flex align-items-end p-2 overlay-gradient">
              <p className="card-title mb-0 categorie-title">{cat.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Categories;
