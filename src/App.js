import React, { useState } from 'react';

import { CartProvider } from './hooks/CartContext'
import Cart from "./components/Cart";
import Catalog from "./components/Catalog";


function App() {

  return (
    <CartProvider>
      <div className="md:flex gap-1 p-4 max-w-5xl mx-auto">
        <Catalog />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;
