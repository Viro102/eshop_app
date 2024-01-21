import { useContext } from "react";
import CartContext from "../context/CartContext";

export default function CartItem() {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  return (
    <div className="rounded-lg md:w-2/3">
      {cart.map((item) => (
        <div
          key={item.id}
          className="mb-6 justify-between rounded-lg bg-gray-100 p-6 shadow-md dark:bg-gray-800 sm:flex sm:justify-start"
        >
          <img
            src={JSON.parse(item.image_urls)[0] || "/default_thumbnail.webp"}
            alt={item.title}
            className="w-full rounded-lg sm:w-40"
          />
          <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div className="mt-5 sm:mt-0">
              <h2 className="text-lg font-bold">{item.title}</h2>
            </div>
            <div className="mt-4 flex justify-between sm:mt-0 sm:block sm:space-x-6 sm:space-y-6">
              <div className="flex items-center">
                <span
                  className="h-8 cursor-pointer rounded-l bg-gray-100 px-3.5 py-1 duration-100 hover:bg-blue-500 hover:text-blue-50 dark:bg-gray-700"
                  onClick={() => removeFromCart(item.id)}
                >
                  -
                </span>
                <input
                  className="h-8 w-7 bg-white text-center text-xs outline-none dark:bg-gray-700"
                  type="number"
                  min="1"
                  readOnly
                />
                <span
                  className="h-8 cursor-pointer rounded-r bg-gray-100 px-3 py-1 duration-100 hover:bg-blue-500 hover:text-blue-50 dark:bg-gray-700"
                  onClick={() => addToCart(item)}
                >
                  +
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <p className="text-sm">{item.price}€</p>
                <i
                  className="fa-solid fa-trash cursor-pointer text-white hover:text-red-500"
                  onClick={() => removeFromCart(item.id)}
                ></i>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
