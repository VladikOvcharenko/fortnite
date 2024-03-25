import './Cart.css'

function Cart(props) {
  const { quantity = 0, handleBasketShow } = props

  return (
    <div
      className="cart deep-purple darken-2 white-text"
      onClick={handleBasketShow}
    >
      <i className="material-icons">shopping_basket</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  )
}

export { Cart }
