import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Container, Typography } from '@mui/material';


const bannerBg = {
    background: `url(${bg})`,
    

}

const verticalAlign = {
    display: 'flex',
    alignItems: 'center',
    height: 450,
}

const Banner = () => {
    return (
        <Box sx={{ flexGrow: 1 }} style={bannerBg}>
            <Container>
                <Grid container spacing={2}>


                    <Grid item xs={8} md={6} style={{ ...verticalAlign, textAlign: 'left' }}>
                        <Box>
                            <Typography variant="h3">
                                Your New Smile <br />
                                Starts here
                            </Typography>
                            <Typography sx={{my: 2}} variant="h6" style={{ fontSize: 16, fontWeight: 400, color: 'gray' }}>
                                You should keep your teeth clean and change your brush after every 4 weeks. To keep your teeth healthy you should visit dentist every two month to check up. Keep your teeth healthy and continue smiling.
                            </Typography>
                            <Button variant="contained">GET APPOINTMENT</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={4} md={6} style={verticalAlign}>
                        <img src={chair} alt="" width="400" />
                    </Grid>


                </Grid>
            </Container>
        </Box>
    );
};

export default Banner;