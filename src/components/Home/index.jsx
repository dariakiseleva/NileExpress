import React from 'react';
import './home.scss';
import Product from './Product';

export default function Home() {
  return (
    <main className="home">

      <section className="home__container">
        {/* Image on top of the home section */}
        
        <img 
          className="home__image"
          src="https://m.media-amazon.com/images/I/61KtzEF0wzL._SX3000_.jpg" 
          alt="" 
        />

        {/* Rows of products */}

        <div className="home__row">
          <Product
            id="12345"
            title="The lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={5}

          />
          <Product
            id="1442345"
            title="Silk pink pillocase"
            price={9.99}
            image="https://m.media-amazon.com/images/I/61+icdReSYL._AC_SL1500_.jpg"
            rating={4}

          />
        </div>

        <div className="home__row">
          <Product />
          <Product />
          <Product />
        </div>

        <div className="home__row">
          <Product />
        </div>

      </section>


    </main>


  )
}