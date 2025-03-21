import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { tr } from "date-fns/locale";
import "react-datepicker/dist/react-datepicker.css";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [appointments, setAppointments] = useState(
    JSON.parse(localStorage.getItem("appointments")) || []
  );

  useEffect(() => {
    localStorage.setItem("appointments", JSON.stringify(appointments));
  }, [appointments]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedDate) {
      setAppointments([...appointments, selectedDate]);
      setSelectedDate(null);
    }
  };

  return (
    <div className="container">
      <div className="calendar-box">
        <h2>Randevu Tarihi Seç</h2>
        <form onSubmit={handleSubmit}>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={30}
            timeCaption="Saat"
            dateFormat="dd MMMM yyyy HH:mm"
            minDate={new Date()}
            locale={tr}
            placeholderText="Tarih ve saat seçin"
            minTime={new Date().setHours(8, 0, 0)}
            maxTime={new Date().setHours(18, 0, 0)}
            className="formInput"
          />
          <div>
            <button type="submit">Randevuyu Kaydet</button>
          </div>
        </form>
        <h3>Seçilen Randevular</h3>
        {appointments.length === 0 ? (
          <p>Henüz bir randevu seçilmedi.</p>
        ) : (
          <ul>
            {appointments.map((date, index) => (
              <li key={index}>
                {new Date(date).toLocaleString("tr-TR", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Calendar;
