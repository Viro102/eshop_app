import { useContext } from "react";
import CartContext from "../context/CartContext";
import Button from "./Button";
import { addOrderItem, createOrder } from "../api/orderService";
import { useAuth } from "../auth/useAuth";

export default function CartSummary() {
  const { cart, clearCart } = useContext(CartContext);
  const { user } = useAuth();

  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const shipping = 4.99;
  const total = parseFloat((subtotal + shipping).toFixed(2));

  const handleCheckout = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      if (!user) {
        alert("You need to be logged in to checkout");
        return;
      }

      const orderId = await createOrder(user.id, total);
      await Promise.all(cart.map((item) => addOrderItem(orderId, item)));

      clearCart();
    } catch (error) {
      console.error("Error during checkout: ", error);
    }
  };

  return (
    <div className="mt-6 h-full rounded-lg bg-gray-100 p-6 text-gray-900 shadow-md dark:bg-gray-800 dark:text-white md:mt-0 md:w-1/3">
      <div className="mb-2 flex justify-between">
        <p>Subtotal</p>
        <p>{subtotal.toFixed(2)}€</p>
      </div>
      <div className="flex justify-between">
        <p>Shipping</p>
        <p>{shipping.toFixed(2)}€</p>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between">
        <p className="text-lg font-bold">Total</p>
        <div className="">
          <p className="mb-1 text-lg font-bold">{total.toFixed(2)}€</p>
        </div>
      </div>
      <Button onClick={handleCheckout} className="mt-2 w-full justify-center">
        Checkout
      </Button>
    </div>
  );
}
