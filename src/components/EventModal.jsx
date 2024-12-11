import React, { useState } from 'react';

function EventModal({ selectedDay, addEvent, closeModal }) {
    const [eventName, setEventName] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = () => {
        if (eventName.trim() && startTime && endTime) {
            addEvent({
                day: selectedDay,
                name: eventName,
                startTime,
                endTime,
                description,
            });
            closeModal();
        } else {
            alert('Please fill in all required fields!');
        }
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h2>Add Event for {selectedDay}</h2>
                    <button className="close-button" onClick={closeModal}>
                        &times;
                    </button>
                </div>
                <div className="modal-body">
                    <input
                        type="text"
                        placeholder="Event Name"
                        className="styled-input"
                        value={eventName}
                        onChange={(e) => setEventName(e.target.value)}
                    />
                    <input
                        type="time"
                        className="styled-input"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                    />
                    <input
                        type="time"
                        className="styled-input"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                    />
                    <textarea
                        placeholder="Description (Optional)"
                        className="styled-textarea"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>
                <div className="modal-footer">
                    <button className="save-button" onClick={handleSubmit}>
                        Save Event
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EventModal;
