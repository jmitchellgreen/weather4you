import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import React from 'react';


export default function TinyLineChart(props) {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart width={300} height={100} data={props.data}>
                <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
        </ResponsiveContainer>
    )
}