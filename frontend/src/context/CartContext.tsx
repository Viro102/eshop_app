import { createContext, useState, useMemo, useCallback } from "react";

const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = useCallback(
    (product: Product) => {
      setCart([...cart, product]);
    },
    [cart],
  );

  const removeFromCart = useCallback(
    (id: number) => {
      setCart(cart.filter((product) => product.id !== id));
    },
    [cart],
  );

  const value = useMemo(() => {
    return { cart, setCart, addToCart, removeFromCart };
  }, [cart, setCart, addToCart, removeFromCart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContext;
