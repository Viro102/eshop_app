import { fetchData } from "./util";

async function postProduct(product: Product): Promise<void> {
  await fetchData(`products`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(product),
  });
}

async function fetchProducts(options = {}): Promise<Product[]> {
  const responseJson = await fetchData(`products`, options);
  return responseJson.data as Product[];
}

async function fetchProduct(productId: number, options = {}): Promise<Product> {
  const responseJson = await fetchData(`products/${productId}`, options);
  return responseJson.data as Product;
}

async function patchProduct(productId: number, product: Partial<Product>): Promise<void> {
  await fetchData(`products/${productId}`, {
    method: "PATCH",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(product),
  });
}

async function deleteProduct(productId: number): Promise<void> {
  await fetchData(`products/${productId}`, { method: "DELETE" });
}

export { postProduct, fetchProducts, fetchProduct, patchProduct, deleteProduct };
