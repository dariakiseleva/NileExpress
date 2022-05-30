import React from 'react'
import './product.scss';
import {useStateValue} from "./../../StateProvider";

function Product({id, title, image, price, rating}) {

    const [{basket}, dispatch] = useStateValue();

    const addToBasket = () => {
        //Dispatch data into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id,
                title,
                image,
                price,
                rating
            }
        })
    }

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

        <button onClick={addToBasket} className="product__button">Add to basket</button>

    </article>
    )
}

export default Product