import { Icon, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from '../../../theme/useStyles';

const MenuMovilPublico = (props) => {

    const classes = useStyles();

    return (
        <>
            <ListItem button onClick={props.clickHandler} className={classes.listItem}>
                <Link to="/login" className={classes.linkAppBarMobile}>
                    <ListItemIcon className={classes.linkItemIcon}>
                        <Icon>person</Icon>
                        <ListItemText>
                        Login
                        </ListItemText>                        
                    </ListItemIcon>                              
                </Link>
            </ListItem>            
            <ListItem button onClick={props.clickHandler} className={classes.listItem}>
                <Link to="/carrito" className={classes.linkAppBarMobile}>                   
                    <ListItemIcon className={classes.linkItemIcon}>
                        <Icon>shopping_cart</Icon>
                        <ListItemText>
                        Mis Pedidos
                        </ListItemText>                        
                    </ListItemIcon>                    
                </Link>
            </ListItem>               
        </>
    );
};

export default MenuMovilPublico;