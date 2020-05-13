import React from 'react';
import WeatherCard from "./components/WeatherCard";
import './App.css'
import cityWeatherData from './assets/city-weather.json'

function App() {
    return (
        <div className="App">
            <h1>Weather</h1>
            {cityWeatherData.map(city => (
                < WeatherCard city={city.name} countryCode={city.sys.country} weatherMain={city.weather[0].main}
                              weatherDescription={city.weather[0].description} tempMin={city.main.temp_min}
                              tempMax={city.main.temp_max} lon={city.coord.lon} lat={city.coord.lat}
                />
            ))}
        </div>
    );
}

export default App;
