import { fetchData } from "./util";

async function postReview(review: Review): Promise<void> {
  await fetchData(`reviews`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(review),
  });
}

async function fetchReviewsProductId(productId: number, options = {}): Promise<Review[]> {
  const responseJson = await fetchData(`reviews/product/${productId}`, options);
  return responseJson.data as Review[];
}

async function fetchReviewsUserId(userId: number, options = {}): Promise<Review[]> {
  const responseJson = await fetchData(`reviews/user/${userId}`, options);
  return responseJson.data as Review[];
}

async function fetchAllReviews(): Promise<Review[]> {
  const responseJson = await fetchData(`reviews`);
  return responseJson.data as Review[];
}

async function patchReview(reviewId: number, review: Partial<Review>): Promise<void> {
  await fetchData(`reviews/${reviewId}`, {
    method: "PATCH",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(review),
  });
}

async function deleteReview(reviewId: number): Promise<void> {
  await fetchData(`reviews/${reviewId}`, { method: "DELETE" });
}

export {
  postReview,
  fetchReviewsProductId,
  fetchReviewsUserId,
  fetchAllReviews,
  patchReview,
  deleteReview,
};
