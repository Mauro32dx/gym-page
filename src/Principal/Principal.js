import React from 'react';
import BarraMenu from '../Componentes/BarraMenu/BarraMenu.js';
import './Principal.css';
import { Link } from 'react-scroll';
import { Nav } from 'react-bootstrap';

//Secciones
import Presentacion from '../Secciones/Presentacion/Presentacion.js';
import Home from '../Secciones/Home/Home.js';

// Datos Seccion PRESENTACION
import Imagen1 from '../Imagenes/SeccionPresentacion/slide-1.png';
import Imagen2 from '../Imagenes/SeccionPresentacion/slide-2.png';
import Imagen3 from '../Imagenes/SeccionPresentacion/slide-3.png';


function Principal() {
    return (
      <React.Fragment>
        <BarraMenu
            Direccion='Av 1, num 344 - La Plata, Bs As, Argentina' 
            Whatsapp='0221-31225221' 
            Facebook='@AimarGym' 
            Instagram='@AimarGym'  
          >
          <Nav>             
              <Link  to="S01" spy={true} smooth={true} offset={-56} duration={2000} delay={200} className="botonBarraMenu"> <Nav.Link href="#"> <p> HOME </p> </Nav.Link> </Link>
              <Link  to="S02" spy={true} smooth={true} offset={-56} duration={2000} delay={200} className="botonBarraMenu"> <Nav.Link href="#"> <p> ACTIVIDADES </p> </Nav.Link> </Link>
              <Link  to="S03" spy={true} smooth={true} offset={-56} duration={2000} delay={200} className="botonBarraMenu"> <Nav.Link href="#"> <p> HORARIOS </p> </Nav.Link> </Link>
              <Link  to="S04" spy={true} smooth={true} offset={-56} duration={2000} delay={200} className="botonBarraMenu"> <Nav.Link href="#"> <p> STAFF </p> </Nav.Link> </Link>
              <Link  to="S05" spy={true} smooth={true} offset={-56} duration={2000} delay={200} className="botonBarraMenu"> <Nav.Link href="#"> <p> TARIFA </p> </Nav.Link> </Link>
              <Link  to="S06" spy={true} smooth={true} offset={-56} duration={2000} delay={200} className="botonBarraMenu"> <Nav.Link href="#"> <p> CONTACTO </p> </Nav.Link> </Link>
            </Nav>
          </BarraMenu>

            <section className="element" id="S00" style={{ background:'#f7f7f7'}}>
            <Presentacion SliderItems={[
                { Imagen: Imagen1, 
                  Titulo:'TITULO 1', 
                  Subtitulo:'Subtitulo 1', 
                  Descripcion:'orem ipsum dolor sit amet consectetur adipiscing elit eleifend etiam nibh, ac ornare ante inceptos est per tempor blandit varius. Praesent vehicula nostra.'
                },
                { Imagen: Imagen2, 
                  Titulo:'TITULO 2', 
                  Subtitulo:'Subtitulo 2', 
                  Descripcion:'orem ipsum dolor sit amet consectetur adipiscing elit eleifend etiam nibh, ac ornare ante inceptos est per tempor blandit varius.'
                },
                { Imagen: Imagen3, 
                  Titulo:'TITULO 3', 
                  Subtitulo:'Subtitulo 3', 
                  Descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                }
              ]}/>
            </section>
            <section id="S01" style={{  }}>
              <Home TituloHomePate1="SOBRE"
                    TituloHomePate2="NOSOTROS"
                    Informacion={[
                      {Parrafo:'Somos un Centro de entrenamiento con mas de 20 años de expreriencia en el rubro que abalan nuestra la calidad profecional, y siempre conservando eel espíritu de gimnasio de barrio que nos caracteriza... BLABLABLA'},
                      {Parrafo:'Tenemos como objetivo principal brindarte el mejor servicio tanto personal como profecional, ademas del equipamiento necesario para el desarrollo de un entrenamiento eficaz, controlado y seguro.'},
                      {Parrafo:'Nos encontramos ubicados en una de las esquinas más emblematicas de la ciudad de las diagonales.'},
                      {Parrafo:'Y contamos con una serie de actividades fisicas y terapeuticas, que ajustaran a tus necesidades.'}
                    ]}
                    ItemsActividades={[
                      { Icono: "icono1", 
                        Titulo:'Salon de Musculacion',  
                        Descripcion:'Lorem ipsum dolor sit amet consectetur adipiscing elit eleifend etiam nibh, ac ornare ante inceptos est per tempor blandit varius. Praesent vehicula nostra.'
                      },
                      { Icono: "icono2", 
                        Titulo:'Clases de Fucional y aerobicos',  
                        Descripcion:'Lorem ipsum dolor sit amet consectetur adipiscing elit eleifend etiam nibh, ac ornare ante inceptos est per tempor blandit varius.'
                      },
                      { Icono: "icono3", 
                        Titulo:'Masajes y entrenamiento terapeutico',  
                        Descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                      },
                      { Icono: "icono4", 
                        Titulo:'Entrenamiento Personalizado',  
                        Descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                      }
                    ]}/>
            </section>
            <section className="element" id="S02" style={{background:'#f7f7f7', height:"400px" }}>
              Actividades
            </section>
            <section className="element" id="S03" style={{ height:"400px" }}>
              Horarios
            </section>
            <section className="element" id="S04" style={{ background:'#f7f7f7', height:"400px" }}>
              Personal
            </section>
            <section className="element" id="S05" style={{ height:"400px" }}>
              Tarifa
            </section>
            <section className="element" id="S06" style={{ background:'#f7f7f7', height:"400px" }}>
              Contacto
            </section>

      </React.Fragment>
    );
  }
  
  export default Principal;