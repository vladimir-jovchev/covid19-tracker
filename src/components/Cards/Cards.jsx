import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './CardsStyle.module.css';

let WorldPopulation = 7674000000;

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
    if(!confirmed){
        return 'Loading ...';
    }

    return (
        <div className={styles.container}>
        <Grid container spacing={2} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent >
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>

                        <Typography variant = "h5" >
                            <CountUp start={0} end={confirmed.value} duration={2.5} separator="," />
                        </Typography>

                        <Typography color="textSecondary" gutterBottom>{new Date(lastUpdate).toDateString()}</Typography>

                        <Typography variant="body2" >Number of active cases of COVID-19</Typography>
                        
                        <Typography color="textSecondary" gutterBottom>{((confirmed.value/WorldPopulation)*100).toFixed(2) + "%"}</Typography>


                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent >
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>

                        <Typography variant = "h5" >
                        <CountUp start={0} end={recovered.value} duration={2.5} separator="," />
                        </Typography>

                        <Typography color="textSecondary" gutterBottom>{new Date(lastUpdate).toDateString()}</Typography>

                        <Typography variant="body2" >Number of recovered cases of COVID-19</Typography>

                        <Typography color="textSecondary" gutterBottom>{((recovered.value/confirmed.value)*100).toFixed(2) + "%"}</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent >
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>

                        <Typography variant = "h5" >
                        <CountUp start={0} end={deaths.value} duration={2.5} separator="," />
                        </Typography>

                        <Typography color="textSecondary" gutterBottom>{new Date(lastUpdate).toDateString()}</Typography>

                        <Typography variant="body2" >Number of deaths caused by COVID-19</Typography>

                        <Typography color="textSecondary" gutterBottom>{((deaths.value/confirmed.value)*100).toFixed(2) + "%"}</Typography>
                    </CardContent>
                </Grid>
            </Grid> 
        </div>
    )
}

export default Cards;

