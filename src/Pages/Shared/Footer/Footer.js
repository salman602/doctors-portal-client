import React from 'react';
import { Box } from '@mui/system';
import { Button, Container, Grid, Typography } from '@mui/material';
// import { FacebookRounded, GoogleIcon } from '@mui/icons-material';
import FacebookRounded from '@mui/icons-material/FacebookRounded';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import bg from '../../../images/footer-bg.png';

const footerBg = {
    background: `url(${bg})`,
    height: '450px'
};


const Footer = () => {
    return (
        <Box style={{ ...footerBg}}>
            <Container sx={{ py: 5}}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} sm={6} md={3} sx={{ textAlign: 'left' }}>
                        <Typography variant="h5" sx={{ visibility: 'hidden', mb: 2 }}>Oral Health</Typography>
                        <Typography variant="body1">Emergency Dental Care</Typography>
                        <Typography variant="body1">Check up</Typography>
                        <Typography variant="body1">Treatment of Personal Disease</Typography>
                        <Typography variant="body1">Check up</Typography>
                        <Typography variant="body1">Tooth extraction</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} sx={{ textAlign: 'left' }}>
                        <Typography variant="h5" sx={{mb: 2}}>Services</Typography>
                        <Typography variant="body1">Emergency Dental Care</Typography>
                        <Typography variant="body1">Check up</Typography>
                        <Typography variant="body1">Treatment of Personal Disease</Typography>
                        <Typography variant="body1">Check up</Typography>
                        <Typography variant="body1">Tooth extraction</Typography>
                        <Typography variant="body1">Check up</Typography>
                        <Typography variant="body1">Tooth extraction</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} sx={{ textAlign: 'left' }}>
                        <Typography variant="h5" sx={{mb: 2}}>Oral Health</Typography>
                        <Typography variant="body1">Emergency Dental Care</Typography>
                        <Typography variant="body1">Check up</Typography>
                        <Typography variant="body1">Treatment of Personal Disease</Typography>
                        <Typography variant="body1">Check up</Typography>
                        <Typography variant="body1">Tooth extraction</Typography>
                        <Typography variant="body1">Check up</Typography>
                        <Typography variant="body1">Tooth extraction</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} sx={{ textAlign: 'left' }}>
                        <Typography variant="h5" sx={{mb: 2}}>Our Address</Typography>
                        <Typography variant="body1">1121, Hudson Tower yards, San francisco.</Typography>
                        <Box sx={{my: 4}}>
                            <FacebookRounded sx={{ p: 1, border: '1px solid aqua', borderRadius: '50%' }} />
                            <GoogleIcon sx={{ mx: 3, p: 1, border: '1px solid aqua', borderRadius: '50%' }} />
                            <TwitterIcon sx={{ p: 1, border: '1px solid aqua', borderRadius: '50%' }} />
                        </Box>
                        <Typography variant="body1">Call Now</Typography>
                        <Button variant="outlined" sx={{ backgroundImage: 'linear-gradient(to right, aquamarine , rgb(91,146,229))', color: 'white', fontSize: '1rem', p: 1, ml: 0 }}>+20255536554</Button>
                    </Grid>
                </Grid>
            </Container>
            <Typography variant="body1" sx={{mt: 5}}>Copyright 2022 All Rights Reserved</Typography>
        </Box>
    );
};

export default Footer;