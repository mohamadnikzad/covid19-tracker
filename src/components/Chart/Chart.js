import React, { useEffect, useState } from 'react'
import { fetchDailyData } from '../../api'
import './Chart.css'
import { Line, Bar } from 'react-chartjs-2'
import { Container } from '@material-ui/core'
const Chart = ({ data: { confirmed, recovered, deaths }, isCountry }) => {
    const [dailydata, setDailyData] = useState({})
    useEffect(() => {
        const fetcheddailyData = async () => {
            setDailyData(await fetchDailyData())
        }
        fetcheddailyData()

    }, [])

    const lineChart = (
        dailydata.length ? (
            <Line
                data={{
                    labels: dailydata.map(({ date }) => date),
                    datasets: [{
                        data: dailydata.map(({ confirmed }) => confirmed),
                        label: 'مبتلاشدگان',
                        borderColor: '#3333ff',
                        fill: true
                    },
                    {
                        data: dailydata.map(({ deaths }) => deaths),
                        label: 'فوت شدگان',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255,0,0,0.5)',
                        fill: true
                    }]
                }}
            />
        ) : null
    )

    const barChart = (
        isCountry ? <Bar
            data={{
                labels: ['مبتلاشدگان', 'بهبودیافته', 'فوت شدگان'],
                datasets: [{
                    label: 'نفر',
                    backgroundColor: ['rgba(0,0,255,0.5)',
                        'rgba(0,255,0,0.5)',
                        'rgba(255,0,0,0.5)'
                    ],
                    data: [confirmed.value, recovered.value, deaths.value]
                },
                ]
            }}
            options={{
                legend: { display: false },
                title: { display: true, text: ` ${isCountry} وضعیت فعلی در` }
            }}
        /> : null

    )

    return (
        <Container>
            <div className='lineChart'>
                {isCountry ? barChart : lineChart}
            </div>
        </Container>

    )
}
export default Chart