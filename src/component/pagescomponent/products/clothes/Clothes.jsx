import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsive } from '../Carosel';
import ClothesCard from './ClothesCard';

const Clothes = ({ addToCart, clothesproduct }) => {
  return (
    <div>
      <section className="py-5 pb-0">
        <div className="container-fluid">
          <h3 className="">Clothes</h3>
          <Carousel arrows={false} removeArrowOnDeviceType={["tablet", "mobile"]} itemclassName="carousel-item-padding-40-px"

            infinite={true} draggable={true}
            showDots={false}

            responsive={responsive}>

            {clothesproduct.map((clothesproducts) => {
              return (
                <ClothesCard clothesproducts={clothesproducts} addToCart={addToCart} />


              )
            })}





          </Carousel>

        </div>
      </section >
    </div>
  )
}

export default Clothes
