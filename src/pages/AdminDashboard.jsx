import React from "react";
import { Link, useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/login");
  };
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-4 mb-6 flex justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Admin Paneli</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Çıkış Yap
        </button>
      </div>
      <div className="bg-white shadow-md rounded-lg p-4 mb-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Admin Paneli
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-700">Randevular</h2>
          <p className="text-gray-600">Toplam 20 randevu</p>
          <Link
            to="/admin/appointments"
            className="mt-4 inline-block text-blue-500 hover:underline"
          >
            Yönet
          </Link>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-700">
            Kullanıcı Yönetimi
          </h2>
          <p className="text-gray-600">Toplam 100 kullanıcı</p>
          <Link
            to="/admin/users"
            className="mt-4 inline-block text-blue-500 hover:underline"
          >
            Yönet
          </Link>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-700">
            E-posta Bildirimleri
          </h2>
          <p className="text-gray-600">3 yeni e-posta bildirimi</p>
          <Link
            to="/admin/emails"
            className="mt-4 inline-block text-blue-500 hover:underline"
          >
            Yönet
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
