import React from 'react';
import Icono from '../Iconos/IconoHome.js';
import './ItemActividadHome.css';

export default function ItemActividadHome(props) {
  return (
    <div className="ActividadHome">
        <Icono nombre={props.Icono} size="60px"/>
        <h5> <b>{props.Titulo}</b> </h5>
        <p>{props.Descripcion}</p>
    </div>

    
  );
}