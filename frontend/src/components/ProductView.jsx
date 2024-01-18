/* eslint-disable no-unused-vars */
// view specific product based on its slug or what the user clicked

// import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useReducer } from 'react'
import axios from 'axios'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Badge, ListGroup, ListGroupItem } from 'react-bootstrap'
// import CardBody from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import {Button} from 'react-bootstrap'


const reducer = (state, action) => {
  switch (action.type) {
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
          const result = await axios.get(`api/products/slug/${slug}`);
          dispatch({type: 'FETCH_SUCCESS', payload: result.data})
  
        } catch (error) {
          dispatch({type: 'FETCH_FAIL', payload: error.message})
        }
        
      };
      fetchData();
    }, [slug]);
  
  return loading ? (
    <div>Loading Flowers ...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div>
      <Row>
        <Col md={6}>
          <img
          className="img-large"
          src={product.image} 
          alt={product.name}
          ></img>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
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
        <Col md={3}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                      <Row>
                        <Col>Status:</Col>
                        <Col>
                        {product.countInStock > 0 ? (
                        <Badge bg="success">In Stock</Badge>
                        ):(
                        <Badge bg="danger">Out of Stock</Badge>
                        )}</Col>
                      </Row>
                </ListGroup.Item>      
              </ListGroup>

                    {product.countInStock > 0 && (
                      <ListGroup.Item>
                        <div className='d-grid'>
                            <Button variant='primary'>
                              Add to Cart
                            </Button>
                        </div>
                      </ListGroup.Item>
                    )}

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default ProductView;