import { useState, useEffect } from "react";
import { fetchProducts } from "../api/productService";
import ProductItem from "../components/ProductItem";

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);

  const productItems = products.map((product) => (
    <ProductItem key={product.id} product={product} />
  ));

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <main className="home-page h-full w-full overflow-auto bg-gray-200 text-black dark:bg-gray-700 dark:text-white">
      {productItems}
    </main>
  );
}
