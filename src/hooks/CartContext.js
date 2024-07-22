import React, { createContext, useContext, useState, useCallback } from 'react';
import data from '../components/Data';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(data);

  const updateItemQuantity = (itemId, newQuantity) => {
    setCart(prevCart => 
      prevCart.map(item =>
        item.id === itemId ? { ...item, quantity: Math.max(0, item.quantity + newQuantity) } : item
      )
    );
  };

  const removeItemFromCart = (itemId) => {
    setCart(prevCart => 
      prevCart.map(item =>
        item.id === itemId ? { ...item, quantity: 0 } : item
      )
    );
  };

  const emptyCart = () => {
    setCart(prevCart => 
      prevCart.map(item =>
      ({ ...item, quantity: 0 })
      )
    );
  };

  const extractAddedItems = useCallback(() => {
    let totalItems = 0;
    const addedItems = [];
    for (let item of cart) {
      if (item.quantity > 0) {
        totalItems += item.quantity;
        addedItems.push(item);
      }
    }
    return [totalItems, addedItems];
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart, updateItemQuantity, extractAddedItems, removeItemFromCart, emptyCart }}>
      {children}
    </CartContext.Provider>
  );
};
