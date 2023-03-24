import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsive } from '../Carosel';
import GamesCard from './GamesCard';

const Games = ({ addToCart, gamesproduct }) => {
  return (
    <div>
      <section className="py-5 pb-0">
        <div className="container-fluid">
          <h3 className="">Games</h3>
          <Carousel arrows={false} removeArrowOnDeviceType={["tablet", "mobile"]} itemclassName="carousel-item-padding-40-px"

            infinite={true} draggable={true}
            showDots={false}

            responsive={responsive}>

            {gamesproduct.map((gamesproducts) => {
              return (
                <GamesCard gamesproducts={gamesproducts} addToCart={addToCart} />


              )
            })}





          </Carousel>

        </div>
      </section >
    </div>
  )
}

export default Games
