// import React from 'react'
import { useContext } from 'react'
import { Button, CardBody } from 'react-bootstrap';

import StoreContext from '../context-and-reducer/StoreContext'
import CartProduct from './CartProduct'

import { useNavigate } from 'react-router-dom';





const CartView = () => {


    const navigate = useNavigate()
    const {products, total} = useContext(StoreContext);

    const checkoutHandler = () => {
      navigate('/signin?redirect=/shipping')
  }
  return (
     <div>
      <div 
      className='d-flex flex-row aign-items-center justify-content-between mt-2 py-6 px-10 text-xl font-weight-medium'>
        <CardBody>

<img className="logo-img" src="https://static.vecteezy.com/system/resources/previews/008/420/922/original/flower-alphabet-f-logo-vector.jpg"></img>

          <span>Thanks For Shopping With Us</span>
        <h3>Your Cart</h3>
        <span>Total: $ {total}</span>
        <br/>
        <Button
        type="button"
        variant='primary'
        onClick={checkoutHandler}
        >Proceed to Checkout</Button>
    
{/* map through the products */}
              {Array.isArray(products) && products.map((products, index)=> 
                <CartProduct 
                key={index}
                product={products}/>
                
                )}
                
                
                </CardBody> 
                </div>

               
</div>



                
   )}

export default CartView;
