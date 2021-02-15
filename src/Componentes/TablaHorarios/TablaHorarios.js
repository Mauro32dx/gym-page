import React from 'react';
import "./TablaHorarios.css";
import IconoHorarios from '../Iconos/IconoHorarios.js';
import ItemActividadHorario from '../../Componentes/TablaHorarios/ItemActividadHorario';


export default function TablaHorarios(props) {
  
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
  
  const filasHorarios= (
    <React.Fragment>
      <tr className="FilaHora">
        <td className="celdaHora columnaFija" >16:00</td>
        <td>{  seleccionarClase("lunes",16) }</td>
        <td>{  seleccionarClase("martes",16) }</td>
        <td>{  seleccionarClase("miercoles",16) }</td>
        <td>{  seleccionarClase("jueves",16) }</td>
        <td>{  seleccionarClase("viernes",16) }</td>
      </tr>
      <tr className="FilaHora">
        <td className="celdaHora columnaFija" >17:00</td>
        <td>{  seleccionarClase("lunes",17) }</td>
        <td>{  seleccionarClase("martes",17) }</td>
        <td>{  seleccionarClase("miercoles",17) }</td>
        <td>{  seleccionarClase("jueves",17) }</td>
        <td>{  seleccionarClase("viernes",17) }</td>
      </tr>
      <tr className="FilaHora">
        <td className="celdaHora columnaFija" >18:00</td>
        <td>{  seleccionarClase("lunes",18) }</td>
        <td>{  seleccionarClase("martes",18) }</td>
        <td>{  seleccionarClase("miercoles",18) }</td>
        <td>{  seleccionarClase("jueves",18) }</td>
        <td>{  seleccionarClase("viernes",18) }</td>
      </tr>
      <tr className="FilaHora">
        <td className="celdaHora columnaFija" >19:00</td>
        <td>{  seleccionarClase("lunes",19) }</td>
        <td>{  seleccionarClase("martes",19) }</td>
        <td>{  seleccionarClase("miercoles",19) }</td>
        <td>{  seleccionarClase("jueves",19) }</td>
        <td>{  seleccionarClase("viernes",19) }</td>
      </tr>
      <tr className="FilaHora">
        <td className="celdaHora columnaFija" >20:00</td>
        <td>{  seleccionarClase("lunes",20) }</td>
        <td>{  seleccionarClase("martes",20) }</td>
        <td>{  seleccionarClase("miercoles",20) }</td>
        <td>{  seleccionarClase("jueves",20) }</td>
        <td>{  seleccionarClase("viernes",20) }</td>
      </tr>
      <tr className="FilaHora">
        <td className="celdaHora columnaFija" >21:00</td>
        <td>{  seleccionarClase("lunes",21) }</td>
        <td>{  seleccionarClase("martes",21) }</td>
        <td>{  seleccionarClase("miercoles",21) }</td>
        <td>{  seleccionarClase("jueves",21) }</td>
        <td>{  seleccionarClase("viernes",21) }</td>
      </tr>
    </React.Fragment>

  )

  return (
    <React.Fragment> 
      <div className="contenedorTabla1">
        <table className="tablaHorarios">
          <tr className="tablaHorariosEncabezado">
            <th className="celdaIconoCalendario columnaFija"><IconoHorarios nombre="calendario3" color="white" size="40px" /> </th>
            <th className="columnaDias">LUNES</th>
            <th className="columnaDias">MARTES</th>
            <th className="columnaDias">MIERCOLES</th>
            <th className="columnaDias">JUEVES</th>
            <th className="columnaDias">VIERNES</th>
          </tr>
          {filasHorarios}
        </table>         
      </div> 
    </React.Fragment>

  );
}