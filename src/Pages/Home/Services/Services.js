import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import Service from '../Service/Service';

import { cyan } from '@mui/material/colors';
const primary = cyan[500];
const accent = cyan['A400'];


const services = [
    {
        name: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat soluta quam nulla. Odit iste, expedita amet blanditiis totam neque deserunt eius perferendis laboriosam reiciendis quia omnis quisquam. In, temporibus sunt.',
        img: fluoride
    },
    {
        name: 'Cavity filling',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat soluta quam nulla. Odit iste, expedita amet blanditiis totam neque deserunt eius perferendis laboriosam reiciendis quia omnis quisquam. In, temporibus sunt.',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat soluta quam nulla. Odit iste, expedita amet blanditiis totam neque deserunt eius perferendis laboriosam reiciendis quia omnis quisquam. In, temporibus sunt.',
        img: whitening
    }
];



const Services = () => {
    return (

        <Box sx={{ flexGrow: 1, py: 3 }}>
            <Container>

                <Typography sx={{ color: 'info.main', fontWeight: 500 }} variant="h6" component="div">
                    OUR SERVICES
                </Typography>

                <Typography sx={{ my: 3, fontWeight: 'bold' }} variant="h4" component="div">
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>

    );
};

export default Services;