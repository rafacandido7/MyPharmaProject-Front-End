import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Import ADMIN
import Dashboard from './pages/admin/dashboard';

import ProductList from './pages/admin/products/index';
import ProductRegistration from './pages/admin/products/product_registration';
import ProductEditing from './pages/admin/products/product_editing';


//Import Client
import ProductDetails from './pages/client/products/product_details';

export default function Rotas () {
    return (
        <BrowserRouter>
            <Routes>
                {/* Rota Cliente */}
                <Route path="/" exact element={<Dashboard />}/>
                <Route path="/produtcs/:id" exact element={<ProductDetails/>}/>

                {/* Rota Admin */}
                <Route path="/admin" exact element={<Dashboard/>}/>
                <Route path="/products" exact element={<ProductList/>}/>
                <Route path="/products/product_registration" exact element={<ProductRegistration/>}/>
                <Route path="/products/product_editing/:idProduct" exact element={<ProductEditing/>}/>
            </Routes>
        </BrowserRouter>
    )
}