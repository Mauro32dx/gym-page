import React from 'react';
import './CarruselStaff.css';
import ItemCarruselStaff from './ItemCarruselStaff.js';
//import Ejemplo from './Ejemplo.js';
import { makeStyles } from '@material-ui/core/styles';
import Icono from '../Iconos/IconoCarruselStaff.js';

export default function CarruselStaff(props) {

    const useStyles = makeStyles({
        active2: {
            transformStyle: "preserve-3d",
            transform: "perspective(600px) rotateY(0deg) rotateX(0deg) ",
            
            '&:hover': { 
                transformStyle: "preserve-3d",
                transform: "scale(1.1) perspective(600px) rotateY(0deg) rotateX(0deg)",  
                cursor: "pointer",
                transition: "all 1s ease",
            },
        },
    });
    const classes = useStyles();

    const Items = props.Items;

    const max= Items.length - 1;
    let p=3;
    let ItemActivo=Items[p];
    let ItemSigiente=Items[p+1];
    let ItemAnterior=Items[p-1];
    let ItemSigiente2=Items[p+2];
    let ItemAnterior2=Items[p-2];
    let ItemSigiente3=Items[p+3];
    let ItemAnterior3=Items[p-3];

    function SeleccionarItem(n) {
        let Activo= n;

        if (Activo > max) {
            Activo= 0;
        }
        let Siguiente= (Activo+1);
        if (Siguiente > max) {
            Siguiente=0
        }
        let Siguiente2= (Siguiente+1);
        if (Siguiente2 > max) {
            Siguiente2= 0;  
        }  
        let Siguiente3= (Siguiente2+1);
        if (Siguiente3 > max) {
            Siguiente3= 0;       
        }
        if (Activo < 0) {
            Activo= max; 
        }  
        let Anterior= (Activo-1);
        if (Anterior < 0) {
            Anterior= max; 
        } 
        let Anterior2= (Anterior-1);
        if (Anterior2 < 0) {
            Anterior2= max; 
        } 
        let Anterior3= (Anterior2-1);
        if (Anterior3 < 0) {
            Anterior3= max; 
        } 

        
            p=Activo;

            ItemActivo=Items[Activo].id;
            ItemSigiente=Items[Siguiente].id;
            ItemAnterior=Items[Anterior].id;
            ItemSigiente2=Items[Siguiente2].id;
            ItemAnterior2=Items[Anterior2].id;
            ItemSigiente3=Items[Siguiente3].id;
            ItemAnterior3=Items[Anterior3].id;

            cargarItems(ItemAnterior3, ItemAnterior2, ItemAnterior, ItemActivo, ItemSigiente, ItemSigiente2, ItemSigiente3);

    }  

    function cargarItems(ItemAnterior3, ItemAnterior2, ItemAnterior, ItemActivo, ItemSigiente, ItemSigiente2, ItemSigiente3) {
        for (let i = 0; i < (Items.length); i++) {
            activarItems(Items[i].id, ' itemPersonal');
          }
        activarItems(ItemAnterior3, ' itemPersonal visible5');   
        activarItems(ItemAnterior2, ' itemPersonal visible3');          
        activarItems(ItemAnterior, ' itemPersonal visible1');
        activarItems(ItemActivo, ' itemPersonal active '+classes.active2);
        activarItems(ItemSigiente, ' itemPersonal visible2');
        activarItems(ItemSigiente2, ' itemPersonal visible4');   
        activarItems(ItemSigiente3, ' itemPersonal visible6');   
    }

    function activarItems(id, estilo){
        var x = document.getElementsByClassName(id)[0];
        x.className = id + estilo;
    } 


    let crearListaItems = Items.map((data) => 
        <ItemCarruselStaff
            id={data.id}
            nombre={data.nombre}
            foto={data.foto}
            profecion={data.profecion}
            fondo={data.fondo}
        />
    );    

    let Staff= ( 
        <div className='contenedorItems '>
            {crearListaItems}
        </div>
    );
    const BotonesControl= (
        <div className='contenedorBotonControles' >
            <div className='botonPre' onClick={()=> SeleccionarItem(p-1) }>
                <Icono nombre="flechaAtras" size="30px" color="#ffffffcb" />
            </div>
            <div className='botonNex' onClick={()=>  SeleccionarItem(p+1)}>
                <Icono nombre="flechaSiguiente" size="30px" color="#ffffffcb" />
            </div>       
        </div>
    )
   
    return (
        <React.Fragment> 
            { window.onload = function() { SeleccionarItem(p)} }
            {BotonesControl} 
            <div className='contenedorSliders'>                
                {Staff}                
            </div>
        </React.Fragment>
    )
}
