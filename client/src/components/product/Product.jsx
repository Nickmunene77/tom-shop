import React from 'react'
import { Link } from 'react-router-dom'
import './Product.scss'
import { useContext } from 'react'
import CartContext from '../../CartContext'

function Product({ id, img, name, label, price }) {
  const { increaseProductItems } = useContext(CartContext)

  return (
    <article className="product">
      <img className="product__image" src={img} alt="" />
      <p className="product__title">{name}</p>
      <p className={`product__label ${!label ? 'no-discount' : ''}`}>
        {label && `${label - 2}0% discounts`}
        <span className="product__price product__price-nohover">
          {price} ksh.
        </span>
      </p>
      <p className="product__price">{price} Ksh. </p>
      <div className="product__overlay">
        <button
          className="product__add"
          onClick={() => {
            increaseProductItems(id, img, name, price)
          }}
        >
          Add to cart
        </button>
        <Link className="product__info" to={`/furniture/${id}`}>
          Details
        </Link>
      </div>
      <button
        className="product__add product__add-nohover"
        onClick={() => {
          increaseProductItems(id, img, name, price)
        }}
      >
        Add to cart
      </button>
      <Link
        to={`/furniture/${id}`}
        className="product__info product__info-nohover"
      >
        Learn more.
      </Link>
    </article>
  )
}

export default Product
