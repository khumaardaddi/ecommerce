import React from 'react'
import { FaHeart } from 'react-icons/fa';

const ClothesCard = ({ clothesproducts, addToCart }) => {
    return (
        <div>
            <div className="card mb-2 col-md-10 col-sm-10 col-lg-10 col-xl-10 col-xxl-10 m-3">
                <div className="card-header p-0 position-relative mt-n3 mx-0  z-index-3">
                    <a className="d-block blur-shadow-image ">
                        <img src={clothesproducts.image}
                            alt="img-blur-shadow" className="img-fluid border-radius-lg" loading="lazy" style={{ height: "180px", width: "300px" }} />
                    </a>
                    <div className="colored-shadow"
                        style={{ backgroundImage: "url(https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product1.jpg)" }}>
                    </div>
                </div>
                <div className="card-body text-start">
                    <div
                        className="d-flex align-items-center justify-content-between flex-md-row flex-column gap-2 flex-md-row flex-column gap-2">
                        <p className="mb-0 text-gradient text-primary text-uppercase font-weight-normal text-sm">Trending</p>
                        <span>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                        </span>
                    </div>
                    <h5 className="font-weight-bold mt-3 text-gradient text-primary">
                        <a href="javascript:;">{clothesproducts.title}</a>
                    </h5>
                    <p className="mb-0">
                        {clothesproducts.title1}
                    </p>
                </div>
                <div className="card-footer d-flex pt-0 pb-0">
                    <h5 className="font-weight-bold my-auto">₹{clothesproducts.price}</h5>
                    <p className="font-weight-bold text-danger  m-1"><s>₹{clothesproducts.oldprice}</s></p>
                    <i className="material-icons position-relative ms-auto  text-danger text-lg me-1 my-auto "
                        data-bs-toggle="tooltip" data-bs-placement="top"><FaHeart /></i>
                </div>

                <div className="row mt-2 mb-3">
                    <div className="col-lg-6 mx-auto">
                        <button className="btn bg-gradient-primary mb-0 mt-lg-auto w-100 p-2" type="button"
                            name="button" onClick={() => addToCart(clothesproducts)} >Add to cart</button>
                    </div>
                    <div className="col-lg-6 mx-auto ">
                        <button className="btn bg-gray-900 text-white mb-0 mt-lg-auto w-100 p-2" type="button"
                            name="button"  >Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClothesCard
