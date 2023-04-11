import React, {useState} from "react";
import '../styles/ListaSubTareas.css'
// components
import SubTareaFormulario from "./SubTareaFormulario.jsx";
import SubTarea from "./SubTarea.jsx";

function ListaSubTareas({id, expanded}) {

  const [subTareas, setSubTareas] = useState([]);

  const agregarSubTarea = subtarea => {
    if (subtarea.texto.trim()) {
      subtarea.texto = subtarea.texto.trim();
      const subtareasActualizada = [subtarea, ...subTareas];
      setSubTareas(subtareasActualizada);
    } else {
      alert('La subtarea no puede estar Vacia')
    }
  };

  const completarSubTarea = id => {
    const tareasActualizadas = subTareas.map(tarea => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setSubTareas(tareasActualizadas.sort((tarea1, tarea2) => tarea1.completada - tarea2.completada));
  }

  const animacionEliminarSubTarea = id => {

    // const tareasActualizadas = tareas.filter(tarea=>tarea.id !== id);
    const tareasActualizadas = subTareas.map(tarea => {
        if (tarea.id === id) {
          tarea.eliminada = true;
        }
        return tarea;
      }
    )
    setSubTareas(tareasActualizadas);
    setTimeout(eliminarSubTarea, 300);
  }

  const eliminarSubTarea = () => {
    const tareasActualizadas = subTareas.filter(tarea => tarea.eliminada !== true);
    setSubTareas(tareasActualizadas)
  };

  return (
    <div
      className={`subtareas-contenedor ${expanded ? 'activate' : ''}`}
    >
      <SubTareaFormulario onSubmit={agregarSubTarea} idTareaPadre={id}/>
      {
        subTareas.filter(subTarea => subTarea.idTareaPadre === id).map((subtarea) => (
          <SubTarea
            key={subtarea.id}
            id={subtarea.id}
            idTareaPadre={subtarea.idTareaPadre}
            texto={subtarea.texto}
            completada={subtarea.completada}
            animacionEliminarSubTarea={animacionEliminarSubTarea}
            eliminada={subtarea.eliminada}
            completarSubTarea={completarSubTarea}
          />

        ))

      }
    </div>
  )
}

export default ListaSubTareas;