import Header from '../componentes/header/header.js';
import {Link} from 'react-router-dom';
import {Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';
import './Home.css'

function Home() {
  //os itens do meu produto é um componente, é onde eu coloco os botoes e é onde vai ser renderizado
  // é onde tem que ter img nome e onde vou passar as props
  //poe classe no itens para fazer css
  //os buttons ja vao ser linkados com as paginas... fazer link to carrinho. e editar.

  //aqui no home em cima fazer o data state, que puxa do api faço .map com props



  return (
    <div className="Home">
      <Header/>

     <nav class="inicio">
     <h1>Produtos</h1>
           <Stack direction="row" spacing={3}>
           <Button class="botão" variant="contained" startIcon={<AddIcon />} size="large">
              <Link to="../Cadastro">Adicionar Produto</Link>
           </Button>
           </Stack>
     </nav>

    
    </div>
  );
}
//meu produtos vao ter que ser renderizados aqui em cima. e mando renderizar a lista
export default Home;
