/* eslint-disable no-unused-vars */
// view specific product based on its slug or what the user clicked

// import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useReducer } from 'react'
import axios from 'axios'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { ListGroup } from 'react-bootstrap'



const reducer = (state, action) => {
  switch(action.type) {
    case 'FETCH_REQUEST':
      return {...state, loading: true}
      case 'FETCH_SUCCESS':
      return {...state, product: action.payload, loading: false}
      case 'FETCH_FAIL':
      return {...state, loading: false, error: action.payload}
      default:
        return state;
  }
}

function ProductView() {

    const params = useParams;
    const {slug} = params;

    const [{loading, error, product}, dispatch] = useReducer(reducer, {
      product: [],
      loading: true,
      error: '',
    })

  
    // useEffect using same from homeview
    useEffect(() => {
      const fetchData = async () => {
        // adding dispatch
        dispatch({type: 'FETCH_REQUEST'})
        try {
          const result = await axios.get(`http://localhost:5000/api/products/slug/${slug}`);
          dispatch({type: 'FETCH_SUCCESS', payload: result.data})
  
        } catch (error) {
          dispatch({type: 'FETCH_FAIL', payload: error.message})
        }
        
      };
      fetchData();
    }, [slug]);
  
  return loading? (
    <div>Loading Flowers ...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div>
      <Row>
        <Col md={6}>
          <img
          className='img-large'
          src={product.image} alt={product.name}></img>
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
              <ListGroup.Item>
                <h1>{product.name}</h1>
              </ListGroup.Item>
              <ListGroup.Item>
                Price : $ {product.price}
              </ListGroup.Item>
              <ListGroup.Item>
                Description:
                <p>{product.description}</p>
              </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}></Col>
      </Row>
    </div>
  )
}

export default ProductView