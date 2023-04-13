// hooks
import React, { useEffect, useState } from "react";

// estilos
import "../styles/ListaSubTareas.css";

// components
import SubTareaFormulario from "./SubTareaFormulario.jsx";
import SubTarea from "./SubTarea.jsx";

function ListaSubTareas(props) {
  const [subTareas, setSubTareas] = useState(
    JSON.parse(window.localStorage.getItem("subTareas")) || []
  );
  const { cantSubTareas, setcantidadSubTareas } = props;
  const { cantSubTareasCompletadas, setCantidadSubTareasCompletadas } = props;
  const { hookTareas, setEstadoTarea } = props;

  useEffect(() => {
    window.localStorage.setItem(
      "subTareas",
      JSON.stringify(subTareas)
    );
    console.log(subTareas)
  }, [subTareas]);

  // Effect para completar la tarea padre cuando todas sus subtareas estan completadas
  useEffect(() => {
    if (cantSubTareas > 0 && cantSubTareasCompletadas === cantSubTareas) {
      setEstadoTarea(props.id, true);
    } else if (cantSubTareas > 0) {
      setEstadoTarea(props.id, false);
    }
  }, [cantSubTareasCompletadas, cantSubTareas]);

  // Effect para completar todas las subtareas cuando la tarea Padre se completa
  useEffect(() => {
    if (hookTareas.find((tarea) => tarea.id === props.id).completada) {
      subTareas.map((subtarea) => {
        if (subtarea.idTareaPadre === props.id) {
          subtarea.completada = true;
        }
        return subtarea;
      });
    }
    subTareas.map((subtarea) => {
      if (!hookTareas.filter((tarea) => tarea.id === subtarea.idTareaPadre)) {
        subtarea.eliminada = true;
      }
    });
    eliminarSubTarea();
  }, [hookTareas]);

  // Efecto para llevar el conteo de la cantidad de subTareas Completadas
  useEffect(() => {
    setcantidadSubTareas(
      subTareas.filter((tarea) => tarea.idTareaPadre === props.id).length
    );

    setCantidadSubTareasCompletadas(
      subTareas.filter((tarea) => tarea.idTareaPadre === props.id).length -
        subTareas.filter(
          (tarea) =>
            tarea.idTareaPadre === props.id && tarea.completada === false
        ).length
    );
  }, [hookTareas, subTareas]);

  const agregarSubTarea = (subtarea) => {
    if (subtarea.texto.trim()) {
      subtarea.texto = subtarea.texto.trim();
      const subtareasActualizada = [subtarea, ...subTareas];
      setSubTareas(subtareasActualizada);
    } else {
      alert("La subtarea no puede estar Vacia");
    }
  };

  const completarSubTarea = (id) => {
    const tareasActualizadas = subTareas.map((tarea) => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setSubTareas(tareasActualizadas);
    setTimeout(ordenarSubtareas, 260);
  };

  const ordenarSubtareas = () => {
    setSubTareas(
      subTareas.sort((tarea1, tarea2) => tarea1.completada - tarea2.completada)
    );
  };

  const animacionEliminarSubTarea = (id) => {
    const tareasActualizadas = subTareas.map((tarea) => {
      if (tarea.id === id) {
        tarea.eliminada = true;
      }
      return tarea;
    });
    setSubTareas(tareasActualizadas);
    setTimeout(eliminarSubTarea, 300);
  };

  const eliminarSubTarea = () => {
    const tareasActualizadas = subTareas.filter(
      (tarea) => tarea.eliminada !== true
    );
    setSubTareas(tareasActualizadas);
  };

  return (
    <div className={`subtareas-contenedor ${props.expanded ? "activate" : ""}`}>
      <SubTareaFormulario
        onSubmit={agregarSubTarea}
        idTareaPadre={props.id}
        hookTareas={props.hookTareas}
        setEstadoTarea={props.setEstadoTarea}
        subTareas={subTareas}
        completarSubTarea={completarSubTarea}
      />
      {subTareas
        .filter((subTarea) => subTarea.idTareaPadre === props.id)
        .map((subtarea) => (
          <SubTarea
            key={subtarea.id}
            id={subtarea.id}
            idTareaPadre={subtarea.idTareaPadre}
            texto={subtarea.texto}
            completada={subtarea.completada}
            animacionEliminarSubTarea={animacionEliminarSubTarea}
            eliminada={subtarea.eliminada}
            completarSubTarea={completarSubTarea}
            setEstadoTarea={props.setEstadoTarea}
          />
        ))}
    </div>
  );
}

export default ListaSubTareas;
