import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import Header from "../componentes/header/header.js";
import { Link, useParams } from "react-router-dom";
import Menos from "../imagens/iconecarrinho-menos.svg";
import Plus from "../imagens/iconecarrinho-mais.svg";
import api from "../api";
import "./Produtos.css";
// import IconeFrete from "../imagens/IconeFrete.svg";
import UnicoItem from "../componentes/itemCarrinho.js/itemCarrinho.js";

export function Produtos() {
  const [count, setCount] = useState(1);
  const [item, setItem] = useState([]);
  const[ valorproduto, setValorproduto] = useState(0);
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
        setItem([response.data]);
        setValorproduto(parseFloat(response.data.valor));
        
        
        
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
    return (soma = valorproduto * count);
  }

  function frete() {
    return (resultado = (soma / 100) * 10);
  }

  function somaTotal() {
    return (total = soma + resultado);
  }

  console.log(item.valor);

  function produtoComprado() { 
    return item.map((it) => (
    <UnicoItem
      img_url={it.imagem}
      name={it.nome}
      marca={it.marca}
      valor={it.valor}
      cor={it.cor.nome}
      id={it.id}
      key={it.id}
    />
  ));
    };

 

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
        

        <div class="produtoss">

        <h1> Carrinho</h1>
          <div class="produto">
          {produtoComprado()}
          {/* <UnicoItem item={item} /> */}

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
            <h2>{conv(valorproduto)}</h2>
            </div>
          </div>
        </div>

        <div class="cardresumo">
          <h1>Resumo do Pedido</h1>

          <div class="contas">
            <p>Subtotal ({count} item) {conv(somaPreco())}</p>
            <br />
            <hr class="linha" />
            <p>Frete {conv(frete())}</p>
            <br />
            <hr class="linha" />
            <p>Valor Total {conv(somaTotal())}</p>
            <br/>
            
            <Button class="botao" variant="contained" size='small' >
            PAGAR
          </Button>
          <br/>   

          </div>
        </div>
      </div>
    </div> //fim da div todos
  );
}
