import { useContext } from "react";
import StoreContext from "../context-and-reducer/StoreContext";
import { PropTypes } from "prop-types";


const CartProduct = ({ product }) => {


  const {removeFromCart} = useContext(StoreContext)
    const handlesRemove = () => {
          {removeFromCart(product)}
          console.log(`removed from cart: ${product}`)
    }

  return (
    <div className="mx-auto px-8 border-border-secondary ">
      <img src={product.image} alt={product.name}
      className="img-fluid-w-50"/>
   <div className="d-flex fex-column align-items-start">
      <div className="mx-auto px-8 border-border-secondary">
        <p className="text-xl">{product.name}</p>
        <p className="text-lg">${product.price}</p>
        </div>
</div>
<div>
        <button className="btn btn-info text-white btn-sm font-weight-medium rounded-circle p-4" 
        onClick={handlesRemove}>remove</button>
</div>
    </div>
  )
}

CartProduct.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    // Add other prop types as needed
  }).isRequired,
};

export default CartProduct;
