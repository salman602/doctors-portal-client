import React from 'react';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';


const timeSlots = [
    {
        id: 1,
        name: 'Teeth Orthodontics',
        time: '8:00 AM - 9:00 AM',
        space: 10
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '10:00 AM - 11:3 0 AM',
        space: 10
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '5:00 pM - 6:30 PM',
        space: 10
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '7:00 PM - 8:30 PM',
        space: 10
    },
    {
        id: 5,
        name: 'Teeth Cavity',
        time: '4:00 PM - 5:30 PM',
        space: 10
    },
    {
        id: 6,
        name: 'Teeth Protection',
        time: '9:00 AM - 10:00 AM',
        space: 10
    },
];

const AvailableAppointments = ({ date }) => {
    return (
        <Container>
            <h4>Appointments Available on {date.toDateString()}</h4>
            <Grid container spacing={2}>
                <Grid item  xs={12} sm={6} md={4}>
                    
                </Grid>
                
            </Grid>
        </Container>
    );
};

export default AvailableAppointments;