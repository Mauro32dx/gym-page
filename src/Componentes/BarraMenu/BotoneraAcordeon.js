import React, { useState } from 'react';
import Icono from '../Iconos/IconoAcordion.js';

export default function BotoeraAcordeon(props) {
    function activarBoton(n) {
        setB1(true);
        setB2(true);
        setB3(true);
        setB4(true);
        if (n === 'b1') {
            setB1(false);
        }
        if (n === 'b2') {
            setB2(false);
        }
        if (n === 'b3') {
            setB3(false);
        }
        if (n === 'b4') {
            setB4(false);
        }
    };

    const [b1, setB1] =useState(false);
    const [b2, setB2] =useState(true);
    const [b3, setB3] =useState(true);
    const [b4, setB4] =useState(true);
    
    
    
    return (
        <React.Fragment>
            <table className='tablaAcordeon1' style={{paddingTop:'5px'}}>
                <tr style={{ display:'flex', flexDirection:'row'}}>
                    <td onClick={()=>activarBoton('b1')} style={{ display:'flex', flexDirection:'row', paddingRight:'8px'}}>
                        <Icono clasesSvg='iconoAcordion' activo={b1} color1="red" color2="black" nombre='ubicacion' size='20px' />
                        <div className={b1 ? 'botonAcordeon':'botonAcordeon active'}>{props.Direccion} </div>
                    </td>
                    <td onClick={()=>activarBoton('b2')} style={{ display:'flex', flexDirection:'row', paddingRight:'8px'}}>
                        <Icono clasesSvg='iconoAcordion' activo={b2} color1="green" color2="black" nombre='whatsapp' size='20px' />
                        <div className={b2 ? 'botonAcordeon':'botonAcordeon active'} >  {props.Whatsapp} </div>
                    </td>
                    <td onClick={()=>activarBoton('b3')} style={{ display:'flex', flexDirection:'row', paddingRight:'8px'}}>
                        <Icono clasesSvg='iconoAcordion' activo={b3} color1="blue" color2="black" nombre='facebook' size='20px' />
                        <div className={b3 ? 'botonAcordeon':'botonAcordeon active'}> {props.Facebook} </div>
                    </td>
                    <td onClick={()=>activarBoton('b4')} style={{ display:'flex', flexDirection:'row', paddingRight:'8px'}}>
                        <Icono clasesSvg='iconoAcordion' activo={b4} color1="orange" color2="black" nombre='instagram' size='20px' /> 
                        <div className={b4 ? 'botonAcordeon':'botonAcordeon active'}>{props.Instagram} </div>
                    </td>
                </tr>
            </table>
            <table className='tablaAcordeon2'>
                <tr>
                    <td className={b1 ? 'botonAcordeon2':'botonAcordeon2 active'} onClick={()=>activarBoton('b1')}> <Icono clasesSvg='iconoAcordion' activo={b1} color1="red" color2="black" nombre='ubicacion' size='20px' /></td>
                    <td className={b2 ? 'botonAcordeon2':'botonAcordeon2 active'} onClick={()=>activarBoton('b2')}><Icono clasesSvg='iconoAcordion' activo={b2} color1="green" color2="black" nombre='whatsapp' size='20px' /></td>
                    <td className={b3 ? 'botonAcordeon2':'botonAcordeon2 active'} onClick={()=>activarBoton('b3')}><Icono clasesSvg='iconoAcordion' activo={b3} color1="blue" color2="black" nombre='facebook' size='20px' /></td>
                    <td className={b4 ? 'botonAcordeon2':'botonAcordeon2 active'} onClick={()=>activarBoton('b4')}> <Icono clasesSvg='iconoAcordion' activo={b4} color1="orange" color2="black" nombre='instagram' size='20px' /></td>
                </tr>
                <tr>
                    <td className={b1 ? 'botonAcordeon3':'botonAcordeon3 active'} style={{ position:'absolute'}}>  {props.Direccion} </td>
                    <td className={b2 ? 'botonAcordeon3':'botonAcordeon3 active'} >  {props.Whatsapp} </td>
                    <td className={b3 ? 'botonAcordeon3':'botonAcordeon3 active'} >  {props.Facebook} </td>
                    <td className={b4 ? 'botonAcordeon3':'botonAcordeon3 active'} >  {props.Instagram} </td>
                </tr>
            </table>
        </React.Fragment>
    )
}