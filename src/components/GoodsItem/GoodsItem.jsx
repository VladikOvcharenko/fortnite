import './GoodsItem.css'

function GoodsItem(props) {
  const { id, name, description, price, image, addToBasket } = props

  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={name} />
      </div>
      <div className="card-content">
        <span className="card-title">{name}</span>
        <p>{description}</p>
      </div>
      <div className="card-action">
        <button
          className="btn"
          onClick={() =>
            addToBasket({
              id,
              name,
              price,
            })
          }
        >
          Bay
        </button>
        <span className="right price">{price} uah</span>
      </div>
    </div>
  )
}

export { GoodsItem }
