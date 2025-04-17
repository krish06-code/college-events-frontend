import React, { useState } from 'react';
import { addEvent } from '../api';
import { useNavigate } from 'react-router-dom';

export default function AddEvent() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    date: '',
    time: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addEvent(formData);
      alert("Event added successfully!");
      navigate('/events');
    } catch (err) {
      console.error(err);
      alert("Error adding event.");
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add New Event</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          type="text" 
          name="title" 
          placeholder="Event Title" 
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <textarea 
          name="description" 
          placeholder="Event Description" 
          value={formData.description}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <input 
          type="text" 
          name="location" 
          placeholder="Event Location" 
          value={formData.location}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <input 
          type="date" 
          name="date" 
          value={formData.date}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <input 
          type="time" 
          name="time" 
          value={formData.time}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <button 
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Event
        </button>
      </form>
    </div>
  );
}
