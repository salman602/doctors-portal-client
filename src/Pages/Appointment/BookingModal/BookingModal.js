import React , {useState} from 'react';
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

const BookingModal = ({ booking, date, openBooking, handleBookingClose, setAppointmentConfirmation }) => {
    const {user} = useAuth();
    const { name, time } = booking;

    const initialInfo = {patientName: user.displayName, email: user.email, phone: ''};

    const [bookingInfo, setBookingInfo] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const updatedInfo = {...bookingInfo};
        updatedInfo[field] = value;
        setBookingInfo(updatedInfo);
    }

    const handleBooking = (e) =>{
        e.preventDefault();
        // collect data 
        const appointment = {
            ...bookingInfo,
            time,
            serviceName: name,
            date: date.toLocaleDateString()
        }
        console.log(appointment)
        
        // send data to server
        fetch('https://warm-cliffs-41247.herokuapp.com/appointments', {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(appointment)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                setAppointmentConfirmation(true)
                handleBookingClose();
                
            }
        })
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
                            name="patientName"
                            defaultValue={user.displayName}
                            onBlur={handleOnBlur}
                            size="small"
                            sx={{mb: 2, width: '95%'}}
                        />
                        <TextField
                            id="outlined-size-small"
                            name="email"
                            defaultValue={user.email}
                            onBlur={handleOnBlur}
                            size="small"
                            sx={{mb: 2, width: '95%'}}
                        />
                        <TextField
                            id="outlined-size-small"
                            name="phone"
                            defaultValue="Phone Number"
                            onBlur={handleOnBlur}
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