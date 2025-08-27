import React from 'react';
import freshjuice from "../Assets/FreshJuice.svg";

// Example data – you can replace with real data later
const categories = [
  { id: 1, title: 'Category 1', imageUrl: freshjuice },
  { id: 2, title: 'Category 2', imageUrl: freshjuice },
  { id: 3, title: 'Category 3', imageUrl: freshjuice },
  { id: 4, title: 'Category 4', imageUrl: freshjuice },
  { id: 5, title: 'Category 5', imageUrl: freshjuice },
];

function Categories() {
  return (
    <div className="container my-4">
      {/* Header row: title + view all */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="mb-0">Explore Popular Categories</h2>
        <a href="#" className="text-decoration-none">View All</a>
      </div>

      {/* Cards row */}
      <div className="d-flex flex-wrap gap-3 justify-content-between">
        {categories.map(cat => (
          <div
            key={cat.id}
            className="card text-white"
            style={{
              minWidth: '18%',
              maxWidth: '18%',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <img
              src={cat.imageUrl}
              className="card-img"
              alt={cat.title}
              style={{ objectFit: 'cover', height: '200px' }}
            />
            <div
              className="card-img-overlay d-flex align-items-end p-2"
              style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0))' }}
            >
              <p className="card-title mb-0 categorie-title">{cat.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
