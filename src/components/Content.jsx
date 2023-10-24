import PropTypes from "prop-types";
import ProductItem from "./ProductItem";

function ProductList(pocet) {
  const productItems = [];

  for (let i = 0; i < pocet; i++) {
    productItems.push(<ProductItem key={i} />);
  }

  console.log(productItems);

  return <div className="product-list">{productItems}</div>;
}

export default function Content() {
  return (
    <main className="w-full h-full p-3 overflow-auto dark:bg-gray-700 bg-gray-200 text-black dark:text-white">
      {ProductList(10)}
      {/* TODO: Generate products from db */}
    </main>
  );
}

ProductList.propTypes = {
  pocet: PropTypes.number,
};
