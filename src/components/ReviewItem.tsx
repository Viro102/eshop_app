import Rating from "./Rating";

export default function Review() {
  return (
    <div className="mx-auto my-6 max-w-6xl rounded-lg px-4 py-4 dark:bg-gray-700">
      <div className="mb-4 flex items-center">
        <img className="me-4 h-10 w-10 rounded-full" src="" />
        <div className="font-medium dark:text-white">
          <p>
            Jese Leos
            <time
              dateTime="2014-08-16 19:00"
              className="block text-sm text-gray-500 dark:text-gray-400"
            >
              Joined on August 2014
            </time>
          </p>
        </div>
      </div>
      <div className="mb-1 flex items-center space-x-1 rtl:space-x-reverse">
        <Rating count={5} />
        <h3 className="ms-2 text-sm font-semibold text-gray-900 dark:text-white">
          Thinking to buy another one!
        </h3>
      </div>
      <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400">
        <p>
          Reviewed in the United Kingdom on <time dateTime="2017-03-03 19:00">March 3, 2017</time>
        </p>
      </footer>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        This is my third Invicta Pro Diver. They are just fantastic value for money. This one
        arrived yesterday and the first thing I did was set the time, popped on an identical strap
        from another Invicta and went in the shower with it to test the waterproofing.... No
        problems.
      </p>
      <p className="mb-3 text-gray-500 dark:text-gray-400">
        It is obviously not the same build quality as those very expensive watches. But that is like
        comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.
      </p>
      <a
        href="#"
        className="mb-5 block text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
      >
        Read more
      </a>
    </div>
  );
}
