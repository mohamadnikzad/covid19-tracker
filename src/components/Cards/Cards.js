import { Container, Grid, Card, Typography, CardContent } from '@material-ui/core'
import React from 'react'
import CountUp from 'react-countup'
import './Cards.css'

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return 'Loading . . .'
    }
    return (
        <Container className='cards'>
            <Grid container spacing={3} justify='center' >
                <Grid item component={Card} xs={12} md={3} className='card infected ' >
                    <CardContent>
                        <Typography gutterBottom color='primary' variant='h4'>مبتلا شدگان</Typography>
                        <Typography variant='h5'>
                            <CountUp start={0} end={confirmed.value} duration={1.8} separator=',' />
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography style={{ fontWeight: 'bold' }} variant='body2'>COVID-19 تعداد موارد فعال </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className='card recovered'>
                    <CardContent >
                        <Typography style={{ color: "#7FBF7F" }} variant='h4'>بهبود یافته</Typography>
                        <Typography variant='h5'>
                            <CountUp start={0} end={recovered.value} duration={1.4} separator=',' />
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography style={{ fontWeight: 'bold' }} variant='body2'>COVID-19 تعداد موارد بهبود یافته از </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className='card deaths'>
                    <CardContent >
                        <Typography color='error' variant='h4'>فوتشدگان</Typography>
                        <Typography variant='h5'>
                            <CountUp start={0} end={deaths.value} duration={1.2} separator=',' />
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography style={{ fontWeight: 'bold' }} variant='body2'> COVID-19 تعداد موارد مرگ توسط</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Cards
