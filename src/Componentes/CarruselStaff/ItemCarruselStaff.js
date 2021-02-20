import React, { useState } from 'react';
import './CarruselStaff.css';


export default function ItemCarruselStaff(props) {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0); 
    const [hover, setHover] = useState(false);

    function trueHover() {
        setHover(true)
    }  
    function falseHover() {
        setHover(false)
    }




    function  handleMouseMove(event) {
        if  ((event.clientY)>(window.innerHeight/2)){
            setX(Math.round(0));
            setY(Math.round(0));
        } else {
            setY(Math.round(10));
            if  ((event.clientX)>(window.innerWidth/2)){
                setX(Math.round(10));
            } else {
                setX(Math.round(-10));
            }
            if  ((event.clientX)>((window.innerWidth/2)+100)) {
                if ((event.clientX)<((window.innerWidth/2)-100)){
                    setX(Math.round(0));
                    setY(Math.round(0));
                }
             }

        }


    }
    
    var estiloFondo = {
        backgroundImage: `url(${props.fondo})`,
        filter: "blur(3px)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize:" cover",
        transformStyle: "preserve-3d", 
        transform: `scale(1.2) translateX(${x}px) translateY(${y}px)`,
        transition: "all 2s ease"
    };
    
    var styleActivo ={
        transformStyle: "preserve-3d",
        transform: `scale(1.1) perspective(600px) rotateY(${x}deg) rotateX(${y}deg)`,
        cursor: "pointer",
        overflow: "hidden",
        transition: "all 1s ease",   
    };
    var styleDesactivo ={
        transformStyle: "preserve-3d",
        transform: `scale(1) perspective(600px) rotateY(0deg) rotateX(0deg)`,
        cursor: "pointer",
        overflow: "hidden",
        transition: "all 1s ease",   
    };
    
    var styleTextoActivo ={
        color: "#101010",
        textShadow: `${-x/2}px 5px 5px gray`,
        fontSize: "25px",
        transition: "all 1s ease",   
    };
    var styleTextoDesactivo ={
        color: "#101010",
        fontSize: "20px",
        transition: "all 1s ease",   
    };
    var styleTexto2Activo ={
        color: "#f65625",    
    };
    var styleTexto2Desactivo ={
        color: "#101010", 
    };

    return (
        <React.Fragment> 
            <div className= { props.id + ' itemPersonal'}  onMouseMove={handleMouseMove} onMouseEnter={trueHover} onMouseLeave={falseHover} style={hover?styleActivo:styleDesactivo}>
                <div className='contenedorFoto' >
                    <div  className='FondoPerfil' style={estiloFondo} />
                    <img src={props.foto}  alt="Logo" className='imgItemCarruselStaff'/>
                </div> 
                <div className='contenedorInformacion'>
                    <div className='contenedorInformacion2'>
                        <h1 className='textoNombreProfesor' style={hover?styleTextoActivo:styleTextoDesactivo}> {props.nombre} </h1>
                        <p className='textoProfecion' style={hover?styleTexto2Activo:styleTexto2Desactivo}> {props.profecion} </p>                          
                    </div>

                </div>
            </div>

        </React.Fragment>
    )
}