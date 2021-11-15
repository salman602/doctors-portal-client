import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Payment = () => {
    const { appointmentId } = useParams();
    const [appointment, setAppointment] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data));
    }, [appointmentId]);


    const tax = appointment.price * 0.10;
    const totalPrice = appointment.price + tax;
    const discountPrice = totalPrice - totalPrice * 0.2;

    return (
        <div>
            <h2>Payment appointment for : {appointment?.serviceName}</h2>
            <h4>Payable Price: ${appointment?.price}</h4>
            <h5>Tax: ${tax}</h5>
            <h3>Grand Total price: ${discountPrice}</h3>

        </div>
    );
};

export default Payment;