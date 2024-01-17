// this is the home screen view

// import React from 'react'
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
// import data from "../data"
// once you have added setProducts from useState
// you can remove the imported data cause its reading from back end
import axios from "axios"

function HomeView() {
  const [products, setProducts] = useState([])
// using usestate


// useEffect 
  useEffect(()=> {
    const fetchData = async () => {
      const result = await axios.get('/api/products');
      setProducts(result.data)
    };
    fetchData();
  }, []);


  return (
    <div>
      <h3>Featured Flowers</h3>
{/* add the homeview information from app.jsx */}
<div className="products">
            {Array.isArray(products) && products.map((product) => (
                  <div className="product" key={product.slug}>
                    <Link to={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name} />
                </Link>
                <div className="prod-info">
                <Link to={`/products/${product.slug}`}>
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