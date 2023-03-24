import React from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsive } from '../Carosel';
import Electronicproduct from './Electronicproduct';








const Electronics = ({ productItems, addToCart }) => {






    return (
        <div>

            <section className="py-5 pb-0">
                <div className="container-fluid">
                    <h3 className="">Electronics</h3>
                    <Carousel arrows={false} removeArrowOnDeviceType={["tablet", "mobile"]} itemclassName="carousel-item-padding-40-px"

                        infinite={true} draggable={true}
                        showDots={false}

                        responsive={responsive}>

                        {productItems.map((productItems) => {
                            return (
                                <Electronicproduct productItems={productItems} addToCart={addToCart} />


                            )
                        })}





                    </Carousel>

                </div>
            </section >

        </div>
    )
}

export default Electronics