import Header from "../componentes/header/header.js";
import {Link} from 'react-router-dom';
import TextField from "@mui/material/TextField";
import {Button } from '@mui/material'
import "./Cadastro.css";

export function Cadastro() {
  return (
    <div>
      <Header />
      <br/>
        <nav>
        <br/>
        <Link to="../">Home</Link>
           {"   >  "} 
        <Link to="../Cadastro">Adicionar Produto</Link>
        </nav>

      <div class="quadro">
        <h2>Adicionar Produtos</h2>
        <form >
          <TextField
            className="campo"
            id="outlined-basic"
            label="Nome do Produto"
            variant="outlined"
          />
           <br/>
          <TextField
            className="campo"
            id="outlined-basic"
            label="Marca"
            variant="outlined"
          />
           <br/>
          <TextField
            className="campo"
            id="outlined-basic"
            label="Valor"
            variant="outlined"
          />
           <br/>
          <TextField
            className="campo"
            id="outlined-basic"
            label="Cor"
            variant="outlined"
          />
           <br/>
          <TextField
            className="campo"
            id="outlined-basic"
            label="Data do Cadastro"
            type="date"
            variant="outlined"   
          />
          <br/>
          <br/>
          <br/>
          <input class="addimg" type="file" onClick="{abrirfoto}"/>        
           
           <br/>
           <br/>
           <br/>


            <Button class="botão" variant="contained" size="large">Adicionar Produto            
           </Button>

           </form>
      </div>
    </div>
  );
}
