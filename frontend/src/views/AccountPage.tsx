import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/useAuth";
import Button from "../components/Button";
import { useEffect } from "react";

export default function AccountPage() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  // Mock user data
  const user = {
    username: "JohnDoe",
    email: "johndoe@example.com",
    profilePicture: "/my-logo2.svg",
    orders: [{ id: 1, details: "Order 1 details..." }],
    reviews: [{ id: 1, content: "Review for product 1..." }],
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/users/logout", {
        method: "POST",
        credentials: "include",
      });
      if (response.ok) {
        setIsLoggedIn(false);
        navigate("/");
        alert("Logout successful");
      } else {
        throw new Error("Failed to log out");
      }
    } catch (error) {
      alert("Error during logout: " + error);
    }
  };

  const fetchUser = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/users", {
        method: "GET",
        credentials: "include",
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        throw new Error("Failed to fetch user data");
      }
    } catch (error) {
      alert("Error fetching user data: " + error);
    }
  };

  if (!isLoggedIn) {
    return <div>Please login to see this page</div>;
  }

  return (
    <div className="container mx-auto my-8 p-4">
      <div className="flex flex-col items-center">
        <img src={user.profilePicture} alt="Profile" className="mb-4 h-32 w-32 rounded-full" />
        <h2 className="mb-2 text-2xl font-semibold">{user.username}</h2>
        <p className="text-md mb-2">{user.email}</p>
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
          {user.orders.map((order) => (
            <li key={order.id}>{order.details}</li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <h3 className="mb-2 text-xl font-semibold">Reviews History</h3>
        <ul>
          {user.reviews.map((review) => (
            <li key={review.id}>{review.content}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
