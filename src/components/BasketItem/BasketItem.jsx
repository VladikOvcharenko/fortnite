import './BasketItem.css'

function BasketItem(props) {
  const {
    id,
    name,
    price,
    quantity,
    removeFromBasket,
    incQuantity,
    decQuantity,
  } = props
  return (
    <li href="#!" className="collection-item " id={id}>
      <span className="item-name">{name}</span>
      <div className="item-wrapper">
        <i
          class="material-icons white-text accent-4 basket-quantity"
          onClick={() => decQuantity(id)}
        >
          remove
        </i>
        <span className="item-quantity">{quantity}</span>
        <i
          class="material-icons white-text accent-4 basket-quantity"
          onClick={() => incQuantity(id)}
        >
          add
        </i>

        <span className="item-total">= {price * quantity} uah</span>
        <span class="secondary-content " onClick={() => removeFromBasket(id)}>
          <i class="material-icons purple-text accent-4 basket-delete">
            delete_forever
          </i>
        </span>
      </div>
    </li>
  )
}

export { BasketItem }
