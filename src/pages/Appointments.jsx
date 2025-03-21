import { useState, useEffect } from "react";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const savedAppointments =
      JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(savedAppointments);
  }, []);

  const deleteAppointment = (index) => {
    const updatedAppointments = appointments.filter((_, i) => i !== index);
    setAppointments(updatedAppointments);
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
  };

  return (
    <div>
      <h2>Randevu Yönetimi</h2>
      {appointments.length === 0 ? (
        <p>Henüz randevu bulunmuyor.</p>
      ) : (
        <ul>
          {appointments.map((date, index) => (
            <li key={index}>
              {new Date(date).toLocaleString("tr-TR")}
              <button onClick={() => deleteAppointment(index)}>Sil</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Appointments;
