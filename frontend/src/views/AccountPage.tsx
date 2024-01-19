import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useAuth } from "../auth/useAuth";

export default function AccountPage() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

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

  if (!isLoggedIn) {
    return <div>Please login to see this page</div>;
  }

  return (
    <div className="my-5 flex flex-col items-center justify-center">
      <h2 className="my-4 text-center text-2xl">Account Page</h2>
      <Button onClick={handleLogout}>Log out</Button>
    </div>
  );
}
