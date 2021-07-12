import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import Login from './componentes/seguridad/Login';
import RegistrarUsuario from './componentes/seguridad/RegistrarUsuario';
import Producto from './componentes/pantallas/Producto';
import DetalleProducto from './componentes/pantallas/DetalleProducto';
import theme from './theme/theme';
import MenuAppBar from './componentes/navegacion/MenuAppBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CarritoCompras from './componentes/pantallas/CarritoCompras';
import ProcesoCompra from './componentes/pantallas/ProcesoCompra';

function App() 
{
  return (
    <ThemeProvider theme={theme}>
      <Router>
      <MenuAppBar/>
      <Switch>
        <Route exac path="/login" component={Login}/>
        <Route exac path="/registrar" component={RegistrarUsuario}/>
        <Route exac path="/detalleProducto/:id" component={DetalleProducto}/>
        <Route exact path="/carrito" component={CarritoCompras} />
        <Route exact path="/procesoCompra" component={ProcesoCompra} />
        <Route exac path="/" component={Producto}/>        
      </Switch>
      </Router>
    </ThemeProvider>    
  );
}

export default App;
