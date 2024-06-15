import React, { useEffect, useRef } from 'react';

import uvIcon from '../icon/uv.png';
import windIcon from '../icon/wind.png';
import visibilityIcon from '../icon/visibility.png';
import lowHighIcon from '../icon/low_high.png';
import Low from '../icon/low.png';
import High from '../icon/high.png';
import dayNightIcon from '../icon/daynight.png';
import Day from '../icon/day.png';
import Night from '../icon/night.png';
import pressureIcon from '../icon/pressure.png';
import dewIcon from '../icon/dew.png';
import precipitationIcon from '../icon/precipitation.png';
import moonriseIcon from '../icon/moonrise.png';
import moonsetIcon from '../icon/moonset.png';

const getAQIDescription = (aqi) => {
    switch (aqi) {
        case 1:
            return "Air quality is satisfactory, and air pollution poses little or no risk";
        case 2:
            return "Air quality is acceptable. However, may cause minor breathing discomfort to sensitive people";
        case 3:
            return "Members of sensitive groups may experience health effects. The general public is less likely to be affected.";
        case 4:
            return "May experience breathing difficulties and effects may be more pronounced in sensitive people.";
        case 5:
            return "Health alert: The risk of health effects is increased for everyone. May cause respiratory illness.";
        default:
            return "No data available";
    }
};

const setUVIColor = (uvi) => {
    const midElement = document.querySelector('.mid');

    if (uvi >= 0 && uvi < 2) {
        midElement.style.setProperty("--color-g", "transparent");
        midElement.style.setProperty("--color-y", "rgba(255, 255, 255, 0.7)");
        midElement.style.setProperty("--color-o", "rgba(255, 255, 255, 0.7)");
        midElement.style.setProperty("--color-r", "rgba(255, 255, 255, 0.7)");
        midElement.style.setProperty("--color-p", "rgba(255, 255, 255, 0.7)");
    } else if (uvi >= 2 && uvi < 5) {
        midElement.style.setProperty("--color-g", "rgba(255, 255, 255, 0.7)");
        midElement.style.setProperty("--color-y", "transparent");
        midElement.style.setProperty("--color-o", "rgba(255, 255, 255, 0.7)");
        midElement.style.setProperty("--color-r", "rgba(255, 255, 255, 0.7)");
        midElement.style.setProperty("--color-p", "rgba(255, 255, 255, 0.7)");
    } else if (uvi >= 5 && uvi < 8) {
        midElement.style.setProperty("--color-g", "rgba(255, 255, 255, 0.7)");
        midElement.style.setProperty("--color-y", "rgba(255, 255, 255, 0.7)");
        midElement.style.setProperty("--color-o", "transparent");
        midElement.style.setProperty("--color-r", "rgba(255, 255, 255, 0.7)");
        midElement.style.setProperty("--color-p", "rgba(255, 255, 255, 0.7)");
    } else if (uvi >= 8 && uvi < 10) {
        midElement.style.setProperty("--color-g", "rgba(255, 255, 255, 0.7)");
        midElement.style.setProperty("--color-y", "rgba(255, 255, 255, 0.7)");
        midElement.style.setProperty("--color-o", "rgba(255, 255, 255, 0.7)");
        midElement.style.setProperty("--color-r", "transparent");
        midElement.style.setProperty("--color-p", "rgba(255, 255, 255, 0.7)");
    } else {
        midElement.style.setProperty("--color-g", "rgba(255, 255, 255, 0.7)");
        midElement.style.setProperty("--color-y", "rgba(255, 255, 255, 0.7)");
        midElement.style.setProperty("--color-o", "rgba(255, 255, 255, 0.7)");
        midElement.style.setProperty("--color-r", "rgba(255, 255, 255, 0.7)");
        midElement.style.setProperty("--color-p", "transparent");
    }
};

const Report = ({ weather, aqi }) => {
    const backRef = useRef(null);

    useEffect(() => {
        if (weather && weather.current.uvi) {
            setUVIColor(weather.current.uvi);
        }

        if (weather && weather.current.pressure && backRef.current) {
            const degree = (weather.current.pressure - 870) * 1.68;
            backRef.current.style.setProperty("--p-deg", degree + "deg");
        }
    }, [weather]);

    if (!weather || !aqi) return null;

    const aqiValue = aqi.list[0].main.aqi;
    const aqiDescription = getAQIDescription(aqiValue);

    return (
        <div className="division_1">
            <div className="block_1">
                <h2 className="uv_index">
                    <img src={uvIcon} alt="uv index" />UV Index
                </h2>
                <div className="progress">
                    <div className="inner">
                        <div className="mid">
                            <div className="outer">
                                <h1 className="uvi">{weather.current.uvi}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="block_2">
                <div className="wind">
                    <img src={windIcon} alt="wind" />
                    <div className="wind_data">
                        <h2>Wind : &nbsp;</h2>
                        <h1 className="wind_value">{weather.current.wind_speed} m/s</h1>
                    </div>
                </div>
                <div className="visibility">
                    <img src={visibilityIcon} alt="visibility" />
                    <div className="visibility_data">
                        <h2>Visibility : &nbsp;</h2>
                        <h1 className="visibility_value">{weather.current.visibility / 1000} km</h1>
                    </div>
                </div>
            </div>

            <div className="block_3">
                <h2 className="lowhigh">
                    <img src={lowHighIcon} alt="low and high" /> Low and High
                </h2>
                <div className="maxmin">
                    <div className="low_box">
                        <img src={Low} alt="low" />
                        <h3 className="low">{weather.daily[0].temp.min}°C</h3>
                    </div>
                    <div className="high_box">
                        <img src={High} alt="high" />
                        <h3 className="high">{weather.daily[0].temp.max}°C</h3>
                    </div>
                </div>
                <h2 className="daynight">
                    <img src={dayNightIcon} alt="day and night" /> Day and Night
                </h2>
                <div className="maxmin_2">
                    <div className="day_box">
                        <img src={Day} alt="day" />
                        <h3 className="day">{weather.daily[0].temp.day}°C</h3>
                    </div>
                    <div className="night_box">
                        <img src={Night} alt="night" />
                        <h3 className="night">{weather.daily[0].temp.night}°C</h3>
                    </div>
                </div>
            </div>

            <div className="block_4">
                <h2>
                    Air Quality Index &nbsp;:&nbsp; <span className="air_value">{aqiValue}</span>
                </h2>
                <i className="aqi_desc">{aqiDescription}</i>
            </div>

            <div className="block_5">
                <h2 className="pressure">
                    <img src={pressureIcon} alt="pressure" /> &nbsp; Pressure
                </h2>
                <div className="speedometer">
                    <div className="back" ref={backRef}>
                        <div className="conic">
                            <div className="front">
                                <h2 className="pressure_value">{weather.current.pressure} hPa</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="block_6">
                <h2 className="dew">
                    <img src={dewIcon} alt="dew" /> &nbsp; Dew Point : &nbsp;
                    <span className="dew_value">{weather.current.dew_point}°C</span>
                </h2>
                <h2 className="precipitation">
                    <img src={precipitationIcon} alt="precipitation" /> &nbsp; Precipitation : &nbsp;
                    <span className="pop_value">{weather.daily[0].pop * 100}%</span>
                </h2>
                <h2 className="moonrise">
                    <img src={moonriseIcon} alt="moonrise" /> &nbsp; Moonrise : &nbsp;
                    <span className="moonrise_value">{new Date(weather.daily[0].moonrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                </h2>
                <h2 className="moonset">
                    <img src={moonsetIcon} alt="moonset" /> &nbsp; Moonset : &nbsp;
                    <span className="moonset_value">{new Date(weather.daily[0].moonset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                </h2>
            </div>
        </div>
    );
};

export default Report;