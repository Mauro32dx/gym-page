import React from 'react';
import Grid from '@material-ui/core/Grid';
import LogoAimar from '../../Componentes/LogoAimar/LogoAimarHome.js';
import "./Home.css";
import Fondo1 from '../../Imagenes/SeccionHome/FondoHome1.js';
import BannerDerecha from '../../Imagenes/SeccionHome/bannerHomeDerecha.png';
import ItemActividadHome from '../../Componentes/ItemAvtividadHome/ItemActividadHome.js';

export default class Home extends React.Component {
    constructor(props){
        super();
        this.state = { 
            TituloParte1: props.TituloHomePate1,
            TituloParte2: props.TituloHomePate2,
            Informacion: props.Informacion,
            ItemsActividades: props.ItemsActividades,
         }
    }
    render () {
        return (
            <div>
                <Fondo1 classFondoHome="fondoHome1" /> 
                <div className="encabezadoHome">
                    <LogoAimar classLogo="logoHome"/>  
                </div>
                <div className="contenedorBannerHome">
                    <img src={BannerDerecha} alt="Logo" className="bannerDerechaHome"/>
                </div>


                <div className="contenidoHome" >
                    <h1 className="tituloHome1"> {this.state.TituloParte1} <span>{this.state.TituloParte2}</span></h1> 
                    
                    {this.state.Informacion.map((item)=>{
                        return ( <p> {item.Parrafo } </p>)
                    })}
                    
                    <div className="contenedorActividadesHome"> 
                        <Grid container spacing={6}>
                            {this.state.ItemsActividades.map((item)=>{
                                return (
                                    <Grid item xs={12} sm={6} md={3} >
                                        <ItemActividadHome  Titulo={item.Titulo}
                                                            Descripcion={item.Descripcion} 
                                                            Icono={item.Icono}
                                        />
                                    </Grid> 
                                )
                            })}
                        </Grid>                    
                    </div>
               
                </div>

            </div>
        )
    }
}

