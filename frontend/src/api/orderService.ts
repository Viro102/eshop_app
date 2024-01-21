import { fetchData } from "./util";

async function createOrder(userId: number): Promise<void> {
  await fetchData(`orders/user/${userId}`, { method: "POST" });
}

async function fetchAllUserOrders(userId: number): Promise<Order[]> {
  const response = await fetchData(`orders/${userId}`);
  return response.data as Order[];
}

async function fetchDetailsByOrderId(orderId: number): Promise<Order[]> {
  const response = await fetchData(`orders/${orderId}`);
  return response.data as Order[];
}

export { createOrder, fetchAllUserOrders, fetchDetailsByOrderId };
