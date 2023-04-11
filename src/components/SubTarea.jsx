import React from "react";
import '../styles/SubTarea.css';
import {AiOutlineDelete, AiOutlineCheckSquare, AiOutlineBorder} from 'react-icons/ai';

const SubTarea = ({
                    id,
                    texto,
                    idTareaPadre,
                    completada,
                    eliminada,
                    completarSubTarea,
                    animacionEliminarSubTarea,
                  }) => {
  return (
    <div
      className={`subtarea ${completada ? 'completada' : ''} ${eliminada ? 'eliminada' : ''}`}
    >

      {completada ?
        <div
          className='subtarea-contenedor-iconos'
          onClick={() => expand(id)}
        >
          <AiOutlineCheckSquare className='tarea-icono'/>
        </div>

        :
        <div
          className='subtarea-contenedor-iconos'
          onClick={() => expand(id)}
        >
          <AiOutlineBorder className='tarea-icono'/>
        </div>
      }

      <div
        onClick={() => completarSubTarea(id)}
        className='subtarea-texto'
      >
        {texto}
      </div>
      <div
        className='subtarea-contenedor-iconos'
        onClick={() => animacionEliminarSubTarea(id)}
      >
        <AiOutlineDelete className='subtarea-icono'/>
      </div>
    </div>
  )
}

export default SubTarea;