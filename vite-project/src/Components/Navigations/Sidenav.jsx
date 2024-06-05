import {React,useState} from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import {useNavigate} from 'react-router-dom'



const Sidenav = () =>  {
    const navigate = useNavigate()
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar  position="fixed" open={open}>
                <Toolbar >
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Performance Manager
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    <ListItem disablePadding sx={{display:'block'}}>
                        <ListItemButton  sx={{minHeight: 48,justifyContent: open ? 'initial' : 'center',px: 2.5}} onClick={() => navigate('/home')}>
                            <ListItemIcon sx={{minWidth: 0,mr: open ? 3 : 'auto',justifyContent: 'center',}}><HomeOutlinedIcon /></ListItemIcon>
                            <ListItemText sx={{ opacity: open ? 1 : 0 }}>Home</ListItemText>
                        </ListItemButton>
                    </ListItem>
                </List>
                <List>
                    <ListItem disablePadding sx={{display:'block'}}>
                        <ListItemButton  sx={{minHeight: 48,justifyContent: open ? 'initial' : 'center',px: 2.5}}>
                            <ListItemIcon sx={{minWidth: 0,mr: open ? 3 : 'auto',justifyContent: 'center',}}><HomeOutlinedIcon /></ListItemIcon>
                            <ListItemText sx={{ opacity: open ? 1 : 0 }}>Doctors Performance</ListItemText>
                        </ListItemButton>
                    </ListItem>
                </List>
                <List>
                    <ListItem disablePadding sx={{display:'block'}}>
                        <ListItemButton  sx={{minHeight: 48,justifyContent: open ? 'initial' : 'center',px: 2.5}}>
                            <ListItemIcon sx={{minWidth: 0,mr: open ? 3 : 'auto',justifyContent: 'center',}}><HomeOutlinedIcon /></ListItemIcon>
                            <ListItemText sx={{ opacity: open ? 1 : 0 }}>Doctors Profile</ListItemText>
                        </ListItemButton>
                    </ListItem>
                </List>
                <List>
                    <ListItem disablePadding sx={{display:'block'}}>
                        <ListItemButton  sx={{minHeight: 48,justifyContent: open ? 'initial' : 'center',px: 2.5}}>
                            <ListItemIcon sx={{minWidth: 0,mr: open ? 3 : 'auto',justifyContent: 'center',}}><HomeOutlinedIcon /></ListItemIcon>
                            <ListItemText sx={{ opacity: open ? 1 : 0 }}>Manage Centre</ListItemText>
                        </ListItemButton>
                    </ListItem>
                </List>
                <List>
                    <ListItem disablePadding sx={{display:'block'}}>
                        <ListItemButton  sx={{minHeight: 48,justifyContent: open ? 'initial' : 'center',px: 2.5}}>
                            <ListItemIcon sx={{minWidth: 0,mr: open ? 3 : 'auto',justifyContent: 'center',}}><HomeOutlinedIcon /></ListItemIcon>
                            <ListItemText sx={{ opacity: open ? 1 : 0 }}>Manage Locations</ListItemText>
                        </ListItemButton>
                    </ListItem>
                </List>
                <List>
                    <ListItem disablePadding sx={{display:'block'}}>
                        <ListItemButton  sx={{minHeight: 48,justifyContent: open ? 'initial' : 'center',px: 2.5}}>
                            <ListItemIcon sx={{minWidth: 0,mr: open ? 3 : 'auto',justifyContent: 'center',}}><HomeOutlinedIcon /></ListItemIcon>
                            <ListItemText sx={{ opacity: open ? 1 : 0 }}>Manage Pro's</ListItemText>
                        </ListItemButton>
                    </ListItem>
                </List>
                <List>
                    <ListItem disablePadding sx={{display:'block'}}>
                        <ListItemButton  sx={{minHeight: 48,justifyContent: open ? 'initial' : 'center',px: 2.5}}>
                            <ListItemIcon sx={{minWidth: 0,mr: open ? 3 : 'auto',justifyContent: 'center',}}><HomeOutlinedIcon /></ListItemIcon>
                            <ListItemText sx={{ opacity: open ? 1 : 0 }}>Profile</ListItemText>
                        </ListItemButton>
                    </ListItem>
                </List>
                <List>
                    <ListItem disablePadding sx={{display:'block'}}>
                        <ListItemButton  sx={{minHeight: 48,justifyContent: open ? 'initial' : 'center',px: 2.5}}>
                            <ListItemIcon sx={{minWidth: 0,mr: open ? 3 : 'auto',justifyContent: 'center',}}><HomeOutlinedIcon /></ListItemIcon>
                            <ListItemText sx={{ opacity: open ? 1 : 0 }}>Logout</ListItemText>
                        </ListItemButton>
                    </ListItem>
                </List>
               
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
            </Box>
        </Box>
    );
}

export default Sidenav
