import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/useAuth";
import { fetchReviewsUserId } from "../api";
import Review from "../components/Review";
import Button from "../components/Button";

export default function AccountPage() {
  const { isLoggedIn, setIsLoggedIn, user, setUser } = useAuth();
  const [reviews, setReviews] = useState<Review[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchReviews = async () => {
      fetchReviewsUserId(user!.id).then(setReviews);
    };

    fetchReviews();
  }, [user]);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    navigate("/");
    alert("Logout successful");
  };

  if (!isLoggedIn) {
    return <div>Please login to see this page</div>;
  }

  return (
    <div className="container mx-auto my-8 p-4 text-black dark:text-white">
      <div className="flex flex-col items-center">
        <img src={"/my-logo2.svg"} alt="Profile" className="mb-4 h-32 w-32 rounded-full" />
        <h2 className="mb-2 text-2xl font-semibold">{user?.username}</h2>
        <p className="text-md mb-2">{user?.email}</p>
        <Button
          onClick={handleLogout}
          className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Log out
        </Button>
      </div>

      <div className="mt-8">
        <h3 className="mb-2 text-xl font-semibold">Orders History</h3>
        <ul>
          {/* {user?.orders.map((order) => (
            <li key={order.id}>{order.details}</li>
          ))} */}
        </ul>
      </div>

      <div className="mt-8">
        <h3 className="mb-2 text-xl font-semibold">Reviews History</h3>
        {reviews.map((review) => (
          <Review key={review.id} {...review} />
        ))}
      </div>
    </div>
  );
}
