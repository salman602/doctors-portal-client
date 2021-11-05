import React from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import treatmentImg from '../../../images/treatment.png';
import { Box } from '@mui/system';

const DentalCare = () => {
    return (
        <Container sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <img src={treatmentImg} alt="" width="100%" />
                </Grid>
                <Grid sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}} item xs={12} md={8}>
                    <Box sx={{textAlign: 'left', p: 3}}>
                        <Typography variant="h4">
                            Exceptional Dental <br />Care, On Your Terms
                        </Typography>
                        <Typography variant="h6" sx={{py: 3, color: 'text.secondary'}}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates autem dolore et laborum saepe illum accusamus, nesciunt veritatis corporis reiciendis eaque aut laboriosam, facilis incidunt expedita maiores ducimus suscipit harum pariatur magni dolorum nostrum minus! Deleniti perspiciatis obcaecati sit omnis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur voluptatibus quam ipsam ut natus esse.
                        </Typography>
                        <Button variant="contained">Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default DentalCare;