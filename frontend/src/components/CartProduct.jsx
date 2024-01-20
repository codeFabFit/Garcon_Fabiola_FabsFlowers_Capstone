import { useContext } from "react";
import { StoreContext } from "../context-and-reducer/StoreContext";
import { PropTypes } from "prop-types";


const CartProduct = ({ product }) => {
  const {addToCart} = useContext(StoreContext)
    const handleAdd = () => {
          addToCart(product);
    }

  return (
    <div className="mx-auto px-8 border-gray-200 ">
      <img src={product.image} alt={product.name} />
   <div className="flex flex-row item">
      <div>
        <p className="text-xl">{product.name}</p>
        <p className="text-lg">${product.price}</p>
        </div>
</div>
<div>
        <button className="bg-indigo-50 text-white text-lg font-medium rounded-full p-4" 
        onClick={handleAdd}>Add to Cart</button>
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
