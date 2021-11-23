import React, { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useParams } from 'react-router';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51JvxHLAASO3YkrRPMCNDAdx5FhExudeEXUndOy1PqUCclDxAXstpMnvSRVpP4f2g9yrZz8vMv7cmVzg3V1czD8Gi00u12NQIvy');

const Payment = () => {
    const { appointmentId } = useParams();
    const [appointment, setAppointment] = useState({});



    useEffect(() => {
        fetch(`https://thawing-shelf-76158.herokuapp.com/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data));
    }, [appointmentId]);

    const appointmentPrice = Number(appointment.price)
    const tax = Number((appointmentPrice * 0.1).toFixed(2));
    const totalPrice = appointmentPrice + tax;
    console.log(totalPrice, appointmentPrice, tax)
    console.log(typeof (appointmentPrice, tax))
    const discount = (totalPrice * 0.2).toFixed(2);
    const grandTotal = parseInt((totalPrice - discount).toFixed(2));

    return (
        <div>
            <h2>Payment appointment for : {appointment?.serviceName}</h2>
            <h4>Payable Price: ${appointment?.price}</h4>
            <h5>Tax: ${tax}</h5>
            <h5>Discount: {discount}</h5>
            <h3>Grand Total price: ${grandTotal}</h3>
            {
                grandTotal && <Elements stripe={stripePromise}>
                    <CheckoutForm appointment={appointment} grandTotal={grandTotal} />
                </Elements>
            }

        </div>
    );
};

export default Payment;