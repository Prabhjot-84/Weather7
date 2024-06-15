// Today.js
import React from 'react';
import humidityIcon from '../icon/humidity.png';

const Today = ({ today, area }) => {
    if (!today || !today.current) {
        return <div>Loading...</div>;
    }

    const weatherDescription = today.current.weather[0].description;

    const backgroundImageStyle = {
        backgroundImage: `url('https://picsum.photos/1600/900/?${weatherDescription} sky')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <div className="part_1" style={backgroundImageStyle}>
            <div className="layer_1">
                <h3 className="city_name">{area}</h3>
                <h4 className="time" id="time">
                    {new Date(today.current.dt * 1000).toLocaleString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
                </h4>
            </div>

            <div className="layer_2">
                <h1 className="temp"> {today.current.temp} °C</h1>
                <div className="weath">
                    <img src={`http://openweathermap.org/img/wn/${today.current.weather[0].icon}.png`} alt="Weather Icon" className="icon" />
                    <h3 className="weather_type">{today.current.weather[0].description}</h3>
                </div>
            </div>

            <div className="layer_3">
                <div className="humidity">
                    <img src={humidityIcon} alt="Humidity" />
                    <h3>Humidity</h3>
                    <h3 className="humi_data">{today.current.humidity}%</h3>
                </div>
                <div className="feels_like">
                    <h3>Feels Like</h3>
                    <h3 className="feels_like_value">{today.current.feels_like} °C</h3>
                </div>
            </div>
        </div>
    );
};

export default Today;
