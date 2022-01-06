import { Button, Container, Icon, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useStyles from '../../../theme/useStyles';

const ListaPedidos = (props) => {

    const classes = useStyles();

    const navigate = useNavigate();

    const verDetalle = () => {
        const id = 23;
        //props.history.push("/ordenCompra/" + id);
        navigate("/ordenCompra/" + id);
    }

    return (
        <Container className={classes.containermt}>
            <Typography variant="h4" className={classes.text_title}>
                PEDIDOS
            </Typography>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>USUARIO</TableCell>
                            <TableCell>FECHA</TableCell>
                            <TableCell>TOTAL</TableCell>
                            <TableCell>PAGADO</TableCell>
                            <TableCell>ENTREGADO</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>24</TableCell>
                            <TableCell>Felix Velazquez</TableCell>
                            <TableCell>23/4/2022</TableCell>
                            <TableCell>123,9</TableCell>
                            <TableCell>Si</TableCell>
                            <TableCell>
                                <Icon className={classes.iconDelivered}>
                                    check
                                </Icon>
                            </TableCell>
                            <TableCell>
                                <Button 
                                variant="contained"
                                color="inherit"
                                onClick={verDetalle}>
                                    DETALLES
                                </Button>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>343</TableCell>
                            <TableCell>Nestor Gomez</TableCell>
                            <TableCell>12/4/2022</TableCell>
                            <TableCell>56</TableCell>
                            <TableCell>No</TableCell>
                            <TableCell>
                                <Icon className={classes.iconNotDelivered}>
                                    check
                                </Icon>
                            </TableCell>
                            <TableCell>
                                <Button  
                                variant="contained"
                                color="inherit"
                                onClick={verDetalle}>
                                    DETALLES
                                </Button>
                            </TableCell>
                        </TableRow>                        
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default ListaPedidos;