import React from "react";
import '../styles/SubTarea.css';
import {AiOutlineBorder, AiOutlineCheckSquare, AiOutlineDelete} from 'react-icons/ai';

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
          onClick={() => completarSubTarea(id)}
        >
          <AiOutlineCheckSquare className='subtarea-icono'/>
        </div>

        :
        <div
          className='subtarea-contenedor-iconos'
          onClick={() => completarSubTarea(id)}
        >
          <AiOutlineBorder className='subtarea-icono'/>
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