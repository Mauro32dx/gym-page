import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import {makeStyles } from '@material-ui/core/styles';

export default function ItemActividadHorario(props) {

  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

const useStylesBootstrap = makeStyles((theme) => ({
  arrow: {
    
  },
  tooltip: {
    width: "150px",
    margin:"6px",
  },
}));

  const classes = useStylesBootstrap();

  var styleContenedorItemAtividad ={
    backgroundImage: "linear-gradient(rgb(256, 256, 256) -3px,"+props.fondo+" 20px, rgba(0, 0, 0, 0.7)) ",
  };

  return (
    <Tooltip
        classes={classes}
        open={open}
        TransitionComponent={Zoom}
        title={
          <React.Fragment>
            <p><b>HORARIO: </b>{props.horarioComienzo}-{props.horarioFinalizacion } hs</p>
            <p><b>PROFESOR: </b>{props.profesor}</p>
          </React.Fragment>
        } arrow>
      <div className="contenedorItemActividad" style={styleContenedorItemAtividad} onMouseEnter={handleTooltipOpen} onMouseLeave={handleTooltipClose}><h1 className="tituloItemActividad"> {props.nombre} </h1></div>
    </Tooltip>
  );
}
