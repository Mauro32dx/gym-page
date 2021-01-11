import React from "react";


function TipoRespuesta(props) {
    const nombre = props.nombre;
    switch (nombre) {
        case 'flechaSiguiente':
            return 	<g><path d="M353,10L157,206l294,294L157,794l196,196l490-490L353,10z"/></g>;
        case 'flechaAtras':
            return  <g transform="rotate(-180 450 500)"><path d="M353,10L157,206l294,294L157,794l196,196l490-490L353,10z"/></g>
            ;         
        case 'ejemplo':
            return <g>  </g>
            ;   
        default:
          return 'No icono';
      }
  }


  export default function Icono(props) {
  
    return (
        <svg  fill={props.color} width={props.size} height="auto" version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 1000 1000" enableBackground="new 0 0 1000 1000" space="preserve">
            {TipoRespuesta(props)}    
        </svg>

    );
  }
  