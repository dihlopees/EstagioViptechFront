import { useState, useEffect } from "react";
import Header from "../componentes/header/header.js";
import { Link, useParams } from "react-router-dom";
import Menos from "../imagens/iconecarrinho-menos.svg";
import Plus from "../imagens/iconecarrinho-mais.svg";
import api from "../api";
import "./Carrinho.css";
import UnicoItem from "../componentes/itemCarrinho.js/itemCarrinho.js";

export function Produtos() {
  const [count, setCount] = useState(1);
  const [item, setItem] = useState([]);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    trazerCompra();
  }, []);

  function trazerCompra() {
    api
      .get("/produtos/" + id)
      .then((response) => {
        setItem(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }

  function diminuir() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  // const produtoComprado = item.map((it) => (
  //   <UnicoItem
  //     img_url={it.imagem}
  //     name={it.nome}
  //     marca={it.marca}
  //     valor={it.valor}
  //     cor={it.cor}
  //     id={it.id}
  //     key={it.id}
  //   />
  // ));

  console.log(item);

  return (
    <div>
      <Header />

      <br />
      <nav class="link">
        <br />
        <Link to="../">Home</Link>
        {"   >   "}
        <Link to="../Carrinho">Carrinho</Link>
      </nav>

      <div class="cardTitulos">
        <h1> Carrinho</h1>
      </div>



      

      <div class="produto">
        {/* {produtoComprado} */}
        <UnicoItem item={item} />

        <hr id="hr"/>

        <div class="quantidade">
         <h3> Quantidade:</h3>

          <button onClick={diminuir}>
          <img src={Menos} alt="diminuir" />
         </button>

        <p> {count} </p>

        <button onClick={() => setCount(count + 1)}>
          <img src={Plus} alt="aumentar" />
        </button>
        <h2>R$ 300,00</h2>

        </div>
      </div>

      <div class="cardresumo">
        <h1>Resumo do Pedido</h1>
      </div>
    </div>
  );
}
