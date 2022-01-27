import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./pages/Home";
import {Cadastro} from "./pages/Cadastro";

const Rota = () => {
    return (
        <BrowserRouter>
        <Routes>
        <Route element = {<Home/>} path="/" exact/>
        <Route element= {<Cadastro/>} path="cadastro" />
        </Routes>
        </BrowserRouter>
    )
}
export default Rota;