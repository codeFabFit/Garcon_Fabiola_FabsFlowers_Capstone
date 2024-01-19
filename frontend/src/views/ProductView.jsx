/* eslint-disable no-unused-vars */
// view specific product based on its slug or what the user clicked

// import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useReducer } from 'react'
import axios from 'axios'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Badge, ListGroup, ListGroupItem } from 'react-bootstrap'
// import CardBody from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
// import Product from '../components/Product'


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

    const params = useParams();
    const {slug} = params;

const [selectedImage, setSelectedImage] = useState('')

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
  
// adding the cart handler

// const {state, dispatch: ctxDispatch} = useContext(Store);
// const addToCartHandler = () =>{
//   ctxDispatch({type:'CART_ADD_ITEM', payload: {...product, quantity: 1}})
// }


  return loading ? (
    <LoadingBox />
  ): error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ): 
    <div>
      <Row>
        <Card>
        <Col md={12}>
          <Card.Img variant="top" className="img-medium"
          src={product.image} alt={product.name}>
          </Card.Img>
        </Col>
        </Card>
        <Col md={6}>
          <ListGroup variant="flush">
              <ListGroup.Item>
               <h1>
                {product.name}
                </h1>
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
        <Col md={6}>
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
                        )}
                        </Col>
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
  
}

export default ProductView;