import { useEffect, useState } from "react";

import ProductItem, { Product } from "./ProductItem";

const Content = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  });

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
