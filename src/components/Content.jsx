import ProductItem from "./ProductItem";

export default function Content() {
  return (
    <main
      role="main"
      className="w-full h-full flex-grow p-3 overflow-auto dark:bg-gray-700 bg-gray-200 text-black dark:text-white"
    >
      BOZO
      <ProductItem />
      {/* TODO: Generate products in cycle from db */}
    </main>
  );
}
