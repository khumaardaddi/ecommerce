import React from "react"
import "./style.css"

const CartList = ({ CartItem, addToCart, decreaseQty, deleteeQty}) => {

  const totalPrice = CartItem.reduce((price, item) => price + item.qty * item.price, 0)

  // prodcut qty total
  return (
    <>

      <section class="py-5">
        <div class="container d_flex">
          <h3 className="font-weight-bold mt-3 text-gradient text-primary">Shopping Cart</h3>

 

          <div className="row ">
          <div className="card col-xxl-7">
          {CartItem.length === 0 && <h1 className='no-items product'>No Items are add in Cart</h1>}


{CartItem.map((item) => {
  const productQty = item.price * item.qty

  return (
            <div class="row key={item.id}">
              <div class=" col-md-3 col-xxl-3 mb-5 ">
              <img src={item.image} alt='' width={160} height={150}/>
              </div>
              <div class=" col-md-3  mt-4">
              <h4>{item.title}</h4>
             
              <h3>₹{item.price}.00 *</h3>
             
              </div>
              <div class=" col-md-3 col-xxl-3 mb-5 mt-5">
              <button className='desCart' onClick={() => decreaseQty(item)} style={{ margin: "7px", width: "33px" }} >
                        -
                      </button>   
                      {item.qty } 
                      
                      <button className='incCart' onClick={() => addToCart(item)}  style={{ margin: "7px", width: "33px" }} >
                        +
                      </button>
              </div>
              <div class=" col-md-2 mb-5 mt-5 ">
              <h4>
                       
                      <span>₹{productQty}.00</span>
                    </h4>
              </div>
            
              
            </div>
            
            
            

)
})}

          </div>
          



          <div className="col-xxl-1">
            
          </div>
          <div className="card col-xxl-4  mt-3" style={{height:'200px'}} >
            <div class="row " >
            <h2 className="font-weight-bold mt-3 text-gradient text-primary">Cart Summary</h2>
            <hr />
              <div className="col-md-6">
              <h4>Total Price :  </h4>
              </div>
            
            <div className='col-md-6'>
              
              <h3>₹{totalPrice}.00</h3>
              
            </div>
          </div>
          </div>
        </div>
        </div>
      </section>



    </>
  )
}

export default CartList

