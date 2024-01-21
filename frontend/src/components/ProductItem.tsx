import { Link } from "react-router-dom";

import Rating from "./Rating";
import Button from "./Button";

type ProductItemProps = {
  onAddToCart: (product: Product) => void;
  product: Product;
};

const ProductItem = ({ onAddToCart, product }: ProductItemProps) => {
  return (
    <div className="product-card shadow-md dark:bg-gray-800">
      <Link className="m-3 flex h-60 flex-grow rounded-xl" to={"/products/" + product.id}>
        <img className="object-cover" src={JSON.parse(product.image_urls)[0]} alt="" />
      </Link>
      <div className="bottom-0 w-full p-4">
        <Link to={"/products/" + product.id}>
          <h5 className="text-xl tracking-tight text-slate-900 dark:text-white">{product.title}</h5>
        </Link>
        <div className="flex justify-between pb-5 pt-2">
          <p>
            <span className="text-3xl font-bold text-slate-900 dark:text-white">
              {product.price}€
            </span>
          </p>
          <div className="flex items-center">
            <Rating count={product.rating ?? 0} />
            <span className="ml-3 mr-2 hidden rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold text-black sm:block">
              {product.rating}
            </span>
          </div>
        </div>
        <Link to={"/products/" + product.id}>
          <Button
            onClick={() => onAddToCart(product)}
            className="flex h-12 w-full items-center justify-center text-center"
          >
            <i className="fa-solid fa-cart-shopping px-2"></i>
            <p>Add to cart</p>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
