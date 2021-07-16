import { Button, CardMedia, Container, Divider, Grid, Paper, Table, TableBody, TableCell, 
    TableContainer, TableRow, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from '../../theme/useStyles';

const OrdenCompra = (props) => {
    const {id} = props.match.params;
    const mensajeEnvio = "Entregado";
    const mensajePago = "Pagado";
    const classes = useStyles();
    return (
        <Container className={classes.containermt}>
            <Typography variant="h5" className={classes.text_title}>
                ORDEN DE COMPRA: {id.toUpperCase()} 
            </Typography>
            <Grid container spacing={2} className={classes.paperPadding}>
                <Grid item md={8} xs={12}>
                    <Typography variant="h6" className={classes.text_title}>
                        ENVIO
                    </Typography>
                    <Typography variant="body2" className={classes.text_envio}>
                        Nombres: Nestor Arcila
                    </Typography>
                    <Typography variant="body2" className={classes.text_envio}>
                        Email: nestor@gmail.com
                    </Typography>
                    <Typography variant="body2" className={classes.text_envio}>
                        Direccion: Calle 2, Cali, Colombia
                    </Typography>
                    <div className={classes.alertDelivered}>
                        <Typography variant="body2" className={classes.text_title}>
                            {mensajeEnvio}
                        </Typography>
                    </div>
                    <Divider className={classes.divider}/>
                    <Typography variant="h6" className={classes.text_title}>
                        METODO DE PAGO
                    </Typography>
                    <Typography>
                        Metodo: PayPal
                    </Typography>
                    <div className={classes.alertDelivered}>
                        <Typography variant="body2" className={classes.text_title}>
                            {mensajePago}
                        </Typography>
                    </div>
                    <Divider className={classes.divider}/>
                    <Typography variant="h6" className={classes.text_title}>
                        PRODUCTOS
                    </Typography>
                    <TableContainer className={classes.gridmb}>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                    <CardMedia 
                                    className={classes.imgProductoPC}
                                    image="https://tottope.vteximg.com.br/arquivos/ids/167188-1000-1000/PILIGRAM-H-1810-V07_A.png?v=636723781789170000"
                                    title="Imagen en Carrito"
                                    />
                                    </TableCell>
                                    <TableCell>
                                        <Typography className={classes.text_detalle}>
                                            Abrigo Vaxi Moda 2020
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography className={classes.text_detalle}>
                                            2 x $25.00 = $50.00
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            
                <Grid item md={4} xs={12}>
                    <TableContainer component={Paper} square>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell colSpan={2}>
                                        <Typography variant="h6" className={classes.text_title}>
                                            RESUMEN DEL PEDIDO
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <Typography className={classes.text_title}>
                                            Productos
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography className={classes.text_detalle}>
                                            $50.00
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <Typography className={classes.text_title}>
                                            Envio
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography className={classes.text_detalle}>
                                            $2.00
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <Typography className={classes.text_title}>
                                            Impuesto
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography className={classes.text_detalle}>
                                            $8.00
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <Typography className={classes.text_title}>
                                            Total
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography className={classes.text_detalle}>
                                            $60.00
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={2}>
                                        <Button
                                        variant="contained"
                                        color="primary"
                                        size="large"
                                        fullWidth
                                        className={classes.gridmb}
                                        >
                                            PayPal
                                        </Button>
                                        <Button
                                        variant="contained"
                                        size="large"
                                        fullWidth
                                        >
                                            Tarjeta de Credito o Debito
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Container>
    );
};

export default OrdenCompra;