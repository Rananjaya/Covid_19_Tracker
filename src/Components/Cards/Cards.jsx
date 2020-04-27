import React from 'react';
import { Card,CardContent,Typography,Grid, StylesProvider} from '@material-ui/core';
import CountUp from 'react-countup';

import styles from './Cards.module.css';

const Cards = ({ data : {confirmed,recovered,deaths,lastUpdate}}) =>{
    
    // console.log("card data",props);

     if(!confirmed){
           return 'Loding .....'
     }

    return (
        <div className={styles.container}> 
              <Grid container spacing={3} justify="center">
                   <Grid item component={Card}>
                      <CardContent>
                          <Typography color="textSecondary" gutterBottom>Infacted</Typography>
                             <Typography variant="h5"><CountUp start={0} end={confirmed.value} duration={2.5} separator="," />
                          </Typography>
                                <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                          <Typography variant="body2">Number of active cases of COVID-19</Typography>
                      </CardContent>
                   </Grid>

                   <Grid item component={Card}>
                      <CardContent>
                      <Typography color="textSecondary" gutterBottom>recoveries</Typography>
                             <Typography variant="h5"><CountUp start={0} end={recovered.value} duration={2.5} separator="," />
                          </Typography>
                          <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                          <Typography variant="body2">Number of recoveries from COVID-19</Typography>
                      </CardContent>
                   </Grid>

                   <Grid item component={Card}>
                      <CardContent>
                      <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                             <Typography variant="h5"><CountUp start={0} end={deaths.value} duration={2.5} separator="," />
                          </Typography>
                          <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                          <Typography variant="body2">Number of Deaths caused by COVID-19</Typography>
                      </CardContent>
                   </Grid>
                  </Grid>  

        </div>
    )
}

export default Cards;