import { Avatar, Button, Container, Divider, Grid, Icon, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from '../../theme/useStyles';
import ImageUploader from 'react-images-upload';/* importamos ImageU ploader */

const Perfil = (props) => {
    const classes = useStyles();
    const verDetalles = () => {
        const id = "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed";
        props.history.push("/ordenCompra/"+ id);
    }
    return (
        <Container className={classes.containermt}>
            <Grid container spacing={2}>
                <Grid item md={3} xs={12}>
                    <Typography variant="h5" className={classes.text_title}>
                        PERFIL DE USUARIO
                    </Typography>
                    <form onSubmit={(e) => e.preventDefault()} className={classes.form}>
                        <ImageUploader
                        withIcon={false}
                        buttonStyles={{borderRadius: "50%", padding: 10, margin: 0,
                        position: "absolute", bottom: 15, left: 15}}
                        className={classes.imageUploader}
                        buttonText={<Icon>add_a_photo</Icon>}
                        label={
                        <Avatar alt="Mi Perfil" className={classes.avatarPefil}
                        src="https://www.birbe.org/wp-content/uploads/hombre-guapo.jpg"/>
                        }
                        imgExtension={['.jpg', '.gif', '.png', '.gif']}
                        maxFileSize={5242880}
                        />
                        <TextField
                        label="Nombre"
                        variant="outlined" 
                        fullWidth
                        className={classes.gridmb}
                        value="John"
                        />
                        <TextField
                        label="Apellidos"
                        variant="outlined" 
                        fullWidth
                        className={classes.gridmb}
                        value="Peralta"
                        />
                        <TextField
                        label="Correo Electronico"
                        variant="outlined" 
                        fullWidth
                        className={classes.gridmb}
                        value="john@gmail.com"
                        />
                        <Divider className={classes.divider}/>
                        <TextField
                        label="Password"
                        variant="outlined" 
                        fullWidth
                        className={classes.gridmb}
                        />
                        <TextField
                        label="Confirmar Password"
                        variant="outlined" 
                        fullWidth
                        className={classes.gridmb}
                        />
                        <Button
                        variant="contained"
                        color="primary"
                        >
                            ACTUALIZAR
                        </Button>
                    </form>
                </Grid>
                <Grid item md={9} xs={12}>
                    <Typography variant="h5" className={classes.text_title}>
                        MIS PEDIDOS
                    </Typography>
                    <TableContainer className={classes.form}>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell>FECHA</TableCell>
                                    <TableCell>TOTAL</TableCell>
                                    <TableCell>PAGADO</TableCell>
                                    <TableCell>ENTREGADO</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed</TableCell>
                                    <TableCell>2020-12-15</TableCell>
                                    <TableCell>60.00</TableCell>
                                    <TableCell>2020-12-15</TableCell>
                                    <TableCell>
                                        {/* <Icon className={classes.iconNotDelivered}>
                                            clear
                                        </Icon> */}
                                        <Icon className={classes.iconDelivered}>
                                            check
                                        </Icon>
                                    </TableCell>
                                    <TableCell>
                                        <Button
                                        variant="contained"
                                        onClick={verDetalles}>
                                            DETALLES
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

export default Perfil;