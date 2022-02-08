import React from "react";
import '../item-produto/itemProduto.css';

const UnicoItem = (props) => {
   

    function conv(numero) {
        return numero.toLocaleString("pt-br", {style:"currency" , currency:"BRL"});
      }

    return (
        <div class="quadradoGrande">
            <img src={props.item.imagem} alt="imagemdoproduto" />

                     <div class="descrisãodositens">
                             <h2> {props.item.nome}   </h2>
                             <br/>
                             <p>  {props.item.marca}  </p>
                             <br/>
                             <h3> {conv(parseFloat(props.item.valor))}</h3>
                             <br/>
                             <p> cor: {props.item.corId}      </p>
                    </div>

    
        </div>
        
    );
};

export default UnicoItem;
