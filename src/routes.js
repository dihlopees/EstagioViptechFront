import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./pages/Home";
import {Cadastro} from "./pages/Cadastro";
import {Carrinho} from "./pages/Carrinho";
import {Editar} from "./pages/Editar";

const Rota = () => {
    return (
        <BrowserRouter>
        <Routes>
        <Route element = {<Home/>} path="/" exact/>
        <Route element= {<Cadastro/>} path="cadastro" />
        <Route element={<Carrinho/>} path="carrinho"/>
        <Route element={<Editar/>} path="editar"/>
        </Routes>
        </BrowserRouter>
    )
}
export default Rota;