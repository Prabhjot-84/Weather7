import React from 'react';
import './App.css';
import './css/weather.css'
import './css/responsive.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Options from './Options';
import Weather from './Weather';
import About from './About';
import ErrorPage from './ErrorPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Options />}>
          <Route index element={<Weather />} />
          <Route path="/home" element={<Weather />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;