import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


import DashboardIcon from '@mui/icons-material/Dashboard';
import EventIcon from '@mui/icons-material/Event';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import EventNoteIcon from '@mui/icons-material/EventNote';
import SettingsIcon from '@mui/icons-material/Settings';
import { NavLink } from 'react-router-dom';
import { Button, ListItemButton } from '@mui/material';
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddDoctor from '../AddDoctor/AddDoctor';
import useAuth from '../../../hooks/useAuth';

const drawerWidth = 250;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { isAdmin } = useAuth();

    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div style={{ backgroundImage: 'linear-gradient(to bottom, aquamarine , rgb(91,146,229))', color: 'white', height: '100%' }}>

            <Toolbar />

            <NavLink to="/appointment" style={{ textDecoration: 'none', color: 'white' }}>
                <ListItem>
                    <ListItemButton>
                        <ListItemText primary="Get an Appointment" />
                    </ListItemButton>
                </ListItem>
            </NavLink>
            <NavLink to={`${url}`} style={{ textDecoration: 'none', color: 'white' }}>
                <ListItem>
                    <ListItemButton>
                        <ListItemText primary="Dashboard" />
                    </ListItemButton>
                </ListItem>
            </NavLink>
            {isAdmin && <Box>
                <NavLink to={`${url}/makeAdmin`} style={{ textDecoration: 'none', color: 'white' }}>
                    <ListItem>
                        <ListItemButton>
                            <ListItemText primary="Make Admin" />
                        </ListItemButton>
                    </ListItem>
                </NavLink>
                <NavLink to={`${url}/addDoctor`} style={{ textDecoration: 'none', color: 'white' }}>
                    <ListItem>
                        <ListItemButton>
                            <ListItemText primary="Add Doctor" />
                        </ListItemButton>
                    </ListItem>
                </NavLink>
            </Box>}

            {/* <Link to={`${url}`}>
                <Button color="inherit">Dashboard</Button>
            </Link>
            <Link to={`${url}/makeAdmin`}>
                <Button color="inherit">Make Admin</Button>
            </Link>
            <Link to={`${url}/addDoctor`}>
                <Button color="inherit">Add Doctor</Button>
            </Link> */}

            <List>
                {['Dashboard', 'Appointments', 'Patients', 'Prescription', 'Settings'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index === 0 && <DashboardIcon />}
                            {index === 1 && <EventIcon />}
                            {index === 2 && <PeopleOutlineIcon />}
                            {index === 3 && <EventNoteIcon />}
                            {index === 4 && <SettingsIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex', backgroundColor: 'rgba(127,255,212,0.2)', height: '100vh' }}>
            <CssBaseline />
            <AppBar

                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar sx={{ backgroundColor: 'white' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h5" noWrap component="div" sx={{ color: 'black' }}>
                        Appointments
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box

                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer

                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}

                >
                    {drawer}
                </Drawer>
                <Drawer

                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box

                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route path={`${path}/addDoctor`}>
                        <AddDoctor></AddDoctor>
                    </Route>
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
