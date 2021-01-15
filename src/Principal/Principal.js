import React from 'react';
import BarraMenu from '../Componentes/BarraMenu/BarraMenu.js';
import './Principal.css';
import { Link } from 'react-scroll';
import { Nav } from 'react-bootstrap';
import Presentacion from '../Secciones/Presentacion/Presentacion.js'
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
            <section id="S01" style={{ height:"400px"  }}>
              Home
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