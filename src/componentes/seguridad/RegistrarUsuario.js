import React from 'react';
import { Avatar, Button, Card, Container, Grid, Icon, TextField, Typography } from '@material-ui/core';
import useStyles from '../../theme/useStyles';
import { Link } from 'react-router-dom';

const RegistrarUsuario = () => {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            <Grid container justify="center">
                <Grid item lg={6} md={8}>
                    <Card className={classes.card} align="center">
                        <Avatar className={classes.avatar} >
                            <Icon className={classes.icon} >person_add</Icon>
                        </Avatar>
                        <Typography variant="h5" color="primary">Registro de usuario</Typography>
                        <form className={classes.form}>
                            <Grid container spacing={2}>
                                <Grid item md={6} xs={12} className={classes.gridmb}>
                                    <TextField
                                    label="Nombre"
                                    variant="outlined"
                                    fullWidth
                                    ></TextField>
                                </Grid>
                                <Grid item md={6} xs={12} className={classes.gridmb}>
                                    <TextField
                                    label="Apellidos"
                                    variant="outlined"
                                    fullWidth
                                    ></TextField>
                                </Grid>         
                                <Grid item md={12} xs={12} className={classes.gridmb}>
                                    <TextField
                                    label="Email"
                                    variant="outlined"
                                    fullWidth
                                    type="email"
                                    ></TextField>
                                </Grid>        
                                <Grid item md={12} xs={12} className={classes.gridmb}>
                                    <TextField
                                    label="Password"
                                    variant="outlined"
                                    fullWidth
                                    type="password"
                                    ></TextField>
                                </Grid>            
                                <Grid item md={12} xs={12} className={classes.gridmb}>
                                    <Button
                                    variant="contained"
                                    fullWidth
                                    color="primary">
                                        Registrar
                                    </Button>
                                </Grid>                                                                                    
                            </Grid>
                            <Link
                                to="/login"
                                variant="body1"
                                className={classes.link}>
                                ¿Ya tienes una cuenta?, loguéate
                            </Link>                                    
                        </form>                        
                    </Card>
                </Grid>
            </Grid>            
        </Container>
    );
};

export default RegistrarUsuario;