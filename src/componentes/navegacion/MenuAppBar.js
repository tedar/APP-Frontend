import React, {useState}  from 'react';
import { AppBar, Button, Container, Drawer, Icon, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@material-ui/core';
import useStyles from '../../theme/useStyles';
import { Link } from 'react-router-dom';
import MenuCliente from './desktop/MenuCliente';
import MenuAdmin from './desktop/MenuAdmin';
import MenuMovil from './movil/MenuMovil';

const MenuAppBar = () => {
    const [open, setOpen] = useState(false);
    const classes= useStyles();
    
    const openToggle = () => {
        setOpen(true);
    }

    
    const closeToggle = () => {
        setOpen(false);
    }

    return (
        <div>
            <AppBar position="static" className={classes.appBar}>
                <Container>
                    <Toolbar>
                        <div className={classes.sectionMobile}>
                            <IconButton color="inherit" onClick={openToggle}>
                                <Icon fontSize="large">menu</Icon>
                            </IconButton>
                        </div>
                        <Drawer
                        open={open}
                        onClose={closeToggle}>
                            <div className={classes.list}>
                                <List>
                                    {/*
                                    <ListItem button onClick={closeToggle} className={classes.listItem}>
                                        <Link to="/login" color="inherited" underline="none" className={classes.linkAppBarMobile}>
                                            <ListItemIcon className={classes.linkItemIcon}>
                                                <Icon>person</Icon>
                                            </ListItemIcon>
                                            <ListItemText>
                                                Login
                                            </ListItemText>
                                        </Link>
                                    </ListItem>
                                    */}
                                    <MenuMovil clickHandler={closeToggle}/>
                                </List>
                            </div>                        
                        </Drawer>
                        <div className={classes.grow}>
                            <Link to="/" color="inherit" className={classes.linkAppBarLogo} underline="none">
                                <Icon className={classes.mr} fontSize="large">store</Icon>
                                <Typography variant="h5">VAXI SHOP</Typography>
                            </Link>
                        </div>
                        <div className={classes.sectionDesktop}>
                            <MenuCliente />
                            <MenuAdmin />
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
};

export default MenuAppBar;