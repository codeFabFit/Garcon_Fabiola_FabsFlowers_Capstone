/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
// this is the home screen view

// import React from 'react'
import { useEffect, useReducer} from "react";
import logger from 'use-reducer-logger'
// import { Link } from "react-router-dom";
// import data from "../data";
// once you have added setProducts from useState
// you can remove the imported data cause its reading from back end
import axios from "axios";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Product from "./Product";


 
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
  const [{loading, error, products}, dispatch] = useReducer(logger(reducer), {
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
        dispatch({type: 'FETCH_FAIL', payload: error.message})
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
          
            <Row>
            {products.map((product) => (
              <Col sm={6} md={3} lg={2} className="mb-3">
                <Product product={product}></Product>
              </Col>
            ))}
            </Row>

        </div>
        
      </>
  )


  return <div>{products ? isLoaded : <div>loading FabsFlowers ...</div>}</div>;
            }

export default HomeView;
