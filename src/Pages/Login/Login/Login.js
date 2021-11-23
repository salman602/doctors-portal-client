import React, { useState } from 'react';
import { Alert, AlertTitle, Box, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import login from '../../../images/login.png';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { user, isLoading, loginUser, signInWithGoogle, authError } = useAuth();
    const [loginData, setLoginData] = useState({});


    const location = useLocation();
    const navigate = useNavigate();

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

        loginUser(loginData.email, loginData.password, location, navigate);
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, navigate);
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
                        <Button onClick={handleGoogleSignIn} variant="contained">Google Sign in</Button>
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">
                            <AlertTitle>Thank you</AlertTitle>
                            You have been <strong>Logged in Successfully.</strong>
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

export default Login;