// this is the home screen view

// import React from 'react'
import { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
// import data from "../data";
// once you have added setProducts from useState
// you can remove the imported data cause its reading from back end
import axios from "axios";

 
const reducer = (state, action) => {
  switch(action.type) {
    case 'FETCH_REQUEST':
      return {...state, loading: true}
      case 'FETCH_SUCCESS':
      return {...state, products: action.payload, loading: false}
      case 'FETCH_FAIL':
      return {...state, loading: false, error: action.payload}
      default:
        return state;
  }
}


function HomeView() {

// adding useReducer and getting rid of useState
  const [{loading, error, products}, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: '',
  })
  // const [products, setProducts] = useState([]);
  // using usestate

  // useEffect
  useEffect(() => {
    const fetchData = async () => {
      // adding dispatch
      dispatch({type: 'FETCH_REQUEST'})
      try {
        const result = await axios.get("http://localhost:5000/api/products");
        dispatch({type: 'FETCH_SUCCESS', payload: result.data})

      } catch (error) {
        dispatch({type: 'FECTH_FAIL', payload: error.message})
      }
      
      // setProducts(result.data);
      // console.log(result)
    };
    fetchData();
  }, []);

  const isLoaded =   (  <>
        <h3>Featured Flowers</h3>
        {/* add the homeview information from app.jsx */}
        <div className="products">
          {
            products.map((product) => (
              <div className="product" key={product.slug}>
                <Link to={`/products/${product.slug}`}>
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
              </div>
            ))}
        </div>
        ;
      </>
  )


  return <div>{products ? isLoaded : <div>loading FabsFlowers ...</div>}</div>;
}

export default HomeView;
