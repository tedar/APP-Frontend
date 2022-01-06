import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import Login from './componentes/seguridad/Login';
import RegistrarUsuario from './componentes/seguridad/RegistrarUsuario';
import Productos from './componentes/pantallas/Productos';
import DetalleProducto from './componentes/pantallas/DetalleProducto';
import theme from './theme/theme';
import MenuAppBar from './componentes/navegacion/MenuAppBar';
import { BrowserRouter ,Routes, Route} from 'react-router-dom';
import CarritoCompras from './componentes/pantallas/CarritoCompras';
import ProcesoCompra from './componentes/pantallas/ProcesoCompra';
import OrdenCompra from './componentes/pantallas/OrdenCompra';
import Perfil from './componentes/seguridad/Perfil';
import Usuarios from './componentes/pantallas/admin/Usuarios';
import EditarUsuario from './componentes/pantallas/admin/EditarUsuario';
import ListaProductos from './componentes/pantallas/admin/ListaProductos';
import AgregarProducto from './componentes/pantallas/admin/AgregarProducto';
import EditarProducto from './componentes/pantallas/admin/EditarProducto';
import ListaPedidos from './componentes/pantallas/admin/ListaPedidos';

function App() 
{
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <MenuAppBar/>
      <Routes>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/registrar" element={<RegistrarUsuario/>}/>
        <Route exact path="/detalleProducto/:id" element={<DetalleProducto/>}/>
        <Route exact path="/carrito" element={<CarritoCompras/>} />
        <Route exact path="/procesoCompra" element={<ProcesoCompra/>} />
        <Route exact path="/ordenCompra/:id" element={<OrdenCompra/>} />
        <Route exact path="/perfil" element={<Perfil/>} />  
        <Route exact path="/admin/usuarios" element={<Usuarios/>} />             
        <Route exact path="/admin/usuario/:id" element={<EditarUsuario/>} />    
        <Route exact path="/admin/listaProductos" element={<ListaProductos/>} />   
        <Route exact path="/admin/agregarProducto" element={<AgregarProducto/>} />           
        <Route exact path="/admin/editarProducto/:id" element={<EditarProducto/>} />            
        <Route exact path="/admin/listaPedidos" element={<ListaPedidos/>} />                             
        <Route exact path="/" element={<Productos/>}/>   
        </Routes>     
      </BrowserRouter>
    </ThemeProvider>    
  );
}

export default App;
