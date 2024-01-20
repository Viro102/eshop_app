const BASE_URL = "http://localhost:3000/api";

async function fetchData(endpoint: string, options = {}): Promise<CustomResponse> {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, options);
    if (!response.ok) {
      console.error(`API call failed with status ${response.status}`);
      return { message: "API call failed " + response.statusText };
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch data:", error);
    throw error;
  }
}

async function upload(data: FormData): Promise<void> {
  await fetchData(`upload`, { method: "POST", body: data });
}

async function postReview(review: Review): Promise<void> {
  await fetchData(`reviews`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(review),
  });
}

async function deleteReview(reviewId: number): Promise<void> {
  await fetchData(`reviews/${reviewId}`, { method: "DELETE" });
}

async function deleteProduct(productId: number): Promise<void> {
  await fetchData(`products/${productId}`, { method: "DELETE" });
}

async function patchProduct(productId: number, product: Partial<Product>): Promise<void> {
  await fetchData(`products/${productId}`, {
    method: "PATCH",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(product),
  });
}

async function postProduct(product: Product): Promise<void> {
  await fetchData(`products`, {
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

async function fetchReviewsProductId(productId: number, options = {}): Promise<Review[]> {
  const responseJson = await fetchData(`reviews/product/${productId}`, options);
  return responseJson.data as Review[];
}

async function fetchReviewsUserId(userId: number, options = {}): Promise<Review[]> {
  const responseJson = await fetchData(`reviews/user/${userId}`, options);
  return responseJson.data as Review[];
}

async function checkAuth(options = {}): Promise<CustomResponse> {
  return fetchData(`users/auth`, options);
}

async function fetchUserDataId(userId: number, options = {}): Promise<User> {
  const responseJson = await fetchData(`users/${userId}`, options);
  return responseJson.data as User;
}

async function fetchAllUsersData(options = {}): Promise<User[]> {
  const responseJson = await fetchData(`users`, options);
  return responseJson.data as User[];
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
  await fetchData(`users/sign-up`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...inputs }),
  });
}

async function patchUser(userId: number, user: User): Promise<void> {
  await fetchData(`users/${userId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
}
async function deleteUser(userId: number): Promise<void> {
  await fetchData(`users/${userId}`, { method: "DELETE" });
}

export {
  deleteProduct,
  patchProduct,
  postProduct,
  fetchProduct,
  fetchProducts,
  deleteReview,
  postReview,
  fetchReviewsProductId,
  fetchReviewsUserId,
  fetchUserDataId,
  fetchAllUsersData,
  patchUser,
  deleteUser,
  loginUser,
  signUpUser,
  checkAuth,
  upload,
};
