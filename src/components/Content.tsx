import { useState, useEffect } from "react";

import ProductItem, { Product } from "./ProductItem";

const Content = () => {
  const [products, setProducts] = useState([]); // Initialize state for products

  useEffect(() => {
    // Fetch products when the component mounts
    const fetchProducts = async () => {
      const response = await fetch("/api/products");
      if (response.ok) {
        const contentType = response.headers.get("content-type");
        if (contentType?.includes("application/json")) {
          const data = await response.json();
          setProducts(data);
        } else {
          console.error("Response is not in JSON format");
        }
      } else {
        console.error("Failed to fetch products. Status code: " + response.status);
      }
    };

    fetchProducts(); // Call the fetchProducts function
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
