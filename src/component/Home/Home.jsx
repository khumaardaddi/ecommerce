import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsive } from '../Home/Carosel'





const Home = () => {

  const products = [
    {
      id: 1,
      imageurl: "../../assets/img/apple14.jpg",
      title: "Apple iPhone 13 ",
      title1: " (128GB) - Blue",
      price: "200",
      oldprice: "282",
    },
    {
      id: 2,
      imageurl: "https://m.media-amazon.com/images/I/31G1NouVxaL._AC_SY200_.jpg",
      title: "Ear Bads",
      title1: " (128GB) - Blue",
      price: "200",
      oldprice: "222",
    },
    {
      id: 3,
      imageurl: "https://m.media-amazon.com/images/I/31xsHkYHyrL._AC_SY200_.jpg",
      title: "Speaker",
      title1: " (128GB) - Blue",
      price: "200",
      oldprice: "262",
    },
    {
      id: 4,
      imageurl: "https://m.media-amazon.com/images/I/41cc4lmukRL._AC_SY200_.jpg",
      title: "Box set",
      title1: " (128GB) - Blue",
      price: "200",
      oldprice: "242",
    },
    {
      id: 5,
      imageurl: "https://m.media-amazon.com/images/I/31B7DwG79FL._AC_SY200_.jpg",
      title: "Home theatre",
      title1: " (128GB) - Blue",
      price: "200",
      oldprice: "232",
    },
    {
      id: 6,
      imageurl: "https://m.media-amazon.com/images/I/41J8SEaJLhL._AC_SY200_.jpg",
      title: "Sport shoes",
      title1: " (128GB) - Blue",
      price: "4200",
      oldprice: "5222",
    },

  ]


  return (
    <div >
      <nav class="navbar navbar-expand-lg navbar-black bg-black py-1 " style={{ backgroundColor: 'black' }} >
        <div class="container-fulid">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xl-3 col-xxl-2 " >



              <button class="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation1" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation" >
                <span class="navbar-toggler-icon mt-2" >
                  <span class="navbar-toggler-bar bar1 " style={{ backgroundColor: 'white' }} ></span>
                  <span class="navbar-toggler-bar bar2" style={{ backgroundColor: 'white' }}></span>
                  <span class="navbar-toggler-bar bar3" style={{ backgroundColor: 'white' }}></span>
                </span>
              </button>
              <div class="collapse navbar-collapse w-100  " id="navigation1">
                <ul class="navbar-nav navbar-nav-hover ms-auto">


                  <li class="nav-item dropdown dropdown-hover  col-xxl-3 col-md-3 ps-0 ">
                    <a class="nav-link ps-1 d-flex cursor-pointer align-items-center" id="dropdownMenuAccount" data-bs-toggle="dropdown" aria-expanded="false" role="button" style={{ color: 'white' }}>
                      <i class="material-icons opacity-6 text-md"></i>
                      All Category
                      <img src="../../assets/img/down-arrow-dark.svg" alt="down-arrow" class="arrow ms-auto ms-md-2" />
                    </a>
                    <div class="dropdown-menu dropdown-menu-animation dropdown-md border-radius-xl p-3 mt-0 mt-lg-3" aria-labelledby="dropdownMenuAccount">
                      <div class="d-none d-lg-flex">
                        <ul class="list-group w-100">
                          <li class="nav-item dropdown dropdown-hover dropdown-subitem list-group-item border-0 p-0">
                            <a class="dropdown-item border-radius-md text-dark ps-3 d-flex align-items-center mb-1" id="dropdownSignIn">
                              <span>Sign In</span>

                            </a>

                          </li>
                          <li class="nav-item dropdown dropdown-hover dropdown-subitem list-group-item border-0 p-0">
                            <a class="dropdown-item border-radius-md text-dark ps-3 d-flex align-items-center mb-1" id="dropdownSignUp">
                              <span>Sign Up</span>

                            </a>

                          </li>
                          <li class="nav-item dropdown dropdown-hover dropdown-subitem list-group-item border-0 p-0">
                            <a class="dropdown-item border-radius-md text-dark ps-3 d-flex align-items-center mb-1" id="dropdownPasswordReset">
                              <span>Password Reset</span>

                            </a>

                          </li>

                        </ul>
                      </div>

                    </div>
                  </li>

                  <li >
                    <a href="" style={{ color: 'white', paddingLeft: '20px' }}>Home</a>

                  </li>
                  <li >
                    <a href="" style={{ color: 'white', paddingLeft: '20px' }}>grocery</a>

                  </li>
                  <li >
                    <a href="" style={{ color: 'white', paddingLeft: '20px' }}>ELectronics</a>

                  </li>
                  <li >
                    <a href="" style={{ color: 'white', paddingLeft: '20px' }}>Mobiles</a>

                  </li>
                  <li >
                    <a href="" style={{ color: 'white', paddingLeft: '20px' }}>Health</a>

                  </li>
                  <li >
                    <a href="" style={{ color: 'white', paddingLeft: '20px' }}>Fashion</a>

                  </li>
                  <li >
                    <a href="" style={{ color: 'white', paddingLeft: '20px' }}>Personcare</a>

                  </li>
                  <li >
                    <a href="" style={{ color: 'white', paddingLeft: '20px' }}>Cosmetics</a>

                  </li>
                  <li >
                    <a href="" style={{ color: 'white', paddingLeft: '20px' }}>Appliances</a>

                  </li>
                  <li >
                    <a href="" style={{ color: 'white', paddingLeft: '20px' }}>medical</a>

                  </li>
                  <li >
                    <a href="" style={{ color: 'white', paddingLeft: '20px' }}>topoffers</a>

                  </li>
                  <li >
                    <a href="" style={{ color: 'white', paddingLeft: '20px' }}>baby</a>

                  </li>









                </ul>

              </div>

            </div>
          </div>
        </div>
      </nav>
      <header>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="page-header min-vh-75"
                style={{ backgroundImage: "url('https://demos.creative-tim.com/material-kit-pro/assets/img/bg10.jpg')" }}
                loading="lazy">
                <span class="mask bg-gradient-dark"></span>
                <div class="container">
                  <div class="row">
                    <div class="col-lg-6 my-auto">
                      <h4 class="text-white mb-0 fadeIn1 fadeInBottom">Discover Stories</h4>
                      <h1 class="text-white fadeIn2 fadeInBottom">A Place for Entrepreneurs to Share</h1>
                      <p class="lead text-white opacity-8 fadeIn3 fadeInBottom">Wealth creation is an
                        evolutionarily recent positive-sum game. Status is an old zero-sum game. Those
                        attacking wealth creation are often just seeking status.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="page-header min-vh-75" style={{ backgroundImage: "url('https://demos.creative-tim.com/material-kit-pro/assets/img/bg10.jpg')" }}
                loading="lazy">
                <span class="mask bg-gradient-dark"></span>
                <div class="container">
                  <div class="row">
                    <div class="col-lg-6 my-auto">
                      <h4 class="text-white mb-0 fadeIn1 fadeInBottom">Our Team</h4>
                      <h1 class="text-white fadeIn2 fadeInBottom">Work with the best</h1>
                      <p class="lead text-white opacity-8 fadeIn3 fadeInBottom">Free people make free
                        choices. Free choices mean you get unequal outcomes. You can have freedom, or
                        you can have equal outcomes. You can’t have both.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="page-header min-vh-75" style={{ backgroundImage: "url('https://demos.creative-tim.com/material-kit-pro/assets/img/bg10.jpg')" }}
                loading="lazy">
                <span class="mask bg-gradient-dark"></span>
                <div class="container">
                  <div class="row">
                    <div class="col-lg-6 my-auto">
                      <h4 class="text-white mb-0 fadeIn1 fadeInBottom">Office Places</h4>
                      <h1 class="text-white fadeIn2 fadeInBottom">Working on Wallstreet is Not So Easy
                      </h1>
                      <p class="lead text-white opacity-8 fadeIn3 fadeInBottom">You’re spending time to
                        save money when you should be spending money to save time.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="min-vh-75 position-absolute w-100 top-0">
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
              <span class="carousel-control-prev-icon position-absolute bottom-50" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
              <span class="carousel-control-next-icon position-absolute bottom-50" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </a>
          </div>
        </div>

      </header>


      <div className="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6 overflow-hidden">
        <div class="container-fulid">
          <div class="row border-radius-md pb-4 p-3 mx-sm-0 mx-1 position-relative">
            <Carousel arrows={false} removeArrowOnDeviceType={["tablet", "mobile"]} itemclassName="carousel-item-padding-40-px"

              infinite={true} draggable={true}
              showDots={false}
              autoPlay={true}
              autoPlaySpeed={2000}

              responsive={responsive}>

              {
                products.map((productItem) => (
                  <div className="card mb-1 col-md-9 col-sm-10 col-lg-9 col-xl-10 col-xxl-11 m-3 ">
                    <div className="card-header p-0 position-relative mt-n2 mx-0  z-index-1">
                      <a className="d-block blur-shadow-image ">
                        <img src={productItem.imageurl}
                          alt="img-blur-shadow" className="img-fluid border-radius-lg" loading="lazy" style={{ height: "130px", width: "220px" }} />
                      </a>
                      <div className="colored-shadow"
                        style={{ backgroundImage: "url(https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product1.jpg)" }}>
                      </div>
                    </div>
                    <div className="text-start p-2">

                      <h5 className="font-weight-bold mt-0  text-gradient text-primary" style={{ textAlign: "center" }}>
                        <a href="javascript:;">{productItem.title}</a>
                      </h5>

                    </div>



                  </div>
                ))}







            </Carousel>
          </div>
        </div>
      </div>




    </div>
  )
}

export default Home
