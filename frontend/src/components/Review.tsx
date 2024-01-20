import { useEffect, useState } from "react";
import { fetchUserData } from "../api";
import Rating from "./Rating";

export default function Review(review: Readonly<Review>) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetchUserData(review.user_id).then(setUser);
  }, [review]);

  const reviewDate = review.created_at
    ? new Date(review.created_at).toLocaleDateString("default", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";
  const userJoinedDate = user
    ? new Date(user.created_at).toLocaleDateString("default", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <div className="mx-auto my-6 max-w-6xl rounded-lg px-4 py-4 dark:bg-gray-700">
      <div className="mb-4 flex items-center">
        {/* Here, you'd also display the user's profile picture if available */}
        <img className="me-4 h-10 w-10 rounded-full" src={"/my-logo2.svg"} alt="profile" />
        <div className="font-medium dark:text-white">
          <p>
            {user?.username}
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
        {/* You can add dynamic review title here if available */}
        <h3 className="ms-2 text-sm font-semibold text-gray-900 dark:text-white">
          Thinking to buy another one!
        </h3>
      </div>
      <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400">
        <p>
          Reviewed on <time dateTime={reviewDate}>{reviewDate}</time>
        </p>
      </footer>
      <p className="mb-2 text-gray-500 dark:text-gray-400">{review.comment}</p>
    </div>
  );
}
