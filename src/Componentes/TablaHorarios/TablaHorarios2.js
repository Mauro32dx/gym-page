import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import ItemActividadHorario from '../../Componentes/TablaHorarios/ItemActividadHorario';
import IconoHorarios from '../Iconos/IconoHorarios.js';

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    background: '#d6dbdfdc',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

export default function TablaHorarios2(props) {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

function seleccionarClase(dia,hora) {
    let horaInicio= hora +":00";
    let horaMasUno=(hora+1)+":00";
    let items=[] ;

    props.Actividades.forEach(element => 
      element.clases.forEach(element2 => {
        if (element2.dia === dia) {
          if ( element2.horarioComienzo  >= horaInicio) {
            if ( element2.horarioComienzo  < horaMasUno) { 
                items.push({
                  id : element.id ,
                  nombre : element.nombre ,
                  profesor : element.profesor ,
                  fondo : element.fondo ,
                  logo : element.logo ,
                  dia : element2.dia,
                  horarioComienzo : element2.horarioComienzo ,
                  horarioFinalizacion : element2.horarioFinalizacion
                })
            } 
          }
        }
      })
    );
    return(
      <div>
        {items.map((Activ) => (
              <ItemActividadHorario   
                  id={Activ.id}
                  subId={Activ.id+'-'+Activ.dia+'-'+Activ.horarioComienzo} 
                  nombre={Activ.nombre }
                  profesor={Activ.profesor }
                  fondo={Activ.fondo }
                  logo={Activ.logo }
                  dia={Activ.dia }
                  horarioComienzo={Activ.horarioComienzo }
                  horarioFinalizacion={Activ.horarioFinalizacion }
              />
        ))}
      </div>
    )
  };
  
  
  return (
    <div >
      <div className="celdaIconoCalendario" style={{ borderRadius:"6px 6px 0px 0px"}}><IconoHorarios nombre="calendario3" color="white" size="40px" /> </div>
      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <div className="celdaDias2">LUNES</div>
        </AccordionSummary>
        <AccordionDetails style={{padding:"0px"}} className="contenedorTabla2">
          <table className="tablaHorarios2">
            <tr className="filaHora2">
              <td className="celdaHora2" >16:00</td>
              <td>{  seleccionarClase("lunes",16) }</td>
            </tr>
            <tr className="filaHora2">
              <td className="celdaHora2" >17:00</td>
              <td>{  seleccionarClase("lunes",17) }</td>
            </tr>
            <tr className="filaHora2">
              <td className="celdaHora2" >18:00</td>
              <td>{  seleccionarClase("lunes",18) }</td>
            </tr>
            <tr className="filaHora2">
              <td className="celdaHora2" >19:00</td>
              <td>{  seleccionarClase("lunes",19) }</td>
            </tr>
            <tr className="filaHora2">
              <td className="celdaHora2" >20:00</td>
              <td>{  seleccionarClase("lunes",20) }</td>
            </tr>
            <tr className="filaHora2">
              <td className="celdaHora2" >21:00</td>
              <td>{  seleccionarClase("lunes",21) }</td>
            </tr>
          </table>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <div className="celdaDias2">MARTES</div>
        </AccordionSummary>
        <AccordionDetails style={{padding:"0px"}} className="contenedorTabla2">
          <table className="tablaHorarios2">
            <tr className="filaHora2">
              <td className="celdaHora2" >16:00</td>
              <td>{  seleccionarClase("martes",16) }</td>
            </tr>
            <tr className="filaHora2">
              <td className="celdaHora2" >17:00</td>
              <td>{  seleccionarClase("martes",17) }</td>
            </tr>
            <tr className="filaHora2">
              <td className="celdaHora2" >18:00</td>
              <td>{  seleccionarClase("martes",18) }</td>
            </tr>
            <tr className="filaHora2">
              <td className="celdaHora2" >19:00</td>
              <td>{  seleccionarClase("martes",19) }</td>
            </tr>
            <tr className="filaHora2">
              <td className="celdaHora2" >20:00</td>
              <td>{  seleccionarClase("martes",20) }</td>
            </tr>
            <tr className="filaHora2">
              <td className="celdaHora2" >21:00</td>
              <td>{  seleccionarClase("martes",21) }</td>
            </tr>
          </table>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <div className="celdaDias2">MIERCOLES</div>
        </AccordionSummary>
        <AccordionDetails style={{padding:"0px"}} className="contenedorTabla2">
          <table className="tablaHorarios2">
            <tr className="filaHora2">
              <td className="celdaHora2" >16:00</td>
              <td>{  seleccionarClase("miercoles",16) }</td>
            </tr>
            <tr className="filaHora2">
              <td className="celdaHora2" >17:00</td>
              <td>{  seleccionarClase("miercoles",17) }</td>
            </tr>
            <tr className="filaHora2">
              <td className="celdaHora2" >18:00</td>
              <td>{  seleccionarClase("miercoles",18) }</td>
            </tr>
            <tr className="filaHora2">
              <td className="celdaHora2" >19:00</td>
              <td>{  seleccionarClase("miercoles",19) }</td>
            </tr>
            <tr className="filaHora2">
              <td className="celdaHora2" >20:00</td>
              <td>{  seleccionarClase("miercoles",20) }</td>
            </tr>
            <tr className="filaHora2">
              <td className="celdaHora2" >21:00</td>
              <td>{  seleccionarClase("miercoles",21) }</td>
            </tr>
          </table>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <div className="celdaDias2">JUEVES</div>
        </AccordionSummary>
        <AccordionDetails style={{padding:"0px"}} className="contenedorTabla2">
          <table className="tablaHorarios2">
            <tr className="filaHora2">
              <td className="celdaHora2" >16:00</td>
              <td>{  seleccionarClase("jueves",16) }</td>
            </tr>
            <tr className="filaHora2">
              <td className="celdaHora2" >17:00</td>
              <td>{  seleccionarClase("jueves",17) }</td>
            </tr>
            <tr className="filaHora2">
              <td className="celdaHora2" >18:00</td>
              <td>{  seleccionarClase("jueves",18) }</td>
            </tr>
            <tr className="filaHora2">
              <td className="celdaHora2" >19:00</td>
              <td>{  seleccionarClase("jueves",19) }</td>
            </tr>
            <tr className="filaHora2">
              <td className="celdaHora2" >20:00</td>
              <td>{  seleccionarClase("jueves",20) }</td>
            </tr>
            <tr className="filaHora2">
              <td className="celdaHora2" >21:00</td>
              <td>{  seleccionarClase("jueves",21) }</td>
            </tr>
          </table>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <div className="celdaDias2">VIERNES</div>
        </AccordionSummary>
        <AccordionDetails style={{padding:"0px"}} className="contenedorTabla2">
          <table className="tablaHorarios2">
            <tr className="filaHora2">
              <td className="celdaHora2" >16:00</td>
              <td>{  seleccionarClase("viernes",16) }</td>
            </tr>
            <tr className="filaHora2">
              <td className="celdaHora2" >17:00</td>
              <td>{  seleccionarClase("viernes",17) }</td>
            </tr>
            <tr className="filaHora2">
              <td className="celdaHora2" >18:00</td>
              <td>{  seleccionarClase("viernes",18) }</td>
            </tr>
            <tr className="filaHora2">
              <td className="celdaHora2" >19:00</td>
              <td>{  seleccionarClase("viernes",19) }</td>
            </tr>
            <tr className="filaHora2">
              <td className="celdaHora2" >20:00</td>
              <td>{  seleccionarClase("viernes",20) }</td>
            </tr>
            <tr className="filaHora2">
              <td className="celdaHora2" >21:00</td>
              <td>{  seleccionarClase("viernes",21) }</td>
            </tr>
          </table>
        </AccordionDetails>
      </Accordion>
      <div className="pieTabla2"/>
    </div>
  );
}