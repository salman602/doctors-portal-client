import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

const Appointments = ({ date }) => {
    const formatedDate = date.toLocaleDateString();
    // console.log(formatedDate)
    const { user } = useAuth();

    const [appointments, setAppointments] = useState([]);
    useEffect(() => {
        const url = `https://warm-cliffs-41247.herokuapp.com/appointments?email=${user.email}&date=${formatedDate}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [formatedDate, user.email]);
    return (
        <div>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6" component="span">Appointments</Typography>
                <Typography variant="body2" component="span">{formatedDate}</Typography>
            </Box>

            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Schedule</TableCell>
                            <TableCell>Service Name</TableCell>
                            <TableCell align="center">Payment</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appointments.map((appointment) => (
                            <TableRow
                                key={appointment._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {appointment.patientName}
                                </TableCell>
                                <TableCell>{appointment.time}</TableCell>
                                <TableCell>{appointment.serviceName}</TableCell>

                                <TableCell align="center">
                                    {appointment.payment ? 'Paid' :
                                        <Link to={`dashboard/payment/${appointment._id}`}>
                                            <button>Pay</button>
                                        </Link>
                                    }
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    );
};

export default Appointments;