import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './NavBar';

const BookNow = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [duration, setDuration] = useState('');
  const [mail, setMail] = useState('');
  const [driver, setDriver] = useState('any');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Make a POST request to the backend API endpoint
      const response = await axios.post('http://localhost:3002/booktrip', {
        fromaddress: from,
        toaddress: to,
        duration: duration,
        date: date,
        time: time,
        mail: mail 
      });
      
      // Handle the response
      console.log('Trip booked successfully:', response.data);
      window.location.href = `mailto:${mail}?subject=Trip%20Booked&body=Your%20trip%20has%20been%20successfully%20booked.`;
      alert("Trip Booking sent to driver")
      
    } catch (error) {
      // Handle errors
      console.error('Error booking trip:', error);
    }
  };

  return (
    <div>
      <Navbar/> 
      <div className="background-image">
      <div className="form-container">
        <h2>Book Your Trip</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="from">From</label>
            <input
              type="text"
              id="from"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="to">To</label>
            <input
              type="text"
              id="to"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="time">Time</label>
            <input
              type="Number"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              placeholder='Time in 24 hr format'
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="duration">Duration (in days)</label>
            <input
              type="number"
              id="duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              required
            />
            
          </div>
          <div className="form-group">
            <label htmlFor="mail">Mail</label>
            <input
              type="text"
              id="mail"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              required
            /></div>
          <div className="form-group">
            <label htmlFor="driver">Driver</label>
            <select
              id="driver"
              value={driver}
              onChange={(e) => setDriver(e.target.value)}
              required
            >
              <option value="any">Any</option>
              <option value="choose">Choose</option>
            </select>
          </div>
          <button type="submit">Submit Request</button>
        </form>
      </div>
      </div>
    </div>
  )
}

export default BookNow;
