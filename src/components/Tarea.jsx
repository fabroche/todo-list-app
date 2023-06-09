// React
import React, {useState} from "react";

// assets
import '../styles/Tarea.css';
import {AiOutlineDelete, AiOutlineDownCircle, AiOutlineUpCircle} from 'react-icons/ai';

// components
import ListaSubTareas from "./ListaSubTareas.jsx";

function Tarea({
                 id,
                 texto,
                 completada,
                 eliminada,
                 hookTareas,
                 completarTarea,
                 setEstadoTarea,
                 animacionEliminarTarea,
                 expanded,
                 expand
               }) {

  const [cantSubTareas, setCantSubTareas] = useState(0);
  const [cantSubTareasCompletadas, setCantSubTareasCompletadas] = useState(0);
  const [textoTarea, setTextoTarea] = useState(texto);



  const setcantidadSubTareas = (cant) => {
    setCantSubTareas(cant)
  }

  const setCantidadSubTareasCompletadas = (cant) => {
    setCantSubTareasCompletadas(cant)
  }

  const manejarCambioTexto = (e) => {
    setTextoTarea(e.target.value)
  }

  return (
    <>
      <div
        className={`tarea-contenedor ${completada ? 'completada' : ''} ${eliminada ? 'eliminada' : ''} ${expanded ? 'expanded' : ''}`}>

        <input type="text"
               onChange={manejarCambioTexto}
               className='tarea-texto-input'
               value={textoTarea}
               placeholder='Asigne un nombre a su Tarea'
        />
        <div
          className='tarea-texto'
          onClick={() => completarTarea(id)}
        >

        </div>

        <div
          className='tarea-texto-cantSubtareas'
          onClick={() => completarTarea(id)}
        >
          {cantSubTareas > 0 ? `${cantSubTareasCompletadas} / ${cantSubTareas}` : ''}
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

      <ListaSubTareas id={id} expanded={expanded} hookTareas={hookTareas} setEstadoTarea={setEstadoTarea}
                      cantSubTareas={cantSubTareas} setcantidadSubTareas={setcantidadSubTareas}
                      cantSubTareasCompletadas={cantSubTareasCompletadas}
                      setCantidadSubTareasCompletadas={setCantidadSubTareasCompletadas}/>
    </>
  )
}

export default Tarea;