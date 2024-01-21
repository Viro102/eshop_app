import Button from "./Button";

// TODO! Implement this component
export default function CartSummary() {
  return (
    <div className="mt-6 h-full rounded-lg bg-gray-100 p-6  text-gray-900 shadow-md dark:bg-gray-800 dark:text-white md:mt-0 md:w-1/3">
      <div className="mb-2 flex justify-between">
        <p>Subtotal</p>
        <p>$129.99</p>
      </div>
      <div className="flex justify-between">
        <p>Shipping</p>
        <p>$4.99</p>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between">
        <p className="text-lg font-bold">Total</p>
        <div className="">
          <p className="mb-1 text-lg font-bold">$134.98 USD</p>
        </div>
      </div>
      <Button
        onClick={() => console.log("clicked checkout")}
        className="mt-2 w-full justify-center"
      >
        Checkout
      </Button>
    </div>
  );
}
