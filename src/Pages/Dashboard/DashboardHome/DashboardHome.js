import * as React from 'react';
import Grid from '@mui/material/Grid';
import Calender from '../../Shared/Calender/Calender';
import Appointments from '../Appointments/Appointments';

const DashboardHome = () => {
    
    // calender set date state
    const [date, setDate] = React.useState(new Date());
    return (
        <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
                <Calender date={date} setDate={setDate}></Calender>
            </Grid>
            <Grid item xs={12} md={6}>

                <Appointments date={date}></Appointments>
            </Grid>
        </Grid>
    );
};

export default DashboardHome;