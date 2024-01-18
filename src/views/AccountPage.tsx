import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function AccountPage() {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      localStorage.removeItem("token");
      navigate("/");
      console.log("Logout successful");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <div className="my-5 flex flex-col items-center justify-center">
      <h2 className="my-4 text-center text-2xl">Account Page</h2>
      <Button onClick={handleLogout}>Log out</Button>
    </div>
  );
}
