// /* eslint-disable no-unused-vars */
// view specific product based on its slug or what the user clicked

// import React from 'react'
import { useParams } from 'react-router-dom'
import {  useEffect,} from 'react'
import { useReducer } from 'react'
import axios from 'axios'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Badge, ListGroup } from 'react-bootstrap'
// import CardBody from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'



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

    // const navigate = useNavigate()
    const params = useParams();
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


const handleAddToCart = async (e) => {

  
  if(!Array.isArray(product)){
    console.log("product should be array")
    console.log(product.name)
    return
  }
  // making so that if i add a product back end is making sure it exisit
  const exisitingProduct = exisitingProduct.findIndex((x) => x.name === product.name);
  if (!product) {
    console.error("product not found in array")
    
    return
  }
  const quantity = product ? product.quantity + 1 : 1;
    try{
      const {data} = await 
  axios.get(`http://localhost:5000/api/products/${product.name}`);
    
  
  // checking if product is in stock
  if (data.countInStock < 1) {
    window.alert("Wah! Product is out of Stock");
    return;
  }
  dispatch({
    type: "ADD_TO_CART",
    payload: {...product, quantity}

  })
} catch(error){
  console.error("error fetching product details")

  e.preventDefault();
 
 } 
}


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
                            <Button 
                            name='add to cart'
                            variant='primary'
                            onClick={()=> handleAddToCart(product)}
                            
                            >
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