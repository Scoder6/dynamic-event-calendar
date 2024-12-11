import React, { useState, useEffect } from 'react';
import CalendarGrid from '../components/CalendarGrid';
import EventModal from '../components/EventModal';
import EventList from '../components/EventList';
import { getDaysInMonth } from '../utils/calendarHelpers';

function Home() {
    const [currentDay, setCurrentDay] = useState(new Date().getDate());
    const [selectedDay, setSelectedDay] = useState(null);
    const [events, setEvents] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false);

    // Load events from localStorage when the component mounts
    useEffect(() => {
        const savedEvents = JSON.parse(localStorage.getItem('events')) || [];
        setEvents(savedEvents);
    }, []);

    // Save events to localStorage whenever the `events` state changes
    useEffect(() => {
        localStorage.setItem('events', JSON.stringify(events));
    }, [events]);

    const days = getDaysInMonth(11); // December is the 11th index (0-based)

    const handleDayClick = (day) => {
        setSelectedDay(day);
        setModalOpen(true);
    };

    const addEvent = (event) => {
        setEvents([...events, event]);
    };

    const deleteEvent = (index) => {
        setEvents(events.filter((_, i) => i !== index));
    };

    return (
        <div>
            <CalendarGrid
                days={days}
                onDayClick={handleDayClick}
                currentDay={currentDay}
                selectedDay={selectedDay}
            />
            {selectedDay && isModalOpen && (
                <EventModal
                    selectedDay={selectedDay}
                    events={events}
                    addEvent={addEvent}
                    closeModal={() => setModalOpen(false)}
                />
            )}
            <EventList
                events={events.filter((event) => event.day === selectedDay)}
                deleteEvent={deleteEvent}
            />
        </div>
    );
}

export default Home;
