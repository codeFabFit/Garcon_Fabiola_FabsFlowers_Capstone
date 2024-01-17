// view specific product based on its slug or what the user clicked

// import React from 'react'
import { useParams } from 'react-router-dom'

function ProductView() {

    const params = useParams;
    const {slug} = params
  return (
    <h1>{slug}</h1>
  )
}

export default ProductView