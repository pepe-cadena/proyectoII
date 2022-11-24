
import React from "react";
import '../style/Historia.css';

function Historia(props) {
  return (
    <div className='tarjetas'>
      <div className='contenedor-tarjetas'>
        <p className='desarrollo'>{props.desarrollo}</p>
        <p className='diseno'>{props.diseno}</p>
        <p className='documentacion'>{props.documentacion}</p>
        <p className='testing'>{props.testing}</p>
        <p className='numero'>{props.numero}</p>
        <p className='contenido'>{props.contenido}</p>
      </div>
    </div>
  );
}

export default Historia;
