import { useState, useEffect, useContext } from "react";
import { fetchProducts } from "../api/productService";
import CartContext from "../context/CartContext";
import ProductList from "../components/ProductList";

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const cartContext = useContext(CartContext);

  console.log(cartContext);

  useEffect(() => {
    fetchProducts().then((products) => setProducts(products));
  }, []);

  return (
    <main className="h-full w-full overflow-auto bg-gray-200 text-black dark:bg-gray-700 dark:text-white">
      <ProductList products={products} onAddToCart={cartContext.addToCart} />
    </main>
  );
}
