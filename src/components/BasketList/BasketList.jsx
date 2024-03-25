import './BasketList.css'

import { BasketItem } from '../BasketItem/BasketItem'

function BasketList(props) {
  const {
    order,
    handleBasketShow,
    removeFromBasket,
    incQuantity,
    decQuantity,
  } = props

  const totalPrise = order.reduce((sum, el) => {
    return sum + el.price * el.quantity
  }, 0)

  return (
    <div className="collection basket-list">
      <div className="collection-item purple accent-4 white-text ">
        Basket
        <i
          className="material-icons right white-text basket-close"
          onClick={handleBasketShow}
        >
          close
        </i>
      </div>

      {order.length ? (
        order.map((item) => (
          <BasketItem
            key={item.id}
            {...item}
            removeFromBasket={removeFromBasket}
            incQuantity={incQuantity}
            decQuantity={decQuantity}
          />
        ))
      ) : (
        <div href="#!" className="collection-item ">
          Basket is empty
        </div>
      )}

      <div className="collection-item purple accent-4 white-text total-wrapper">
        <span>Total all: {totalPrise}</span>
        <button className="total-order">place order</button>
      </div>
    </div>
  )
}

export { BasketList }
