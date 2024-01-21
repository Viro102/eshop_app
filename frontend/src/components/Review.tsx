import { useEffect, useState } from "react";
import { useAuth } from "../auth/useAuth";
import { deleteReview } from "../api/reviewService";
import { fetchUserDataId } from "../api/userService";
import Rating from "./Rating";

export default function Review(review: Readonly<Review>) {
  const [userLocal, setUserLocal] = useState<User>();
  const { user } = useAuth();

  useEffect(() => {
    fetchUserDataId(review.user_id).then(setUserLocal);
  }, [review]);

  const reviewDate = review.created_at
    ? new Date(review.created_at).toLocaleDateString("default", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";
  const userJoinedDate = userLocal
    ? new Date(userLocal.created_at!).toLocaleDateString("default", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <div className="my-2 rounded-lg bg-white p-3.5 dark:bg-gray-700">
      <div className="mb-4 flex items-center">
        {/* TODO: custom profile pictures */}
        <img className="me-4 h-10 w-10 rounded-full" src={"/my-logo2.svg"} alt="profile" />
        <div className="font-medium text-black dark:text-white">
          <p>
            {userLocal?.username}
            <time
              dateTime={userJoinedDate}
              className="block text-sm text-gray-500 dark:text-gray-400"
            >
              Joined on {userJoinedDate}
            </time>
          </p>
        </div>
      </div>
      <div className="mb-1 flex items-center space-x-1 rtl:space-x-reverse">
        <Rating count={review.rating} />
      </div>
      <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400">
        <p>
          Reviewed on <time dateTime={reviewDate}>{reviewDate}</time>
        </p>
      </footer>
      <p className="mb-2 text-gray-500 dark:text-gray-400">{review.comment}</p>
      {user?.id === review.user_id && (
        <div className="flex space-x-2">
          <button
            onClick={() => {
              // TODO: edit review
            }}
          >
            <i className="fa-solid fa-gear"></i>
          </button>
          <button
            onClick={() => {
              deleteReview(review.id!);
            }}
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      )}
    </div>
  );
}
