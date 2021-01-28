import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import './Tarjeta.css';
import { Modal, Button } from 'react-bootstrap';

const useStyles = makeStyles({
  root: {
    margin:'3%',
    background: 'black',

  },
  media: {
    height: '400px',

  },
});

export default function Tarjeta(props) {
  const classes = useStyles();
  const [hover, setHover] = useState(false);

  function trueHover() {
      setHover(true)
  }  
  function falseHover() {
      setHover(false)
  }

  var styleActivoContenedorTitulo ={
    top: "2vh",
    bottom: "0",
  };
  var styleDesactivoContenedorTitulo ={
    top: "20%",
    bottom: "23%",
  };
  
  var styleActivoTitulo ={
    marginTop:"12vh",
  };
  var styleDesactivoTitulo ={
    marginTop:"22vh",
  };

  var styleActivoIcono ={
    top: "-4vh",
    transform: "scale(0.5)",
    
  };
  var styleDesactivoIcono ={
    top: "0",
    transform: "scale(1)",
  };

  var styleActivoFondo ={
    transform: "scale(1)",
    opacity: "0.4",
    
  };
  var styleDesactivoFondo ={
    opacity: "0.2",
    transform: "scale(1.3)",
  };

  var styleActivoBoton ={
    top:"200px", 
  };
  var styleDesactivoBoton ={
    top: "450px",
  }; 

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function cerrarModal() {
    handleClose();
    falseHover()
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <div onMouseEnter={trueHover} onMouseLeave={falseHover} >
          <div className="ContenedorTitulo" style={hover?styleActivoContenedorTitulo:styleDesactivoContenedorTitulo}>
            <div className="contenedorIcono" style={hover?styleActivoIcono:styleDesactivoIcono}>{props.Icono}</div>
            <h1 className="textoTituloTarjeta" style={hover?styleActivoTitulo:styleDesactivoTitulo}>{props.Titulo}</h1>            
          </div>

          <img className="fondoTarjetaActividad" src={props.Fondo} alt={props.Titulo} style={hover?styleActivoFondo:styleDesactivoFondo}/>


          <button className="botonTarjetaActividad"  onClick={handleShow} style={hover?styleActivoBoton:styleDesactivoBoton}>
            VER MAS
          </button>   

          <Modal size="lg" show={show} onHide={cerrarModal}>
            <Modal.Header closeButton>
              <Modal.Title>{props.Titulo}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p> {props.Descripcion} </p>
              <img src={props.Fondo} alt={props.Titulo}/>

            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={cerrarModal}>
                CERRAR
              </Button>
            </Modal.Footer>
          </Modal>

        </div>
        


      </CardActionArea>
    </Card>
  );
}