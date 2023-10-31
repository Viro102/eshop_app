import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Rating from "./Rating.jsx";

export default function ProductItem({ src, alt, title, price, discount, productPage }) {
  return (
    <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-800">
      <Link
        className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
        to={productPage || "/testProduct"}
      >
        <img
          className="object-cover"
          src={src || "https://dummyimage.com/300x240"}
          alt={alt || "product image"}
        />
        <span className="absolute left-0 top-0 m-2 rounded-full bg-red-600 px-2 text-center text-sm font-medium text-white">
          {discount || "testDiscount"}
        </span>
      </Link>
      <div className="w-full px-5 py-5">
        <Link to={productPage || "/testProduct"}>
          <h5 className="text-xl tracking-tight text-slate-900 dark:text-white">
            {title || "testTitle"}
          </h5>
        </Link>
        <div className="mb-5 mt-2 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900 dark:text-white">
              {price || "0$"}
            </span>
            <span className="pl-2 text-sm text-slate-900 line-through dark:text-white">
              {price - price * discount || "100$"}
            </span>
          </p>
          <div className="flex items-center px-1">
            <Rating rating={5} />
            <span className="ml-3 mr-2 hidden rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold text-black sm:block">
              5.0
            </span>
          </div>
        </div>
        <Link
          to={productPage || "/testProduct"}
          className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          Add to cart
        </Link>
      </div>
    </div>
  );
}

ProductItem.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  discount: PropTypes.number,
  productPage: PropTypes.string,
};
