const BASE_URL = "http://localhost:3000/api";

async function fetchData(endpoint: string, options = {}): Promise<CustomResponse> {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, options);
    if (!response.ok) {
      console.error(`API call failed with status ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch data:", error);
    throw error;
  }
}

async function upload(data: FormData): Promise<void> {
  fetchData(`upload`, { method: "POST", body: data });
}

async function postReview(review: Review): Promise<void> {
  fetchData(`reviews`, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify(review),
  });
}

async function deleteProduct(productId: number): Promise<void> {
  fetchData(`products/${productId}`, { method: "DELETE" });
}

async function patchProduct(productId: number, product: Partial<Product>): Promise<void> {
  fetchData(`products/${productId}`, {
    method: "PATCH",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(product),
  });
}

async function postProduct(product: Product): Promise<void> {
  fetchData(`products`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(product),
  });
}

async function fetchProduct(productId: number, options = {}): Promise<Product> {
  const responseJson = await fetchData(`products/${productId}`, options);
  return responseJson.data as Product;
}

async function fetchProducts(options = {}): Promise<Product[]> {
  const responseJson = await fetchData(`products`, options);
  return responseJson.data as Product[];
}

async function fetchReviews(productId: number, options = {}): Promise<Review[]> {
  const responseJson = await fetchData(`reviews/${productId}`, options);
  return responseJson.data as Review[];
}

async function checkAuth(options = {}): Promise<CustomResponse> {
  return fetchData(`users/`, options);
}

async function fetchUserData(userId: number, options = {}): Promise<User> {
  const responseJson = await fetchData(`users/${userId}`, options);
  return responseJson.data as User;
}

async function loginUser(inputs: { email: string; password: string }): Promise<User> {
  const responseJson: CustomResponse = await fetchData(`users/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ ...inputs }),
  });
  return responseJson.data as User;
}

async function signUpUser(inputs: { email: string; password: string }): Promise<void> {
  fetchData(`users/sign-up`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...inputs }),
  });
}

export {
  deleteProduct,
  patchProduct,
  postProduct,
  fetchProduct,
  fetchProducts,
  fetchReviews,
  fetchUserData,
  loginUser,
  signUpUser,
  checkAuth,
  upload,
  postReview,
};
