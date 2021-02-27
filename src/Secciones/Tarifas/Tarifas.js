import React from 'react';
import './Tarifas.css';
import Alert from 'react-bootstrap/Alert';
import ItemProducto from '../../Componentes/ItemProducto/ItemProducto.js';
import Grid from '@material-ui/core/Grid';
import ModalProductos from '../../Componentes/ModalProductos/ModalProductos.js'

export default class Tarifas extends React.Component {
    constructor(props){
        super();
        this.state = { 
            TituloParte1: props.TituloTarifasPate1,
            TituloParte2: props.TituloTarifasPate2,
            Subitulo: props.Subtitulo,
            Parrafo: props.Parrafo,
            Parrafo2: props.Parrafo2,
            Informacion: props.Informacion,
            Productos: props.Productos,
         }
    }
    

    render () {

        return (
            <div  className="contenidoTarifas">
                <h1 className="tituloTarifas1"> {this.state.TituloParte1} <span>{this.state.TituloParte2}</span></h1>
                <Alert key={1} variant='warning'>
                    <Alert.Heading>Vení a probar una de nuestras clases SIN CARGO!</Alert.Heading> 
                    Te damos una primer clase gratis en la actividad que vos elijas.
                </Alert>
                <p className="textoPersonal"> {this.state.Parrafo}  </p>
                {this.state.Informacion.map((item)=>{
                        return ( <p className="textoTarifas2"> {item.Parrafo } </p>)
                 })} 

                <h1 className="tituloTarifas1"> {this.state.Subitulo}</h1>
                <p className="textoPersonal"> {this.state.Parrafo2}  </p>
                <Grid container spacing={4} >
                    {this.state.Productos.slice(0, 3).map((item)=>{
                            return ( <Grid item xs={12} sm={4}>
                                        <ItemProducto Imagen={item.Imagen} Titulo={item.Titulo} />
                                    </Grid>
                            )
                    })} 
                </Grid>

                <ModalProductos TextoBoton="VER LISTADO DE TODOS LOS PRODUCTOS" TituloModal="CATALOGO COMPLETO DE LOS PRODUCTOS">
                  <Grid container justify="center" spacing={4} >
                      {this.state.Productos.map((item)=>{
                              return ( <Grid item xs={12} sm={6} lg={4}>
                                          <ItemProducto Imagen={item.Imagen} Titulo={item.Titulo} />
                                      </Grid>
                              )
                      })} 
                  </Grid>
                </ModalProductos>
              
            </div>
        )
    }
}  