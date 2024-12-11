import React, { useState } from 'react';

function EventList({ events, deleteEvent }) {
    const [filter, setFilter] = useState('');

    // Filter events based on the search query
    const filteredEvents = events.filter((event) =>
        event.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div className="event-list">
            <h3>Events</h3>

            {/* Search Input */}
            <input
                type="text"
                placeholder="Search events..."
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="styled-input"
            />

            {/* Render Filtered Events */}
            {filteredEvents.length > 0 ? (
                filteredEvents.map((event, index) => (
                    <div key={index} className="event">
                        <h4>{event.name}</h4>
                        <p>
                            {event.startTime} - {event.endTime}
                        </p>
                        <p>{event.description}</p>
                        <button onClick={() => deleteEvent(index)}>Delete</button>
                    </div>
                ))
            ) : (
                <p>No events found.</p>
            )}
        </div>
    );
}

export default EventList;
