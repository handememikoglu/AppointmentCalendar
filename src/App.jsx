import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Calendar from "./components/Calendar";
import { AdminProvider } from "./pages/AdminContext";
import AppRouter from "./pages/Routes";
import { Link } from "react-router-dom";

function App() {
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  return (
    <Router>
      <AdminProvider>
        <div>
          <h1>Randevu Sistemi</h1>
          <div>
            <Link to="/admin">
              <button>Admin Paneline Git</button>
            </Link>
          </div>

          <AppRouter />
          <Calendar />
        </div>
      </AdminProvider>
    </Router>
  );
}

export default App;
