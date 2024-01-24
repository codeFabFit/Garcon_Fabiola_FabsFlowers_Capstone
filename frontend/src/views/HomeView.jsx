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
import Product from "../components/Product";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { Button, Form, Container } from "react-bootstrap";
import { useState } from "react";

 
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
 

  
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Simulate sending an email after a short delay
      setTimeout(() => {
        setSubscribed(true);
      }, 2000); // 2000 milliseconds (2 seconds) delay
    };
  
  const isLoaded =   (  <>
<img className="logo-img" src="https://static.vecteezy.com/system/resources/previews/008/420/922/original/flower-alphabet-f-logo-vector.jpg"></img>
  <p>FabsFlowers <code>MISSION</code> is provide our customers with quality flowers and floral arrangements at a fair price. We will strive to match and surpass the expectations that our customers expect from us and our products</p>
        <h3>Featured Flowers</h3>
        {/* add the homeview information from app.jsx */}
        <div className="products">
          
          {loading ? (
            <LoadingBox />
          ): error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ): 
              (
            <Row>
            {products.map((product) => (
              <Col key={product.slug} sm={6} md={3} lg={2} className="mb-3">
                
                <Product 
               
                product={product}></Product>
              </Col>
            ))}
            </Row>
)}
        </div>

        
        <Container className="subscribe">
      <h2 className="subscribe-title">Lets Keep In Touch</h2>
      <p className="subscribe-tagline">Subscribe to keep in touch with fresh news and exciting updates</p>

      {subscribed ? (
        <p className="confirmation-message">You will receive an email shortly. Thank you for subscribing!</p>
      ) : (
        <Form className="subscribe-form" onSubmit={handleSubmit}>
          <Form.Group controlId="email">
            <Form.Control
              type="email"
              className="email-form"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Button className="form-button" variant="primary" type="submit">
            Send
          </Button>
        </Form>
      )}

      <div className="notice">
        <Form.Check type="checkbox" id="agreeCheckbox" label="I agree to my email address being stored and used to receive updates." />
      </div>
    </Container>


        {/* <div className="subscribe">
          <h2 className="subscribe-title">Lets Keep In Touch</h2>
          <p className="subscribe-tagline">subscribe to keep in touch with fresh news and exciting updates. We promise we wont spam you!</p>
          <div className="form">
            <input type="email" className="email-form" placeholder="Enter your email address"></input>
              <button className="form-button">Send</button>
          </div>
          <div className="notice">
            <input type="checkbox" />
              <span className="notice-copy">I agree to my email addres being stored and used to receive monthly newsletterson updates and exciting new about <code>Fabs Flowers </code></span>
            
          </div>
        </div> */}
      </>
  ) 
  return <div>{products ? isLoaded : <div>loading ...</div>}</div>;
}

export default HomeView;