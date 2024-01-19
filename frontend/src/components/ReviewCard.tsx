import Rating from "./Rating";

export default function ReviewCard() {
  return (
    <>
      <p className="rounded-lg bg-blue-400 p-3 text-center text-xl text-white  dark:bg-gray-900">
        Reviews
      </p>
      <div className="my-2 flex items-center">
        <Rating count={4} />
        <p className="ms-1 text-sm font-medium text-gray-900 dark:text-white">4.95</p>
        <p className="ms-1 text-sm font-medium text-gray-900 dark:text-white">out of</p>
        <p className="ms-1 text-sm font-medium text-gray-900 dark:text-white">5</p>
      </div>
      <p className="text-sm font-medium text-gray-900 dark:text-white">1,745 global ratings</p>
      <div className="mt-4 flex items-center">
        <p className="text-sm font-medium text-gray-900 dark:text-white">5 star</p>
        <div className="mx-4 h-5 w-2/4 rounded bg-gray-400 dark:bg-gray-700">
          <div className="h-5 w-8/12 rounded bg-yellow-300" />
        </div>
        <span className="text-sm font-medium text-gray-900 dark:text-white">70%</span>
      </div>
      <div className="mt-4 flex items-center">
        <p className="text-sm font-medium text-gray-900 dark:text-white">4 star</p>
        <div className="mx-4 h-5 w-2/4 rounded bg-gray-400 dark:bg-gray-700">
          <div className="h-5 w-7/12 rounded bg-yellow-300" />
        </div>
        <span className="text-sm font-medium text-gray-900 dark:text-white">17%</span>
      </div>
      <div className="mt-4 flex items-center">
        <p className="text-sm font-medium text-gray-900 dark:text-white">3 star</p>
        <div className="mx-4 h-5 w-2/4 rounded bg-gray-400 dark:bg-gray-700">
          <div className="h-5 w-6/12 rounded bg-yellow-300" />
        </div>
        <span className="text-sm font-medium text-gray-900 dark:text-white">8%</span>
      </div>
      <div className="mt-4 flex items-center">
        <p className="text-sm font-medium text-gray-900 dark:text-white">2 star</p>
        <div className="mx-4 h-5 w-2/4 rounded bg-gray-400 dark:bg-gray-700">
          <div className="h-5 w-5/12 rounded bg-yellow-300" />
        </div>
        <span className="text-sm font-medium text-gray-900 dark:text-white">4%</span>
      </div>
      <div className="mt-4 flex items-center">
        <p className="text-sm font-medium text-gray-900 dark:text-white">1 star</p>
        <div className="mx-4 h-5 w-2/4 rounded bg-gray-400 dark:bg-gray-700">
          <div className="h-5 w-4/12 rounded  bg-yellow-300" />
        </div>
        <span className="text-sm font-medium text-gray-900 dark:text-white">1%</span>
      </div>
    </>
  );
}
