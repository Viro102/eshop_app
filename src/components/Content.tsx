import { useEffect, useState } from "react";

import type { Product } from "../models/productModel";
import ProductItem from "./ProductItem";

const Content = () => {
  const fetchProducts = async (): Promise<Product[]> => {
    const response = await fetch("https://fakestoreapi.com/products");
    const products: Product[] = await response.json();
    return products;
  };

  const [products, setProducts] = useState<Product[]>([]);

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
  const productItems = products.map((product, index: number) => (
    <ProductItem key={index} product={product} />
  ));

  return <div className="flex flex-wrap justify-center">{productItems}</div>;
}

export default Content;
