import React, { useState, useEffect, useRef } from 'react';
import './Timeline.css';
import eventsData from './events.json';  // Import the JSON file

const Timeline = () => {
  const [events, setEvents] = useState([]);
  const timelineRef = useRef(null);

  useEffect(() => {
    setEvents(eventsData);  // Load the events from the JSON file into the state
  }, []);

  useEffect(() => {
    const timelineElement = timelineRef.current;

    const handleWheel = (event) => {
      event.preventDefault();
      timelineElement.scrollLeft += event.deltaY; // Convert vertical scroll to horizontal scroll
    };

    timelineElement.addEventListener('wheel', handleWheel);

    return () => {
      timelineElement.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className="timeline-container" ref={timelineRef}>
      <div className="timeline">
        {events.map((event, index) => (
          <div className="event" key={index}>
            <h3>{event.title}</h3>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Place:</strong> {event.place}</p>
            <p><strong>Details:</strong> {event.extraInfo}</p>
            <p><strong>Attendees:</strong> {event.attendees.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
