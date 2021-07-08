import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import Login from './componentes/seguridad/Login';
import RegistrarUsuario from './componentes/seguridad/RegistrarUsuario';
import theme from './theme/theme';
import MenuAppBar from './componentes/navegacion/MenuAppBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() 
{
  return (
    <ThemeProvider theme={theme}>
      <Router>
      <MenuAppBar/>
        <Switch>
          <Route exac path="/login" component={Login}/>
          <Route exac path="/registrar" component={RegistrarUsuario}/>
        </Switch>
      </Router>
    </ThemeProvider>    
  );
}

export default App;
