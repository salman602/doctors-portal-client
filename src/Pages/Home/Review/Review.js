import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';

const Review = ({ people }) => {
    const { name, review, liveIn, img } = people;
    return (
        <Grid xs={12} md={4}>
            <Paper elevation={3} sx={{p: 3, mx:2}}>
                <Box sx={{textAlign: 'left'}}>
                    <Typography variant="p" >{review}</Typography>
                    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2}}>
                        <img src={img} alt="" width="15%" />
                        <Box>
                            <Typography variant="h6" sx={{ fontSize: '1rem', ml:2, fontWeight: 'bold', color: 'aqua' }}>{name}</Typography>
                            <Typography variant="p" sx={{ fontSize: 'default',ml:2 }}>{liveIn}</Typography>
                        </Box>
                    </Box>
                </Box>
            </Paper>
        </Grid>
    );
};

export default Review;