/* eslint-disable react/prop-types */

import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Product(props) {
    const {product} = props
    return (
        <Card className="product" key={product.slug}>
            <Link to={`/product/${product.slug}`}>
                <img src={product.image} className="card-img-top" alt={product.name}/>
            </Link>
            <Card.Body> 
                <Link to={`/product/${product.slug}`}>
                    <Card.Title>{product.name}</Card.Title>
                </Link>
             </Card.Body>    
            
                <Card.Text>
                    <strong>${product.price}</strong>
                    <Button>Add to Cart</Button>
                </Card.Text>
        </Card>
    )
}

export default Product;