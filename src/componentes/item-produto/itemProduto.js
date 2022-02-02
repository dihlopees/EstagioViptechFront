import React from "react";
import { Link } from "react-router-dom";
import Carrinho from "../../imagens/icone-carrinho.svg";
import Editar from "../../imagens/icone-editar.svg";
import Deletar from "../../imagens/icone-deletar.svg"
import './itemProduto.css';

const ItemProduto = (props) => {
    return (
        <div class="quadradoGrande">
            <img src={props.img_url} alt="imagemdoproduto" />

                     <div class="descrisãodositens">
                             <h2> {props.name}    </h2>
                             <p>  {props.marca}  </p>
                             <h3> {props.valor} </h3>
                             <p> {props.cor}      </p>
                    </div>

         <div class="iconeRedondos">
        <button  size="large"><Link to="../Carrinho"><img src={Carrinho} alt="comprar produto"/></Link></button>
        <button  size="large"><Link to="../Editar"><img src={Editar} alt="editar produto"/></Link></button>
        <button  size="large"><img src={Deletar} alt="deletar produto"/></button>
        </div>
        </div>
        
    );
};

export default ItemProduto;
