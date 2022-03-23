import React, { useState } from 'react';
import { Link } from "react-router-dom";

const ProductList = ({ products }) => {
  if (!products.length) {
    return <h2> Oh no!! The garage is empty!</h2>;
  }

  return (
  
    <div>
      <h2>Welcome to Garage Sale</h2>
      {products && 
      products.map(product => (
        <div key={product._id} className="card mb-3">
          <p className="card-header">
            {product.name}
          </p>
          <span>Posted by {product.username} on {product.createdAt} </span>
          </div>

      ))}
    </div>
  );
  }

export default ProductList;