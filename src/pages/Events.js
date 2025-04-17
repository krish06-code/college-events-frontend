import React, { useEffect, useState } from 'react';
import { fetchEvents } from '../api';

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents()
      .then(res => setEvents(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Events</h2>
      {events.map(event => (
        <div key={event._id} className="bg-white p-4 rounded shadow mb-4">
          <h3 className="text-xl font-semibold">{event.title}</h3>
          <p>{event.description}</p>
          <p><strong>📍 {event.location}</strong></p>
          <p><strong>🗓️ {event.date} at {event.time}</strong></p>
        </div>
      ))}
    </div>
  );
}
