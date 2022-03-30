import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./productlist.css"

const ProductList = ({ products }) => {

  var formatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "numeric",
    day: "2-digit"
  });
  console.log(formatter.format(new Date()));

  if (!products.length) {
    return <h2> Oh no!! The garage is empty!</h2>;
  }

  return (
    <main>
        <h2 className='welcome'>Welcome to Garage Sale</h2>
        <div className='prod-wrap'>
        
          
          {products && 
          products.map(product => (
            
            <div key={product._id} className="prod-main">
              
              <div className="prod-name">
              <h2> {product.name} </h2>
              </div>
              <div className='prod-img'>
              <img src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUA
                AAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO
                  9TXL0Y4OHwAAAABJRU5ErkJggg==" alt="Red dot" />
              </div>
                
               

              <div className='prod-create'>
              <span>Posted by {product.username} on {product.createdAt}</span>
              </div>

              <div className="prod-price">
                {/* {<link to={`/SingleProduct/${product._id}`}> */}
                <p> <span>${product.price}</span></p> 
                
                <p className="com-offer  ">
                  Comments: {product.commentCount} || Click to {''} Make an Offer!!
                </p>
                {/* </link> */}
                </div>
                </div>
             ))}
            </div> 
    </main>
    
  );
};

export default ProductList;