import { useContext } from "react";
import { StoreContext } from "../context-and-reducer/StoreContext";
import { PropTypes } from "prop-types";


const CartProduct = ({ product }) => {


  const {removeFromCart} = useContext(StoreContext)
    const handleRemove = () => {
          removeFromCart(product);
          console.log(product)
    }

  return (
    <div className="mx-auto px-8 border-gray-200 ">
      <img src={product.image} alt={product.name}
      className="w-40"/>
   <div className="flex flex-row item">
      <div className="w-1/2 px-10">
        <p className="text-xl">{product.name}</p>
        <p className="text-lg">${product.price}</p>
        </div>
</div>
<div>
        <button className="bg-indigo-50 text-white text-lg font-medium rounded-full p-4" 
        onClick={handleRemove}>remove</button>
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
