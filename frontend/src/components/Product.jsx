/* eslint-disable react/prop-types */

import { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { StoreContext } from "../context-and-reducer/StoreContext";

function Product(props) {
    const {product} = props
    const {addToCart} = useContext(StoreContext);

    const handleAdd = () => {
        addToCart(product);

    }
    return (
        <Card className="product">
            <Link to={`/product/${product.slug}`}>
                <img src={product.image} className="card-img-top" alt={product.name}/>
            </Link>
            <Card.Body> 
                <Link to={`/product/${product.slug}`}>
                    <Card.Title>{product.name}</Card.Title>
                </Link>
               
                <Card.Text>
                    <strong>${product.price}</strong>
                    <Button onClick={handleAdd}>Add to Cart</Button>
                </Card.Text>
                </Card.Body>  
        </Card>
    )
}

export default Product;