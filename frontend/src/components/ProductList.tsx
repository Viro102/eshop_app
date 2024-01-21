import ProductItem from "./ProductItem";

type ProductListProps = {
  onAddToCart: (product: Product) => void;
  products: Product[];
};

export default function ProductList({ onAddToCart, products }: Readonly<ProductListProps>) {
  const productItems = products.map((product) => (
    <ProductItem key={product.id} product={product} onAddToCart={onAddToCart} />
  ));

  return <div className="home-page">{productItems}</div>;
}
