import React from 'react';
import BarraMenu from '../Componentes/BarraMenu/BarraMenu.js';
import './Principal.css';
import { Link } from 'react-scroll';
import { Nav } from 'react-bootstrap';

//Secciones
import Presentacion from '../Secciones/Presentacion/Presentacion.js';
import Home from '../Secciones/Home/Home.js';
import Actividades from '../Secciones/Actividades/Actividades.js';
import Horarios from '../Secciones/Horarios/Horarios.js';
import Personal from '../Secciones/Personal/Personal.js';
import Tarifas from '../Secciones/Tarifas/Tarifas.js';

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

// Datos Seccion PERSONAL
import Foto1 from '../Imagenes/SeccionPersonal/perfil1.png';
import Foto2 from '../Imagenes/SeccionPersonal/perfil2.png';
import Foto3 from '../Imagenes/SeccionPersonal/perfil3.png';
import Foto4 from '../Imagenes/SeccionPersonal/perfil4.png';
import Foto5 from '../Imagenes/SeccionPersonal/perfil5.png';
import Foto6 from '../Imagenes/SeccionPersonal/perfil6.png';
import Foto7 from '../Imagenes/SeccionPersonal/perfil7.png';
import Fondo1 from '../Imagenes/SeccionPersonal/fondo1.jpg';

//Datos Seccion Tarifas
import ImagenProducto1 from '../Imagenes/SeccionTarifas/shop-1.png';
import ImagenProducto2 from '../Imagenes/SeccionTarifas/shop-2.png';
import ImagenProducto3 from '../Imagenes/SeccionTarifas/shop-3.png';


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
            <section className="element" id="S03" style={{ }}>
              <Horarios   TituloHorariosPate1="HORARIOS DE "
                          TituloHorariosPate2="LAS ACTIVIDADES"
                          Parrafo="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500"
                          HorariosActividades={[
                            { id: 'Acti0',  
                              nombre: "Actividad 0",
                              profesor: "Profesor 0",
                              fondo: "red",
                              logo: "logo0",
                              clases:[
                                    { dia:"lunes", horarioComienzo: "17:00", horarioFinalizacion: "18:00"},
                                    { dia:"miercoles", horarioComienzo: "17:00", horarioFinalizacion: "18:00"},
                                    { dia:"viernes", horarioComienzo: "17:00", horarioFinalizacion: "18:00"}
                                ]  
                            },
                            { id: 'Acti1',  
                            nombre: "Actividad 1",
                            profesor: "Profesor 1",
                            fondo: "green",
                            logo: "logo1",
                            clases:[
                                  { dia:"martes", horarioComienzo: "17:30", horarioFinalizacion: "18:30"},
                                  { dia:"jueves", horarioComienzo: "17:30", horarioFinalizacion: "18:30"}  
                                ]    
                            },
                            { id: 'Acti2',  
                            nombre: "Actividad 2",
                            profesor: "Profesor 2",
                            fondo: "blue",
                            logo: "logo2",
                            clases:[
                                  { dia:"lunes", horarioComienzo: "18:15", horarioFinalizacion: "19:15"},
                                  { dia:"jueves", horarioComienzo: "20:00", horarioFinalizacion: "21:00"}
                                ]    
                            },
                            { id: 'Acti3',  
                            nombre: "Actividad 3",
                            profesor: "Profesor 3",
                            fondo: "orange",
                            logo: "logo3",
                            clases:[
                                  { dia:"martes", horarioComienzo: "18:40", horarioFinalizacion: "19:40"},
                                  { dia:"viernes", horarioComienzo: "20:00", horarioFinalizacion: "21:00"},
                                  { dia:"jueves", horarioComienzo: "21:00", horarioFinalizacion: "22:00"}
                              ]    
                            },
                            { id: 'Acti4',  
                            nombre: "Actividad 4",
                            profesor: "Profesor 4",
                            fondo: "yellow",
                            logo: "logo4",
                            clases:[
                                  { dia:"lunes", horarioComienzo: "17:10", horarioFinalizacion: "18:40"},
                                  { dia:"viernes", horarioComienzo: "20:00", horarioFinalizacion: "21:00"},
                                  { dia:"jueves", horarioComienzo: "21:00", horarioFinalizacion: "22:00"}
                              ]    
                            }
                         ]}
              />
            </section>
            <section className="element" id="S04" style={{ background:'#f7f7f7' }}>
              <Personal TituloPersonalPate1="NUESTRO"
                        TituloPersonalPate2="STAFF"
                        Parrafo="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500"
                        Items = {
                        [
                          { 
                            id: 'Item0',  
                            nombre: "NOMBRE 0",
                            profecion: "Profesor 0",
                            fondo: Fondo1,
                            foto: Foto1             },
                          { 
                            id: 'Item1',
                            nombre: "NOMBRE 1",
                            profecion: "Profesor 1",
                            fondo: Fondo1,
                            foto: Foto2             },
                          { 
                            id: 'Item2',
                            nombre: "NOMBRE 2",
                            profecion: "Profesor 2",
                            fondo: Fondo1,
                            foto: Foto3             },
                          { 
                            id: 'Item3',
                            nombre: "NOMBRE 3",
                            profecion: "Profesor 3",
                            fondo: Fondo1,
                            foto: Foto5             },
                          { 
                            id: 'Item4',
                            nombre: "NOMBRE 4",
                            profecion: "Profesor 4",
                            fondo: Fondo1,
                            foto: Foto4             },
                          { 
                            id: 'Item5',
                            nombre: "NOMBRE 5",
                            profecion: "Profesor 5",
                            fondo: Fondo1,
                            foto: Foto6             },
                          { 
                            id: 'Item6',
                            nombre: "NOMBRE 6",
                            profecion: "Profesor 6",
                            fondo: Fondo1,
                            foto: Foto7             }
                        ]}    
              />
            </section>
            <section className="element" id="S05" style={{ }}>
              <Tarifas TituloTarifasPate1="NUESTRAS"
                    TituloTarifasPate2="TARIFAS"
                    Parrafo="Consultá las opciones que te ofrecemos para entrenar acorde a tus necesidades"
                    Subtitulo="PRODUCTOS"
                    Parrafo2="Contamos tambien con productos complementaran tu entrenamiento. Estos productos se adquieren solo por encarge"
                    Informacion={[
                      {Parrafo:'Te ofrecemos realizar una actividad, ya sea Musculación, Fitness, Ciclismo o Entrenamiento Funcional. La cual podes tenes precios por cantidad de dias semanales que desees concurrir o por semana completa '},
                      {Parrafo:'Te ofrecemos la opcion de combinar 2 o mas actividades, acorde a tus gustos y nececidades, a un ecelente precio'},
                      {Parrafo:'Abono libre para realizar todas las actividades'}
                    ]}
                    Productos={[
                      { Titulo:'PRODUCTO 1',
                        Imagen: ImagenProducto1
                      },
                      { Titulo:'PRODUCTO 2',
                        Imagen: ImagenProducto2
                      },
                      { Titulo:'PRODUCTO 3',
                        Imagen: ImagenProducto3
                      },
                      { Titulo:'PRODUCTO 4',
                        Imagen: ImagenProducto1
                      },
                      { Titulo:'PRODUCTO 5',
                        Imagen: ImagenProducto2
                      },
                      { Titulo:'PRODUCTO 6',
                        Imagen: ImagenProducto3
                      },
                    ]}
                />
            </section>
            <section className="element" id="S06" style={{ background:'#f7f7f7', height:"400px" }}>
              Contacto
            </section>

      </React.Fragment>
    );
  }
  
  export default Principal;