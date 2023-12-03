import { useEffect, useState } from "react";
import type { Product } from "../models/productModel";
import Rating from "../components/Rating";
import Review from "../components/ReviewItem";
import ReviewForm from "../components/ReviewForm";
import Button from "../components/Button";
import AddToFavoritesButton from "../components/AddToFavoritesButton";
import ReviewCard from "../components/ReviewCard";

export default function ProductPage() {
  const [product, setProduct] = useState<Product>();

  const fetchProduct = async () => {
    const response = await fetch("/api" + window.location.pathname);
    console.log("/api" + window.location.pathname);
    const product = await response.json();
    console.log(product[0]);
    return product[0];
  };

  useEffect(() => {
    fetchProduct().then(setProduct);
  }, []);

  return (
    <section className="py-20 dark:bg-gray-800">
      <div className="mx-auto max-w-6xl px-4">
        <div className="-mx-4 mb-24 flex flex-wrap">
          <div className="mb-8 w-full px-4 md:mb-0 md:w-1/2">
            <div className="sticky top-0 overflow-hidden ">
              <div className="relative mb-6 lg:mb-10 lg:h-96">
                <a className="translate-1/2 absolute left-0 top-1/2 transform lg:ml-2" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="h-5 w-5 text-blue-500 dark:text-blue-200"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                    />
                  </svg>
                </a>
                <img className="w-full object-contain lg:h-full" src={product?.image_url} alt="" />
                <a className="translate-1/2 absolute right-0 top-1/2 transform lg:mr-2" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="h-5 w-5 text-blue-500 dark:text-blue-200"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </a>
              </div>
              <div className="-mx-2 hidden flex-wrap md:flex">
                <div className="w-1/2 p-2 sm:w-1/4">
                  <a
                    className="block border border-gray-200 hover:border-blue-400 dark:border-gray-700 dark:hover:border-blue-300"
                    href="#"
                  >
                    <img
                      className="w-full object-contain lg:h-28"
                      src="https://i.postimg.cc/Z5KhRkD6/download-1-removebg-preview.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="w-1/2 p-2 sm:w-1/4">
                  <a
                    className="block border border-gray-200 hover:border-blue-400 dark:border-gray-700 dark:hover:border-blue-300"
                    href="#"
                  >
                    <img
                      className="w-full object-contain lg:h-28"
                      src="https://i.postimg.cc/8kJBrw03/download-removebg-preview.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="w-1/2 p-2 sm:w-1/4">
                  <a
                    className="block border border-gray-200 hover:border-blue-400 dark:border-gray-700 dark:hover:border-blue-300"
                    href="#"
                  >
                    <img
                      className="w-full object-contain lg:h-28"
                      src="https://i.postimg.cc/0jwyVgqz/Microprocessor1-removebg-preview.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="w-1/2 p-2 sm:w-1/4">
                  <a
                    className="block border border-gray-200 hover:border-blue-400 dark:border-gray-700 dark:hover:border-blue-300"
                    href="#"
                  >
                    <img
                      className="w-full object-contain lg:h-28"
                      src="https://i.postimg.cc/0N4Kk1PN/black-microprocessors-removebg-preview.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2">
            <div className="lg:pl-20">
              <div className="mb-6 ">
                <h2 className="mb-6 max-w-xl text-xl font-semibold leading-loose tracking-wide text-gray-700 dark:text-gray-300 md:text-2xl">
                  {product?.title}
                </h2>
                <div className="mb-6 flex flex-wrap items-center">
                  <ul className="mb-4 mr-2 flex lg:mb-0">
                    <Rating count={product?.rating ?? 0} />
                  </ul>
                  <a
                    className="mb-4 text-xs underline hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-600 lg:mb-0"
                    href="#reviews"
                  >
                    Reviews
                  </a>
                </div>
                <p className="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400 ">
                  {product?.price} €
                </p>
              </div>
              <div className="mb-6">
                <h2 className="mb-2 text-lg font-bold text-gray-700 dark:text-gray-400">
                  Description:
                </h2>
                <p className="text-gray-600 dark:text-gray-400">{product?.description}</p>
              </div>
              <div className="mb-6 border-b border-t border-gray-200 py-6 dark:border-gray-700">
                <p className="text-base text-green-300 dark:text-green-300">In Stock</p>
              </div>
              <div className="mb-6 flex gap-4">
                <AddToFavoritesButton />
                <Button
                  className="w-full items-center rounded-xl p-4"
                  text="Add to cart"
                  alt="Add to cart"
                  onClick={() => {
                    console.log("Clicked addToCart");
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-6xl">
        <p
          className="rounded-lg bg-blue-400 p-3 text-center text-xl text-white  dark:bg-gray-900"
          id="reviews"
        >
          Reviews
        </p>
        <ReviewCard />
        <ReviewForm />
        <Review />
        <Review />
      </div>
    </section>
  );
}
