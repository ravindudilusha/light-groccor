import React from "react";
import { FaBars } from "react-icons/fa";
import Dropdown from "react-bootstrap/Dropdown";
import "../styles/Subheader.css";

function Subheader() {
  return (
    <nav className="navbar navbar-expand-lg sub-header">
      <div className="container">
        {/* All Categories Dropdown (always visible) */}
        <Dropdown>
          <Dropdown.Toggle
            variant="light"
            id="categoriesDropdown"
            className="d-flex align-items-center"
          >
            <FaBars className="me-2" /> All Categories
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/fruits">🍎 Fruits</Dropdown.Item>
            <Dropdown.Item href="/vegetables">🥦 Vegetables</Dropdown.Item>
            <Dropdown.Item href="/beverages">🥤 Beverages</Dropdown.Item>
            <Dropdown.Item href="/dairy">🧀 Dairy</Dropdown.Item>
            <Dropdown.Item href="/meat">🍗 Meat & Fish</Dropdown.Item>
            <Dropdown.Item href="/dry-products">📦 All Dry Products</Dropdown.Item>
            <Dropdown.Item href="/oils">🫒 Oils & Vinegar</Dropdown.Item>
            <Dropdown.Item href="/pasta">🍝 Pasta, Rice & Sauces</Dropdown.Item>
            <Dropdown.Item href="/cereal">🥣 Cereal & Muesli</Dropdown.Item>
            <Dropdown.Item href="/coffee">☕ Coffee</Dropdown.Item>
            <Dropdown.Item href="/spices">🌿 Spices & Herbs</Dropdown.Item>
            <Dropdown.Item href="/baby-food">🍼 Baby Food</Dropdown.Item>
            <Dropdown.Item href="/fruit-juices">🍹 Fruit Juices</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        {/* Other Navigation Links (hide on mobile) */}
        <ul className="navbar-nav flex-row ms-4 d-none d-lg-flex" style={{fontSize:"14px"}}>
          <li className="nav-item me-2">
            <a className="nav-link navbar-link-custom" href="/offers">
              All Dry Products
            </a>
          </li>
          <li className="nav-item me-2">
            <a className="nav-link navbar-link-custom" href="/new-arrivals">
              Oils & Vinegar
            </a>
          </li>
          <li className="nav-item me-2">
            <a className="nav-link navbar-link-custom" href="/popular">
              Pasta, Rice & Sauces
            </a>
          </li>
          <li className="nav-item me-2">
            <a className="nav-link navbar-link-custom" href="/contact">
              Cereal & Muesli
            </a>
          </li>
          <li className="nav-item me-2">
            <a className="nav-link navbar-link-custom" href="/contact">
              Coffee
            </a>
          </li>
          <li className="nav-item me-2">
            <a className="nav-link navbar-link-custom" href="/contact">
              Spices & Herbs
            </a>
          </li>
          <li className="nav-item me-2">
            <a className="nav-link navbar-link-custom" href="/contact">
              Baby Food
            </a>
          </li>
          <li className="nav-item me-2">
            <a className="nav-link navbar-link-custom" href="/contact">
              Fruit Juices
            </a>
          </li>
          <li className="nav-item me-2">
            <a className="nav-link navbar-link-custom" href="/contact">
              Beverages
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Subheader;
