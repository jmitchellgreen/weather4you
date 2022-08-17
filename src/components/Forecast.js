import React, { useEffect, useState, useRef } from 'react';

export default function Forecast(props) {
    const [shortDesc, setShortDesc] = useState(null)
    // const isInitialMount = useRef(true);

    useEffect(() => {
        try {
            fetch(`https://api.weather.gov/points/${props.coords.coords[0][0].latitude},${props.coords.coords[0][0].longitude}`)
                .then(response => response.json())
                .then(data => {
                    let forecast = data.properties.forecast
                    console.log(forecast)
                    return (fetch(forecast))
                })
                .then(response => response.json())
                .then(data => setShortDesc(data.properties.periods[0].shortForecast))
        }
        catch {
            console.log("err")
        }
    })

    return (
        <div className="forecast-container">
            <p>{shortDesc}</p>
        </div>
    )
}