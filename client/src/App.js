import React from "react";
import Header from "./components/Layout/Header"
import Meals from "./components/Meals/Meal"
import Cart from "./components/Cart/Cart"
import CartProvider from "./store/CartProvider"

function App() {
  
  const [isCartShown, setIsCartShown] = React.useState(false)

  function showCartHandler()
  {
    setIsCartShown(true)
  }
  function hideCartHandler()
  {
    setIsCartShown(false)
  }
  
  return (
    <CartProvider>

      {isCartShown && < Cart onclick={hideCartHandler}/>}
      < Header onclick={showCartHandler} />
      <main>
        < Meals />
      </main>
    </CartProvider>
  );
}

export default App;
