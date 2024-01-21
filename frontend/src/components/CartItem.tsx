// TODO! Implement CartItem component
export default function CartItem() {
  return (
    <div className="rounded-lg md:w-2/3">
      <div className="mb-6 justify-between rounded-lg bg-gray-100 p-6 shadow-md dark:bg-gray-800 sm:flex sm:justify-start">
        <img
          src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="product"
          className="w-full rounded-lg sm:w-40"
        />
        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
          <div className="mt-5 sm:mt-0">
            <h2 className="text-lg font-bold ">Nike Air Max 2019</h2>
            <p className="mt-1 text-xs">36EU - 4US</p>
          </div>
          <div className="mt-4 flex justify-between sm:mt-0 sm:block sm:space-x-6 sm:space-y-6">
            <div className="flex items-center">
              <span className="h-8 cursor-pointer rounded-l bg-gray-100 px-3.5 py-1 duration-100 hover:bg-blue-500 hover:text-blue-50 dark:bg-gray-700">
                -
              </span>
              <input
                className="h-8 w-7 bg-white text-center text-xs outline-none dark:bg-gray-700"
                type="number"
                defaultValue="1"
                min="1"
              />
              <span className="h-8 cursor-pointer rounded-r bg-gray-100 px-3 py-1 duration-100 hover:bg-blue-500 hover:text-blue-50 dark:bg-gray-700">
                +
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <p className="text-sm">$259.00</p>
              <i className="fa-solid fa-trash cursor-pointer text-white hover:text-red-500"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
