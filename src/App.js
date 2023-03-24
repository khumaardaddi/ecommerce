import React, {useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Footer from './component/headercomponent/footer/Footer'
import Navbar from './component/headercomponent/navbar/Navbar'

import CartList from './component/headercomponent/cart/CartList'
          

//  data  routes
import electronicdata from './component/pagescomponent/products/data/electronicdata'
import todaydata from './component/pagescomponent/products/data/todaydata';
import clothesdata from './component/pagescomponent/products/data/clothesdata'
import gamesdata from './component/pagescomponent/products/data/gamesdata'
import grocerydata from './component/pagescomponent/products/data/grocerydata'

import Signin from './component/pagescomponent/sign/Signin'
import Signup from './component/pagescomponent/sign/Signup'
import Electronics from './component/pagescomponent/products/Electronics/Electronics'
import LandingPage from './component/landingpage/LandingPage';





const App = () => {
  const { productItems } = electronicdata
  const { todayproduct } = todaydata
  const { clothesproduct } = clothesdata
  const { gamesproduct } = gamesdata
  const { groceryproduct } = grocerydata


  //Step 2 :
  const [CartItem, setCartItem] = useState([])

  //Step 4 :
  const addToCart = (product) => {
    // if hamro product alredy cart xa bhane  find garna help garxa
    const productExit = CartItem.find((item) => item.id === product.id)
    // if productExit chai alredy exit in cart then will run fun() => setCartItem
    // ani inside => setCartItem will run => map() ani yo map() chai each cart ma
    // gayara check garxa if item.id ra product.id chai match bhayo bhane
    // productExit product chai display garxa
    // ani increase  exits product QTY by 1
    // if item and product doesnt match then will add new items
    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      // but if the product doesnt exit in the cart that mean if card is empty
      // then new product is added in cart  and its qty is initalize to 1
      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }

  // Stpe: 6
  const decreaseQty = (product) => {
    // if hamro product alredy cart xa bhane  find garna help garxa
    const productExit = CartItem.find((item) => item.id === product.id)

    // if product is exit and its qty is 1 then we will run a fun  setCartItem
    // inside  setCartItem we will run filter to check if item.id is match to product.id
    // if the item.id is doesnt match to product.id then that items are display in cart
    // else
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    } else {
      // if product is exit and qty  of that produt is not equal to 1
      // then will run function call setCartItem
      // inside setCartItem we will run map method
      // this map() will check if item.id match to produt.id  then we have to desc the qty of product by 1
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }
  const deleteQty = (product) => {
    // if hamro product alredy cart xa bhane  find garna help garxa
    const productExit = CartItem.find((item) => item.id === product.id)

    // if product is exit and its qty is 1 then we will run a fun  setCartItem
    // inside  setCartItem we will run filter to check if item.id is match to product.id
    // if the item.id is doesnt match to product.id then that items are display in cart
    // else
    if (productExit.qty === 0) {
      setCartItem(CartItem.filter((item) => item.id === product.id))
    } else {
      // if product is exit and qty  of that produt is not equal to 1
      // then will run function call setCartItem
      // inside setCartItem we will run map method
      // this map() will check if item.id match to produt.id  then we have to desc the qty of product by 1
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty -1 } : item)))
    }
  }
 
  return (
  
    <BrowserRouter>
      <Navbar CartItem={CartItem}/>
      <Routes  >
      <Route path='/' element={<LandingPage productItems={productItems} todayproduct={todayproduct} clothesproduct={clothesproduct} gamesproduct={gamesproduct} groceryproduct={groceryproduct} addToCart={addToCart}/>} />
      
        <Route path='/signin' element={<Signin/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/cartlist' element={<CartList 
               CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} deleteQty={deleteQty} />}  />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
