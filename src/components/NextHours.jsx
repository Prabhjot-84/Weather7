import React from 'react';
import humidityIcon from '../icon/humidity.png';

const NextHours = ({ weather }) => {
  if (!weather || !weather.hourly) return null;

  // Get the next 10 hours of data
  const next10Hours = weather.hourly.slice(0, 10);

  return (
    <div className="part_2">
        {next10Hours.map((hour, index) => (
            <div key={index} className="update">
                <h4 className="time_update">{new Date(hour.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</h4>
                <div className="second_half">
                    <img src={`http://openweathermap.org/img/w/${hour.weather[0].icon}.png`} alt="weather icon" className="hourly_icon" />
                    <h4 className="temp_update">{hour.temp}°C</h4>
                </div>
                <div className="third_half">
                    <img src={humidityIcon} alt="humidity" />
                    <h4 className="humidity_update">{hour.humidity}%</h4>
                </div>
            </div>
        ))}
    </div>
  );
};

export default NextHours;
