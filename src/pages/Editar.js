import Header from "../componentes/header/header.js";
import {Link} from 'react-router-dom';
import TextField from "@mui/material/TextField";
import {Button } from '@mui/material';
import AddFoto from "../imagens/icone-adicionar-foto.svg";
import "./Cadastro.css";

export function Editar() {
  return (
    <div>
      <Header />
      <br/>
        <nav class="link">
        <br/>
        <Link to="../">Home</Link>
           {"   >  "} 
        <Link to="../Editar">Editar Produto</Link>
        </nav>

        <h2 class="h">Editar Produtos</h2>

      <div class="quadro">
        
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
            select
            label="Cor"
            variant="outlined"
          />
           <br/>
          <TextField
            className="campo"
            id="outlined-basic"
            label="Data do Cadastro"
            type="date"
            placeholder="none"
            variant="outlined"   
            InputLabelProps={
              {
                shrink: true,
              }
            }
          />
          <br/>
          <br/>
          <br/>
          <input class="addimg" type="file" onClick="{abrirfoto}" />   
          <img src={AddFoto} alt="adicionar foto"/>
           <br/>
           <br/>
           <br/>


            <Button class="botão" variant="contained" size="large">Salvar Produto            
           </Button>

           </form>
      </div>
    </div>
  );
}
