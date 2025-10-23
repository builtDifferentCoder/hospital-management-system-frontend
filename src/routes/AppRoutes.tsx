import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AdminDashboard from "../layout/AdminDashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PublicRoutes from "./PublicRoutes";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoutes>
              <Login />
            </PublicRoutes>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoutes>
              <Register />
            </PublicRoutes>
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        >
          {/* <Route path="/dashboard" element={} />
          <Route path="/doctors" element={} />
          <Route path="/patients" element={} />
          <Route path="/appointments" element={} /> */}
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
