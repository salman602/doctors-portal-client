import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import TextField from '@mui/material/TextField';
import { Typography, Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BookingModal = ({ booking, date, openBooking, handleBookingClose }) => {
    const {user} = useAuth();
    const { name, time } = booking;
    const handleBooking = (e) =>{
        e.preventDefault();
        alert('Submitting');
        handleBookingClose();
        // collect data 
        // send data to server
    }
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openBooking}
            onClose={handleBookingClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openBooking}>
                <Box sx={style}>
                    <Typography sx={{mb: 2}} variant="h6">{name}</Typography>
                    <form onSubmit={handleBooking}>
                        <TextField
                            disabled
                            id="outlined-size-small"
                            defaultValue={time}
                            size="small"
                            sx={{mb: 2, width: '95%'}}
                        />
                        <TextField
                            id="outlined-size-small"
                            defaultValue={user.displayName}
                            size="small"
                            sx={{mb: 2, width: '95%'}}
                        />
                        <TextField
                            id="outlined-size-small"
                            defaultValue={user.email}
                            size="small"
                            sx={{mb: 2, width: '95%'}}
                        />
                        <TextField
                            id="outlined-size-small"
                            defaultValue="Phone Number"
                            size="small"
                            sx={{mb: 2, width: '95%'}}
                        />
                        <TextField
                            disabled
                            id="outlined-size-small"
                            defaultValue={date.toDateString()}
                            size="small"
                            sx={{mb: 2, width: '95%'}}
                        />
                        <Button type="submit" sx={{textAlign: 'right'}} variant="contained">Send</Button>
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default BookingModal;