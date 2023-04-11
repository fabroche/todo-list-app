import React, {useState} from "react";
import {v4 as uuidv4} from 'uuid'
// styles
import '../styles/TareaFormulario.css'

function TareaFormulario(props) {

  const [input, setInput] = useState('');

  const manejarCambio = (cambio) => {
    setInput(cambio.target.value);
  }

  const manejarEnvio = (envio) => {
    envio.preventDefault();

    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false,
      eliminada: false,
      expanded: false,
    }

    props.onSubmit(tareaNueva);
  }

  return (
    <form
      className='tarea-formulario'
      onSubmit={manejarEnvio}
    >
      <input
        onChange={manejarCambio}
        className='tarea-input'
        type="text"
        placeholder='Escribe una Tarea'
        name='texto'
      />
      <button
        className='tarea-botton'
      >
        Agregar Tarea
      </button>

    </form>
  );
}

export default TareaFormulario;