import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import bg from '../../../images/appointment-bg.png';
import doctor from '../../../images/doctor.png';
import { Button, Typography } from '@mui/material';

const appointmentBannerBg = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(34, 46, 62, 0.85)',
    backgroundBlendMode: 'Darken',
    marginTop: 140
};

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBannerBg} sx={{ width: '100%', my: 5 }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} md={5}>
                    <img style={{marginTop: '-90px'}} src={doctor} alt="" width="400" height="auto" />
                </Grid>
                <Grid style={{textAlign: 'left'}} item xs={12} md={7}>
                    <Typography sx={{ color: 'info.main', my: 2 }} variant="h5" component="div">
                        Appointment
                    </Typography>
                    <Typography style={{color: 'white'}} variant="h4" component="div">
                        Make an Appointment <br /> Today
                    </Typography>
                    <Typography style={{color: 'white', margin: '1.5rem 0 2rem 0', fontSize: '1.3rem'}} variant="p" component="div">
                        It is a long established fact that a reader will be distaracted by the readable content of a page when looking at it's content.
                    </Typography>
                    <Button variant="contained">Learn More</Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;