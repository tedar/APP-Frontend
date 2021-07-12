import React from 'react';
import { Avatar, Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import useStyles from '../../theme/useStyles';
import {ProductoArray} from '../data/dataPrueba';


const Producto = (props) => {

    const miArray = ProductoArray;

    const verProducto = (id) => {
        props.history.push("/detalleProducto/" + id);
    }

    const classes= useStyles();    
    
    return (        
        <Container className={classes.containermt}>
            <Typography variant="h4" className={classes.text_title}>
                Productos
            </Typography>
            <Grid container spacing={4}>
                {miArray.map(data => (
                    <Grid item lg={3} md={4} sm={6} xs={12} key={data.key}>
                    <Card>
                        <CardMedia 
                        className={classes.media}
                        image="https://img01.ztat.net/article/spp-media-p1/06af8325249835dd8f941d64b8966321/70fe3be840154fa2bc7d9a37e4756dac.jpg?imwidth=1800"
                        title="panoli">
                            <Avatar variant="square" className={classes.price}>
                            {data.key} KK
                                {data.precio}
                            </Avatar>
                        </CardMedia>
                        <CardContent>
                            <Typography variant="h6" className={classes.text_card}>
                                {data.titulo}
                            </Typography>                            
                            <Button
                            variant="contained"
                            color="primary"
                            onClick={() => verProducto(data.key)}>
                                MAS DETALLES
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
                ))
                }

            </Grid>
        </Container>
    );
};

export default Producto;