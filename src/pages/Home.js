import { useState } from "react";
import Header from "../componentes/header/header.js";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Addicon from "../imagens/addicone.svg";
import ItemProduto from "../componentes/item-produto/itemProduto.js";
import dados from "../api.js";
import "./Home.css";


function Home() {
  //os itens do meu produto é um componente, é onde eu coloco os botoes e é onde vai ser renderizado
  // é onde tem que ter img nome e onde vou passar as props
  //poe classe no itens para fazer css
  //os buttons ja vao ser linkados com as paginas... fazer link to carrinho. e editar.

  //aqui no home em cima fazer o data state, que puxa do api faço .map com props
  const [lista, setLista] = useState(dados);

  const itensLista = lista.map((it) => (
    <ItemProduto
      img_url={it.img_url}
      name={it.name}
      marca={it.marca}
      valor={it.valor}
      cor={it.cor}
      id={it.id}
      />
  ));

  return (
    <div>
      <Header />

      <nav class="inicio">

        <Button class="botão" variant="contained" size="large">
          <img src={Addicon} class="icone" alt="adicionar produto" />
          <Link to="../Cadastro">Adicionar Produto</Link>
        </Button>
      </nav>

      <h1>Produtos</h1>
      

      {itensLista}
    </div>
  );
}
//meu produtos vao ter que ser renderizados aqui em cima. e mando renderizar a lista
export default Home;
