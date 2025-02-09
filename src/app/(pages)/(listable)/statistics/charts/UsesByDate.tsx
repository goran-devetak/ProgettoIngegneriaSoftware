"use client"

import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [{value: 12, date: "2024-12-12"},
    {value: 4, date: "2024-06-24"}
]

type UsesByDayChartProps = {
    data: {
        date: string
        value: number
    }[]
}

export function UsesByDateChart({data}: UsesByDayChartProps){
    return(
        <ResponsiveContainer width="100%" minHeight={500}>
        <LineChart data={data}>
            <CartesianGrid />
            <XAxis dataKey="date"/>
            <YAxis />
            <Tooltip />
            <Line dataKey="value" type="monotone" name="Utilizzi totali" dot={false}/>
        </LineChart>
        </ResponsiveContainer>
    )
}