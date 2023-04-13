import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
// styles
import "../styles/SubTareasFormulario.css";

function SubTareaFormulario(props) {
  const [subTareaInput, setSubTareaInput] = useState("");

  const manejarCambio = (cambio) => {
    setSubTareaInput(cambio.target.value);
    console.log(cambio.target.value);
  };

  const manejarEnvio = (envio) => {
    envio.preventDefault();

    const subTareaNueva = {
      id: uuidv4(),
      idTareaPadre: props.idTareaPadre,
      texto: subTareaInput,
      completada: false,
      eliminada: false,
    };
    props.onSubmit(subTareaNueva);
  };

  return (
    <form className="subtarea-formulario" onSubmit={manejarEnvio}>
      <input
        onChange={manejarCambio}
        className="subtarea-input"
        type="text"
        placeholder="Agrega una subtarea"
        name="texto"
      />
      <button className="subtarea-botton"></button>
    </form>
  );
}

export default SubTareaFormulario;
