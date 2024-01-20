import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/useAuth";
import Button from "../components/Button";

export default function AccountPage() {
  const { isLoggedIn, setIsLoggedIn, user, setUser } = useAuth();
  const navigate = useNavigate();

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
    <div className="container mx-auto my-8 p-4">
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
        <ul>
          {/* {user?.reviews.map((review) => (
            <li key={review.id}>{review.content}</li>
          ))} */}
        </ul>
      </div>
    </div>
  );
}
