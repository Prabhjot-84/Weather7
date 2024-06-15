import React from 'react';
import logoImg from './icon/logo_img.png';
import errorImg from './icon/404.png';
import './css/404error.css'; 

const ErrorPage = () => {

    // const searchCity = () => {
    //     // Implement your search logic here
    // };

    return (
        <div className="slider_1">
            <div className="side_1" id="side_1">
                <div className="box_2" id="box_2">
                    <div className="logo">
                        <img className="logo_img" src={logoImg} alt="Weather7 Logo" />
                        <h1 className="logo_name">Weather7</h1>
                    </div>
                </div>

                <div className="box_3">
                    {/* <div className="navigation">
                        <div className="search_part">
                            <div className="search">
                                <input type="text" placeholder="Search by city name" className="search_input" />
                                <i class="fa-solid fa-magnifying-glass" onclick="searchCity()"></i>
                            </div>
                            <div className="error">
                                <small className="error_small">Enter city name correctly!!!</small>
                            </div>
                        </div>
                        <div className="left">
                            <div className="profile">
                                <div className="pp"></div>
                                <h3 className="name">Hello!</h3>
                            </div>
                            <div className="today" id="today"></div>
                        </div>
                    </div> */}

                    <div className="error_page">
                        <img src={errorImg} alt="Error 404" className="error_img" />
                        <h1 className="opps">Oops! Page Not Found</h1>
                        <a href="/"><button className="go_back">Go back to Home Page</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ErrorPage

