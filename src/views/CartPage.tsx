import CartItem from "../components/CartItem";
import CartSummary from "../components/CartSummary";

export default function CartPage() {
  return (
    <div className="h-screen bg-gray-100 pt-20 text-gray-900 dark:bg-gray-700 dark:text-white">
      <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6">
        <CartItem />
        <CartSummary />
      </div>
    </div>
  );
}
