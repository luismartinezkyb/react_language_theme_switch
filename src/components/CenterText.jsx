import React, {Fragment} from 'react'
import {Grid, Typography} from '@mui/material';

import {makeStyles} from '@mui/styles';

const useStyles = makeStyles((theme)=>({
    container:{
        background: theme.palette.secondary.main,
        padding: '3em',
        color: theme.palette.background.paper,
    }
}))

export default function CenterText() {

    const classes = useStyles();
    return (
        <Grid className={classes.container} container direction='column' justify="space-around" alignItems="center" spacing={3}>
            <Grid item xs={8}>
                <Typography variant='body1' align='center' gutterBottom={true}>
                    Hello, Maybe i'm gonna change this space for something new with animatio
                </Typography>
            </Grid>
            <Grid item xs={8}>
                <Typography variant='body1' align='center' gutterBottom={true}>
                    <b>
                        But for now i'm gonna write some awesome stuff
                    </b>
                    
                </Typography>
            </Grid>
            <Grid item xs={8}>
                <Typography variant='body1' align='center' gutterBottom={true}>
                    This is my portfolio, i have to write all the stuff for each space
                </Typography>
            </Grid>  
        </Grid>
    )
}
