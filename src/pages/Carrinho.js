import React from "react";
import Header from "../componentes/header/header.js";
import { Link } from "react-router-dom";
import Menos from "../imagens/iconecarrinho-menos.svg";
import Plus from "../imagens/iconecarrinho-mais.svg";
import "./Carrinho.css";

export function Carrinho() {
  const [count, setCount] = React.useState(1);

  function diminuir() {
    if (count > 1){ setCount(count - 1);    } 
  }

  return (
    <div>
      <Header />

      <br />
      <nav>
        <br />
        <Link to="../">Home</Link>
        {"   >   "}
        <Link to="../Carrinho">Carrinho</Link>
      </nav>

      <div class="cardcarrinho">
        <h1>Carrinho</h1>
        <p>imagem</p>
        <p>imagem</p>
        <p>imagem</p>
        <p>imagem</p>
      </div>
      <div class="quantidade">
        <h3> Quantidade:</h3>
        <button size="small" onClick={diminuir}>
          <img src={Menos} alt="diminuir" />
        </button>
        <p> {count} </p>
        <button size="small"
          onClick={() => setCount(count + 1)}> <img src={Plus} alt="aumentar" />
        </button>
        <h2>VALOR</h2>
      </div>

      <div class="cardresumo">
        <h1>Resumo do Pedido</h1>
      </div>
    </div>
  );
}
