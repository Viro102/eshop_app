import { Link } from "react-router-dom";

import Rating from "./Rating";
import Button from "./Button";

const ProductItem = ({ ...props }: Product) => {
  return (
    <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-800">
      <Link
        className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
        to={"/products/" + props.id}
      >
        <img className="object-cover" src={props.image_url} alt="" />
      </Link>
      <div className="w-full px-5 py-5">
        <Link to={"/products/" + props.id}>
          <h5 className="text-xl tracking-tight text-slate-900 dark:text-white">{props.title}</h5>
        </Link>
        <div className="mb-5 mt-2 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900 dark:text-white">
              {props.price}€
            </span>
          </p>
          <div className="flex items-center px-1">
            <Rating count={props.rating ?? 0} />
            <span className="ml-3 mr-2 hidden rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold text-black sm:block">
              {props.rating}
            </span>
          </div>
        </div>
        <Link to={"/products/" + props.id}>
          <Button
            onClick={() => {}}
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
