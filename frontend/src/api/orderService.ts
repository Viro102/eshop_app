import { fetchData } from "./util";

async function createOrder(userId: number, total: number): Promise<number> {
  const response = await fetchData(`orders/user/${userId}`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ total }),
  });
  return response.data as number;
}

async function addOrderItem(orderId: number, cartItem: CartItem) {
  const productData = {
    id: cartItem.product.id,
    quantity: cartItem.quantity,
    price: cartItem.product.price,
  };

  await fetchData(`orders/order/${orderId}`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(productData),
  });
}

async function fetchAllUserOrders(userId: number): Promise<Order[]> {
  const response = await fetchData(`orders/user/${userId}`);
  return response.data as Order[];
}

export { createOrder, addOrderItem, fetchAllUserOrders };
