import React, { useEffect, useState } from 'react';
import './InfoBar.css'
import Forecast from './Forecast.js'
import LineChart from './LineChart';

export default function InfoBar(props) {
    const [shortDesc, setShortDesc] = useState(null)
    const [periods, setPeriods] = useState([])

    var headers = { Accept: "application/ld+json" }
    var options = { "headers": headers };

    async function getForecast() {

        let lat = props.coords.latitude.toFixed(4)
        let lng = props.coords.longitude.toFixed(4)

        try {
            console.log('try')
            await fetch(`https://api.weather.gov/points/${lat},${lng}`, options)
                .then(response => response.json())
                .then(data => {
                    let forecast = data.forecastHourly
                    return (fetch(forecast))
                })
                .then(response => response.json())
                .then(data => {
                    setShortDesc(data.properties.periods[0].shortForecast)
                    setPeriods(data.properties.periods)
                })
        }
        catch {
            console.log("error")
        }
    }

    useEffect(() => {
        getForecast()
    }, [props.coords])

    return (
        <div className='infobar'>
            <Forecast shortDesc={shortDesc} />
            <LineChart data={periods} />
        </div>
    )
}