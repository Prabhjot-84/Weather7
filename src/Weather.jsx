import React, { useEffect, useState } from 'react';
import SunriseIcon from './icon/sunrise.png';
import SunsetIcon from './icon/sunset.png';
import Today from './components/Today';
import NextHours from './components/NextHours';
import Search from './components/Search';
import Report from './components/Report';
import UpcomingDays from './components/UpcomingDays';

const API_KEY = process.env.REACT_APP_API_KEY;

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [area, setArea] = useState('');
    const [airData, setAirData] = useState(null);
    const [location, setLocation] = useState({ latitude: null, longitude: null });

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((success) => {
            let { latitude, longitude } = success.coords;
            setLocation({ latitude, longitude });
        });
    }, []);

    useEffect(() => {
        if (location.latitude && location.longitude) {
            fetchWeatherData(location.latitude, location.longitude);
            fetchAirData(location.latitude, location.longitude);
            getArea(location.latitude, location.longitude);
        }
    }, [location]);

    const fetchWeatherData = (latitude, longitude) => {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setWeatherData(data);
        });
    };

    const fetchAirData = (latitude, longitude) => {
        fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAirData(data);
        });
    };

    const getArea = (latitude, longitude) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setArea(data.name);
        });
    };

    return (
        <div className="slider_1">
            <div className="side_1" id="side_1">
                <div className="box_2" id="box_2">
                    {weatherData && <Today area={area} today={weatherData} />}
                    <NextHours weather={weatherData} />
                    <div className="part_3" id="part_3">
                        <div className="sunrise">
                            <img src={SunriseIcon} alt="Sunrise" />
                            <div className="sunrise_data">
                                <h3>Sunrise</h3>
                                {weatherData && <h3 className="sunrise_value">{new Date(weatherData.current.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</h3>}
                            </div>
                        </div>
                        <div className="sunset">
                            <img src={SunsetIcon} alt="Sunset" />
                            <div className="sunset_data">
                                <h3>Sunset</h3>
                                {weatherData && <h3 className="sunset_value">{new Date(weatherData.current.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</h3>}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box_3">
                    <Search setWeatherData={setWeatherData} setArea={setArea} setAirData={setAirData} />
                    <Report weather={weatherData} aqi={airData} />
                    <UpcomingDays weather={weatherData} />
                </div>
            </div>
        </div>
    );
};

export default Weather;
