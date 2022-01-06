import { Button, Container, Grid, Icon, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useStyles from '../../../theme/useStyles';

const Usuarios = (props) => {
    const classes = useStyles();

    const navigate = useNavigate();

const editarUsuario = () => {
    const id = "23";
    navigate("/admin/usuario/" + id);
    //props.history.push("/admin/usuario/" + id);
}

    return (
        <Container className={classes.containermt}>
            <Typography variant="h4" className={classes}>
                USUARIOS
            </Typography>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>USUARIO</TableCell>
                            <TableCell>EMAIL</TableCell>
                            <TableCell>ADMIN</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    <TableRow>
                        <TableCell>23</TableCell>
                        <TableCell>John Peralta</TableCell>
                        <TableCell>felix@gmamil.com</TableCell>
                        <TableCell>
                            <Icon className={classes.iconDelivered}>
                                check
                            </Icon>
                        </TableCell>
                        <TableCell>
                            <Button 
                                variant="contained"
                                color="primary"
                                onClick={editarUsuario}>
                                <Icon>
                                   edit 
                                </Icon>
                            </Button>
                            <Button 
                                variant="contained"
                                color="secondary"
                                >
                                <Icon>
                                   delete 
                                </Icon>
                            </Button>                            
                        </TableCell>
                        </TableRow>   
                        <TableRow>
                        <TableCell>25</TableCell>
                        <TableCell>Macauly Kulquin</TableCell>
                        <TableCell>felix@gmamil.com</TableCell>
                        <TableCell>
                            <Icon className={classes.iconNotDelivered}>
                                check
                            </Icon>
                        </TableCell>
                        <TableCell>
                            <Button 
                                variant="contained"
                                color="primary"
                                onClick={editarUsuario}>
                                <Icon>
                                   edit 
                                </Icon>
                            </Button>
                            <Button 
                                variant="contained"
                                color="secondary">
                                <Icon>
                                   delete 
                                </Icon>
                            </Button>                            
                        </TableCell>
                        </TableRow>  
                        <TableRow>
                        <TableCell>24</TableCell>
                        <TableCell>Felix Perez</TableCell>
                        <TableCell>felix@gmamil.com</TableCell>
                        <TableCell>
                            <Icon className={classes.iconDelivered}>
                                check
                            </Icon>
                        </TableCell>
                        <TableCell>
                            <Button 
                                variant="contained"
                                color="primary"
                                onClick={editarUsuario}>
                                <Icon>
                                   edit 
                                </Icon>
                            </Button>
                            <Button 
                                variant="contained"
                                color="secondary"
                                >
                                <Icon>
                                   delete 
                                </Icon>
                            </Button>                            
                        </TableCell>
                        </TableRow>                                                                       
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default Usuarios;