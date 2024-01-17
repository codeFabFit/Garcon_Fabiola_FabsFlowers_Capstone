// this is the home screen view

// import React from 'react'
import { Link } from "react-router-dom"
import data from "../data"

function HomeView() {
  return (
    <div>
      <h3>Featured Flowers</h3>
{/* add the homeview information from app.jsx */}
<div className="products">
            {
              data.products.map(product => 
                  (<div className="product" key={product.slug}>
                    <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} />
                </Link>
                <div className="prod-info">
                <Link to={`/products/${product.id}`}>
{/* added a link to make it so you click the name it will bring you to that page info */}
                <p>{product.name}</p>
                </Link>
                <p>{product.price}</p>
                {/* dont need description just yet */}
                {/* <p>{product.description}</p> */}
                <button className="btn">Add to Cart</button>
                </div>
              </div>)
              )
            }
            </div>


    </div>
  )
}

export default HomeView
