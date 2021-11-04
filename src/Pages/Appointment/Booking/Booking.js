import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import {Button} from '@mui/material';

const Booking = ({ booking }) => {
    const { name, time, space } = booking;
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{py: 5}} >
                <Typography sx={{color: "info.main", mb: 3, fontWeight: 500}} variant="h5" gutterBottom component="div">
                    {name}
                </Typography>
                <Typography variant="h6" gutterBottom component="div">
                    {time}
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    {space} spaces available
                </Typography>
                <Button variant="contained">BOOK APPOINTMENT</Button>
            </Paper>

        </Grid>
    );
};

export default Booking;