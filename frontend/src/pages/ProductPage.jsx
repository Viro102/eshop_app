import Rating from "../components/Rating";

export default function ProductPage() {
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
                  Intel® Core™ i5-12600HX Processor (18M Cache, up to 4.60 GHz)
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
                  <span>284.00$</span>
                  <span className="ml-3 text-base font-normal text-gray-500 line-through dark:text-gray-400">
                    300.00$
                  </span>
                </p>
              </div>
              <div className="mb-6">
                <h2 className="mb-2 text-lg font-bold text-gray-700 dark:text-gray-400">
                  System Specs :
                </h2>
                <div className="rounded-xl bg-gray-100 dark:bg-gray-700">
                  <div className="p-3 lg:p-5 ">
                    <div className="rounded-xl bg-gray-50 p-2 dark:bg-gray-800 lg:p-6">
                      <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
                        <div className="mb-4 w-full md:w-2/5">
                          <div className="flex ">
                            <span className="mr-3 text-gray-500 dark:text-gray-400">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="h-7 w-7"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 0 0 1 6 4.5v-1zM8.5 5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1zM0 11.5A1.5 1.5 0 0 1 1.5 10h1A1.5 1.5 0 0 1 4 11.5v1A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5A1.5 1.5 0 0 1 7.5 10h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"
                                />
                              </svg>
                            </span>
                            <div>
                              <p className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                No. of cores
                              </p>
                              <h2 className="text-base font-semibold text-gray-700 dark:text-gray-400">
                                12 Cores
                              </h2>
                            </div>
                          </div>
                        </div>
                        <div className="mb-4 w-full md:w-2/5">
                          <div className="flex ">
                            <span className="mr-3 text-gray-500 dark:text-gray-400">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="h-7 w-7"
                                viewBox="0 0 16 16"
                              >
                                <path d="M4 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm7.5-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" />
                                <path d="M0 1.5A.5.5 0 0 1 .5 1h1a.5.5 0 0 1 .5.5V4h13.5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H2v2.5a.5.5 0 0 1-1 0V2H.5a.5.5 0 0 1-.5-.5Zm5.5 4a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM9 8a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Z" />
                                <path d="M3 12.5h3.5v1a.5.5 0 0 1-.5.5H3.5a.5.5 0 0 1-.5-.5v-1Zm4 1v-1h4v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5Z" />
                              </svg>
                            </span>
                            <div>
                              <p className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                Graphic
                              </p>
                              <h2 className="text-base font-semibold text-gray-700 dark:text-gray-400">
                                Intel UHD
                              </h2>
                            </div>
                          </div>
                        </div>
                        <div className="mb-4 w-full md:w-2/5 lg:mb-0">
                          <div className="flex ">
                            <span className="mr-3 text-gray-500 dark:text-gray-400">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="h-7 w-7"
                                viewBox="0 0 16 16"
                              >
                                <path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0zm-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3h-7zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3zM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
                              </svg>
                            </span>
                            <div>
                              <p className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                Processor
                              </p>
                              <h2 className="text-base font-semibold text-gray-700 dark:text-gray-400">
                                INTEL 80486
                              </h2>
                            </div>
                          </div>
                        </div>
                        <div className="mb-4 w-full md:w-2/5 lg:mb-0">
                          <div className="flex ">
                            <span className="mr-3 text-gray-500 dark:text-gray-400">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="h-7 w-7"
                                viewBox="0 0 16 16"
                              >
                                <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z" />
                                <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z" />
                                <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" />
                              </svg>
                            </span>
                            <div>
                              <p className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                Frequency
                              </p>
                              <h2 className="text-base font-semibold text-gray-700 dark:text-gray-400">
                                3.5 GHz
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-6 border-b border-t border-gray-200 py-6 dark:border-gray-700">
                <p className="text-base text-green-300 dark:text-green-300">In Stock</p>
                <span className="text-gray-600 dark:text-gray-400">
                  Ships from china. Most customers receive within 3-31 days.
                </span>
              </div>
              <div className="mb-6 flex flex-wrap justify-around">
                <div className="mb-4 mr-4 lg:mb-0">
                  <div className="w-28">
                    <div className="relative flex h-10 w-full flex-row rounded-lg bg-transparent ">
                      <button className="h-full w-20 cursor-pointer bg-gray-100 text-gray-600 outline-none hover:bg-gray-300 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-700">
                        <span className="m-auto text-2xl font-thin">-</span>
                      </button>
                      <button className="roundedbg-gray-100 h-full w-20 cursor-pointer text-gray-600 outline-none hover:bg-gray-300 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-700">
                        <span className="m-auto text-2xl font-thin">+</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mb-4 lg:mb-0">
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
                </div>
                <a
                  href="#"
                  className="w-full rounded-xl border border-blue-600 bg-blue-100 px-4 py-3 text-center text-blue-600 hover:bg-blue-600 hover:text-gray-100 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-900 lg:w-1/2"
                >
                  Add to cart
                </a>
              </div>
              <div className="mb-6 flex gap-4">
                <a
                  href="#"
                  className="w-full rounded-xl border border-transparent bg-blue-600 px-4 py-3 text-center text-gray-100 hover:border-blue-500 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-900"
                >
                  Buy now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}