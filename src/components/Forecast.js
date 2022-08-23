import React, { useEffect, useState } from 'react';
import './Forecast.css'

export default function Forecast(props) {

    return (
        <>
            <div className="forecast-container">
                <p>{props.relativeLocation[0]}, {props.relativeLocation[1]}</p>
                <p>{props.shortDesc}</p>
                <img src={props.icon}/>
            </div>
        </>
    )
}