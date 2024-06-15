import React, { useState } from 'react';

const Search = ({ setWeatherData, setArea, setAirData }) => {
    const [city, setCity] = useState('');

    const searchCity = async () => {
        if (!city) {
            alert('Please enter a city name.');
            return;
        }

        try {
            // Fetch coordinates for the city
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d38517746a7a6c4ead7877ec91bc1d0f`);
            if (!response.ok) {
                throw new Error('City not found');
            }
            const cityData = await response.json();

            const { lat, lon } = cityData.coord;
            setArea(cityData.name);

            // Fetch detailed weather data using coordinates
            const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=d38517746a7a6c4ead7877ec91bc1d0f`);
            const weatherData = await weatherResponse.json();
            setWeatherData(weatherData);

            // Fetch air data using coordinates
            const airResponse = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=d38517746a7a6c4ead7877ec91bc1d0f`);
            const airData = await airResponse.json();
            setAirData(airData);

        } catch (error) {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.');
        }
    };

    // Get the current date and format it
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-US', options);

    return (
        <div className="navigation">
            <div className="search_part">
                <div className="search">
                    <input
                        type="text"
                        placeholder="Search by city name"
                        className="search_input"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <i className="fa-solid fa-magnifying-glass" onClick={searchCity}></i>
                </div>
                <div className="error">
                    <small className="error_small"> Enter city name correctly !!! </small>
                </div>
            </div>
            <div className="left">
                <div className="profile">
                    <div className="pp"></div>
                    <h3 className="name"> Hello !! </h3>
                </div>
                <div className="today" id="today">{formattedDate}</div>
            </div>
        </div>
    );
};

export default Search;