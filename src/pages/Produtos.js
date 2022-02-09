import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import Header from "../componentes/header/header.js";
import { Link, useParams } from "react-router-dom";
import Menos from "../imagens/iconecarrinho-menos.svg";
import Plus from "../imagens/iconecarrinho-mais.svg";
import api from "../api";
import "./Produtos.css";
import UnicoItem from "../componentes/itemCarrinho.js/itemCarrinho.js";

export function Produtos() {
  const [count, setCount] = useState(1);
  const [item, setItem] = useState([]);
  let soma = 0;
  let resultado = 0;
  let total = 0;

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    trazerCompra();
  }, []);

  function conv(numero) {
    return numero.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  }

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

  function somaPreco() {
    return (soma = item.valor * count);
  }

  function frete() {
    return (resultado = (soma / 100) * 10);
  }

  function somaTotal() {
    return (total = soma + resultado);
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

      <div class="divtodos">
        <h1 id="titulo"> Carrinho</h1>

        <div class="produto">
          {/* {produtoComprado} */}
          <UnicoItem item={item} />

          <hr id="hr" />

          <div class="quantidade">
            <h3> Quantidade:</h3>

            <button onClick={diminuir}>
              <img src={Menos} alt="diminuir" />
            </button>
            <br />
            <p> {count} </p>
            <br />
            <button onClick={() => setCount(count + 1)}>
              <img src={Plus} alt="aumentar" />
            </button>
            <br />
            <h2>{conv(parseFloat(item.valor))}</h2>
          </div>
        </div>

        <div class="cardresumo">
          <h1>Resumo do Pedido</h1>

          <div class="contas">
            <p>Subtotal (1 item) {conv(somaPreco())}</p>
            <br />
            <hr class="linha" />
            <p>Frete {conv(frete())}</p>
            <br />
            <hr class="linha" />
            <p>Valor Total {conv(somaTotal())}</p>
            <br/>
            
            <Button class="botão" variant="contained" size='small' >
            Pagar
          </Button>
          </div>
        </div>
      </div>
    </div> //fim da div todos
  );
}
