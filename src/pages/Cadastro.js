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

  const [cor, setCor] = React.useState();
  const [nome, setNome]= React.useState("");
  const [marca, setMarca]= React.useState("");
  const [imagem, setImagem]= React.useState("");
  const [valor, setValor]= React.useState();
  const [data, setData]= React.useState();
  //para pegar os dados e enviar para o banco temos que criar uma consts dessas pra cada um.
  //crio uma const para maperar o objeto.
  //crio uma constante para fazer setCor event.target.value e depois coloco no onchange.
  const [itCor, setitCor] = React.useState([]);

  function opcoesNome(event) {
    setNome(event.target.value);
  };

  const opcoesMarca = (event) => {
    setMarca(event.target.value);
  };

  const opcoesValor = (event) => {
    setValor(event.target.value);
  };

  const opcoesData = (event) => {
    setData(event.target.value);
  };
  const opcoesImagem = (event) => {
    setImagem(event.target.value);
  };

  const opcoesCor = (event) => {
    setCor(event.target.value);
  };

 

  const produto = [
    {
      nome,
      marca,
      valor,
      data,
      cor

    }
  ];

 

  useEffect(()=> {
    trazerDados();
   
  },[]
  );


  function trazerDados() {
    api.get("/cor").then((temp) => {
      setitCor(temp.data)
    })
  }

  function enviandoBack() {
    console.log(produto);

    api.post('/produtos', {
    nome: nome,
    marca: marca,
    valor: valor,
    datac: data,
    corId: cor,
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
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
            value={nome ??""}
            onChange={opcoesNome}
          />
          <br />
          <TextField
            className="campo"
            id="outlined-basic"
            label="Marca"
            variant="outlined"
            onChange={opcoesMarca}
          />
          <br />
          <TextField
            className="campo"
            id="outlined-basic"
            label="Valor"
            variant="outlined"
            onChange={opcoesValor}
          />
          <br />
          <InputLabel>Cor</InputLabel>
          <Select
            className="campo"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={cor}
            onChange={opcoesCor}
            
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
            type="Date"
            placeholder="none"
            variant="outlined"
            onChange={opcoesData}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <br />
          <br />
          <br />
          <input class="addimg" type="file" onClick="{abrirfoto}" onChange={opcoesImagem} />
          <img src={AddFoto} alt="adicionar foto" />
          <br />
          <br />
          <br />
          <Button class="botão" variant="contained" size="large" onClick={() => enviandoBack()}>
            Adicionar Produto
          </Button>
        </form>
      </div>
    </div>
  );
}
