import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import React from 'react';
import './LineChart.css'

export default function LineChart(props) {

    const formatTime = (tickItem) => {
        const d = new Date(tickItem);
        return d.toLocaleDateString();
    }

    const formatWindSpeed = (speed) => {
        speed.forEach(element => {
            element.windSpeed = element.windSpeed.slice(0, -3)
        });
        return "windSpeed"
    }


    return (
        <div style={{ position: 'relative', width: '100%', paddingBottom: '250px' }}>
            <div
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    top: 0,
                }}
            >
                <ResponsiveContainer width={'99%'} height={200}>
                    <AreaChart
                        data={props.data}
                        margin={{
                            top: 10,
                            right: 15,
                            left: 0,
                            bottom: 15,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis
                            dataKey={"startTime"}
                            tickFormatter={formatTime}
                            interval={24}
                        />
                        <YAxis />
                        <Tooltip labelFormatter={(value, name) => {
                            const d = new Date(value)
                            return d.toLocaleDateString("en-US", { hour: 'numeric' })
                        }} />
                        <Legend verticalAlign='top' height={15} />
                        <Area
                            name="Tempature (F)"
                            type="monotone"
                            dataKey="temperature"
                            dot={false}
                        />
                        <Area
                            name="Wind Speed (mph)"
                            type="monotone"
                            stroke="red"
                            dataKey={formatWindSpeed(props.data)}
                            dot={false}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}