import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/useAuth";
import { fetchReviewsUserId } from "../api/reviewService";
import { fetchAllUserOrders } from "../api/orderService";
import Review from "../components/Review";
import Button from "../components/Button";
import Order from "../components/Order";

export default function AccountPage() {
  const { isLoggedIn, setIsLoggedIn, user, setUser } = useAuth();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      fetchAllUserOrders(user!.id!).then(setOrders);
    };
    const fetchReviews = async () => {
      fetchReviewsUserId(user!.id!).then(setReviews);
    };
    fetchOrders();
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
        <img
          src={user?.profile_picture_url ?? "/default_thumbnail.webp"}
          alt="profile"
          className="mb-4 h-32 w-32 rounded-full object-cover"
        />
        <h2 className="mb-2 text-2xl font-semibold">{user?.username}</h2>
        <p className="text-md mb-2">{user?.email}</p>
        <p className="text-md mb-2">{user?.role}</p>
        {user?.role === "admin" && (
          <Button
            onClick={() => navigate("/admin")}
            className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            Admin page
          </Button>
        )}
        <Button
          onClick={handleLogout}
          className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Log out
        </Button>
      </div>

      <div className="mt-8">
        <h3 className="mb-2 text-xl font-semibold">Orders History</h3>
        {/* TODO! order details */}
        {orders?.map((order) => <Order key={order.id} {...order} />)}
      </div>

      <div className="mt-8">
        <h3 className="mb-2 text-xl font-semibold">Reviews History</h3>
        {reviews?.map((review) => <Review key={review.id} {...review} />)}
      </div>
    </div>
  );
}
