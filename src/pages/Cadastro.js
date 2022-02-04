import React, { useEffect } from 'react';
import api from "../api";
import Header from "../componentes/header/header.js";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { Button, Select } from "@mui/material";
import AddFoto from "../imagens/icone-adicionar-foto.svg";
import "./Cadastro.css";

export function Cadastro() {

  const [cor, setCor] = React.useState("");
  //para pegar os dados e enviar para o banco temos que criar uma consts dessas pra cada um.
  //crio uma const para maperar o objeto.
  //crio uma constante para fazer setCor event.target.value e depois coloco no onchange.
  const [itCor, setitCor] = React.useState([]);

  

  
  const opcoes = (event) => {
    setCor(event.target.value);
  };

  useEffect(()=> {
    trazerDados();
  },[]);

  function trazerDados() {
    api.get("/cor").then((temp) => {
      setitCor(temp.data)
    })
  }

  return (
    <div>
      <Header />
      <br />
      <nav class="link">
        <br />
        <Link to="../">Home</Link>
        {"   >  "}
        <Link to="../Cadastro">Adicionar Produto</Link>
      </nav>


      <h2 class="h">Adicionar Produtos</h2>


     
      <div class="quadro">
        <form>
          <TextField
            className="campo"
            id="outlined-basic"
            label="Nome do Produto"
            variant="outlined"
            //onChange={colocar a constante que criei para pegar os dados criados}
          />
          <br />
          <TextField
            className="campo"
            id="outlined-basic"
            label="Marca"
            variant="outlined"
          />
          <br />
          <TextField
            className="campo"
            id="outlined-basic"
            label="Valor"
            variant="outlined"
          />
          <br />
          <InputLabel>Cor</InputLabel>
          <Select
            className="campo"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={cor}
            onChange={opcoes}
            
          >
           { 
           itCor.map((it) => (
            <MenuItem value={it.id}>{it.nome}</MenuItem>
           ))
           }
           
          </Select>
          
          <br />
          <TextField
            className="campo"
            id="outlined-basic"
            label="Data do Cadastro"
            type="date"
            placeholder="none"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <br />
          <br />
          <br />
          <input class="addimg" type="file" onClick="{abrirfoto}" />
          <img src={AddFoto} alt="adicionar foto" />
          <br />
          <br />
          <br />
          <Button class="botão" variant="contained" size="large">
            Adicionar Produto
          </Button>
        </form>
      </div>
    </div>
  );
}
