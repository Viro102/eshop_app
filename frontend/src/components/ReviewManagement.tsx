import { useState, useEffect } from "react";
import Button from "./Button";
import InputForm from "./InputForm";
import { deleteReview, fetchAllReviews, patchReview } from "../api/reviewService";
import ListEntity from "./ListEntity";

export default function ReviewManagement() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [review, setReview] = useState<Review>({
    user_id: 0,
    product_id: 0,
    rating: 0,
    comment: "",
  });

  useEffect(() => {
    fetchAllReviews().then(setReviews);
  }, []);

  const refreshForm = () => {
    setReview({
      user_id: 0,
      product_id: 0,
      rating: 0,
      comment: "",
    });
    fetchAllReviews().then(setReviews);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    setReview({ ...review, [event.target.name]: event.target.value });
  };

  const handleUpdateReview = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    try {
      await patchReview(review.id!, { comment: review.comment, rating: review.rating });
      refreshForm();
    } catch (error) {
      alert("Error: " + error);
    }
  };

  const handleDeleteReview = async (reviewId: number) => {
    try {
      await deleteReview(reviewId);
      refreshForm();
    } catch (error) {
      alert("Error: " + error);
    }
  };

  return (
    <div className="mx-auto my-5 flex w-4/5 flex-col items-center justify-center self-center">
      <ul>
        {reviews?.map((review) => (
          <ListEntity
            key={review.id}
            entity={review}
            getThumbnailUrl={() => "/default_thumbnail.webp"}
            getTitle={(review) => review.created_at!}
            onClick={() => setReview(review)}
            onDelete={() => handleDeleteReview(review.id!)}
            getSubtitle1={(review) => review.rating.toString()}
            getSubtitle2={(review) => review.comment}
          />
        ))}
      </ul>
      <form>
        <InputForm
          name="comment"
          label="Comment"
          htmlFor="comment"
          type="text"
          placeholder="Enter comment"
          onChange={handleInputChange}
          value={review.comment}
        />
        <InputForm
          name="rating"
          label="Rating"
          htmlFor="rating"
          type="number"
          placeholder="Enter rating"
          onChange={handleInputChange}
          value={review.rating.toString()}
        />
        <div className="my-3 flex justify-center gap-3">
          <Button onClick={handleUpdateReview}>Update review</Button>
        </div>
      </form>
    </div>
  );
}
