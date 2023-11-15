import { useEffect, useState } from "react";
import type { Product } from "../models/productModel";
import Rating from "../components/Rating";

export default function ProductPage() {
  const [product, setProduct] = useState<Product>();

  const fetchProduct = async () => {
    const response = await fetch(window.location.href);
    console.log(window.location.href);
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
                    ></path>
                  </svg>
                </a>
                <img
                  className="w-full object-contain lg:h-full"
                  src="https://i.postimg.cc/0jwyVgqz/Microprocessor1-removebg-preview.png"
                  alt=""
                />
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
                    ></path>
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
                <span className="rounded-xl bg-blue-100 px-2.5 py-0.5 text-xs text-blue-600 dark:bg-gray-700 dark:text-gray-200">
                  New Arrival
                </span>
                <h2 className="mb-6 mt-6 max-w-xl text-xl font-semibold leading-loose tracking-wide text-gray-700 dark:text-gray-300 md:text-2xl">
                  {product?.title}
                </h2>
                <div className="mb-6 flex flex-wrap items-center">
                  <ul className="mb-4 mr-2 flex lg:mb-0">
                    <Rating count={2} />
                  </ul>
                  <a
                    className="mb-4 text-xs underline hover:text-blue-600 dark:text-gray-400 dark:hover:text-gray-300 lg:mb-0"
                    href="#"
                  >
                    Reviews
                  </a>
                </div>
                <p className="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400 ">
                  {product?.price}€
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
                <span className="text-gray-600 dark:text-gray-400">
                  Ships from china. Most customers receive within 3-31 days.
                </span>
              </div>
              <div className="mb-6 flex gap-4">
                <button className="mr-4 flex h-10 w-full items-center justify-center border border-gray-300 p-2 text-gray-700 hover:border-blue-600 hover:bg-blue-600 hover:text-gray-50 dark:border-blue-600 dark:bg-blue-600 dark:text-gray-200 dark:hover:border-blue-500 dark:hover:bg-blue-500 dark:hover:text-gray-100 lg:w-11">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                  </svg>
                </button>
                <a
                  href="#"
                  className="w-full rounded-xl border border-transparent bg-blue-600 px-4 py-3 text-center text-gray-100 hover:border-blue-500 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-900"
                >
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
