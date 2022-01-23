import React, {useState} from 'react';
import { Avatar, Button, Card, Container, Grid, Icon, TextField, Typography } from '@material-ui/core';
import useStyles from '../../theme/useStyles';
import { Link, useNavigate } from 'react-router-dom';
import { loginUsuario } from '../../actions/UsuarioAction';

const clearUsuario = {
    email: '',
    pasword: ''
}

const Login = (props) => {
    const classes = useStyles();

    const [usuario, setUsuario] = useState(clearUsuario);

    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUsuario(prev => ({
            ...prev,
            [name]:value
        }))
    }   

    const loginEventoUsuario = () => {
        loginUsuario(usuario).then(response => {
            if (response.status === 200)
            {
                window.localStorage.setItem("token", response.data.token);
                console.log("el login fue exitoso", response.data);
                navigate('/');
            }
            else{
                console.log("credenciales erroreeas");
            }
        });
    }

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
                                <TextField label="Email" variant="outlined" fullWidth type="email"
                                    name="email"
                                    value={usuario.email}
                                    onChange={handleChange}>
                                </TextField>
                            </Grid>
                            <Grid item xs={12} className={classes.gridmb}>
                                <TextField label="Password" variant="outlined" fullWidth type="password"
                                    name="password"
                                    value={usuario.password}
                                    onChange={handleChange}>
                                </TextField>                                                                
                            </Grid>
                            <Grid item xs={12} className={classes.gridmb}>
                                <Button variant="contained" fullWidth color="primary"
                                onClick={loginEventoUsuario}>Entrar</Button>
                            </Grid>                            
                        </Grid>
                        <Link
                            to="/registrar"
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