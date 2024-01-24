/* eslint-disable react/prop-types */

import { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import  StoreContext from "../context-and-reducer/StoreContext";
// import { StoreProvider } from "../context-and-reducer/StoreContext";

function Product ({product}) {
    const addToCart = useContext(StoreContext);



    // addtocart is not a function error in console
    const handleAddToCart = () => {
        // e.preventDefault();
        console.log(product)
       {addToCart}
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
                    <Button onClick={handleAddToCart}>Add to Cart</Button>
                </Card.Text>
                </Card.Body>  
        </Card>

    )

}

export default Product;