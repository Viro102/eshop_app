import Rating from "./Rating";

export default function ReviewCard() {
  return (
    <>
      <div className="my-2 flex items-center">
        <Rating count={4} />
        <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">4.95</p>
        <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">out of</p>
        <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">5</p>
      </div>
      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">1,745 global ratings</p>
      <div className="mt-4 flex items-center">
        <a
          href="#"
          className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          5 star
        </a>
        <div className="mx-4 h-5 w-2/4 rounded bg-gray-200 dark:bg-gray-700">
          <div className="h-5 w-8/12 rounded bg-yellow-300" />
        </div>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">70%</span>
      </div>
      <div className="mt-4 flex items-center">
        <a
          href="#"
          className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          4 star
        </a>
        <div className="mx-4 h-5 w-2/4 rounded bg-gray-200 dark:bg-gray-700">
          <div className="h-5 w-7/12 rounded bg-yellow-300" />
        </div>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">17%</span>
      </div>
      <div className="mt-4 flex items-center">
        <a
          href="#"
          className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          3 star
        </a>
        <div className="mx-4 h-5 w-2/4 rounded bg-gray-200 dark:bg-gray-700">
          <div className="h-5 w-6/12 rounded bg-yellow-300" />
        </div>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">8%</span>
      </div>
      <div className="mt-4 flex items-center">
        <a
          href="#"
          className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          2 star
        </a>
        <div className="mx-4 h-5 w-2/4 rounded bg-gray-200 dark:bg-gray-700">
          <div className="h-5 w-5/12 rounded bg-yellow-300" />
        </div>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">4%</span>
      </div>
      <div className="mt-4 flex items-center">
        <a
          href="#"
          className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          1 star
        </a>
        <div className="mx-4 h-5 w-2/4 rounded bg-gray-200 dark:bg-gray-700">
          <div className="h-5 w-4/12 rounded  bg-yellow-300" />
        </div>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">1%</span>
      </div>
    </>
  );
}
