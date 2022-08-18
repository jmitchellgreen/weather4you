import React, { useEffect, useState } from 'react';


export default function Forecast(props) {

    return (
        <>
            <div className="forecast-container">
                <p>{props.shortDesc}</p>
            </div>
        </>
    )
}