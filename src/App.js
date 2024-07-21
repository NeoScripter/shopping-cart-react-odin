import React, { useState } from 'react';

import { CartProvider } from './hooks/CartContext'
import Cart from "./components/Cart";
import Catalog from "./components/Catalog";


function App() {

  return (
    <CartProvider>
      <div className="md:flex gap-4 p-4 max-w-7xl mx-auto items-start">
        <Catalog />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;
