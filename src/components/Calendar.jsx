import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { tr } from "date-fns/locale"; 
import "react-datepicker/dist/react-datepicker.css";
// import "./Calendar.css"; 

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

  const generateGoogleCalendarURL = (date) => {
    const startDate = new Date(date).toISOString().replace(/-|:|\.\d+/g, "");
    const endDate = new Date(new Date(date).getTime() + 60 * 60 * 1000)
      .toISOString()
      .replace(/-|:|\.\d+/g, ""); 
    const eventTitle = encodeURIComponent("Randevu");
    const eventDetails = encodeURIComponent("Seçtiğiniz randevu saati.");
    const location = encodeURIComponent("Online");
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${eventTitle}&details=${eventDetails}&location=${location}&dates=${startDate}/${endDate}`;
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
            timeIntervals={15}
            timeCaption="Saat"
            dateFormat="dd MMMM yyyy HH:mm"
            minDate={new Date()}
            locale={tr}
            placeholderText="Tarih ve saat seçin"
            minTime={new Date().setHours(8, 0, 0)}
            maxTime={new Date().setHours(18, 0, 0)}
          />
          <button type="submit">Randevuyu Kaydet</button>
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
                  hour12: false,
                })}


                <a
                  href={generateGoogleCalendarURL(date)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    marginLeft: "10px",
                    color: "white",
                    backgroundColor: "#4285F4",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    textDecoration: "none",
                    fontSize: "14px",
                  }}
                >
                  Google Takvime Ekle
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Calendar;
