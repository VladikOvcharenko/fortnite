import './Shop.css'
import { API_KEY, API_URL } from '../../config'
import { Preloader } from '../Preloader'
import { GoodsList } from '../GoodsList/GoodsList'
import { Cart } from '../Cart/Cart'
import { BasketList } from '../BasketList/BasketList'
import { Alert } from '../Alert'

import { useState, useEffect } from 'react'

function Shop() {
  const [goods, setGoods] = useState([])
  const [loading, setLoading] = useState(true)
  const [order, setOrder] = useState([])
  const [isBasketShow, setBasketShow] = useState(false)
  const [alertName, setAlertName] = useState('')

  const addToBasket = (item) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id)

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      }
      setOrder((prevOrder) => [...prevOrder, newItem])
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          }
        } else {
          return orderItem
        }
      })
      setOrder(newOrder)
    }
    setAlertName(item.name)
  }

  const removeFromBasket = (itemId) => {
    const newOrder = order.filter((el) => el.id !== itemId)
    setOrder(newOrder)
  }

  const handleBasketShow = () => {
    setBasketShow(!isBasketShow)
  }

  const incQuantity = (itemId) => {
    const newOrder = order.map((el) => {
      if (el.id === itemId) {
        const newQuantity = el.quantity + 1
        return { ...el, quantity: newQuantity }
      } else {
        return el
      }
    })
    setOrder(newOrder)
  }

  const decQuantity = (itemId) => {
    const newOrder = order.map((el) => {
      if (el.id === itemId) {
        const newQuantity = el.quantity - 1
        return { ...el, quantity: newQuantity >= 0 ? newQuantity : 0 }
      } else {
        return el
      }
    })
    setOrder(newOrder)
  }

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())

      .then((data) => {
        data.featured && setGoods(data.featured)
        setLoading(false)
      })
  }, [])

  const closeAlert = () => {
    setAlertName('')
  }

  return (
    <main className="container content">
      <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList goods={goods} addToBasket={addToBasket} />
      )}
      {isBasketShow && (
        <BasketList
          order={order}
          handleBasketShow={handleBasketShow}
          removeFromBasket={removeFromBasket}
          incQuantity={incQuantity}
          decQuantity={decQuantity}
        />
      )}
      {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
    </main>
  )
}

export { Shop }
