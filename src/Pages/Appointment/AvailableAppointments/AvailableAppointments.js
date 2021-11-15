import React, { useState } from 'react';

import Grid from '@mui/material/Grid';
import { Container, Typography, Alert } from '@mui/material';
import Booking from '../Booking/Booking';


const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodontics',
        time: '8:00 AM - 9:00 AM',
        price: 11,
        space: 10
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '10:00 AM - 11:30 AM',
        price: 12,
        space: 10
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '5:00 PM - 6:30 PM',
        price: 13,
        space: 10
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '7:00 PM - 8:30 PM',
        price: 14,
        space: 10
    },
    {
        id: 5,
        name: 'Teeth Cavity',
        time: '4:00 PM - 5:30 PM',
        price: 15,
        space: 10
    },
    {
        id: 6,
        name: 'Teeth Protection',
        time: '9:00 AM - 10:00 AM',
        price: 16,
        space: 10
    },
];

const AvailableAppointments = ({ date }) => {
    const [appointmentConfirmation, setAppointmentConfirmation] = useState(false);
    return (
        <Container>
            <Typography sx={{ color: "info.main", mb: 3 }} variant="h4">Appointments Available on {date.toDateString()}</Typography>
            {appointmentConfirmation && <Alert
                onClose={() => { }}
                sx={{ my: 3 }}
                severity="success"
                color="info"
            >Thank you. Your appointment is submitted successfully.
            </Alert>}
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        date={date}
                        setAppointmentConfirmation={setAppointmentConfirmation}
                    ></Booking>)
                }

            </Grid>
        </Container>
    );
};

export default AvailableAppointments;