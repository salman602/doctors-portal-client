import React from 'react';

import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Booking from '../Booking/Booking';


const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodontics',
        time: '8:00 AM - 9:00 AM',
        space: 10
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '10:00 AM - 11:30 AM',
        space: 10
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '5:00 PM - 6:30 PM',
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
            <Typography sx={{color: "info.main", mb: 3}} variant="h4">Appointments Available on {date.toDateString()}</Typography>
           
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                    ></Booking>)
                }

            </Grid>
        </Container>
    );
};

export default AvailableAppointments;