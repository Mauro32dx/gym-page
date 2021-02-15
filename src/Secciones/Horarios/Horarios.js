import React from 'react';
import './Horarios.css';
import TablaHorarios from '../../Componentes/TablaHorarios/TablaHorarios.js';
import TablaHorarios2 from '../../Componentes/TablaHorarios/TablaHorarios2.js';

export default class Horarios extends React.Component {
    constructor(props){
        super();
        this.state = { 
            TituloParte1: props.TituloHorariosPate1,
            TituloParte2: props.TituloHorariosPate2,
            Parrafo: props.Parrafo,
            HorariosActividades:props.HorariosActividades,
         }
    }
    

    render () {
        return (
            <div  className="contenidoHorarios">
                <h1 className="tituloHorarios1"> {this.state.TituloParte1} <span>{this.state.TituloParte2}</span></h1> 
                <p className="textoHorarios"> {this.state.Parrafo}  </p>

               <div className="contenedorTablaHoracio1">
                    <TablaHorarios  Actividades={ this.state.HorariosActividades} />
               </div>
               <div className="contenedorTablaHoracio2">
                     <TablaHorarios2  Actividades={ this.state.HorariosActividades} /> 
               </div> 
                               
            </div>
        )
    }
}