import React, { useEffect, useState } from 'react';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, []);
    return (
        <div>
            <h2>Our Doctors. {doctors.length}</h2>
        </div>
    );
};

export default Doctors;