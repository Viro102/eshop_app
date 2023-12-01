import { useState, useEffect } from "react";

import type { Product } from "../models/productModel";
import ProductItem from "./ProductItem";

const Content = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    const response = await fetch("/api/products");
    const products: Product[] = await response.json();
    console.log(products);
    return products;
  };

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <main className="h-full w-full overflow-auto bg-gray-200 text-black dark:bg-gray-700 dark:text-white">
      <ProductList products={products} />
    </main>
  );
};

function ProductList({ products }: Readonly<{ products: Product[] }>) {
  const productItems = products.map((product) => (
    <ProductItem key={product.id} product={product} />
  ));

  return <div className="flex flex-wrap justify-center">{productItems}</div>;
}

export default Content;
