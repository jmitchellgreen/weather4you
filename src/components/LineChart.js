import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import React from 'react';
import './LineChart.css'

export default function TinyLineChart(props) {

    const formatXAxis = (tickItem) => {
        const d = new Date(tickItem);
        return d.getHours();
    }

    return (
        <ResponsiveContainer height='80%'>
            <LineChart
                data={props.data}
                margin={{
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 15,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                    dataKey={"startTime"}
                    tickFormatter={formatXAxis}
                    interval={5}
                />
                <YAxis />
                <Line type="monotone" dataKey="temperature" dot={false} />
            </LineChart>
        </ResponsiveContainer>
    )
}