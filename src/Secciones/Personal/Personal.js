import React from 'react';
import './Personal.css';
import CarruselStaff from '../../Componentes/CarruselStaff/CarruselStaff.js';

export default class Personal extends React.Component {
    constructor(props){
        super();
        this.state = { 
          TituloParte1: props.TituloPersonalPate1,
            TituloParte2: props.TituloPersonalPate2,
            Parrafo: props.Parrafo,
            Items: props.Items,
         }
    }
    

    render () {
        
        return (
            <div>
                <div  className="contenidoPersonal1">
                  <h1 className="tituloPersonal1"> {this.state.TituloParte1} <span>{this.state.TituloParte2}</span></h1> 
                  <p className="textoPersonal"> {this.state.Parrafo}  </p>
                </div>
                <div  className="contenidoPersonal2">
                  <CarruselStaff Items = {this.state.Items}/>
                </div>
            </div>
        )
    }
}