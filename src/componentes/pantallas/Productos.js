import React, { useEffect, useState } from 'react';
import { Avatar, Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import useStyles from '../../theme/useStyles';
import { getProductos } from '../../actions/ProductoActions';
import { Pagination } from '@material-ui/lab';
import { useNavigate } from 'react-router-dom';


const Productos = (props) => {

    const [requestProductos, setRequestProductos] = useState({
        pageIndex: 1,
        pageSize: 2,
        search: ''
    });

    const [paginadorProductos, setPaginadorProductos] = useState({
        count: 0,
        pageIndex: 0,
        pageSize: 0,
        pageCount: 0,
        data: []
    });

    const handleChange = (event, value) => {
        setRequestProductos( (anterior) => ({... anterior,
        pageIndex: value}))
    }
    
    const navigate = useNavigate();

    useEffect(() => {
        
        const getListaProductos = async () => {
            
            const response = await getProductos(requestProductos);        
            setPaginadorProductos(response.data);
        }

        getListaProductos();        

        //console.log("paginadorProductos", paginadorProductos);

    },[requestProductos]);

    const verProducto = (id) => {
        //props.history.push("/detalleProducto/" + id);
        navigate("/detalleProducto/" + id);
    }

    const classes= useStyles();    
    
    if(!paginadorProductos.data){
        return null;
    }

    return (        
        <Container className={classes.containermt}>
            <Typography variant="h4" className={classes.text_title}>
                Productos
            </Typography>
            <Grid container spacing={4}>
                {paginadorProductos.data.map(data => (
                    <Grid item lg={3} md={4} sm={6} xs={12} key={data.id}>
                    <Card>
                        <CardMedia 
                        className={classes.media}
                        image="https://img01.ztat.net/article/spp-media-p1/06af8325249835dd8f941d64b8966321/70fe3be840154fa2bc7d9a37e4756dac.jpg?imwidth=1800"
                        title="panoli">
                            <Avatar variant="square" className={classes.price}>
                                {data.precio}$
                            </Avatar>
                        </CardMedia>
                        <CardContent>
                            <Typography variant="h6" className={classes.text_card}>
                                {data.nombre}
                            </Typography>                            
                            <Button
                            variant="contained"
                            color="primary"
                            onClick={() => verProducto(data.id)}>
                                MAS DETALLES
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
                ))
                }

            </Grid>
            <Pagination 
            count={paginadorProductos.pageCount}
            page={paginadorProductos.pageIndex}
            onChange={handleChange}></Pagination>
        </Container>
    );
};

export default Productos;