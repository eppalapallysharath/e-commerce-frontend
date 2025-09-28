// App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import UserDashboardPage from "./Pages/UserDashboardPage";
import CartPage from "./Pages/CartPage";
import AdminDashboardPage from "./Pages/AdminDashboardPage";
import AddProduct from "./Pages/AddProduct";
import PageNotFound from "./Pages/PageNotFound";
import AdminProductsList from "./Pages/AdminProductsList";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import ProductsListPage from "./Pages/ProductsListPage";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

export const baseUrl = "https://ecommerce-server-api-jn8y.onrender.com";


// Protected route wrapper
const ProtectedRoute = ({ children, role }) => {
  const { jwtToken, user } = useSelector((state) => state.authReducer);

  if (!jwtToken) {
    // Not logged in
    return <Navigate to="/login" replace />;
  }

  if (role && user?.role !== role) {
    // Role not authorized
    return <Navigate to="/" replace />;
  }

  return children;
};

const App = () => {
  return (
    <>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* User routes */}
        <Route
          path="/user"
          element={
            <ProtectedRoute role="user">
              <UserDashboardPage />
            </ProtectedRoute>
          }
        >
          <Route path="products" element={<ProductsListPage />} />
          <Route path="cart" element={<CartPage />} />
        </Route>

        {/* Admin routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboardPage />
            </ProtectedRoute>
          }
        >
          <Route path="addProducts" element={<AddProduct />} />
          <Route path="products" element={<AdminProductsList />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Toaster position="top-right" />
    </>
  );
};

export default App;
