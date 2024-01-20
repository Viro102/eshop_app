import { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import { fetchProducts } from "../api";

const Content = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts().then((products) => setProducts(products));
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
