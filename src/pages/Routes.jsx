import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import AdminDashboard from "./AdminDashboard";
import Appointments from "./Appointments";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/appointments"
        element={
          <ProtectedRoute>
            <Appointments />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRouter;
