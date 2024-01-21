import { useEffect, useState } from "react";
import { useAuth } from "../auth/useAuth";
import { fetchAllUserOrders, fetchDetailsByOrderId } from "../api/orderService";

export default function OrderComponent() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [orderDetails, setOrderDetails] = useState<{ [key: number]: OrderDetails[] }>({});
  const { user } = useAuth();

  useEffect(() => {
    async function loadOrders() {
      const userOrders = await fetchAllUserOrders(user!.id!);
      setOrders(userOrders);
      const details = {};
      for (const order of userOrders) {
        details[order.id] = await fetchDetailsByOrderId(order.id);
      }
      setOrderDetails(details);
    }

    loadOrders();
  }, [user]);

  return (
    <div className="my-2 rounded-lg bg-white p-3.5 dark:bg-gray-700">
      {orders.map((order) => (
        <div key={order.id}>
          {/* Order Information */}
          <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400">
            <p>
              Ordered on{" "}
              <time dateTime={order.created_at}>
                {new Date(order.created_at).toLocaleDateString()}
              </time>
            </p>
          </footer>

          {/* Order Details */}
          {orderDetails[order.id] &&
            orderDetails[order.id].map((detail) => (
              <div key={detail.order_id}>
                {/* Display details here */}
                <p>Total: {detail.total}€</p>
                {/* Map through products and display them */}
                {detail.products.map((product) => (
                  <p key={product.id}>{product.title}</p>
                ))}
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}
