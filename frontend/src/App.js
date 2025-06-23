import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./AuthContext";
import Dashboard from "./Dashboard";
import Contacts from "./pages/Contacts";
import Items from "./pages/Items";
import SalesOrders from "./pages/SalesOrders";
import Package from "./pages/Package";
import Invoices from "./pages/Invoices";
import PurchaseOrders from "./pages/PurchaseOrders";
import Bills from "./pages/Bills";
import Integrations from "./pages/Integrations";
import Reports from "./pages/Reports";
import Login from "./pages/Login";
import Register from "./pages/Register";

// Auth wrapper for protected pages
function RequireAuth({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* All protected routes below */}
          <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />
          <Route path="/contacts" element={<RequireAuth><Contacts /></RequireAuth>} />
          <Route path="/items" element={<RequireAuth><Items /></RequireAuth>} />
          <Route path="/sales-orders" element={<RequireAuth><SalesOrders /></RequireAuth>} />
          <Route path="/package" element={<RequireAuth><Package /></RequireAuth>} />
          <Route path="/invoices" element={<RequireAuth><Invoices /></RequireAuth>} />
          <Route path="/purchase-orders" element={<RequireAuth><PurchaseOrders /></RequireAuth>} />
          <Route path="/bills" element={<RequireAuth><Bills /></RequireAuth>} />
          <Route path="/integrations" element={<RequireAuth><Integrations /></RequireAuth>} />
          <Route path="/reports" element={<RequireAuth><Reports /></RequireAuth>} />
          {/* Optional: Redirect root to /dashboard if logged in */}
          <Route path="/" element={<Navigate to="/dashboard" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}