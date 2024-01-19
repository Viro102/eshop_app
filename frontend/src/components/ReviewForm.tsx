import { useState } from "react";
import Button from "./Button";
import FileUpload from "./FileUpload";

export default function ReviewForm() {
  const [reviewText, setReviewText] = useState("");

  const handleTextChange = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLTextAreaElement;
    setReviewText(target.value);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log("Review Text:", reviewText);
  };

  return (
    <form className="mx-auto mt-8 max-w-6xl">
      <div className="mb-4">
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
        <Button onClick={handleSubmit} className="p-4">
          Submit Review
        </Button>
      </div>
    </form>
  );
}
