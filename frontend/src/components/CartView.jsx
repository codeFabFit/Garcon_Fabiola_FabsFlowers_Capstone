// import React from 'react'
import { useContext } from 'react'
import { CardBody } from 'react-bootstrap';
// import { Navbar } from 'react-bootstrap';
// import { CardBody} from 'react-bootstrap'
import Product from './CartProduct'
import { StoreContext } from '../context-and-reducer/StoreContext'
// import CartProduct from './CartProduct'
// import Col from 'react-bootstrap/Col'
// import CartProduct from './CartProduct'




const CartView = () => {
    const {products, total} = useContext(StoreContext);
  return (
     <div>
      
      <div 
      className='flex flex-row items-center 
      justify-between mt-2 
      py-6 px-10 text-xl f
      ont-medium'>
        <CardBody>hello
        <h3>Your Cart</h3>
        <span>Total: $ {total}</span>
    
{/* map through the products */}
              {Array.isArray(products) && products.map((products, index)=> 
                <Product 
                key={index}
                product={products}/>
                
                )}
                
                
                </CardBody> 
                </div>

               
</div>
                
   )}

export default CartView;
