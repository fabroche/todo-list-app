import React, {useEffect, useState} from "react";
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


  const [textoSubtarea, setTextoSubtarea] = useState(texto);

  const manejarCambioTexto = (e) => {
    setTextoSubtarea(e.target.value)
  }

  const updateTexto = () => {
    setTextoSubtarea('Asigne un nombre a su Subtarea')
  }

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
        className='subtarea-texto'
      >
        <input type="text"
               onChange={manejarCambioTexto}
               className='subtarea-texto-input'
               value={textoSubtarea}
               placeholder='Asigne un nombre a su Tarea'
        />
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