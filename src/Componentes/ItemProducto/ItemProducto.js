import React from 'react';
import './ItemProducto.css'
export default function ItemProducto(props) {
  return (
    <div className="itemProducto">
      <div className="estiloPrecio"> 
        <div className="PrecioTexto1"> $ </div>
        <div className="PrecioTexto2"> CONSULTENOS POR PRECIO Y VARIEDAD </div>
      </div>
      <img src={props.Imagen} alt={props.Titulo} className="imagenProducto"/>
      <p className="textoTituloProducto"> {props.Titulo } </p>
    </div>
  );
}