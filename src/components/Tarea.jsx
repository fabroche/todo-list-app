// React
import React from "react";

// assets
import '../styles/Tarea.css';
import {AiOutlineDelete, AiOutlineUpCircle, AiOutlineDownCircle} from 'react-icons/ai';

function Tarea({id, texto, completada, eliminada, completarTarea, animacionEliminarTarea, expanded, expand}) {
  return (
    <>
      <div
        className={`tarea-contenedor ${completada ? 'completada' : ''} ${eliminada ? 'eliminada' : ''} ${expanded ? 'expanded' : ''}`}>
        <div
          onClick={() => completarTarea(id)}
          className='tarea-texto'
        >
          {texto}
        </div>
        <div
          className='tarea-contenedor-iconos'
          onClick={() => animacionEliminarTarea(id)}
        >
          <AiOutlineDelete className='tarea-icono'/>
        </div>

        {expanded ?
          <div
            className='tarea-contenedor-iconos'
            onClick={() => expand(id)}
          >
            <AiOutlineDownCircle className='tarea-icono'/>
          </div>

          :
          <div
            className='tarea-contenedor-iconos'
            onClick={() => expand(id)}
          >
            <AiOutlineUpCircle className='tarea-icono'/>
          </div>
        }
      </div>
      <div
        className={`subtareas-contenedor ${expanded ? 'activate' : ''}`}
      >

      </div>
    </>
  )
}

export default Tarea;