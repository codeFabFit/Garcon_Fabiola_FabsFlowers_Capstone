// import React from 'react'
import { useContext } from 'react'
import { CardBody} from 'react-bootstrap'
// import Products from './CartProduct'
import { StoreContext } from '../context-and-reducer/StoreContext'
// import CartProduct from './CartProduct'

const CartView = () => {
    const {products, total} = useContext(StoreContext)
  return (
    <>
    <CardBody>
      
        <h3>Your Cart</h3>
        <p>Total: $ {total}</p>
      
    </CardBody> 



    <div className="flex flex-col items-center lg:grid lg:grid-cols-3">
      {/* i do not need whats in the bottom */}
    {/* {products.map((product, i) =>
    <Products 
    
    
    
      key ={i}
      product = {product}

    /> */}
  
    

    </div>
     </> 
  )
}

export default CartView;
