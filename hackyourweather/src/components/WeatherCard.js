import React from 'react'
import './WeatherCard.css'

function WeatherCard(props) {
    return (
        <div className="container">
            <h1>{props.city}, {props.countryCode}</h1>
            <div>
                <h3>{props.weatherMain}</h3>
                <p>{props.weatherDescription}</p>
            </div>
            <div>
                <p>Min Temp: {props.tempMin}</p>
                <p>Min Temp: {props.tempMax}</p>
                <p>Location: {props.lon}, {props.lat}</p>
            </div>
        </div>
    )
}

export default WeatherCard

