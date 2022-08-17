import React from 'react';
import './InfoBar.css'
import Forecast from './Forecast.js'


export default function InfoBar(props) {

    return (
        <div className='infobar'>
            <Forecast coords={props} />
        </div>
    )
}