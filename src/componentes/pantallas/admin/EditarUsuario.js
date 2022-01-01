import { Button, Container, Checkbox, FormControl, FormControlLabel, Grid, TextField, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from '../../../theme/useStyles';

const EditarUsuario = () => {
    const classes = useStyles();
    return (
        <Container className={classes.containermt}>
            <Grid container justify="center">
                <Grid item lg={6} sm={12}>
                    <Typography variant='h4' className={classes.text_title}>
                     Editar Usuario
                    </Typography>
                    <form onSubmit={(e) => e.preventDefault()} className={classes.form}>
                        <TextField
                        label="Nombre"
                        variant="filled"
                        value="Nestor Arcilla"
                        fullWidth
                        disabled
                        className={classes.gridmb}></TextField>
                        <TextField
                        label="Correo electronico"
                        variant="filled"
                        value="nestor.arcilla@gmail.com"
                        fullWidth
                        disabled
                        ></TextField>                        
                        <FormControl className={classes.checkbox}>
                            <FormControlLabel
                            control={<Checkbox color="primary"></Checkbox>}
                            label="Es administrador"></FormControlLabel>
                        </FormControl>
                        <Button
                        variant="contained"
                        color="primary"
                        >
                            Actualizar
                        </Button>
                    </form>
                </Grid>
            </Grid>

        </Container>
    );
};

export default EditarUsuario;