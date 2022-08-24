import React, { useEffect, useState } from 'react';
import './Forecast.css'

export default function Forecast(props) {

    return (
        <>
            <div className="forecast-container">
                <h3>{props.relativeLocation[0]}, {props.relativeLocation[1]}</h3>
                <h4>{props.shortDesc}</h4>
            </div>
        </>
    )
}