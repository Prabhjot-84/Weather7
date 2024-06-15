import React from 'react'
import { Outlet } from 'react-router-dom'
import logoImg from './icon/logo_img.png';

const Options = () => {
  
    return (
        <div className='container'>
            
            <div>    
                <div className="logo">
                    <img className="logo_img" src={logoImg} alt="logo" />
                    <h1 className="logo_name"> Weather7 </h1>
                </div>

                <div className="grid" id="grid">
                    {/* <i className="fa-thin fa-grid"></i> */}
                    <i className="fa-solid fa-list" id="grid_icon"></i>
                </div>
                
                <ul className="menu" id="menu">
                    <a href="/"><i className="fa-solid fa-house iHome base"></i> <span className="derived">Home</span></a>
                    <a href="/about" id="about"><i className="fa-solid fa-chart-simple iChart base"></i> <span className="derived">About</span></a>
                    <a href="/404error"><i className="fa-solid fa-brush iTheme base"></i> <span className="derived">Theme</span></a>
                    {/* <a href="/404error"><i className="fa-solid fa-user iProfile base"></i> <span className="derived">Profile</span></a> */}
                    {/* <a href="#"><i className="fa-solid fa-location-dot iLocation base"></i> <span className="derived">MyLocation</span></a> */}
                </ul>
            </div>
            
            <Outlet />
            
        </div>
    )
}

export default Options