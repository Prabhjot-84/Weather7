import React from 'react';

const UpcomingDays = ({ weather }) => {
    if (!weather) return null;

    // Function to get the abbreviated day name
    const getDayName = (timestamp) => {
        return new Date(timestamp * 1000).toLocaleDateString('en-US', { weekday: 'short' });
    }

    return (
        <div className="division_2">
            <h2>Next 7 days</h2>
            <div className="next">
                {weather.daily.slice(0, 8).map((day, index) => (
                    <div key={index} className="next_days">
                        <div className="day">
                            {getDayName(day.dt)}
                        </div>
                        <img 
                            src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`} 
                            alt={day.weather[0].description} 
                            className="day_icon" 
                        />
                        <div className="day_temp">
                            {Math.round(day.temp.max)}°C
                            <br />
                            {Math.round(day.temp.min)}°C
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UpcomingDays;
