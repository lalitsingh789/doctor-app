import React, { createContext, useState, useContext } from 'react';
const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = async (item) => {
    const existing = cartItems.find(ci => ci._id === item._id);
    let updatedCart;

    if (existing) {
      updatedCart = cartItems.map(ci =>
        ci._id === item._id ? { ...ci, quantity: ci.quantity + item.quantity } : ci
      );
    } else {
      updatedCart = [...cartItems, item];
    }
    setCartItems(updatedCart);

    try {
      await fetch('http://192.168.46.183:5000/api/cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item),
      });
    } catch (error) {
      console.error('Error posting to cart:', error);
    }
  };

  const updateQuantity = (id, delta) => {
    setCartItems(prev =>
      prev.map(item =>
        item._id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item._id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;