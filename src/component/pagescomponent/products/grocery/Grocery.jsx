import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsive } from '../Carosel';
import GroceryCard from './GroceryCard';

const Grocery = ({ addToCart, groceryproduct }) => {
  return (
    <div>
      <section className="py-5 pb-0">
        <div className="container-fluid">
          <h3 className="">Grocery</h3>
          <Carousel arrows={false} removeArrowOnDeviceType={["tablet", "mobile"]} itemclassName="carousel-item-padding-40-px"

            infinite={true} draggable={true}
            showDots={false}

            responsive={responsive}>

            {groceryproduct.map((groceryproducts) => {
              return (
                <GroceryCard groceryproducts={groceryproducts} addToCart={addToCart} />


              )
            })}





          </Carousel>

        </div>
      </section >
    </div>
  )
}

export default Grocery
