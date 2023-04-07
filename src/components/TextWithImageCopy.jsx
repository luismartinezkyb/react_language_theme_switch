import React from 'react'
import { makeStyles } from '@mui/styles'
import {Grid, Typography} from '@mui/material';
const useStyles = makeStyles((theme)=>({
    container:{
        margin: '20px',
    }
}))
export default function TextWithImage({urlImage, title="nothing", direction, background, text}) {
    const classes=useStyles();

    return (
        
        <Grid container columns={16} justifyItems="center" alignItems="center" spacing={2} padding={5}>
            {direction==='left' ? 
                <>
                <Grid item xs={8}>
                    <img src={urlImage} alt="Nothing"/>
                </Grid>
                <Grid item xs={8}>
                    <Grid container direction='column' justifyItems="center" spacing={3}>
                        <Grid item xs>
                                <Typography variant="h2">
                                    {title}
                                </Typography>
                        </Grid>
                        {text.map((text, index)=>(
                            <Grid key={index} item xs padding={3}>
                                <Typography variant='body1'>
                                    {text}
                                </Typography>
                            </Grid>
                        ))}
                        
                    
                    </Grid>
                </Grid>
            </>
            :
            <>
                <Grid item xs={8}>
                    <Grid container direction='column' justifyItems="center" alignItems="end" spacing={3}>
                        <Grid item xs>
                                <Typography variant="h2">
                                    {title}
                                </Typography>
                        </Grid>
                        {text.map((text, index)=>(
                            <Grid key={index} item xs >
                                <Typography variant='body1'>
                                    {text}
                                </Typography>
                            </Grid>
                        ))}

                    </Grid>
                </Grid>
                <Grid item xs={8}>
                    <img src={urlImage} alt="Nothing"/>
                </Grid>
                
            </>
            }
            
        </Grid>
        )
}
