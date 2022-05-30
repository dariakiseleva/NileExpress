import React from 'react'
import './product.scss';

function Product({id, title, image, price, rating}) {
  return (
    <article className="product">
        <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>

            <div className="product__rating">
                
                {Array(rating).fill().map((_, i) => (
                    <p>⭐</p>
                ))}
            </div>
        </div>

        <img 
            className="product__image" 
            src={image}
        />

        <button className="product__button">Add to basket</button>

    </article>
  )
}

export default Product