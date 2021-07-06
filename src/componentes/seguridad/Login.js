import React from 'react';
import { Avatar, Button, Card, Container, Grid, Icon, Link, makeStyles, TextField, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    containermt: {
        marginTop: 30
    },
    card: {
        padding:30
    },
    avatar: {
        backgroundColor: '#3a0ca3',
        width: 80,
        height: 80
    }, 
    icon: {
        fontSize: 60
    },
    form: {
        marginTop: 40,
        marginBotton: 40
    },
    gridmb: {
        marginBotton: 20
    },
    link:{
        marginTop: 8
    }
})

const Login = () => {
    const classes = useStyles();
    return (
    <Container className={classes.containermt}>
        <Grid container justify="center">
            <Grid item lg={5} md={6}>
                <Card  className={classes.card}align="center">
                    <Avatar className={classes.avatar}>
                        <Icon className={classes.icon}>person</Icon>
                    </Avatar>
                    <Typography variant="h5" color="primary">Introduzca el usuario</Typography>
                    <form className={classes.form}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} className={classes.gridmb}>
                                <TextField label="Email" variant="outlined" fullWidth type="email">
                                </TextField>
                            </Grid>
                            <Grid item xs={12} className={classes.gridmb}>
                                <TextField label="Password" variant="outlined" fullWidth type="password">
                                </TextField>                                                                
                            </Grid>
                            <Grid item xs={12} className={classes.gridmb}>
                                <Button variant="contained" fullWidth color="primary">Entrar</Button>
                            </Grid>                            
                        </Grid>
                        <Link
                            href="/"
                            variant="body1"
                            className={classes.link}>
                            ¿No tienes cuenta?, Registrate
                        </Link>                   
                    </form>
                </Card>
            </Grid>
        </Grid>        
    </Container>
    );
};

export default Login;