import Header from "../componentes/header/header.js";
import {Link} from 'react-router-dom';
import TextField from "@mui/material/TextField";
import {Button } from '@mui/material'
import "./Cadastro.css";

export function Editar() {
  return (
    <div>
      <Header />
      <br/>
        <nav>
        <br/>
        <Link to="../">Home</Link>
           {"   >  "} 
        <Link to="../Editar">Editar Produto</Link>
        </nav>

      <div class="quadro">
        <h2>Editar Produtos</h2>
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
            variant="outlined"
          />
          <br/>
          <br/>
          <br/>
          <Button class="addimg" type="file" variant="contained" size="large">Adicionar Foto           
           </Button>
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
