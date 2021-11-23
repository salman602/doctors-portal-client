import { Grid } from '@mui/material';
import React from 'react';

const Doctor = ({ doctor }) => {
    const { name, image } = doctor;
    return (
        <Grid item xs={12} sm={6} md={4}>
            <img src={`data:image/png;base64,${image}`} alt="" style={{ width: '200px' }} />
            <h3>{name}</h3>
        </Grid>
    );
};

export default Doctor;