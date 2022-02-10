import React from "react";
import "./itemCarrinho.css";

const UnicoItem = (props) => {
  return (
    <div class="quadradocompras">
      <img src={props.item.imagem} alt="imagemdoproduto" />

      <div class="descrisaodositens">
        <h2> {props.item.nome} </h2>
        
        <p> {props.item.marca} </p>
        
        <p> cor: {props.item.corId} </p>
      </div>
    </div>
  );
};

export default UnicoItem;
