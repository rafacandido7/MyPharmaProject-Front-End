import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import EditIcon from '@mui/icons-material/Edit';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton component="a" href="/admin">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Menu Principal" />
    </ListItemButton>
    <ListItemButton component="a" href="/products">
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Produtos" />
    </ListItemButton>
    <ListItemButton component="a" href="/products/product_registration">
      <ListItemIcon>
        <AppRegistrationIcon />
      </ListItemIcon>
      <ListItemText primary="Cadastro de Produtos" />
    </ListItemButton>
    <ListItemButton component="a" href="/products/product_editing/:idProduct"> 
      <ListItemIcon>
        <EditIcon />
      </ListItemIcon>
      <ListItemText primary="Atualização de Cadastro" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
        Fale Conosco <br />
        (61) 99995-0847 <br /> {/* Dar um jeito de centralizar isso. */}
        rafacandido0708@gmail.com 
    </ListSubheader>
  </React.Fragment>
);
