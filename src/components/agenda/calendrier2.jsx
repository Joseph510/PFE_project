import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import "./calendar.scss";
import axios from "axios";
import Swal from "sweetalert2";

function Calendar() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/calendrier/read")
      .then((response) => setEvents(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleEventClick = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You want to delete event "${id.event.title}"?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const calendarApi = id.view.calendar;
        calendarApi.unselect(); // clear date selection
        id.event.remove(); // remove event from calendar
        const eventId = id.event.extendedProps.idcalendier; // get the ID of the event

        axios
          .delete(`http://localhost:4000/calendrier/delete/${eventId}`) // make delete request to server
          .then((response) => console.log(response))
          .catch((error) => console.log(error));
        Swal.fire(
          "Deleted!",
          `Your event "${id.event.title}" has been deleted.`,
          "success"
        );
      }
    });
  };

  const handleDateSelect = (selectInfo) => {
    const title = prompt("Enter a title for the event:");
    if (title) {
      const calendarApi = selectInfo.view.calendar;
      calendarApi.unselect(); // clear date selection
      calendarApi.addEvent({
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
      });
      const eventData = {
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
      };
      axios
        .post("http://localhost:4000/calendrier/create", eventData)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="calendar-container">
      <FullCalendar
        headerToolbar={{
          start: "today prev next",
          center: "title",
          end: "dayGridMonth dayGridWeek dayGridDay",
        }}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
        initialView="dayGridMonth"
        events={events}
        eventClick={handleEventClick}
        selectable={true}
        select={handleDateSelect}
        slotLabelFormat={[
          { day: "numeric", month: "short" },
          { weekday: "short" },
        ]}
      />
    </div>
  );
}

export default Calendar;
