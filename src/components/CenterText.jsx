import React, {Fragment} from 'react'
import {Grid, Typography} from '@mui/material';

import {makeStyles} from '@mui/styles';

const useStyles = makeStyles((theme)=>({
    container:{
        background: theme.palette.secondary.main,
        padding: '4vm 12vm',
    }
}))

export default function CenterText() {

    const classes = useStyles();
    return (
        <Grid className={classes.container} container direction='column' justify="space-around" alignItems="center" spacing={3}>
            <Grid item xs={8}>
                <Typography variant='body1' align='center' gutterBottom={true}>
                    This is me, now that you already know me, please don't be shitty
                </Typography>
            </Grid>
            <Grid item xs={8}>
                <Typography variant='body1' align='center' gutterBottom={true}>
                    <b>
                        This is me, now that you already know me, please don't be shitty
                    </b>
                    
                </Typography>
            </Grid>
            <Grid item xs={8}>
                <Typography variant='body1' align='center' gutterBottom={true}>
                    This is me, now that you already know me, please don't be shitty
                </Typography>
            </Grid>  
        </Grid>
    )
}
