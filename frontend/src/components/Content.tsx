import { useState, useEffect } from "react";
import type { Product } from "../types";
import ProductItem from "./ProductItem";

const Content = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    const response = await fetch("http://localhost:3000/api/products");
    const products: Product[] = await response.json();
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
    <ProductItem
      key={product.id}
      id={product.id}
      title={product.title}
      rating={product.rating}
      price={product.price}
      image_url={product.image_url}
      category=""
      description=""
    />
  ));

  return <div className="flex flex-wrap justify-center">{productItems}</div>;
}

export default Content;
