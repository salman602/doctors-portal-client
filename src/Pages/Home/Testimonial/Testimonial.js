import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import { Box } from '@mui/system';
import people1 from '../../../images/people-1.png';
import people2 from '../../../images/people-2.png';
import people3 from '../../../images/people-3.png';
import Review from '../Review/Review';



const peoples = [
    {
        name: 'Wilson Harry',
        liveIn: 'California',
        review: 'nesciunt veritatis corporis reiciendis eaque aut laboriosam, facilis incidunt expedita maiores ducimus suscipit harum pariatur magni dolorum nostrum minus! Deleniti perspiciatis obcaecati sit omnis. Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        img: people1
    },
    {
        name: 'Alexa Marine',
        liveIn: 'Texus',
        review: 'nesciunt veritatis corporis reiciendis eaque aut laboriosam, facilis incidunt expedita maiores ducimus suscipit harum pariatur magni dolorum nostrum minus! Deleniti perspiciatis obcaecati sit omnis. Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        img: people2
    },
    {
        name: 'Watson carry',
        liveIn: 'Pencilvenia',
        review: 'nesciunt veritatis corporis reiciendis eaque aut laboriosam, facilis incidunt expedita maiores ducimus suscipit harum pariatur magni dolorum nostrum minus! Deleniti perspiciatis obcaecati sit omnis. Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        img: people3
    },
];

const Testimonial = () => {
    return (
        <Container>
            <Box sx={{textAlign: 'left'}}>
                <Typography sx={{mb:2, color: 'aqua'}} variant="h6">TESTIMONIAL</Typography>
                <Typography variant="h4">What out patient's <br />Says</Typography>
            </Box>
            <Grid container sx={{ mt: 3 }}>
                {
                    peoples.map(people => <Review key={people.name} people={people}></Review>)
                }
            </Grid>
        </Container>
    );
};

export default Testimonial;


