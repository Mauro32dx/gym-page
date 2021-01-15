import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Carrusel.css';
import ItemCarrusel from './ItemCarrusel.js';

export default function Carrusel(props) {

  return (
        <React.Fragment>
            <Carousel className="carruselEstilo" interval={10000}>
                {props.SliderItems.map((item)=>{
                    return (
                        <Carousel.Item>
                            <ItemCarrusel Imagen={item.Imagen} Titulo={item.Titulo} Subtitulo={item.Subtitulo} Descripcion={item.Descripcion} /> 
                        </Carousel.Item>  
                    )
                })}
            </Carousel>
        </React.Fragment>
    )
}
