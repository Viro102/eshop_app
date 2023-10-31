import PropTypes from "prop-types";
import ProductItem from "./ProductItem";

function ProductList(pocet) {
  const productItems = [];

  for (let i = 0; i < pocet; i++) {
    productItems.push(<ProductItem key={i} />);
  }

  // console.log(productItems);

  return <div className="flex flex-wrap justify-center">{productItems}</div>;
}

export default function Content() {
  return (
    <main className="h-full w-full overflow-auto bg-gray-200 text-black dark:bg-gray-700 dark:text-white">
      {ProductList(30)}
      {/* TODO: Generate products from db */}
    </main>
  );
}

ProductList.propTypes = {
  pocet: PropTypes.number,
};
