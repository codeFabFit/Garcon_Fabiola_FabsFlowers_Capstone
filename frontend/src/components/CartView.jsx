// import React from 'react'
import { useContext } from 'react'
import { CardBody, Navbar } from 'react-bootstrap'
import CartProducts from './CartProduct'
import { StoreContext } from '../context-and-reducer/StoreContext'

const CartView = () => {
    const {products, total} = useContext(StoreContext)
  return (
    <>
    <CardBody>
      <Navbar />
        <h3>Your Cart</h3>
        <p>Total: $ {total}</p>
  
      
    </CardBody> 
    <div className="flex flex-col items-center lg:grid lg:grid-cols-3">
    {products.map((props, i) =>
    <CartProducts 
    
      key ={i}
      props = {props}
    />
    )}

    </div>
     </> 
  )
}

export default CartView;
