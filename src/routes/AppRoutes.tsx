import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AdminDashboard from "../layout/AdminDashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<AdminDashboard />}>
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
