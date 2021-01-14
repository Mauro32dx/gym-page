import React from 'react';
import Carrusel from '../../Componentes/Carrusel/Carrusel.js'
import Fondo1 from '../../Imagenes//SeccionPresentacion/bannerIzquierda.png';
import Fondo2 from '../../Imagenes/SeccionPresentacion/bannerDerecha.png';

export default class Presentacion extends React.Component {
    constructor(props){
        super();
        this.state = { 
         }
    }
    
    render () {
        var sectionStyle = {
            paddingTop:"30px",
            backgroundImage: `url(${Fondo1}), url(${Fondo2})`,
            backgroundRepeat: 'no-repeat, no-repeat',
            backgroundPosition: 'left, right',
            backgroundSize: 'calc(90px + 5vw), calc(160px + 8vw)',
          };

        return (
            <div style={ sectionStyle } >
                <Carrusel />
            </div>
        )
    }
}