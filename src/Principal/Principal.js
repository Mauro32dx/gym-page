import React from 'react';
import BarraMenu from '../Componentes/BarraMenu/BarraMenu.js';
import './Principal.css';
import { Link } from 'react-scroll';
import { Nav } from 'react-bootstrap';

//Secciones
import Presentacion from '../Secciones/Presentacion/Presentacion.js';
import Home from '../Secciones/Home/Home.js';
import Actividades from '../Secciones/Actividades/Actividades.js';

// Datos Seccion PRESENTACION
import ImagenSliderPresentacion1 from '../Imagenes/SeccionPresentacion/slide-1.png';
import ImagenSliderPresentacion2 from '../Imagenes/SeccionPresentacion/slide-2.png';
import ImagenSliderPresentacion3 from '../Imagenes/SeccionPresentacion/slide-3.png';

// Datos Seccion ACTIVIDADES
import ImagenActividad1 from '../Imagenes/SeccionActividades/classes-item-1.jpg';
import ImagenActividad2 from '../Imagenes/SeccionActividades/classes-item-2.jpg';
import ImagenActividad3 from '../Imagenes/SeccionActividades/classes-item-3.jpg';
import ImagenActividad4 from '../Imagenes/SeccionActividades/classes-item-4.jpg';
import ImagenActividad5 from '../Imagenes/SeccionActividades/classes-item-5.jpg';
import ImagenActividad6 from '../Imagenes/SeccionActividades/classes-item-6.jpg';


function Principal() {
    return (
      <React.Fragment>
        <BarraMenu
            Direccion='Av 1, num 1344 - La Plata, Bs As, Argentina' 
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
                { Imagen: ImagenSliderPresentacion1, 
                  Titulo:'TITULO 1', 
                  Subtitulo:'Subtitulo 1', 
                  Descripcion:'orem ipsum dolor sit amet consectetur adipiscing elit eleifend etiam nibh, ac ornare ante inceptos est per tempor blandit varius. Praesent vehicula nostra.'
                },
                { Imagen: ImagenSliderPresentacion2, 
                  Titulo:'TITULO 2', 
                  Subtitulo:'Subtitulo 2', 
                  Descripcion:'orem ipsum dolor sit amet consectetur adipiscing elit eleifend etiam nibh, ac ornare ante inceptos est per tempor blandit varius.'
                },
                { Imagen: ImagenSliderPresentacion3, 
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
            <section className="element" id="S02" style={{background:'#f7f7f7'}}>
              <Actividades  TituloActividadesPate1="NUESTRAS"
                            TituloActividadesPate2="ACTIVIDADES"
                            Parrafo="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500"
                            TajetasActividades={[
                              { Icono: "icono1", 
                                Titulo:'Actividad 1',
                                Fondo: ImagenActividad1,
                                Descripcion:'Lorem ipsum dolor sit amet consectetur adipiscing elit eleifend etiam nibh, ac ornare ante inceptos est per tempor blandit varius. Praesent vehicula nostra.'
                              },
                              { Icono: "icono2", 
                                Titulo:'Actividad 2',
                                Fondo: ImagenActividad2, 
                                Descripcion:'Lorem ipsum dolor sit amet consectetur adipiscing elit eleifend etiam nibh, ac ornare ante inceptos est per tempor blandit varius.'
                              },
                              { Icono: "icono3", 
                                Titulo:'Actividad 3',
                                Fondo: ImagenActividad3,  
                                Descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                              },
                              { Icono: "icono4", 
                                Titulo:'Actividad 4',
                                Fondo: ImagenActividad4,
                                Descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                              },
                              { Icono: "icono5", 
                                Titulo:'Actividad 5',
                                Fondo: ImagenActividad5,
                                Descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                              },
                              { Icono: "icono6", 
                                Titulo:'Actividad 6',
                                Fondo: ImagenActividad6,
                                Descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                              }
                            ]}/>
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