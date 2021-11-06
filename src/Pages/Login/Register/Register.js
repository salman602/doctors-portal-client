import React, { useState } from 'react';
import { Alert, AlertTitle, Box, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import login from '../../../images/login.png';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Register = () => {
    const { user, registerUser, isLoading, authError } = useAuth();
    const [loginData, setLoginData] = useState({})

    const handleInputChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);

    }

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        if (loginData.password !== loginData.password2) {
            alert('Your Password did not match');
            return;
        }
        registerUser(loginData.email, loginData.password)

        alert('submitting form')
    }
    return (
        <Container>
            <Grid container>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box>
                        <Typography variant="h5">Register</Typography>
                        {!isLoading && <form onSubmit={handleLoginSubmit}>
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
                            <TextField
                                onChange={handleInputChange}
                                sx={{ width: '75%', m: 1 }}
                                name="password2"
                                type="password"
                                id="standard-basic"
                                label="Retype Password"
                                variant="standard" />
                            <Button type="submit" variant="contained" sx={{ width: '75%', m: 1 }}>Register</Button>
                            <NavLink
                                to="/login"
                                style={{ textDecoration: 'none' }}
                            >
                                <Button variant="text">Already Registered? Please Login</Button>
                            </NavLink>
                        </form>}
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">
                            <AlertTitle>Thank you</AlertTitle>
                            You have been <strong>Registered Successfully.</strong>
                        </Alert>}
                        {authError && <Alert severity="error">
                            <AlertTitle>Error</AlertTitle>
                            <strong>{authError}</strong>
                        </Alert>}
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={login} alt="" style={{ maxWidth: '100%' }} />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;