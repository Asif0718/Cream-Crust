import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // ✅ Add to cart
  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.name === item.name);
      if (existing) {
        // If item already in cart, increase quantity
        return prev.map((p) =>
          p.name === item.name ? { ...p, qty: p.qty + 1 } : p
        );
      }
      // New item → add with qty = 1
      return [...prev, { ...item, qty: 1 }];
    });
  };

  // ✅ Increase quantity only
  const increaseQty = (name) => {
    setCart((prev) =>
      prev.map((item) =>
        item.name === name ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  // ✅ Decrease quantity OR remove if qty = 1
  const decreaseQty = (name) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.name === name ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0) // remove if qty becomes 0
    );
  };

  // ✅ Update quantity directly (force set)
  const updateQty = (name, qty) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.name === name ? { ...item, qty: Math.max(qty, 0) } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  // ✅ Remove item completely
  const removeFromCart = (name) => {
    setCart((prev) => prev.filter((item) => item.name !== name));
  };

  // ✅ Clear whole cart
  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQty,   // ✅ Added here
        decreaseQty,
        updateQty,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// ✅ Custom hook
export const useCart = () => useContext(CartContext);
