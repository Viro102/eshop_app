import React, { useState } from "react";
import { useAuth } from "../auth/useAuth";
import { postReview } from "../api/reviewService";
import Button from "./Button";
import FileUpload from "./FileUpload";
import Rating from "./Rating";

type ReviewFormProps = {
  productId: number;
  onReviewSubmit: () => void;
};

export default function ReviewForm({ productId, onReviewSubmit }: Readonly<ReviewFormProps>) {
  const [reviewText, setReviewText] = useState<string>("");
  const [rating, setRating] = useState<number>(-1);
  const { isLoggedIn, user } = useAuth();

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReviewText(e.target.value);
  };

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  const clearForm = () => {
    setReviewText("");
    setRating(-1);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!isLoggedIn || !user) {
        clearForm();
        alert("You must be logged in to post a review");
        return;
      }
      const review: Review = {
        user_id: user.id!,
        comment: reviewText,
        product_id: productId,
        rating,
      };
      console.log(review);
      await postReview(review);
      clearForm();
      alert("Review posted!");
      onReviewSubmit();
    } catch (error) {
      alert("Error uploading review: " + error);
    }
  };

  return (
    <form className="mx-auto mt-8 max-w-6xl" onSubmit={handleSubmit}>
      <div className="mb-4">
        <div>
          <label className="mb-1 block text-sm font-bold text-gray-700 dark:text-white">
            Your Rating:
          </label>
          {[0, 1, 2, 3, 4, 5].map((star) => (
            <Button
              key={star}
              onClick={() => handleRatingChange(star)}
              className={`my-3 mr-1.5 ${rating === star ? "bg-green-500 dark:bg-blue-700" : ""}`}
            >
              <Rating count={star} />
            </Button>
          ))}
        </div>
        <label
          htmlFor="reviewText"
          className="mb-2 block text-sm font-bold text-gray-700 dark:text-white"
        >
          Your Review:
        </label>
        <textarea
          id="reviewText"
          name="reviewText"
          value={reviewText}
          onChange={handleTextChange}
          rows={9}
          placeholder="Write your review here..."
          className="w-full resize-none rounded-lg bg-white p-2 dark:bg-gray-600"
          required
        />
        <FileUpload />
      </div>
      <div className="flex justify-end">
        <Button type="submit" className="p-4">
          Submit Review
        </Button>
      </div>
    </form>
  );
}
