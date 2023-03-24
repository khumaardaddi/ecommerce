import React from 'react';
import Home from '../Home/Home';
import Electronics from '../pagescomponent/products/Electronics/Electronics';
import TodayDeals from '../pagescomponent/products/todaydeals/TodayDeals';
import Games from '../pagescomponent/products/games/Games';
import Clothes from '../pagescomponent/products/clothes/Clothes';
import Grocery from '../pagescomponent/products/grocery/Grocery';


const LandingPage = ({ productItems, addToCart, todayproduct, clothesproduct, gamesproduct, groceryproduct }) => {
  return (
    <>
      <Home />

      <TodayDeals todayproduct={todayproduct} addToCart={addToCart} />
      <Electronics productItems={productItems} addToCart={addToCart} />
      <Clothes clothesproduct={clothesproduct} addToCart={addToCart} />
      <Games gamesproduct={gamesproduct} addToCart={addToCart} />
      <Grocery groceryproduct={groceryproduct} addToCart={addToCart} />
    </>
  )
}

export default LandingPage
