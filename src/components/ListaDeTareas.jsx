// hooks
import React, {useState} from "react";

// styles
import '../styles/ListaDeTareas.css'

// components
import TareaFormulario from "./TareaFormulario.jsx";
import Tarea from "./Tarea.jsx";


function ListaDeTareas() {

  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizada = [tarea, ...tareas];
      setTareas(tareasActualizada);
    } else {
      alert('La tarea no puede estar Vacia')
    }
  };

  const animacionEliminarTarea = id => {

    // const tareasActualizadas = tareas.filter(tarea=>tarea.id !== id);
    const tareasActualizadas = tareas.map(tarea => {
        if (tarea.id === id) {
          tarea.eliminada = true;
          tarea.expanded = false
        }
        return tarea;
      }
    )
    setTareas(tareasActualizadas);
    setTimeout(eliminarTarea, 300);
  }

  const eliminarTarea = () => {
    const tareasActualizadas = tareas.filter(tarea => tarea.eliminada !== true);
    setTareas(tareasActualizadas)
  };

  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas.sort((tarea1, tarea2) => tarea1.completada - tarea2.completada));
  }

  const expand = (id) => {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.expanded = !tarea.expanded;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  }

  return (
    // Fragment
    <>
      <TareaFormulario onSubmit={agregarTarea}/>
      <div className='tareas-lista-contenedor'>
        {
          tareas.map((tarea) => (
            <Tarea
              key={tarea.id}
              id={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada}
              animacionEliminarTarea={animacionEliminarTarea}
              eliminada={tarea.eliminada}
              completarTarea={completarTarea}
              expanded={tarea.expanded}
              expand={expand}
            />
          ))
        }
      </div>
    </>
  );
}

export default ListaDeTareas;