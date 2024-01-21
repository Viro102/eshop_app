import { useState } from "react";
import { useAuth } from "../auth/useAuth";
import ProductManagement from "../components/ProductManagement";
import UserManagement from "../components/UserManagement";

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
      <h1 className="my-4 text-center text-3xl font-bold">Admin page</h1>
      <div className="flex justify-center gap-4 p-4">
        <button
          onClick={() => setActiveTab("products")}
          className={activeTab === "products" ? "font-bold" : ""}
        >
          Products
        </button>
        <button
          onClick={() => setActiveTab("users")}
          className={activeTab === "users" ? "font-bold" : ""}
        >
          Users
        </button>
        <button
          onClick={() => setActiveTab("reviews")}
          className={activeTab === "reviews" ? "font-bold" : ""}
        >
          Reviews
        </button>
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

        {activeTab === "reviews" && <div>{/* TODO: reviews management */}</div>}
      </div>
    </section>
  );
}
