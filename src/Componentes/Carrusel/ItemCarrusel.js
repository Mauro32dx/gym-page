import React from 'react';
import './Carrusel.css';


export default function ItemCarrusel(props) {
    return (
        <div className='contenedorItem' >
            <div className='itemCarruselConteedorTexto4'>
                <h3 className='itemCarruselTexto4'> {props.Titulo} </h3>
            </div>
            <div className='itemCarruselConteedorTextos'>
                    <h3 className='itemCarruselTexto1'> {props.Titulo} </h3>
                    <h3  className='itemCarruselTexto2'> {props.Subtitulo} </h3>
                    <p  className='itemCarruselTexto3'>
                        <br/>
                        {props.Descripcion} 
                    </p>
            </div>
            <div className='itemCarruselConteedorImagen'>
                    <img src={props.Imagen} alt="Logo" className='imgItemCarrusel'/>    
            </div>                        
        </div>
    )
}