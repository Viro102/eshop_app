import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ProductItem from "./ProductItem";

function Content() {
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
}

function ProductList({ products }) {
  const productItems = products.map((product, index) => (
    <ProductItem key={index} product={product} />
  ));

  return <div className="flex flex-wrap justify-center">{productItems}</div>;
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};

Content.propTypes = {
  pocet: PropTypes.number,
};

export default Content;
