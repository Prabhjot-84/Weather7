import React from 'react';

import './css/about.css'

// import Options from './Options';
import aIcon from './icon/a.png';
import aboutImg2 from './icon/about_img_2.png';
import bIcon from './icon/b.png';
import aqiIcon from './icon/aqi.png';
import forecastIcon from './icon/forecast.png';
import featuresIcon from './icon/features.png';

const Container = () => {
    
    return (

        <div className="container"> 
        <div className='about_slider_1'>
            
            <div className="about_side_1" id="about_side_1">

                <div className="about_box_3">
                    <div className="about_1">
                        <img className="about_img_1" src={aIcon} alt="" />
                        <h1 className="about_h">
                            Always with you, rain or shine. Get temperature, forecast, AQI for your city. Weather7 is a weather channel, it is a global weather service that supports hourly and daily weather queries. This is a real-time weather website that professionally and accurately displays data for about 199 countries and 200,000+ cities.
                        </h1>
                    </div>

                    <div className="about_2">
                        <div className="about_para_2">
                            <h1>See details on today’s weather update.</h1>
                            <h2>
                                <ul>
                                    <li>Get updated with current temperature, whole day forecast, and Air Quality Index (AQI) data in a single view.</li>
                                    <li>Minimum and maximum temperatures of the day.</li>
                                    <li>Sunrise and Sunset times according to the city time zone.</li>
                                    <li>Easily visualize the weather in your area with the Simple UI with beautiful design and intuitively displayed.</li>
                                </ul>
                            </h2>
                        </div>
                        <img className="about_img_2" src={aboutImg2} alt="" />
                    </div>

                    <div className="about_3">
                        <img src={bIcon} alt="" className="about_img_3" />
                        <div className="about_para_3">
                            Planning a trip, want to see the weather in your hometown, want to check weather conditions in cities where your family members live? Just add any city in the world and see the live weather for that city.
                        </div>
                    </div>

                    <div className="about_4">
                        <div className="about_para_4">
                            <h2>Air Quality Index (AQI) value and useful suggestions as per pollution level.- See the Air Quality Index (AQI) value in your area and get alerted.</h2>
                            <ul>
                                <li>Know about the individual pollutants levels</li>
                                <li>Get suggestions and insights based on the current pollution level in your area to help you understand the meaning of various Air Quality Index (AQI) related terms and reduce the impact of pollution in your life</li>
                            </ul>
                        </div>
                        <img src={aqiIcon} alt="" className="about_img_4" />
                    </div>

                    <div className="about_5">
                        <img src={forecastIcon} alt="" className="about_img_5" />
                        <div className="about_para_5">
                            <h1>7 day Weather forecast</h1>
                            <h2>
                                <ul>
                                    <li>Be prepared for the week with the weather forecast for the next 7 days with information on:- Minimum and maximum temperatures</li>
                                </ul>
                            </h2>
                            <br />
                            <h1>Hourly weather updates</h1>
                            <h2>
                                <ul>
                                    <li>See hourly updates for the weather for next 10 hours.</li>
                                </ul>
                            </h2>
                        </div>
                    </div>

                    <div className="about_6">
                        <div className="about_para_6">
                            <h1>Other features:-</h1>
                            <h2>
                                <ul>
                                    <li>Wind speed and direction updates</li>
                                    <li>Real Feel temperature updates</li>
                                    <li>UV Index</li>
                                    <li>Atmospheric pressure</li>
                                    <li>Visibility</li>
                                    <li>Dew Point</li>
                                    <li>Precipitation</li>
                                    <li>Moonrise and Moonset</li>
                                </ul>
                            </h2>
                        </div>
                        <img src={featuresIcon} alt="" className="about_img_6" />
                    </div>
                    
                </div>
                {/* box_3 */}

            </div>
        
        </div>
        </div>
            
    );
}

export default Container;
