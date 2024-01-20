import { useCallback, useEffect, useState } from "react";
import { fetchProduct, fetchReviewsProductId } from "../api";
import Rating from "../components/Rating";
import Review from "../components/Review";
import ReviewForm from "../components/ReviewForm";
import Button from "../components/Button";
import ReviewCard from "../components/ReviewCard";
import Carousel from "../components/Carousel";

export default function ProductPage() {
  const [product, setProduct] = useState<Product>();
  const [reviews, setReviews] = useState<Review[]>([]);
  const productId = parseInt(window.location.pathname.split("/")[2]);

  const updateReviews = useCallback(async () => {
    fetchReviewsProductId(productId).then(setReviews);
  }, [productId]);

  const getProduct = useCallback(async () => {
    fetchProduct(productId).then(setProduct);
  }, [productId]);

  useEffect(() => {
    window.scrollTo(0, 0); // scroll to top on page load
    getProduct();
    updateReviews();
  }, [getProduct, updateReviews]);

  return (
    <section className="py-20 dark:bg-gray-800">
      <div className="mx-auto max-w-6xl px-4">
        <div className="-mx-4 mb-24 flex flex-wrap">
          <div className="mb-8 w-full px-4 md:mb-0 md:w-1/2">
            <div className="sticky top-0 overflow-hidden ">
              <Carousel images={JSON.parse(product ? product.image_urls : "[]")} />
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2">
            <div className="lg:pl-20">
              <div className="mb-6 ">
                <h2 className="mb-6 max-w-xl text-xl font-semibold leading-loose tracking-wide text-gray-700 dark:text-gray-300 md:text-2xl">
                  {product?.title}
                </h2>
                <div className="mb-6 flex flex-wrap items-center">
                  <ul className="mb-4 mr-2 flex lg:mb-0">
                    <Rating count={product?.rating ?? 0} />
                  </ul>
                  <a
                    className="mb-4 text-xs underline hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-600 lg:mb-0"
                    href="#reviews"
                  >
                    Reviews
                  </a>
                </div>
                <p className="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400 ">
                  {product?.price} €
                </p>
              </div>
              <div className="mb-6">
                <h2 className="mb-2 text-lg font-bold text-gray-700 dark:text-gray-400">
                  Description:
                </h2>
                <p className="text-gray-600 dark:text-gray-400">{product?.description}</p>
              </div>
              <div className="mb-6 border-b border-t border-gray-200 py-6 dark:border-gray-700">
                <p className="text-base text-green-300 dark:text-green-300">In Stock</p>
              </div>
              <div className="mb-6 flex gap-4">
                <Button
                  onClick={() => {
                    console.log("Clicked addToFavorites");
                  }}
                >
                  <i className="fa-solid fa-heart fa-xl"></i>
                </Button>
                <Button
                  className="w-full items-center p-4"
                  onClick={() => {
                    console.log("Clicked addToCart");
                  }}
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-6xl" id="reviews">
        <ReviewCard />
        <ReviewForm productId={productId} onReviewSubmit={updateReviews} />

        {reviews.map((review) => (
          <Review key={review.id} {...review} />
        ))}
      </div>
    </section>
  );
}
