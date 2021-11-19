import { Button, Input, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddDoctor = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!image) {
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', image);

        // from mdn using fetch article

        fetch('http://localhost:5000/doctors', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('doctor added successfully');

                }
            })
            .catch(error => {
                console.error('Error:', error);
            });

    }

    return (
        <div>
            <h2>Add a doctor.</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                    sx={{ width: '50%', margin: '1rem 0' }}
                    id="standard-basic"
                    label="Name"
                    type="text"
                    required
                    onBlur={e => setName(e.target.value)}
                    variant="standard" />
                <br />
                <TextField
                    sx={{ width: '50%', margin: '1rem 0' }}
                    id="standard-basic"
                    label="Email"
                    type="email"
                    required
                    onBlur={e => setEmail(e.target.value)}
                    variant="standard" />
                <br />
                <Input
                    sx={{ width: '50%', margin: '1rem 0' }}
                    onBlur={e => setImage(e.target.files[0])}
                    accept="image/*"
                    type="file" />
                <br />
                <Button type="submit" variant="contained">
                    Add Doctor
                </Button>
            </form>
        </div>
    );
};

export default AddDoctor;