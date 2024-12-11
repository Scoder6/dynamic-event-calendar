import React, { useState, useEffect } from 'react';

function CalendarGrid({ onDayClick, currentDay, selectedDay }) {
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [days, setDays] = useState([]);

    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    // Calculate the days in the current month
    useEffect(() => {
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
        const firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay();
        const daysArray = [];

        // Fill with empty slots for alignment
        for (let i = 0; i < firstDayOfWeek; i++) {
            daysArray.push(null);
        }

        // Fill with actual days
        for (let day = 1; day <= daysInMonth; day++) {
            daysArray.push(day);
        }

        setDays(daysArray);
    }, [currentMonth, currentYear]);

    const handlePreviousMonth = () => {
        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear(currentYear - 1);
        } else {
            setCurrentMonth(currentMonth - 1);
        }
    };

    const handleNextMonth = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear(currentYear + 1);
        } else {
            setCurrentMonth(currentMonth + 1);
        }
    };

    return (
        <div>
            {/* Month Navigation */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '20px' }}>
                <button onClick={handlePreviousMonth} className="calendar-nav-btn">Previous</button>
                <h2 style={{ textAlign: 'center', margin: '20px 0', fontSize: '2rem' }}>
                    {monthNames[currentMonth]} {currentYear}
                </h2>
                <button onClick={handleNextMonth} className="calendar-nav-btn">Next</button>
            </div>

            {/* Calendar Grid */}
            <div className="calendar-grid">
                {days.map((day, index) => (
                    <div
                        key={index}
                        className={`calendar-day ${
                            day === currentDay && currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear()
                                ? 'current-day'
                                : ''
                        } ${day === selectedDay ? 'selected-day' : ''}`}
                        onClick={() => day && onDayClick(day)}
                    >
                        {day || ''}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CalendarGrid;
