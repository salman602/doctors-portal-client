import React from 'react';
import { Container, Typography, TextareaAutosize, Button, OutlinedInput } from '@mui/material';
import { Box } from '@mui/system';
import bg from '../../../images/appointment-bg.png';

const contactBg = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(34, 46, 62, 0.85)',
    backgroundBlendMode: 'Darken',
    height: '500px'
}

const ContactUs = () => {
    return (
        <Box sx={{ ...contactBg, p: 5, my: 5 }}>
            <Container>
                <Typography sx={{ color: 'aqua' }} variant="h6">CONTACT US</Typography>
                <Typography sx={{ color: 'white', mb: 5 }} variant="h4">Always Connect with us</Typography>
                <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Box sx={{ width: 500, maxWidth: '100%' }}>
                        <OutlinedInput sx={{ backgroundColor: 'whitesmoke', border: 0 }} fullWidth id="outlined-adornment-weight" aria-describedby="outlined-weight-helper-text" placeholder="Your Email" />
                        <OutlinedInput sx={{ backgroundColor: 'whitesmoke', border: 0, my: 2 }} fullWidth id="outlined-adornment-weight" aria-describedby="outlined-weight-helper-text" placeholder="Subject" />
                        <OutlinedInput sx={{ backgroundColor: 'whitesmoke', border: 0, my: 2, py: 4 }} fullWidth id="outlined-adornment-weight" aria-describedby="outlined-weight-helper-text" placeholder="Your Message" />
                        {/* <TextField sx={{backgroundColor: 'whitesmoke', border: 0}} fullWidth label="Email Address" id="fullWidth" /> */}
                        {/* <TextField fullWidth label="Subject" id="fullWidth" sx={{backgroundColor: 'whitesmoke', border: 0, height: '5rem'}} /> */}
                        {/* <TextareaAutosize aria-label="minimum height" minRows={3} placeholder="Your Message" style={{ width: '29rem', height: '6rem', padding: '1rem', marginBottom: '1rem' }} /> */}
                        <Button variant="contained" sx={{ p: '0.4rem 2.5rem' }}>Submit</Button>
                    </Box>
                </Box>
            </Container >
        </Box>
    );
};

export default ContactUs;