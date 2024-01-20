

const CartProduct = ({ children }) => {

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
        <button>remove</button>
</div>
    </div>
  )
}

export default CartProduct;
