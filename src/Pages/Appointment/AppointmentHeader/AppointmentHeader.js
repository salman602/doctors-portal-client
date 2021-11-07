import { Container, Grid } from '@mui/material';
import React from 'react';
import chair from '../../../images/chair.png';
import Calender from '../../Shared/Calender/Calender';

const AppointmentHeader = ({date, setDate}) => {
    return (
        <Container sx={{my: 5}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Calender date={date} setDate={setDate}></Calender>
                    
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={chair} alt="" width="90%" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default AppointmentHeader;