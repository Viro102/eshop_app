import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./index.css";
import { AuthProvider } from "./auth/AuthContext";
import { CartProvider } from "./context/CartContext";
import Layout from "./components/Layout";
import HomePage from "./views/HomePage";
import ErrorPage from "./views/ErrorPage";
import LoginPage from "./views/LoginPage";
import ContactPage from "./views/ContactPage";
import ProductPage from "./views/ProductPage";
import SignUpPage from "./views/SignUpPage";
import CartPage from "./views/CartPage";
import AdminPage from "./views/AdminPage";
import AboutPage from "./views/AboutPage";
import AccountPage from "./views/AccountPage";
import JobsPage from "./views/JobsPage";
import PrivacyPolicyPage from "./views/PrivacyPolicyPage";
import TermsPage from "./views/TermsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "sign-up",
        element: <SignUpPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "products/:id",
        element: <ProductPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "admin",
        element: <AdminPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "jobs",
        element: <JobsPage />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicyPage />,
      },
      {
        path: "terms-conditions",
        element: <TermsPage />,
      },
      {
        path: "account",
        element: <AccountPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>,
);
