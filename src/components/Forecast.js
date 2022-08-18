import React, { useEffect, useState } from 'react';
import './Forecast.css'

export default function Forecast(props) {

    return (
        <>
            <div className="forecast-container">
                <p>{props.shortDesc}</p>
            </div>
        </>
    )
}