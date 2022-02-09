import React from "react";
import "./itemCarrinho.css";

const UnicoItem = (props) => {
  return (
    <div class="quadradocompras">
      <img src={props.item.imagem} alt="imagemdoproduto" />

      <div class="descrisãodositens">
        <h2> {props.item.nome} </h2>
        <br />
        <p> {props.item.marca} </p>
        <br />
        <p> cor: {props.item.corId} </p>
      </div>
    </div>
  );
};

export default UnicoItem;
