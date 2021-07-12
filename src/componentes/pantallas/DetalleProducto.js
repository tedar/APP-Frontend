import React from 'react';
import useStyles from '../../theme/useStyles';
import { Button, CardMedia, Container, Grid, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from '@material-ui/core';

const DetalleProducto = () => {
    const classes = useStyles();
    return (
        <Container className={classes.containermt}>
            <Typography variant="h4"  className={classes.text_title}>
                ABRIGO VARIANT
            </Typography>
            <Grid container spacing={4}>
                <Grid item lg={8} md={8} xs={12}>
                    <Paper variant="outlined" square  className={classes.PaperImg}>
                        <CardMedia  className={classes.mediaDetalle}
                        image="https://img01.ztat.net/article/spp-media-p1/06af8325249835dd8f941d64b8966321/70fe3be840154fa2bc7d9a37e4756dac.jpg?imwidth=1800"
                        title="mi producto title"></CardMedia>
                    </Paper>
                </Grid>
                <Grid item lg={4} md={4} xs={12}>
                    <TableContainer componenet={Paper} variant="outlined">
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        <Typography variant="subtitle2">Precio</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle2">25,99€</Typography>
                                    </TableCell>                                    
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <Typography variant="subtitle2">Cantidad</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <TextField
                                        size="small"
                                        select
                                        variant="outlined" >
                                            <MenuItem values={1}>1</MenuItem>
                                            <MenuItem values={2}>2</MenuItem>
                                            <MenuItem values={3}>3</MenuItem>
                                        </TextField>
                                    </TableCell>                                    
                                </TableRow>  
                                <TableRow>
                                    <TableCell colSpan={2}>
                                        <Button variant="contained"
                                        color="primary"
                                        size="large">
                                            Agregar a Carrito
                                        </Button>
                                    </TableCell>
                                </TableRow>                              
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item lg={8} md={8} xs={12}>
                    <Grid container spacing={2}>
                        <Grid item md={6}>
                            <Typography className={classes.text_detalle}>
                                Precio: 25,99€
                            </Typography>
                            <Typography className={classes.text_detalle}>
                                Unidades disponibles: 15
                            </Typography>
                            <Typography className={classes.text_detalle}>
                                Marca: Vaxi
                            </Typography>
                            <Typography className={classes.text_detalle}>
                                Temporada: Invierno
                            </Typography>
                            <Typography className={classes.text_detalle}>
                                Precio: 25,99€
                            </Typography>                                                                                                                
                        </Grid>
                        <Grid item md={6}>
                            <Typography className={classes.text_detalle}>
                                Descripción: 
                            </Typography>
                            <Typography className={classes.text_detalle}>
                            Esta es la descipcion
                            </Typography>                                                                                                                                            
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default DetalleProducto;