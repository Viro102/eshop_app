import { useState } from "react";
import { useAuth } from "../auth/useAuth";
import ProductManagement from "../components/ProductManagement";
import UserManagement from "../components/UserManagement";
import ReviewManagement from "../components/ReviewManagement";
import Button from "../components/Button";

export default function AdminPage() {
  const { isLoggedIn, user } = useAuth();
  const [activeTab, setActiveTab] = useState<"products" | "orders" | "users" | "reviews">(
    "products",
  );

  if (!isLoggedIn && user?.role !== "admin") {
    return <div>Please login as admin to see this page</div>;
  }

  return (
    <section>
      <h1 className="my-4 text-center text-3xl font-bold text-black dark:text-white">Admin page</h1>
      <div className="flex justify-center gap-4 p-4">
        <Button
          onClick={() => setActiveTab("products")}
          className={activeTab === "products" ? "font-bold" : ""}
        >
          Products
        </Button>
        <Button
          onClick={() => setActiveTab("users")}
          className={activeTab === "users" ? "font-bold" : ""}
        >
          Users
        </Button>
        <Button
          onClick={() => setActiveTab("reviews")}
          className={activeTab === "reviews" ? "font-bold" : ""}
        >
          Reviews
        </Button>
      </div>
      <div className="mx-auto my-5 w-4/5 self-center">
        {activeTab === "products" && (
          <div>
            <ProductManagement />
          </div>
        )}

        {activeTab === "users" && (
          <div>
            <UserManagement />
          </div>
        )}

        {activeTab === "reviews" && (
          <div>
            <ReviewManagement />
          </div>
        )}
      </div>
    </section>
  );
}
