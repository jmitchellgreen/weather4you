import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import React from 'react';
import './LineChart.css'

export default function TinyLineChart(props) {

    const formatXAxis = (tickItem) => {
        const d = new Date(tickItem);
        return d.toLocaleDateString();
    }

    return (
        <ResponsiveContainer height='80%'>
            <LineChart
                data={props.data}
                margin={{
                    top: 10,
                    right: 10,
                    left: 0,
                    bottom: 10,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                    dataKey={"startTime"}
                    tickFormatter={formatXAxis}
                    interval={24}
                />
                <YAxis />
                <Line type="monotone" dataKey="temperature" dot={false} />
            </LineChart>
        </ResponsiveContainer>
    )
}