// import React from 'react'
import { useContext } from 'react'
import { Navbar } from 'react-bootstrap'
import { StoreContext } from '../context-and-reducer/StoreContext'

const CartView = () => {
    const {total} = useContext(StoreContext)
  return (
    <>
      <Navbar />
        <h3>Your Cart</h3>
        <p>Total: $ {total}</p>
    </>
  )
}

export default CartView;
