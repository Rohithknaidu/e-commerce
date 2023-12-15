// src/components/ProductDetail.js
import React from 'react';
import './ProductDetail.css';

const ProductDetail = ({ product }) => {
    console.log('Product Detail Component - Received Product:', product);
  if (!product) {
    return <div>Loading...</div>; // You can display a loading indicator if needed
  }

  const { image, title, price, description, rating } = product;

  return (
    <div className="product-detail">
      <div className="product-image-container">
        <img src={image} alt={title} className="product-image" />
      </div>
      <div className="product-info">
        <h2 className="product-title">{title}</h2>
        <p className="product-price">${price}</p>
        <p className="product-description">{description}</p>
        {rating && (
          <p className="product-rating">Rating: {rating.rate}/5</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
