// import React from 'react'
import { useContext } from 'react'
// import { Navbar } from 'react-bootstrap';
// import { CardBody} from 'react-bootstrap'
// import Product from './CartProduct'
import { StoreContext } from '../context-and-reducer/StoreContext'
import CartProduct from './CartProduct'
// import Col from 'react-bootstrap/Col'
// import CartProduct from './CartProduct'




const CartView = () => {
    const {products, total} = useContext(StoreContext);
  return (
     <div>
      
      <div>
        <h3>Your Cart</h3>
        <span>Total: $ {total}</span>
    </div>
{/* map through the products */}
              {Array.isArray(products) && products.map((products, index)=> 
                <CartProduct 
                key={index}
                product={products}/>
                
                )}
                </div>
   )}

export default CartView;
