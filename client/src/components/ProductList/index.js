import React, { useState } from 'react';
import { Link } from "react-router-dom";

const ProductList = ({ products }) => {

  var formatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "numeric",
    day: "2-digit"
  });
  console.log (formatter.format(new Date()));

  if (!products.length) {
    return <h2> Oh no!! The garage is empty!</h2>;
  }

  return (
 
    <div>
      <h2>Welcome to Garage Sale</h2>
      {products && 
      products.map(product => (
        
        <div key={product._id} className="card mb-3">
          <h2 className="card-header">{product.name}
          </h2>
          <span>by {product.username} on {product.createdAt}</span>
          
          <div className="card-body">
            {/* <link to={`/product/${product._id}`}> */}
            <p>{product.description} <span>${product.price}</span></p> 
             
             <p className="card-footer mb-0">
               Comments: {product.commentCount} || Click to {''} Make an Offer!!
             </p>
             {/* </link> */}
             </div>
             </div>
        
      ))}
    </div>
    
  );
      }

export default ProductList;