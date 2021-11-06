import React, { useState } from 'react';
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import login from '../../../images/login.png';
import { NavLink } from 'react-router-dom';

const Login = () => {
    const [loginData, setLoginData] = useState({})

    const handleInputChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(field, value);
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        alert('submitting form')
    }
    return (
        <Container>
            <Grid container>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box>
                        <Typography variant="h5">Login</Typography>
                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                                onChange={handleInputChange}
                                sx={{ width: '75%', m: 1 }}
                                name="email"
                                type="email"
                                id="standard-basic"
                                label="Your Email"
                                variant="standard" />
                            <TextField
                                onChange={handleInputChange}
                                sx={{ width: '75%', m: 1 }}
                                name="password"
                                type="password"
                                id="standard-basic"
                                label="Password"
                                variant="standard" />
                            <Button type="submit" variant="contained" sx={{ width: '75%', m: 1 }}>Login</Button>
                            <NavLink
                                to="/register"
                                style={{ textDecoration: 'none' }}
                            >
                                <Button variant="text">New User? Please Register</Button>
                            </NavLink>
                        </form>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={login} alt="" style={{ maxWidth: '100%' }} />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;