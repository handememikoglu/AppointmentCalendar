import { createContext, useState, useContext } from "react";

const AdminContext = createContext();

export const useAdmin = () => useContext(AdminContext);

export const AdminProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([]);

  return (
    <AdminContext.Provider value={{ appointments, setAppointments }}>
      {children}
    </AdminContext.Provider>
  );
};
