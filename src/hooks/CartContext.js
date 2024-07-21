import React, { createContext, useContext, useState } from 'react';
import data from '../components/Data';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(data);

  const updateItemQuantity = (itemId, newQuantity) => {
    setCart(prevCart => 
      prevCart.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, setCart, updateItemQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
