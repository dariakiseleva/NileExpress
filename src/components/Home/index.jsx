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
          // src="https://m.media-amazon.com/images/I/61KtzEF0wzL._SX3000_.jpg" 
          src="https://images-na.ssl-images-amazon.com/images/G/15/kindle/journeys/Zjc1NTA4OGMt/Zjc1NTA4OGMt-MWFmZWRlOTQt-w3000._CB649606900_.jpg"
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
          <Product
            id="144234555"
            title="Echo Dot (4th Gen) | Smart speaker with Alexa | Glacier White "
            price={69.99}
            image="https://m.media-amazon.com/images/I/71fm-oidY3L._AC_SL1000_.jpg"
            rating={3}

          />
          <Product
            id="144442345"
            title="HEQU Regency Dresses for Women with Satin Sash Ruffle Empire Waist Dress Gown "
            price={24.99}
            image="https://m.media-amazon.com/images/I/61NhJFKQmgL._AC_UL1500_.jpg"
            rating={5}

          />

          <Product
            id="1442345"
            title="Midwest Homes for Pets Hamster Cage, Awesome Arcade Hamster Home, 18.1x11.4x21.5"
            price={89.99}
            image="https://m.media-amazon.com/images/I/91Pq-2ppDhL._AC_SL1500_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="1442345"
            title="Samsung LS24T350FHNXZA 24-inch Screen LED-Lit Monitor 5ms 75Hz Eye-Saver Mode with Freesync (LF24T350FHNXZA)"
            price={249.99}
            image="https://m.media-amazon.com/images/I/61B8Lq5NXmL._AC_SL1000_.jpg"
            rating={5}

          />
        </div>

      </section>


    </main>


  )
}