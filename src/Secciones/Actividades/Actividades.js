import React from 'react';
import './Actividades.css';
import Tarjeta from '../../Componentes/Tarjeta/Tarjeta.js';
import Grid from '@material-ui/core/Grid';

export default class Actividades extends React.Component {
    constructor(props){
        super();
        this.state = { 
            TituloParte1: props.TituloActividadesPate1,
            TituloParte2: props.TituloActividadesPate2,
            Parrafo: props.Parrafo,
            TajetasActividades: props.TajetasActividades,
         }
    }
    

    render () {
        return (
            <div className="contenidoActividades">
                <h1 className="tituloActividades1"> {this.state.TituloParte1} <span>{this.state.TituloParte2}</span></h1> 
                <p className="textoActividades"> {this.state.Parrafo}  </p>
                <Grid container spacing={0}>
                    {this.state.TajetasActividades.map((tarjeta)=>{
                        return (                        
                                <Grid item xs={12} sm={6} md={4} lg={4}>
                                    <Tarjeta    Icono={tarjeta.Icono}
                                                Titulo={tarjeta.Titulo}
                                                Fondo={tarjeta.Fondo} 
                                                Descripcion={tarjeta.Descripcion}
                                    />             
                                </Grid>
                        )
                    })}                
                </Grid>    
                
            </div>
        )
    }
}